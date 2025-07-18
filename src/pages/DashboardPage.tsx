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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50 py-8 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-orange-100/10 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 relative z-10 animate-fade-in-down">
          <h1 className="text-3xl font-bold text-gray-900 gradient-text">
            Welcome back, {user?.name}!
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Here's an overview of your lending activity on Bitdoo
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 relative z-10">
          {stats.map((stat, index) => (
            <div key={index} className="card-enhanced rounded-xl shadow-lg p-6 hover-lift animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center">
                <div className={`p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 ${stat.color} hover-glow`}>
                  <stat.icon className="h-7 w-7" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 animate-number-count">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Loans */}
          <div className="lg:col-span-2 animate-slide-in-left relative z-10">
            <div className="card-enhanced rounded-2xl shadow-xl overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-orange-50 to-white">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-900">Recent Loans</h2>
                  <Link
                    to="/loan-request"
                    className="btn-primary inline-flex items-center px-4 py-2 border border-transparent text-sm leading-4 font-semibold rounded-lg text-white shadow-lg hover-glow transition-all duration-300"
                  >
                    <Plus className="h-4 w-4 mr-1" />
                    New Loan
                  </Link>
                </div>
              </div>
              <div className="divide-y divide-gray-100">
                {recentLoans.map((loan) => (
                  <div key={loan.id} className="px-6 py-5 hover:bg-gray-50 transition-colors duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div className="bg-orange-100 p-2 rounded-lg mr-3">
                          <Bitcoin className="h-5 w-5 text-orange-600" />
                        </div>
                        <span className="font-bold text-gray-900">{loan.amount}</span>
                        <span
                          className={`ml-3 px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(
                            loan.status
                          )}`}
                        >
                          {loan.status}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-500">Due: {loan.dueDate}</span>
                    </div>
                    <p className="text-gray-600 mb-3 leading-relaxed">{loan.purpose}</p>
                    <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                      <div
                        className="progress-bar h-3 rounded-full transition-all duration-500"
                        style={{ width: `${loan.progress}%` }}
                      ></div>
                    </div>
                    <p className="text-xs font-medium text-gray-500 mt-2">{loan.progress}% repaid</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 animate-slide-in-right relative z-10">
            {/* Quick Actions */}
            <div className="card-enhanced rounded-2xl shadow-xl p-6 hover-lift">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <Link
                  to="/loan-request"
                  className="btn-primary w-full text-white py-3 px-4 rounded-lg font-semibold shadow-lg hover-glow transition-all duration-300 flex items-center justify-center group"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Request New Loan
                </Link>
                <button className="w-full border-2 border-gray-200 hover:bg-orange-50 hover:border-orange-300 text-gray-700 py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover-lift">
                  Make Payment
                </button>
                <button className="w-full border-2 border-gray-200 hover:bg-orange-50 hover:border-orange-300 text-gray-700 py-3 px-4 rounded-lg font-semibold transition-all duration-300 hover-lift">
                  View History
                </button>
              </div>
            </div>

            {/* Reputation Score */}
            <div className="card-enhanced rounded-2xl shadow-xl p-6 hover-lift">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Reputation Score</h3>
              <div className="text-center">
                <div className="text-5xl font-bold text-green-600 mb-3 animate-number-count">94%</div>
                <p className="text-gray-600 mb-6 font-medium">Excellent standing</p>
                <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                  <div className="bg-gradient-to-r from-green-500 to-green-600 h-4 rounded-full transition-all duration-1000" style={{ width: '94%' }}></div>
                </div>
                <p className="text-xs font-medium text-gray-500 mt-3">
                  Based on 5 completed loans
                </p>
              </div>
            </div>

            {/* Notifications */}
            <div className="card-enhanced rounded-2xl shadow-xl p-6 hover-lift">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Notifications</h3>
              <div className="space-y-4">
                <div className="flex items-start p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <AlertCircle className="h-5 w-5 text-yellow-500 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Payment due soon</p>
                    <p className="text-xs text-gray-500">0.02 BTC due in 3 days</p>
                  </div>
                </div>
                <div className="flex items-start p-3 bg-green-50 rounded-lg border border-green-200">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Loan approved</p>
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