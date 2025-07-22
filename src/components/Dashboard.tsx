import React, { useState } from 'react';
import { ArrowLeft, TrendingUp, Users, DollarSign, Clock, CheckCircle } from 'lucide-react';

interface DashboardProps {
  onBack: () => void;
}

export function Dashboard({ onBack }: DashboardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'borrowing' | 'lending'>('overview');

  const stats = {
    totalLent: 2400,
    totalBorrowed: 500,
    activeLoans: 3,
    earned: 287,
    repaid: 125
  };

  const myLoans = [
    {
      id: '1',
      type: 'lent',
      borrower: 'Maria S.',
      amount: 500,
      term: 6,
      rate: 12,
      status: 'active',
      progress: 33,
      nextPayment: '2025-02-15'
    },
    {
      id: '2',
      type: 'borrowed',
      amount: 500,
      term: 6,
      rate: 12,
      status: 'active',
      progress: 25,
      nextPayment: '2025-02-20'
    },
    {
      id: '3',
      type: 'lent',
      borrower: 'Carlos M.',
      amount: 800,
      term: 12,
      rate: 10,
      status: 'completed',
      progress: 100,
      nextPayment: null
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-teal-400 to-blue-500 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-white hover:text-yellow-300 font-bold text-lg bg-white bg-opacity-20 px-4 py-2 rounded-2xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105 shadow-lg border-2 border-white border-opacity-30"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
        </div>

        <div className="text-center mb-8 bg-white bg-opacity-20 rounded-3xl p-8 backdrop-blur-sm shadow-2xl border-2 border-white border-opacity-30">
          <h1 className="text-4xl font-black text-white mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Your Dashboard</span>
            <span className="text-3xl"> 📊</span>
          </h1>
          <p className="text-white text-xl font-bold">Track your lending and borrowing activity! 🚀</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
          <div className="bg-white bg-opacity-20 rounded-3xl p-8 shadow-2xl backdrop-blur-sm border-2 border-white border-opacity-30 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg text-white font-bold">💰 Total Lent</p>
                <p className="text-3xl font-black text-white">${stats.totalLent}</p>
              </div>
              <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-full p-3">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-20 rounded-3xl p-8 shadow-2xl backdrop-blur-sm border-2 border-white border-opacity-30 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg text-white font-bold">🏦 Total Borrowed</p>
                <p className="text-3xl font-black text-white">${stats.totalBorrowed}</p>
              </div>
              <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-full p-3">
                <DollarSign className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-20 rounded-3xl p-8 shadow-2xl backdrop-blur-sm border-2 border-white border-opacity-30 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg text-white font-bold">⚡ Active Loans</p>
                <p className="text-3xl font-black text-white">{stats.activeLoans}</p>
              </div>
              <div className="bg-gradient-to-r from-green-400 to-cyan-500 rounded-full p-3">
                <Users className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-20 rounded-3xl p-8 shadow-2xl backdrop-blur-sm border-2 border-white border-opacity-30 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg text-white font-bold">📈 Total Earned</p>
                <p className="text-3xl font-black text-white">${stats.earned}</p>
              </div>
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-full p-3">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-20 rounded-3xl p-8 shadow-2xl backdrop-blur-sm border-2 border-white border-opacity-30 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg text-white font-bold">✅ Repaid</p>
                <p className="text-3xl font-black text-white">${stats.repaid}</p>
              </div>
              <div className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-3">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white bg-opacity-20 rounded-3xl shadow-2xl backdrop-blur-sm border-2 border-white border-opacity-30">
          <div className="border-b border-white border-opacity-30">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'borrowing', label: 'My Borrowing' },
                { id: 'lending', label: 'My Lending' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-4 px-4 border-b-4 font-bold text-lg transition-all duration-300 rounded-t-2xl ${
                    activeTab === tab.id
                      ? 'border-yellow-400 text-white bg-white bg-opacity-20'
                      : 'border-transparent text-white hover:text-yellow-300 hover:bg-white hover:bg-opacity-10'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-white">🎯 Recent Activity</h3>
                <div className="space-y-4">
                  {myLoans.map((loan) => (
                    <div key={loan.id} className="flex items-center justify-between p-6 bg-white bg-opacity-20 rounded-2xl backdrop-blur-sm shadow-lg border-2 border-white border-opacity-30 transform hover:scale-105 transition-all duration-300">
                      <div className="flex items-center space-x-4">
                        <div className={`w-3 h-3 rounded-full ${
                          loan.status === 'active' ? 'bg-green-500' : 'bg-blue-500'
                        }`}></div>
                        <div>
                          <p className="font-bold text-white text-lg">
                            {loan.type === 'lent' ? `Lent to ${loan.borrower}` : 'Your loan'}
                          </p>
                          <p className="text-lg text-white font-medium">${loan.amount} • {loan.rate}% APR</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-lg font-bold ${
                          loan.status === 'active' ? 'text-green-300' : 'text-blue-300'
                        }`}>
                          {loan.status === 'active' ? 'Active' : 'Completed'}
                        </p>
                        <p className="text-lg text-white font-medium">{loan.progress}% complete</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'borrowing' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-white">🏦 Your Borrowed Loans</h3>
                <div className="space-y-4">
                  {myLoans.filter(loan => loan.type === 'borrowed').map((loan) => (
                    <div key={loan.id} className="bg-white bg-opacity-20 rounded-3xl p-8 backdrop-blur-sm shadow-2xl border-2 border-white border-opacity-30 transform hover:scale-105 transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-2xl font-black text-white">${loan.amount} Loan</h4>
                          <p className="text-white text-lg font-bold">{loan.rate}% APR • {loan.term} months</p>
                        </div>
                        <div className={`px-4 py-2 rounded-2xl text-lg font-black shadow-lg ${
                          loan.status === 'active' ? 'bg-green-400 text-white' : 'bg-blue-400 text-white'
                        }`}>
                          {loan.status === 'active' ? 'Active' : 'Completed'}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-lg text-white font-bold mb-2">
                          <span>🚀 Repayment Progress</span>
                          <span>{loan.progress}%</span>
                        </div>
                        <div className="w-full bg-white bg-opacity-30 rounded-full h-3 shadow-inner">
                          <div
                            className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full shadow-lg"
                            style={{ width: `${loan.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      {loan.nextPayment && (
                        <div className="flex items-center justify-between">
                          <span className="text-white font-bold text-lg">📅 Next Payment</span>
                          <div className="flex items-center space-x-2">
                            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-1">
                              <Clock className="h-4 w-4 text-white" />
                            </div>
                            <span className="font-black text-white text-lg">{loan.nextPayment}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'lending' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-white">💰 Your Funded Loans</h3>
                <div className="space-y-4">
                  {myLoans.filter(loan => loan.type === 'lent').map((loan) => (
                    <div key={loan.id} className="bg-white bg-opacity-20 rounded-3xl p-8 backdrop-blur-sm shadow-2xl border-2 border-white border-opacity-30 transform hover:scale-105 transition-all duration-300">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h4 className="text-2xl font-black text-white">Loan to {loan.borrower}</h4>
                          <p className="text-white text-lg font-bold">${loan.amount} • {loan.rate}% APR • {loan.term} months</p>
                        </div>
                        <div className={`px-4 py-2 rounded-2xl text-lg font-black shadow-lg ${
                          loan.status === 'active' ? 'bg-green-400 text-white' : 'bg-blue-400 text-white'
                        }`}>
                          {loan.status === 'active' ? 'Active' : 'Completed'}
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex justify-between text-lg text-white font-bold mb-2">
                          <span>🚀 Repayment Progress</span>
                          <span>{loan.progress}%</span>
                        </div>
                        <div className="w-full bg-white bg-opacity-30 rounded-full h-3 shadow-inner">
                          <div
                            className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full shadow-lg"
                            style={{ width: `${loan.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-white font-bold text-lg">💎 Expected Return</span>
                        <span className="font-black text-green-300 text-xl">
                          ${(loan.amount * (1 + loan.rate / 100 * loan.term / 12)).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}