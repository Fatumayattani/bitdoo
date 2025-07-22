import React from 'react';
import { FileText, Users, Bitcoin, BarChart3, Rocket, Heart } from 'lucide-react';

export function HowItWorks() {
  return (
    <div className="py-20 bg-gradient-to-br from-cyan-400 via-teal-400 to-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">How It Works</span>
            <span className="text-4xl"> 🎯</span>
          </h2>
          <p className="text-2xl text-white font-bold bg-white bg-opacity-20 rounded-2xl p-4 backdrop-blur-sm shadow-2xl inline-block">Super simple, super fun, super secure!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* For Borrowers */}
          <div className="bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-white backdrop-blur-sm">
            <div className="text-center mb-8">
              <div className="bg-white rounded-full p-4 w-fit mx-auto mb-6 animate-bounce shadow-2xl">
                <FileText className="h-16 w-16 text-blue-600" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4">For Money Seekers 💸</h3>
              <p className="text-blue-100 text-xl font-medium">Get cash fast with zero hassle!</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-white bg-opacity-30 rounded-2xl p-6 backdrop-blur-sm shadow-lg border-2 border-white border-opacity-30">
                <div className="bg-yellow-400 text-blue-900 rounded-full w-12 h-12 flex items-center justify-center font-black text-xl flex-shrink-0 animate-pulse">
                  1
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">Tell Us What You Need 📝</h4>
                  <p className="text-blue-100 text-lg">Just say "I need $500 for my awesome business idea!" and we're on it!</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white bg-opacity-30 rounded-2xl p-6 backdrop-blur-sm shadow-lg border-2 border-white border-opacity-30">
                <div className="bg-pink-400 text-blue-900 rounded-full w-12 h-12 flex items-center justify-center font-black text-xl flex-shrink-0 animate-pulse">
                  2
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">Watch the Magic Happen ✨</h4>
                  <p className="text-blue-100 text-lg">Cool lenders from around the world compete to give you the best deal!</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 bg-white bg-opacity-30 rounded-2xl p-6 backdrop-blur-sm shadow-lg border-2 border-white border-opacity-30">
                <div className="bg-green-400 text-blue-900 rounded-full w-12 h-12 flex items-center justify-center font-black text-xl flex-shrink-0 animate-pulse">
                  3
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">Pay Back Like a Boss 👑</h4>
                  <p className="text-blue-100 text-lg">Easy Bitcoin payments that everyone can see and trust!</p>
                </div>
              </div>
            </div>
          </div>

          {/* For Lenders */}
          <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-pink-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-white backdrop-blur-sm">
            <div className="text-center mb-8">
              <div className="bg-white rounded-full p-4 w-fit mx-auto mb-6 animate-bounce shadow-2xl">
                <BarChart3 className="h-16 w-16 text-orange-600" />
              </div>
              <h3 className="text-3xl font-black text-white mb-4">For Money Makers 🚀</h3>
              <p className="text-orange-100 text-xl font-medium">Turn your Bitcoin into a money machine!</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 bg-white bg-opacity-30 rounded-2xl p-6 backdrop-blur-sm shadow-lg border-2 border-white border-opacity-30">
                <div className="bg-cyan-400 text-orange-900 rounded-full w-12 h-12 flex items-center justify-center font-black text-xl flex-shrink-0 animate-pulse">
                  1
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">Find Amazing People 🌟</h4>
                  <p className="text-orange-100 text-lg">Browse verified borrowers with real stories and solid plans!</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white bg-opacity-30 rounded-2xl p-6 backdrop-blur-sm shadow-lg border-2 border-white border-opacity-30">
                <div className="bg-purple-400 text-orange-900 rounded-full w-12 h-12 flex items-center justify-center font-black text-xl flex-shrink-0 animate-pulse">
                  2
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">Send Bitcoin Safely 🔒</h4>
                  <p className="text-orange-100 text-lg">Smart contracts keep your money super safe until everything's perfect!</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 bg-white bg-opacity-30 rounded-2xl p-6 backdrop-blur-sm shadow-lg border-2 border-white border-opacity-30">
                <div className="bg-green-400 text-orange-900 rounded-full w-12 h-12 flex items-center justify-center font-black text-xl flex-shrink-0 animate-pulse">
                  3
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">Watch Money Grow 📈</h4>
                  <p className="text-orange-100 text-lg">Sit back and collect sweet returns while helping dreams come true!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-3xl p-8 inline-block transform hover:scale-105 transition-all duration-300 shadow-2xl border-4 border-white backdrop-blur-sm">
            <div className="flex items-center space-x-4">
              <Heart className="h-12 w-12 text-white animate-pulse" />
              <div className="text-left">
                <h3 className="text-2xl font-black text-white">Built with Love & Bitcoin 💝</h3>
                <p className="text-white text-lg font-medium">Powered by Internet Computer's magic ✨</p>
              </div>
              <Rocket className="h-12 w-12 text-white animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}