// Utilities for Lightning Network payments
// Note: This is a simplified mock implementation for demonstration purposes
// In a real application, this would interact with a Lightning wallet API

import { PaymentStream, Payment } from '../types';

interface LightningInvoice {
  paymentRequest: string;
  expiresAt: Date;
  amount: number;
}

interface LightningPayment {
  id: string;
  status: 'pending' | 'confirmed' | 'failed';
  amount: number;
  fee: number;
  timestamp: Date;
}

// Mock function to create a Lightning invoice
export async function createInvoice(
  amount: number,
  memo: string,
  expirySeconds: number = 3600
): Promise<LightningInvoice> {
  // In a real app, this would call a Lightning wallet API
  console.log(`Creating invoice for ${amount} BTC with memo: ${memo}`);
  
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  // Return a mock invoice
  return {
    paymentRequest: `lnbc${Math.random().toString(36).substring(2, 15)}`,
    expiresAt: new Date(Date.now() + expirySeconds * 1000),
    amount: amount,
  };
}

// Mock function to pay a Lightning invoice
export async function payInvoice(
  paymentRequest: string,
  maxFeePercent: number = 0.01
): Promise<LightningPayment> {
  // In a real app, this would call a Lightning wallet API
  console.log(`Paying invoice: ${paymentRequest}`);
  
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 1000));
  
  // Simulate random success/failure
  const success = Math.random() > 0.1; // 90% success rate
  
  if (!success) {
    throw new Error('Payment failed');
  }
  
  // Extract amount from payment request (mock implementation)
  const amount = 0.0001; // Fixed amount for demo
  
  // Calculate fee
  const fee = amount * maxFeePercent;
  
  // Return payment details
  return {
    id: Math.random().toString(36).substring(2, 15),
    status: 'confirmed',
    amount: amount,
    fee: fee,
    timestamp: new Date(),
  };
}

// Start a payment stream
export async function startPaymentStream(
  stream: PaymentStream,
  paymentCallback: (payment: Payment) => void
): Promise<{ streamId: string, intervalId: number }> {
  console.log(`Starting payment stream for ${stream.id}`);
  
  // Calculate payment amount per interval (every 10 seconds for demo)
  const intervalMs = 10000; // 10 seconds
  const amountPerInterval = stream.ratePerMinute * (intervalMs / (60 * 1000));
  
  // Set up interval for regular payments
  const intervalId = window.setInterval(async () => {
    try {
      // Create and pay invoice
      const invoice = await createInvoice(
        amountPerInterval,
        `Payment for stream ${stream.id}`
      );
      
      const payment = await payInvoice(invoice.paymentRequest);
      
      // Create payment record
      const newPayment: Payment = {
        id: payment.id,
        streamId: stream.id,
        amount: amountPerInterval,
        timestamp: payment.timestamp,
        status: payment.status,
        transactionId: payment.id,
      };
      
      // Notify through callback
      paymentCallback(newPayment);
      
    } catch (error) {
      console.error('Failed to process stream payment:', error);
    }
  }, intervalMs);
  
  return {
    streamId: stream.id,
    intervalId: intervalId,
  };
}

// Stop a payment stream
export function stopPaymentStream(intervalId: number): void {
  console.log(`Stopping payment stream with interval ${intervalId}`);
  window.clearInterval(intervalId);
}

// Get Lightning wallet balance (mock)
export async function getWalletBalance(): Promise<{ total: number, available: number }> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 300));
  
  return {
    total: 0.025,
    available: 0.02,
  };
}

// Get payment history (mock)
export async function getPaymentHistory(): Promise<LightningPayment[]> {
  // Simulate API call delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  
  // Return mock payment history
  return [
    {
      id: 'pay1',
      status: 'confirmed',
      amount: 0.0001,
      fee: 0.000001,
      timestamp: new Date(Date.now() - 3600000),
    },
    {
      id: 'pay2',
      status: 'confirmed',
      amount: 0.0002,
      fee: 0.000002,
      timestamp: new Date(Date.now() - 1800000),
    },
    {
      id: 'pay3',
      status: 'failed',
      amount: 0.0003,
      fee: 0,
      timestamp: new Date(Date.now() - 900000),
    },
  ];
}