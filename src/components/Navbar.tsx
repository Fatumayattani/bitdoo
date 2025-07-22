import React from 'react';
import { Menu, X, Wallet, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { NFID } from '@nfid/embed';

// Plug Wallet types
declare global {
  interface Window {
    ic?: {
      plug?: {
        requestConnect: (options?: { whitelist?: string[]; host?: string }) => Promise<boolean>;
        isConnected: () => Promise<boolean>;
        disconnect: () => Promise<boolean>;
        getPrincipal: () => Promise<{ toString: () => string }>;
        getAccountID: () => Promise<string>;
        agent?: any;
      };
      bitfinity?: {
        requestConnect: (options?: { whitelist?: string[]; host?: string }) => Promise<boolean>;
        isConnected: () => Promise<boolean>;
        disconnect: () => Promise<boolean>;
        getPrincipal: () => Promise<{ toString: () => string }>;
        getAccountID: () => Promise<string>;
        agent?: any;
      };
    };
  }
}

// NFID Wallet types
interface NFIDIdentity {
  getPrincipal: () => { toString: () => string };
}
interface NavbarProps {
  currentPage: string;
  onNavigate: (page: 'home' | 'borrow' | 'lend' | 'dashboard') => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [principalId, setPrincipalId] = useState<string>('');
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectedWallet, setConnectedWallet] = useState<'plug' | 'nfid' | 'bitfinity' | null>(null);
  const [showWalletDropdown, setShowWalletDropdown] = useState(false);

  // Check if Plug Wallet is already connected on component mount
  React.useEffect(() => {
    checkConnection();
  }, []);

  const checkConnection = async () => {
    try {
      if (window.ic?.plug) {
        const connected = await window.ic.plug.isConnected();
        if (connected) {
          const principal = await window.ic.plug.getPrincipal();
          setIsConnected(true);
          setPrincipalId(principal.toString());
          setConnectedWallet('plug');
        }
      }
      
      if (window.ic?.bitfinity) {
        const connected = await window.ic.bitfinity.isConnected();
        if (connected) {
          const principal = await window.ic.bitfinity.getPrincipal();
          setIsConnected(true);
          setPrincipalId(principal.toString());
          setConnectedWallet('bitfinity');
        }
      }
    } catch (error) {
      console.error('Error checking wallet connections:', error);
    }
  };

  const connectWallet = async () => {
    if (!window.ic?.plug) {
      alert('Plug Wallet is not installed! Please install it from https://plugwallet.ooo/');
      return;
    }

    setIsConnecting(true);
    try {
      // Request connection with whitelist for common ICP canisters
      const connected = await window.ic.plug.requestConnect({
        whitelist: [
          // Add your canister IDs here when you have them
          'rdmx6-jaaaa-aaaah-qcaiq-cai', // Internet Identity
          'rrkah-fqaaa-aaaah-qcaiq-cai', // NNS Governance
        ],
        host: 'https://mainnet.dfinity.network'
      });

      if (connected) {
        const principal = await window.ic.plug.getPrincipal();
        setIsConnected(true);
        setPrincipalId(principal.toString());
        setConnectedWallet('plug');
        console.log('Connected to Plug Wallet:', principal.toString());
      }
    } catch (error) {
      console.error('Error connecting to Plug Wallet:', error);
      alert('Failed to connect to Plug Wallet. Please try again.');
    } finally {
      setIsConnecting(false);
      setShowWalletDropdown(false);
    }
  };

  const connectBitfinity = async () => {
    if (!window.ic?.bitfinity) {
      alert('Bitfinity Wallet is not installed! Please install it from the Chrome Web Store.');
      return;
    }

    setIsConnecting(true);
    try {
      const connected = await window.ic.bitfinity.requestConnect({
        whitelist: [
          // Add your canister IDs here when you have them
          'rdmx6-jaaaa-aaaah-qcaiq-cai', // Internet Identity
          'rrkah-fqaaa-aaaah-qcaiq-cai', // NNS Governance
        ],
        host: 'https://mainnet.dfinity.network'
      });

      if (connected) {
        const principal = await window.ic.bitfinity.getPrincipal();
        setIsConnected(true);
        setPrincipalId(principal.toString());
        setConnectedWallet('bitfinity');
        console.log('Connected to Bitfinity Wallet:', principal.toString());
      }
    } catch (error) {
      console.error('Error connecting to Bitfinity Wallet:', error);
      alert('Failed to connect to Bitfinity Wallet. Please try again.');
    } finally {
      setIsConnecting(false);
      setShowWalletDropdown(false);
    }
  };

  const disconnectWallet = async () => {
    try {
      if (window.ic?.plug) {
        await window.ic.plug.disconnect();
        setIsConnected(false);
        setPrincipalId('');
        setConnectedWallet(null);
        console.log('Disconnected from Plug Wallet');
      }
    } catch (error) {
      console.error('Error disconnecting from Plug Wallet:', error);
    }
  };

  const connectNFID = async () => {
    setIsConnecting(true);
    try {
      const nfid = await NFID.init({
        application: {
          name: "Bitdoo",
          logo: "https://bitdoo.xyz/logo.png"
        }
      });

      const identity = await nfid.getDelegation({
        targets: [], // Add your canister IDs here when you have them
        derivationOrigin: "https://bitdoo.xyz"
      });

      if (identity) {
        const principal = identity.getPrincipal();
        setIsConnected(true);
        setPrincipalId(principal.toString());
        setConnectedWallet('nfid');
        console.log('Connected to NFID:', principal.toString());
      }
    } catch (error) {
      console.error('Error connecting to NFID:', error);
      alert('Failed to connect to NFID. Please try again.');
    } finally {
      setIsConnecting(false);
      setShowWalletDropdown(false);
    }
  };

  const disconnectBitfinity = async () => {
    try {
      if (window.ic?.bitfinity) {
        await window.ic.bitfinity.disconnect();
        setIsConnected(false);
        setPrincipalId('');
        setConnectedWallet(null);
        console.log('Disconnected from Bitfinity Wallet');
      }
    } catch (error) {
      console.error('Error disconnecting from Bitfinity Wallet:', error);
    }
  };

  const disconnectNFID = async () => {
    try {
      // NFID doesn't have a specific disconnect method, just clear local state
      setIsConnected(false);
      setPrincipalId('');
      setConnectedWallet(null);
      console.log('Disconnected from NFID');
    } catch (error) {
      console.error('Error disconnecting from NFID:', error);
    }
  };

  const handleDisconnect = async () => {
    if (connectedWallet === 'plug') {
      await disconnectWallet();
    } else if (connectedWallet === 'nfid') {
      await disconnectNFID();
    } else if (connectedWallet === 'bitfinity') {
      await disconnectBitfinity();
    }
  };

  const getWalletDisplayName = () => {
    if (connectedWallet === 'plug') return 'Plug';
    if (connectedWallet === 'nfid') return 'NFID';
    if (connectedWallet === 'bitfinity') return 'Bitfinity';
    return '';
  };

  const formatPrincipalId = (id: string) => {
    if (id.length <= 12) return id;
    return `${id.slice(0, 6)}...${id.slice(-6)}`;
  };

  return (
    <div className="sticky top-0 z-50">
      <nav className="bg-gradient-to-r from-white to-orange-600 shadow-2xl border-b-4 border-yellow-400 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => onNavigate('home')}
          >
              <img 
                src="/bitdoo.png" 
                alt="Bitdoo Logo" 
                className="h-20 w-auto transform scale-108 group-hover:scale-114 group-hover:rotate-3 transition-all duration-300"
              />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <button
              onClick={() => onNavigate('home')}
              className={`px-6 py-3 text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm ${
                currentPage === 'home'
                  ? 'bg-white bg-opacity-30 text-white border-2 border-white'
                  : 'text-white hover:bg-white hover:bg-opacity-20 border-2 border-transparent'
              }`}
            >
              🏠 Home
            </button>
            <button
              onClick={() => onNavigate('borrow')}
              className={`px-6 py-3 text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm ${
                currentPage === 'borrow'
                  ? 'bg-white bg-opacity-30 text-white border-2 border-white'
                  : 'text-white hover:bg-white hover:bg-opacity-20 border-2 border-transparent'
              }`}
            >
              💰 Borrow
            </button>
            <button
              onClick={() => onNavigate('lend')}
              className={`px-6 py-3 text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm ${
                currentPage === 'lend'
                  ? 'bg-white bg-opacity-30 text-white border-2 border-white'
                  : 'text-white hover:bg-white hover:bg-opacity-20 border-2 border-transparent'
              }`}
            >
              📈 Lend
            </button>
            <button
              onClick={() => onNavigate('dashboard')}
              className={`px-6 py-3 text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg backdrop-blur-sm ${
                currentPage === 'dashboard'
                  ? 'bg-white bg-opacity-30 text-white border-2 border-white'
                  : 'text-white hover:bg-white hover:bg-opacity-20 border-2 border-transparent'
              }`}
            >
              📊 Dashboard
            </button>
            {isConnected ? (
              <div className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-2xl flex items-center space-x-2 border-2 border-white">
                  <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
                  <span>{getWalletDisplayName()}: {formatPrincipalId(principalId)}</span>
                </div>
                <button 
                  onClick={handleDisconnect}
                  className="bg-gradient-to-r from-red-400 to-pink-500 text-white px-4 py-3 rounded-2xl hover:from-red-500 hover:to-pink-600 transition-all duration-300 font-bold text-lg transform hover:scale-110 shadow-2xl border-2 border-white"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <div className="relative">
                <button 
                  onClick={() => setShowWalletDropdown(!showWalletDropdown)}
                  disabled={isConnecting}
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-2xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 font-bold text-lg transform hover:scale-110 hover:rotate-1 shadow-2xl flex items-center space-x-2 border-2 border-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <>
                    <Wallet className="h-5 w-5" />
                    <span>{isConnecting ? 'Connecting... 🔄' : 'Connect 🚀'}</span>
                    <ChevronDown className="h-4 w-4" />
                  </>
                </button>
                
                {showWalletDropdown && !isConnecting && (
                  <div className="absolute top-full right-0 mt-2 bg-white rounded-2xl shadow-2xl border-2 border-orange-300 overflow-hidden z-50 min-w-52">
                    <button
                      onClick={connectWallet}
                      className="w-full px-6 py-4 text-left hover:bg-orange-50 transition-all duration-300 font-bold text-lg text-gray-800 flex items-center space-x-3 border-b border-orange-100"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">P</span>
                      </div>
                      <span>Plug Wallet</span>
                    </button>
                    <button
                      onClick={connectNFID}
                      className="w-full px-6 py-4 text-left hover:bg-orange-50 transition-all duration-300 font-bold text-lg text-gray-800 flex items-center space-x-3 border-b border-orange-100"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">N</span>
                      </div>
                      <span>NFID Wallet</span>
                    </button>
                    <button
                      onClick={connectBitfinity}
                      className="w-full px-6 py-4 text-left hover:bg-orange-50 transition-all duration-300 font-bold text-lg text-gray-800 flex items-center space-x-3"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">B</span>
                      </div>
                      <span>Bitfinity Wallet</span>
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:bg-white hover:bg-opacity-20 p-3 rounded-2xl transition-all duration-300 backdrop-blur-sm border-2 border-white border-opacity-30"
            >
              {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white border-opacity-30 bg-white bg-opacity-10 rounded-b-2xl backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => { onNavigate('home'); setIsMenuOpen(false); }}
                className="text-left text-white hover:bg-white hover:bg-opacity-20 font-bold text-lg py-3 px-4 rounded-2xl transition-all duration-300 backdrop-blur-sm border-2 border-transparent hover:border-white"
              >
                🏠 Home
              </button>
              <button
                onClick={() => { onNavigate('borrow'); setIsMenuOpen(false); }}
                className="text-left text-white hover:bg-white hover:bg-opacity-20 font-bold text-lg py-3 px-4 rounded-2xl transition-all duration-300 backdrop-blur-sm border-2 border-transparent hover:border-white"
              >
                💰 Borrow
              </button>
              <button
                onClick={() => { onNavigate('lend'); setIsMenuOpen(false); }}
                className="text-left text-white hover:bg-white hover:bg-opacity-20 font-bold text-lg py-3 px-4 rounded-2xl transition-all duration-300 backdrop-blur-sm border-2 border-transparent hover:border-white"
              >
                📈 Lend
              </button>
              <button
                onClick={() => { onNavigate('dashboard'); setIsMenuOpen(false); }}
                className="text-left text-white hover:bg-white hover:bg-opacity-20 font-bold text-lg py-3 px-4 rounded-2xl transition-all duration-300 backdrop-blur-sm border-2 border-transparent hover:border-white"
              >
                📊 Dashboard
              </button>
              {isConnected ? (
                <div className="space-y-2">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-3 rounded-2xl font-bold text-lg text-left flex items-center space-x-2 shadow-2xl border-2 border-white">
                    <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
                    <span>{getWalletDisplayName()}: {formatPrincipalId(principalId)}</span>
                  </div>
                  <button 
                    onClick={handleDisconnect}
                    className="w-full bg-gradient-to-r from-red-400 to-pink-500 text-white px-6 py-3 rounded-2xl hover:from-red-500 hover:to-pink-600 transition-all duration-300 font-bold text-lg text-left shadow-2xl border-2 border-white"
                  >
                    Disconnect
                  </button>
                </div>
              ) : (
                <div className="space-y-2">
                  <button 
                    onClick={connectWallet}
                    disabled={isConnecting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-2xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-bold text-lg text-left flex items-center space-x-2 shadow-2xl border-2 border-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">P</span>
                    </div>
                    <span>{isConnecting && connectedWallet === 'plug' ? 'Connecting... 🔄' : 'Plug Wallet'}</span>
                  </button>
                  <button 
                    onClick={connectNFID}
                    disabled={isConnecting}
                    className="w-full bg-gradient-to-r from-green-500 to-cyan-500 text-white px-6 py-3 rounded-2xl hover:from-green-600 hover:to-cyan-600 transition-all duration-300 font-bold text-lg text-left flex items-center space-x-2 shadow-2xl border-2 border-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">N</span>
                    </div>
                    <span>{isConnecting && connectedWallet === 'nfid' ? 'Connecting... 🔄' : 'NFID Wallet'}</span>
                  </button>
                  <button 
                    onClick={connectBitfinity}
                    disabled={isConnecting}
                    className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-bold text-lg text-left flex items-center space-x-2 shadow-2xl border-2 border-white disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs">B</span>
                    </div>
                    <span>{isConnecting && connectedWallet === 'bitfinity' ? 'Connecting... 🔄' : 'Bitfinity Wallet'}</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      </nav>
    </div>
  );
}