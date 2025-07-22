import React, { useState } from 'react';
import { ArrowLeft, Filter, Star, MapPin, Clock, DollarSign } from 'lucide-react';

interface LoanBrowseProps {
  onBack: () => void;
}

interface Loan {
  id: string;
  borrower: string;
  amount: number;
  term: number;
  purpose: string;
  location: string;
  businessType: string;
  monthlyIncome: number;
  riskScore: number;
  interestRate: number;
  funded: number;
  description: string;
}

export function LoanBrowse({ onBack }: LoanBrowseProps) {
  const [filterType, setFilterType] = useState('all');
  const [filterRisk, setFilterRisk] = useState('all');

  const sampleLoans: Loan[] = [
    {
      id: '1',
      borrower: 'Maria S.',
      amount: 500,
      term: 6,
      purpose: 'Farm supplies',
      location: 'Kenya, Nairobi',
      businessType: 'agriculture',
      monthlyIncome: 180,
      riskScore: 85,
      interestRate: 12,
      funded: 200,
      description: 'Need funding for seeds and fertilizer for the upcoming planting season. I have been farming for 8 years and have a reliable income from crop sales.'
    },
    {
      id: '2',
      borrower: 'Carlos M.',
      amount: 800,
      term: 12,
      purpose: 'Inventory expansion',
      location: 'Guatemala, Guatemala City',
      businessType: 'retail',
      monthlyIncome: 320,
      riskScore: 92,
      interestRate: 10,
      funded: 800,
      description: 'Expanding my small grocery store inventory to meet growing demand in my neighborhood. Have been in business for 5 years with steady customers.'
    },
    {
      id: '3',
      borrower: 'Priya K.',
      amount: 300,
      term: 3,
      purpose: 'Sewing equipment',
      location: 'India, Mumbai',
      businessType: 'manufacturing',
      monthlyIncome: 150,
      riskScore: 78,
      interestRate: 14,
      funded: 0,
      description: 'Purchase a new sewing machine to increase my tailoring business capacity. I have 15 regular customers and orders are increasing.'
    }
  ];

  const filteredLoans = sampleLoans.filter(loan => {
    if (filterType !== 'all' && loan.businessType !== filterType) return false;
    if (filterRisk !== 'all') {
      if (filterRisk === 'low' && loan.riskScore < 85) return false;
      if (filterRisk === 'medium' && (loan.riskScore < 70 || loan.riskScore > 85)) return false;
      if (filterRisk === 'high' && loan.riskScore > 70) return false;
    }
    return true;
  });

  const handleFund = (loanId: string) => {
    alert(`Funding loan ${loanId}. In a real app, this would connect to the Bitcoin escrow smart contract.`);
  };

  const getRiskColor = (score: number) => {
    if (score >= 85) return 'text-green-600 bg-green-100';
    if (score >= 70) return 'text-yellow-600 bg-yellow-100';
    return 'text-red-600 bg-red-100';
  };

  const getRiskLabel = (score: number) => {
    if (score >= 85) return 'Low Risk';
    if (score >= 70) return 'Medium Risk';
    return 'High Risk';
  };

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
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Browse Loan Opportunities</span>
            <span className="text-3xl"> 🎯</span>
          </h1>
          <p className="text-white text-xl font-bold">Fund vetted borrowers and earn competitive returns! 💰</p>
        </div>

        {/* Filters */}
        <div className="bg-white bg-opacity-20 rounded-3xl shadow-2xl p-8 mb-8 backdrop-blur-sm border-2 border-white border-opacity-30">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-gradient-to-r from-purple-400 to-pink-500 rounded-full p-2">
              <Filter className="h-6 w-6 text-white" />
            </div>
            <span className="font-black text-white text-xl">🔍 Smart Filters</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-lg font-bold text-white mb-3">🏢 Business Type</label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full px-4 py-3 border-2 border-purple-300 rounded-2xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 bg-white font-bold text-lg text-gray-800 shadow-lg"
              >
                <option value="all">All Types</option>
                <option value="agriculture">Agriculture</option>
                <option value="retail">Retail</option>
                <option value="services">Services</option>
                <option value="manufacturing">Manufacturing</option>
              </select>
            </div>
            <div>
              <label className="block text-lg font-bold text-white mb-3">⚡ Risk Level</label>
              <select
                value={filterRisk}
                onChange={(e) => setFilterRisk(e.target.value)}
                className="w-full px-4 py-3 border-2 border-orange-300 rounded-2xl focus:ring-4 focus:ring-orange-200 focus:border-orange-400 bg-white font-bold text-lg text-gray-800 shadow-lg"
              >
                <option value="all">All Risk Levels</option>
                <option value="low">Low Risk (85+)</option>
                <option value="medium">Medium Risk (70-84)</option>
                <option value="high">High Risk (&lt;70)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Loan Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredLoans.map((loan) => (
            <div key={loan.id} className="bg-white bg-opacity-20 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm border-2 border-white border-opacity-30">
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-white">{loan.borrower}</h3>
                    <div className="flex items-center space-x-1 text-white text-lg font-bold">
                      <MapPin className="h-4 w-4" />
                      <span>{loan.location}</span>
                    </div>
                  </div>
                  <div className={`px-4 py-2 rounded-2xl text-lg font-black shadow-lg ${getRiskColor(loan.riskScore)}`}>
                    {getRiskLabel(loan.riskScore)}
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-white font-bold">💰 Amount</span>
                    <span className="font-black text-white text-lg">${loan.amount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white font-bold">📅 Term</span>
                    <span className="font-black text-white text-lg">{loan.term} months</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white font-bold">📈 Interest Rate</span>
                    <span className="font-black text-green-300 text-lg">{loan.interestRate}% APR</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white font-bold">🎯 Purpose</span>
                    <span className="font-black text-white text-lg">{loan.purpose}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-lg text-white font-bold mb-2">
                    <span>🚀 Funded</span>
                    <span>${loan.funded} / ${loan.amount}</span>
                  </div>
                  <div className="w-full bg-white bg-opacity-30 rounded-full h-3 shadow-inner">
                    <div
                      className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-300 shadow-lg"
                      style={{ width: `${(loan.funded / loan.amount) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <p className="text-white text-lg mb-6 line-clamp-3 font-medium bg-white bg-opacity-20 rounded-2xl p-4 backdrop-blur-sm">{loan.description}</p>

                <div className="flex space-x-3">
                  <button
                    onClick={() => handleFund(loan.id)}
                    className={`flex-1 py-3 rounded-lg font-semibold transition-all duration-200 ${
                      loan.funded >= loan.amount
                        ? 'bg-white bg-opacity-30 text-white cursor-not-allowed backdrop-blur-sm'
                        : 'bg-gradient-to-r from-green-400 to-blue-500 text-white hover:from-green-500 hover:to-blue-600 transform hover:scale-105 border-2 border-white'
                    }`}
                    disabled={loan.funded >= loan.amount}
                  >
                    {loan.funded >= loan.amount ? 'Fully Funded' : 'Fund This Loan'}
                  </button>
                  <button className="px-6 py-4 border-2 border-white rounded-2xl text-white hover:bg-white hover:bg-opacity-20 transition-all duration-300 font-bold text-lg backdrop-blur-sm shadow-lg">
                    Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredLoans.length === 0 && (
          <div className="text-center py-12 bg-white bg-opacity-20 rounded-3xl backdrop-blur-sm shadow-2xl border-2 border-white border-opacity-30">
            <p className="text-white text-2xl font-bold">No loans match your current filters. 🔍</p>
          </div>
        )}
      </div>
    </div>
  );
}