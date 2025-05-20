"use client";

import { useState, useEffect } from 'react';
import { requestProvider, WebLNProvider } from 'webln';

interface WalletState {
  isConnected: boolean;
  provider: WebLNProvider | null;
  address: string | null;
  error: string | null;
}

export function useWallet() {
  const [walletState, setWalletState] = useState<WalletState>({
    isConnected: false,
    provider: null,
    address: null,
    error: null,
  });

  const connectWallet = async () => {
    try {
      const provider = await requestProvider();
      const info = await provider.getInfo();
      
      setWalletState({
        isConnected: true,
        provider,
        address: info.node.pubkey,
        error: null,
      });
    } catch (error) {
      setWalletState(prev => ({
        ...prev,
        error: 'Failed to connect wallet. Please ensure you have a WebLN-compatible wallet installed.',
      }));
    }
  };

  const disconnectWallet = () => {
    setWalletState({
      isConnected: false,
      provider: null,
      address: null,
      error: null,
    });
  };

  return {
    ...walletState,
    connectWallet,
    disconnectWallet,
  };
}