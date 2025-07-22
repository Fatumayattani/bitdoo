import React from 'react';
import { Bitcoin, Github, Twitter, Globe, Heart, Sparkles } from 'lucide-react';
export function Footer() {
    return (<footer className="bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 text-white relative overflow-hidden">
      {/* Fun background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400 rounded-full opacity-20 animate-pulse shadow-2xl"></div>
        <div className="absolute top-20 right-20 w-16 h-16 bg-cyan-400 rounded-full opacity-25 animate-bounce shadow-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-400 rounded-full opacity-20 animate-pulse delay-1000 shadow-2xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-orange-400 to-pink-500 rounded-full p-3 animate-pulse shadow-2xl">
                <Bitcoin className="h-10 w-10 text-white"/>
              </div>
              <span className="text-4xl font-black bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">Bitdoo</span>
              <Sparkles className="h-8 w-8 text-yellow-400 animate-spin"/>
            </div>
            <p className="text-white mb-8 max-w-md text-lg font-bold leading-relaxed bg-white bg-opacity-20 rounded-2xl p-4 backdrop-blur-sm shadow-lg">
              Making finance fun again! 🎉 Connecting awesome people worldwide through 
              the magic of Bitcoin and smart contracts. 
              <span className="text-yellow-400">No banks allowed! 🚫🏦</span>
            </p>
            <div className="flex space-x-6">
              <a href="#" className="group bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-2xl hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-2xl border-2 border-white">
                <Twitter className="h-6 w-6 text-white"/>
              </a>
              <a href="#" className="group bg-gradient-to-r from-gray-700 to-gray-900 p-4 rounded-2xl hover:from-gray-600 hover:to-gray-800 transition-all duration-300 transform hover:scale-110 hover:-rotate-12 shadow-2xl border-2 border-white">
                <Github className="h-6 w-6 text-white"/>
              </a>
              <a href="https://bitdoo.xyz" className="group bg-gradient-to-r from-green-500 to-blue-500 p-4 rounded-2xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-12 shadow-2xl border-2 border-white">
                <Globe className="h-6 w-6 text-white"/>
              </a>
            </div>
          </div>

          <div className="bg-white bg-opacity-20 rounded-3xl p-8 backdrop-blur-sm shadow-2xl border-2 border-white border-opacity-30">
            <h3 className="text-2xl font-bold mb-6 text-yellow-400">Platform 🚀</h3>
            <ul className="space-y-4 text-white">
              <li><a href="#" className="hover:text-yellow-400 transition-all duration-300 text-lg font-bold hover:underline bg-white bg-opacity-20 rounded-2xl p-3 block backdrop-blur-sm">How it Works ⚡</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-all duration-300 text-lg font-bold hover:underline bg-white bg-opacity-20 rounded-2xl p-3 block backdrop-blur-sm">Security 🛡️</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-all duration-300 text-lg font-bold hover:underline bg-white bg-opacity-20 rounded-2xl p-3 block backdrop-blur-sm">Fees 💰</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-all duration-300 text-lg font-bold hover:underline bg-white bg-opacity-20 rounded-2xl p-3 block backdrop-blur-sm">API 🔧</a></li>
            </ul>
          </div>

          <div className="bg-white bg-opacity-20 rounded-3xl p-8 backdrop-blur-sm shadow-2xl border-2 border-white border-opacity-30">
            <h3 className="text-2xl font-bold mb-6 text-pink-400">Support 💝</h3>
            <ul className="space-y-4 text-white">
              <li><a href="#" className="hover:text-pink-400 transition-all duration-300 text-lg font-bold hover:underline bg-white bg-opacity-20 rounded-2xl p-3 block backdrop-blur-sm">Help Center 🆘</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-all duration-300 text-lg font-bold hover:underline bg-white bg-opacity-20 rounded-2xl p-3 block backdrop-blur-sm">Contact 📞</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-all duration-300 text-lg font-bold hover:underline bg-white bg-opacity-20 rounded-2xl p-3 block backdrop-blur-sm">Privacy Policy 🔐</a></li>
              <li><a href="#" className="hover:text-pink-400 transition-all duration-300 text-lg font-bold hover:underline bg-white bg-opacity-20 rounded-2xl p-3 block backdrop-blur-sm">Terms of Service 📋</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white border-opacity-30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Heart className="h-5 w-5 text-red-400 animate-pulse"/>
              <p className="text-white text-lg font-bold bg-white bg-opacity-20 rounded-2xl px-4 py-2 backdrop-blur-sm">
                © 2025 Bitdoo. Made with love on Internet Computer 💜
              </p>
            </div>
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 px-8 py-3 rounded-2xl shadow-2xl border-2 border-white">
              <p className="text-white font-bold text-lg">
                🌐 Try it live: <a href="https://bitdoo.xyz" className="underline hover:no-underline">bitdoo.xyz</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>);
}
