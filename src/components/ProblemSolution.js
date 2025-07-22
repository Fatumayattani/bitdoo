import React from 'react';
import { AlertTriangle, Target, CheckCircle, Frown, Smile } from 'lucide-react';
export function ProblemSolution() {
    return (<div className="py-20 bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">The Problem</span> 
            <span className="text-4xl"> 😤</span>
          </h2>
          <p className="text-2xl text-white max-w-4xl mx-auto font-bold bg-white bg-opacity-20 rounded-2xl p-4 backdrop-blur-sm shadow-2xl">
            Banking sucks for 1.4 billion people. Let's fix that! 🔧
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="group bg-white bg-opacity-20 border-l-8 border-red-400 p-6 rounded-3xl hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 shadow-2xl backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-red-400 rounded-full p-3 group-hover:animate-bounce">
                  <Frown className="h-8 w-8 text-white"/>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Banks Are Gatekeepers 🚫</h3>
                  <p className="text-white text-lg font-medium">Slow approvals, endless paperwork, and "computer says no" attitudes</p>
                </div>
              </div>
            </div>

            <div className="group bg-white bg-opacity-20 border-l-8 border-orange-400 p-6 rounded-3xl hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 shadow-2xl backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-orange-400 rounded-full p-3 group-hover:animate-bounce">
                  <AlertTriangle className="h-8 w-8 text-white"/>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Crazy High Rates 📈</h3>
                  <p className="text-white text-lg font-medium">30%+ interest rates that trap people in endless debt cycles</p>
                </div>
              </div>
            </div>

            <div className="group bg-white bg-opacity-20 border-l-8 border-yellow-400 p-6 rounded-3xl hover:bg-opacity-30 transition-all duration-300 transform hover:scale-105 shadow-2xl backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-yellow-400 rounded-full p-3 group-hover:animate-bounce">
                  <AlertTriangle className="h-8 w-8 text-white"/>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Zero Transparency 🕳️</h3>
                  <p className="text-white text-lg font-medium">Hidden fees, mysterious terms, and zero accountability</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-3xl p-8 transform hover:scale-105 transition-all duration-300 shadow-2xl border-4 border-white backdrop-blur-sm">
            <div className="text-center mb-8">
              <div className="bg-white rounded-full p-4 w-fit mx-auto mb-6 animate-pulse shadow-2xl">
                <Target className="h-16 w-16 text-purple-600"/>
              </div>
              <h3 className="text-3xl font-black text-white mb-4">Bitdoo's Magic Solution ✨</h3>
              <p className="text-white text-xl font-medium">Replace boring banks with awesome smart contracts!</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 bg-white bg-opacity-30 rounded-2xl p-4 backdrop-blur-sm shadow-lg border-2 border-white border-opacity-30">
                <div className="bg-green-400 rounded-full p-2">
                  <CheckCircle className="h-6 w-6 text-white"/>
                </div>
                <span className="text-white font-bold text-lg">Direct people-to-people connections 🤝</span>
              </div>
              <div className="flex items-center space-x-4 bg-white bg-opacity-30 rounded-2xl p-4 backdrop-blur-sm shadow-lg border-2 border-white border-opacity-30">
                <div className="bg-blue-400 rounded-full p-2">
                  <CheckCircle className="h-6 w-6 text-white"/>
                </div>
                <span className="text-white font-bold text-lg">Fair rates decided by the community 🗳️</span>
              </div>
              <div className="flex items-center space-x-4 bg-white bg-opacity-30 rounded-2xl p-4 backdrop-blur-sm shadow-lg border-2 border-white border-opacity-30">
                <div className="bg-purple-400 rounded-full p-2">
                  <CheckCircle className="h-6 w-6 text-white"/>
                </div>
                <span className="text-white font-bold text-lg">Everything visible on the blockchain 👀</span>
              </div>
              <div className="flex items-center space-x-4 bg-white bg-opacity-30 rounded-2xl p-4 backdrop-blur-sm shadow-lg border-2 border-white border-opacity-30">
                <div className="bg-pink-400 rounded-full p-2">
                  <Smile className="h-6 w-6 text-white"/>
                </div>
                <span className="text-white font-bold text-lg">Available everywhere Bitcoin works 🌍</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
}
