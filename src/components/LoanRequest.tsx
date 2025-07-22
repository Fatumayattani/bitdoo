import React, { useState } from 'react';
import { ArrowLeft, DollarSign, Calendar, FileText, MapPin, Sparkles, Heart, Star } from 'lucide-react';

interface LoanRequestProps {
  onBack: () => void;
}

export function LoanRequest({ onBack }: LoanRequestProps) {
  const [formData, setFormData] = useState({
    amount: '',
    term: '',
    purpose: '',
    location: '',
    businessType: '',
    monthlyIncome: '',
    description: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle loan request submission
    console.log('Loan request submitted:', formData);
    alert('Loan request submitted successfully! Lenders will be notified.');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 via-teal-400 to-blue-500 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-white hover:text-yellow-300 font-bold text-lg bg-white bg-opacity-20 px-4 py-2 rounded-full backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Home</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Colorful Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="People connecting globally" 
                className="w-full h-80 object-cover rounded-2xl mb-6 shadow-lg"
              />
              <div className="text-center">
                <h2 className="text-4xl font-black text-white mb-4">
                  <Sparkles className="inline h-8 w-8 mr-2 animate-spin" />
                  Get Money Fast! 
                  <Heart className="inline h-8 w-8 ml-2 text-red-300 animate-pulse" />
                </h2>
                <p className="text-white text-xl font-bold mb-6">
                  Join thousands of happy borrowers worldwide! 🌍✨
                </p>
                <div className="grid grid-cols-2 gap-4 text-white">
                  <div className="bg-white bg-opacity-20 rounded-2xl p-4 backdrop-blur-sm">
                    <Star className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
                    <p className="font-bold">Fast Approval</p>
                    <p className="text-sm">Minutes not months!</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-2xl p-4 backdrop-blur-sm">
                    <DollarSign className="h-8 w-8 mx-auto mb-2 text-green-300" />
                    <p className="font-bold">Fair Rates</p>
                    <p className="text-sm">Community decided!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Colorful Form */}
          <div className="bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-black text-white mb-2">
                <Sparkles className="inline h-8 w-8 mr-2 animate-pulse" />
                Request Your Loan! 
                <Sparkles className="inline h-8 w-8 ml-2 animate-pulse" />
              </h1>
              <p className="text-pink-100 text-xl font-bold">Fill out this super fun form! 🎉</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white bg-opacity-20 rounded-2xl p-4 backdrop-blur-sm">
                  <label className="block text-white font-bold mb-3 text-lg">
                    <DollarSign className="h-5 w-5 inline mr-2 text-yellow-300" />
                    💰 Loan Amount (USD)
                  </label>
                  <input
                    type="number"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-yellow-300 rounded-xl focus:ring-4 focus:ring-yellow-200 focus:border-yellow-400 bg-white font-bold text-lg text-gray-800 placeholder-gray-500"
                    placeholder="500"
                    required
                  />
                </div>

                <div className="bg-white bg-opacity-20 rounded-2xl p-4 backdrop-blur-sm">
                  <label className="block text-white font-bold mb-3 text-lg">
                    <Calendar className="h-5 w-5 inline mr-2 text-green-300" />
                    📅 Loan Term
                  </label>
                  <select
                    name="term"
                    value={formData.term}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-green-300 rounded-xl focus:ring-4 focus:ring-green-200 focus:border-green-400 bg-white font-bold text-lg text-gray-800"
                    required
                  >
                    <option value="">Select term</option>
                    <option value="3">3 months</option>
                    <option value="6">6 months</option>
                    <option value="12">12 months</option>
                    <option value="24">24 months</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white bg-opacity-20 rounded-2xl p-4 backdrop-blur-sm">
                  <label className="block text-white font-bold mb-3 text-lg">
                    <MapPin className="h-5 w-5 inline mr-2 text-blue-300" />
                    🌍 Location
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-blue-300 rounded-xl focus:ring-4 focus:ring-blue-200 focus:border-blue-400 bg-white font-bold text-lg text-gray-800 placeholder-gray-500"
                    placeholder="Country, Region"
                    required
                  />
                </div>

                <div className="bg-white bg-opacity-20 rounded-2xl p-4 backdrop-blur-sm">
                  <label className="block text-white font-bold mb-3 text-lg">
                    🏢 Business Type
                  </label>
                  <select
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-purple-300 rounded-xl focus:ring-4 focus:ring-purple-200 focus:border-purple-400 bg-white font-bold text-lg text-gray-800"
                    required
                  >
                    <option value="">Select type</option>
                    <option value="agriculture">🌾 Agriculture</option>
                    <option value="retail">🛍️ Retail</option>
                    <option value="services">⚡ Services</option>
                    <option value="manufacturing">🏭 Manufacturing</option>
                    <option value="other">🎯 Other</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white bg-opacity-20 rounded-2xl p-4 backdrop-blur-sm">
                  <label className="block text-white font-bold mb-3 text-lg">
                    🎯 Loan Purpose
                  </label>
                  <input
                    type="text"
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-pink-300 rounded-xl focus:ring-4 focus:ring-pink-200 focus:border-pink-400 bg-white font-bold text-lg text-gray-800 placeholder-gray-500"
                    placeholder="Farm supplies, inventory, equipment..."
                    required
                  />
                </div>

                <div className="bg-white bg-opacity-20 rounded-2xl p-4 backdrop-blur-sm">
                  <label className="block text-white font-bold mb-3 text-lg">
                    💵 Monthly Income (USD)
                  </label>
                  <input
                    type="number"
                    name="monthlyIncome"
                    value={formData.monthlyIncome}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-orange-300 rounded-xl focus:ring-4 focus:ring-orange-200 focus:border-orange-400 bg-white font-bold text-lg text-gray-800 placeholder-gray-500"
                    placeholder="200"
                    required
                  />
                </div>
              </div>

              <div className="bg-white bg-opacity-20 rounded-2xl p-4 backdrop-blur-sm">
                <label className="block text-white font-bold mb-3 text-lg">
                  <FileText className="h-5 w-5 inline mr-2 text-cyan-300" />
                  📝 Tell Your Story!
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-cyan-300 rounded-xl focus:ring-4 focus:ring-cyan-200 focus:border-cyan-400 bg-white font-bold text-lg text-gray-800 placeholder-gray-500"
                  placeholder="Tell us about your awesome business and how you'll use this loan to make it even more amazing! 🚀"
                  required
                />
              </div>

              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl p-6 shadow-xl">
                <h3 className="font-black text-white mb-4 text-2xl text-center">
                  ✨ Loan Preview ✨
                </h3>
                <div className="grid grid-cols-2 gap-4 text-white">
                  <div className="bg-white bg-opacity-20 rounded-xl p-3 text-center backdrop-blur-sm">
                    <p className="font-bold text-lg">Amount</p>
                    <p className="text-2xl font-black">${formData.amount || '0'}</p>
                  </div>
                  <div className="bg-white bg-opacity-20 rounded-xl p-3 text-center backdrop-blur-sm">
                    <p className="font-bold text-lg">Term</p>
                    <p className="text-2xl font-black">{formData.term || '0'} months</p>
                  </div>
                </div>
                <div className="mt-4 bg-white bg-opacity-20 rounded-xl p-3 text-center backdrop-blur-sm">
                  <p className="font-bold text-lg">Monthly Payment</p>
                  <p className="text-3xl font-black">
                    ${formData.amount && formData.term ? (Number(formData.amount) * 1.12 / Number(formData.term)).toFixed(2) : '0'}
                  </p>
                  <p className="text-sm mt-1">*Estimated with 12% annual interest rate</p>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-6 rounded-2xl font-black text-2xl hover:from-green-500 hover:to-blue-600 transform hover:scale-105 hover:rotate-1 transition-all duration-300 shadow-2xl flex items-center justify-center space-x-3"
              >
                <Sparkles className="h-8 w-8 animate-spin" />
                <span>🚀 Submit My Awesome Loan Request! 🚀</span>
                <Sparkles className="h-8 w-8 animate-spin" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}