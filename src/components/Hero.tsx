import React from 'react';
import { ArrowRight, Globe, Shield, Zap, Sparkles } from 'lucide-react';

interface HeroProps {
  onNavigate: (page: 'home' | 'borrow' | 'lend' | 'dashboard') => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 min-h-screen">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-30 animate-pulse shadow-2xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-400 rounded-full opacity-40 animate-bounce shadow-2xl"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-pink-400 rounded-full opacity-25 animate-pulse delay-1000 shadow-2xl"></div>
        <div className="absolute top-1/3 right-1/3 w-20 h-20 bg-green-400 rounded-full opacity-35 animate-bounce delay-500 shadow-2xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center min-h-screen">
        <div className="text-center w-full">
          <div className="flex justify-center mb-6 bg-white bg-opacity-20 rounded-full p-4 w-fit mx-auto backdrop-blur-sm shadow-2xl">
            <Sparkles className="h-16 w-16 text-yellow-400 animate-spin" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight transform hover:scale-105 transition-transform duration-300">
            <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Bitdoo
            </span>
            <br />
            <span className="text-4xl md:text-5xl font-bold text-white">
              Makes Money
            </span>
            <br />
            <span className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Fun Again! 🚀
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed font-medium">
            Skip the boring banks! Get Bitcoin loans from cool people worldwide. 
            <br />
            <span className="text-yellow-300 animate-bounce">Zero paperwork. Zero BS. Just pure financial freedom! ✨</span>
          </p>
          
          {/* Animated floating elements */}
          <div className="mb-12 flex justify-center space-x-8">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-6 animate-bounce delay-100 shadow-2xl">
              <span className="text-4xl">💰</span>
            </div>
            <div className="bg-gradient-to-r from-pink-400 to-purple-500 rounded-full p-6 animate-pulse delay-300 shadow-2xl">
              <span className="text-4xl">🚀</span>
            </div>
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full p-6 animate-bounce delay-500 shadow-2xl">
              <span className="text-4xl">✨</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={() => onNavigate('borrow')}
              className="group bg-gradient-to-r from-pink-500 to-orange-500 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:from-pink-600 hover:to-orange-600 transform hover:scale-110 hover:rotate-1 transition-all duration-300 shadow-2xl flex items-center justify-center space-x-3 border-2 border-white backdrop-blur-sm animate-pulse hover:animate-none"
            >
              <span>Get Money Now! 💰</span>
              <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('lend')}
              className="group bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-10 py-5 rounded-2xl text-xl font-bold hover:from-cyan-600 hover:to-blue-600 transform hover:scale-110 hover:-rotate-1 transition-all duration-300 shadow-2xl border-2 border-white backdrop-blur-sm animate-pulse hover:animate-none"
            >
              Make Money! 📈
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}