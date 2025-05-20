"use client";

import { useState, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { formatBitcoin } from "@/lib/utils/format";
import { Payment } from "@/lib/types";

interface PaymentStreamChartProps {
  payments: Payment[];
  streamStart: Date;
  ratePerMinute: number;
  height?: number;
}

interface ChartDataPoint {
  time: string;
  amount: number;
  cumulative: number;
}

export function PaymentStreamChart({
  payments,
  streamStart,
  ratePerMinute,
  height = 300,
}: PaymentStreamChartProps) {
  const [chartData, setChartData] = useState<ChartDataPoint[]>([]);

  useEffect(() => {
    if (!payments.length) return;

    // Sort payments by timestamp
    const sortedPayments = [...payments].sort(
      (a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
    );

    // Create data points for the chart
    let cumulative = 0;
    const data = sortedPayments.map((payment) => {
      cumulative += payment.amount;
      return {
        time: new Date(payment.timestamp).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        amount: payment.amount,
        cumulative: cumulative,
      };
    });

    setChartData(data);
  }, [payments]);

  const formatTooltipValue = (value: number) => {
    return formatBitcoin(value);
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-popover border rounded p-3 shadow-md">
          <p className="font-medium">{label}</p>
          <p className="text-sm">
            Amount: {formatTooltipValue(payload[0].payload.amount)}
          </p>
          <p className="text-sm">
            Total: {formatTooltipValue(payload[0].payload.cumulative)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full">
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height={height}>
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorCumulative" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(var(--chart-1))" stopOpacity={0.8} />
                <stop offset="95%" stopColor="hsl(var(--chart-1))" stopOpacity={0.2} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
            <XAxis dataKey="time" tick={{ fontSize: 12 }} />
            <YAxis
              tick={{ fontSize: 12 }}
              tickFormatter={formatTooltipValue}
              width={80}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="cumulative"
              stroke="hsl(var(--chart-1))"
              fillOpacity={1}
              fill="url(#colorCumulative)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      ) : (
        <div className="flex items-center justify-center h-full bg-muted/30 rounded-md">
          <p className="text-muted-foreground">No payment data available</p>
        </div>
      )}
    </div>
  );
}