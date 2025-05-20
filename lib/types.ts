// Core types for the Bitdoo application

export type UserRole = 'client' | 'freelancer';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl?: string;
  createdAt: Date;
  walletAddress?: string;
  bio?: string;
  hourlyRate?: number; // For freelancers
}

export interface Project {
  id: string;
  title: string;
  description: string;
  clientId: string;
  freelancerId?: string;
  status: 'open' | 'in-progress' | 'completed' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
  budget?: number;
  deadline?: Date;
}

export interface PaymentStream {
  id: string;
  projectId: string;
  senderId: string;
  recipientId: string;
  startTime: Date;
  endTime?: Date;
  ratePerMinute: number;
  status: 'active' | 'paused' | 'completed';
  totalPaid: number;
}

export interface Payment {
  id: string;
  streamId: string;
  amount: number;
  timestamp: Date;
  status: 'pending' | 'confirmed' | 'failed';
  transactionId?: string;
}

export interface Message {
  id: string;
  senderId: string;
  recipientId: string;
  projectId?: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

export interface Invoice {
  id: string;
  projectId: string;
  clientId: string;
  freelancerId: string;
  amount: number;
  status: 'pending' | 'paid' | 'cancelled';
  createdAt: Date;
  paidAt?: Date;
  dueDate?: Date;
  description?: string;
}

// Mock data for development
export const MOCK_USERS: User[] = [
  {
    id: '1',
    name: 'John Client',
    email: 'john@example.com',
    role: 'client',
    avatarUrl: 'https://i.pravatar.cc/150?img=1',
    createdAt: new Date('2023-01-15'),
    walletAddress: 'bc1q...xyz',
  },
  {
    id: '2',
    name: 'Sarah Freelancer',
    email: 'sarah@example.com',
    role: 'freelancer',
    avatarUrl: 'https://i.pravatar.cc/150?img=5',
    createdAt: new Date('2023-02-20'),
    walletAddress: 'bc1q...abc',
    bio: 'Experienced web developer specializing in React and Node.js',
    hourlyRate: 0.0005, // BTC per hour
  },
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Website Redesign',
    description: 'Complete overhaul of company website using Next.js',
    clientId: '1',
    freelancerId: '2',
    status: 'in-progress',
    createdAt: new Date('2023-05-10'),
    updatedAt: new Date('2023-05-15'),
    budget: 0.01, // BTC
    deadline: new Date('2023-06-30'),
  },
];

export const MOCK_PAYMENT_STREAMS: PaymentStream[] = [
  {
    id: '1',
    projectId: '1',
    senderId: '1',
    recipientId: '2',
    startTime: new Date(Date.now() - 3600000), // 1 hour ago
    ratePerMinute: 0.00001, // BTC per minute
    status: 'active',
    totalPaid: 0.0006,
  },
];

export const MOCK_PAYMENTS: Payment[] = [
  {
    id: '1',
    streamId: '1',
    amount: 0.0001,
    timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
    status: 'confirmed',
    transactionId: 'lnbc...xyz',
  },
  {
    id: '2',
    streamId: '1',
    amount: 0.0002,
    timestamp: new Date(Date.now() - 900000), // 15 minutes ago
    status: 'confirmed',
    transactionId: 'lnbc...abc',
  },
  {
    id: '3',
    streamId: '1',
    amount: 0.0003,
    timestamp: new Date(Date.now() - 300000), // 5 minutes ago
    status: 'confirmed',
    transactionId: 'lnbc...def',
  },
];