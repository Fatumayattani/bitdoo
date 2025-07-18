import React from 'react';
import { Bitcoin, TrendingUp, Clock, CheckCircle, AlertCircle, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  // Mock data - replace with actual data from ICP backend
  const stats = [
    { label: 'Active Loans', value: '2', icon: Clock, color: 'text-blue-600' },
    { label: 'Completed Loans', value: '5', icon: CheckCircle, color: 'text-green-600' },
    { label: 'Total Borrowed', value: '0.45 BTC', icon: Bitcoin, color: 'text-orange-600' },
    { label: 'Reputation Score', value: '94%', icon: TrendingUp, color: 'text-purple-600' },
  ];

  const recentLoans = [
    {
      id: '1',
      amount: '0.1 BTC',
      purpose: 'Small business expansion',
      status: 'active',
      dueDate: '2025-03-15',
      progress: 60,
    },
    {
      id: '2',
      amount: '0.05 BTC',
      purpose: 'Equipment purchase',
      status: 'active',
      dueDate: '2025-02-28',
      progress: 80,
    },
    {
      id: '3',
      amount: '0.08 BTC',
      purpose: 'Inventory restocking',
      status: 'completed',
      dueDate: '2024-12-20',
      progress: 100,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'overdue':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 mt-2">
            Here's an overview of your lending activity on Bitdoo
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className={`p-2 rounded-lg bg-gray-100 ${stat.color}`}>
                  <stat.icon className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Loans */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Loans</h2>
                  <Link
                    to="/loan-request"
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 transition-colors"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    New Loan
                  </Link>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                {recentLoans.map((loan) => (
                  <div key={loan.id} className="px-6 py-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <Bitcoin className="h-5 w-5 text-orange-600 mr-2" />
                        <span className="font-medium text-gray-900">{loan.amount}</span>
                        <span
                          className={`ml-2 px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                            loan.status
                          )}`}
                        >
                          {loan.status}
                        </span>
                      </div>
                      <span className="text-sm text-gray-500">Due: {loan.dueDate}</span>
                    </div>
                    <p className="text-gray-600 mb-2">{loan.purpose}</p>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-orange-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${loan.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{loan.progress}% repaid</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <Link
                  to="/loan-request"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md font-medium transition-colors flex items-center justify-center"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Request New Loan
                </Link>
                <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-md font-medium transition-colors">
                  Make Payment
                </button>
                <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-2 px-4 rounded-md font-medium transition-colors">
                  View History
                </button>
              </div>
            </div>

            {/* Reputation Score */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Reputation Score</h3>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">94%</div>
                <p className="text-gray-600 mb-4">Excellent standing</p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-green-600 h-3 rounded-full" style={{ width: '94%' }}></div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Based on 5 completed loans
                </p>
              </div>
            </div>

            {/* Notifications */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-900">Payment due soon</p>
                    <p className="text-xs text-gray-500">0.02 BTC due in 3 days</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm text-gray-900">Loan approved</p>
                    <p className="text-xs text-gray-500">Your 0.1 BTC loan was funded</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;