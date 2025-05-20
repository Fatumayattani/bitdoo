"use client";

import { useState, useEffect } from "react";
import { PaymentStreamChart } from "./PaymentStreamChart";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MOCK_PAYMENTS,
  MOCK_PAYMENT_STREAMS,
  PaymentStream,
  Payment,
} from "@/lib/types";
import { formatBitcoin, formatBitcoinRate, formatDuration } from "@/lib/utils/format";
import { startPaymentStream, stopPaymentStream } from "@/lib/utils/lightning";
import { Play, Pause, StopCircle } from "lucide-react";

interface PaymentStreamCardProps {
  streamId: string;
}

export function PaymentStreamCard({ streamId }: PaymentStreamCardProps) {
  const [stream, setStream] = useState<PaymentStream | null>(null);
  const [payments, setPayments] = useState<Payment[]>([]);
  const [isActive, setIsActive] = useState(false);
  const [intervalId, setIntervalId] = useState<number | null>(null);
  const [duration, setDuration] = useState("0s");
  const [totalPaid, setTotalPaid] = useState(0);

  // Initialize with mock data
  useEffect(() => {
    const foundStream = MOCK_PAYMENT_STREAMS.find((s) => s.id === streamId);
    if (foundStream) {
      setStream(foundStream);
      setIsActive(foundStream.status === "active");
      setTotalPaid(foundStream.totalPaid);
    }

    const relatedPayments = MOCK_PAYMENTS.filter((p) => p.streamId === streamId);
    setPayments(relatedPayments);

    // Update duration
    const durationInterval = setInterval(() => {
      if (foundStream && isActive) {
        setDuration(formatDuration(foundStream.startTime));
      }
    }, 1000);

    return () => {
      clearInterval(durationInterval);
      if (intervalId) {
        stopPaymentStream(intervalId);
      }
    };
  }, [streamId]);

  const handleStartStream = async () => {
    if (!stream) return;

    setIsActive(true);
    
    try {
      const result = await startPaymentStream(stream, (newPayment) => {
        // Add new payment to the list
        setPayments((prevPayments) => [...prevPayments, newPayment]);
        
        // Update total paid
        setTotalPaid((prev) => prev + newPayment.amount);
      });
      
      setIntervalId(result.intervalId);
    } catch (error) {
      console.error("Failed to start payment stream:", error);
      setIsActive(false);
    }
  };

  const handlePauseStream = () => {
    if (intervalId) {
      stopPaymentStream(intervalId);
      setIntervalId(null);
      setIsActive(false);
    }
  };

  const handleStopStream = () => {
    if (intervalId) {
      stopPaymentStream(intervalId);
      setIntervalId(null);
      setIsActive(false);
      
      // In a real app, we would update the stream status on the backend
      if (stream) {
        setStream({
          ...stream,
          status: "completed",
          endTime: new Date(),
        });
      }
    }
  };

  if (!stream) {
    return <div>Loading stream data...</div>;
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-xl">Payment Stream</CardTitle>
          <div className="flex items-center">
            <span
              className={`px-2 py-1 text-xs font-medium rounded-full ${
                isActive
                  ? "bg-green-500/10 text-green-500"
                  : "bg-yellow-500/10 text-yellow-500"
              }`}
            >
              {isActive ? "Active" : "Paused"}
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-muted/30 p-3 rounded-md">
            <div className="text-muted-foreground text-sm mb-1">Total Paid</div>
            <div className="font-mono font-medium text-lg">
              {formatBitcoin(totalPaid)}
            </div>
          </div>
          <div className="bg-muted/30 p-3 rounded-md">
            <div className="text-muted-foreground text-sm mb-1">Rate</div>
            <div className="font-mono font-medium text-lg">
              {formatBitcoinRate(stream.ratePerMinute)}
            </div>
          </div>
          <div className="bg-muted/30 p-3 rounded-md">
            <div className="text-muted-foreground text-sm mb-1">Duration</div>
            <div className="font-medium text-lg">{duration}</div>
          </div>
          <div className="bg-muted/30 p-3 rounded-md">
            <div className="text-muted-foreground text-sm mb-1">
              Last Payment
            </div>
            <div className="font-medium text-lg">
              {payments.length > 0
                ? formatBitcoin(payments[payments.length - 1].amount)
                : "N/A"}
            </div>
          </div>
        </div>

        <div className="h-[200px] mt-6">
          <PaymentStreamChart
            payments={payments}
            streamStart={stream.startTime}
            ratePerMinute={stream.ratePerMinute}
          />
        </div>

        <div className="flex space-x-2 pt-4">
          {!isActive ? (
            <Button
              onClick={handleStartStream}
              className="flex-1"
              variant="default"
            >
              <Play className="h-4 w-4 mr-2" />
              Start Stream
            </Button>
          ) : (
            <Button
              onClick={handlePauseStream}
              className="flex-1"
              variant="outline"
            >
              <Pause className="h-4 w-4 mr-2" />
              Pause Stream
            </Button>
          )}
          <Button
            onClick={handleStopStream}
            className="flex-1"
            variant="destructive"
          >
            <StopCircle className="h-4 w-4 mr-2" />
            End Stream
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}