import React, { FC, useMemo, useEffect, useState, } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter, PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Presale from './components/Presale';
import Staking from './components/Staking';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ZKCompression from './components/ZKCompression';
import RaisedTracker from './components/RaisedTracker';

const App = () => {
  const [isPhantomAvailable, setIsPhantomAvailable] = useState(false); // Track Phantom availability
  const network = WalletAdapterNetwork.Devnet; // or "mainnet", "testnet"
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  // Set up the wallets list, adding Phantom only if it's available
  const wallets = useMemo(() => {
    const availableWallets: any[] = [
      new SolflareWalletAdapter(),
      new UnsafeBurnerWalletAdapter(),
    ];

    // Add Phantom if available
    if (isPhantomAvailable) {
      availableWallets.unshift(new PhantomWalletAdapter());
    }

    return availableWallets as any; // Force the type to any to bypass the type error
  }, [isPhantomAvailable]);

  // Check for Phantom wallet availability
  useEffect(() => {
    if (window.solana && window.solana.isPhantom) {
      setIsPhantomAvailable(true); // Phantom is available
    }
  }, []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="min-h-screen bg-gray-900">
            <Navbar />
            <main>
              <Hero />
              <About />
              <Tokenomics />
              <Presale />
              <RaisedTracker />
              <Staking />
              <ZKCompression />
              <FAQ />
              <Footer />
            </main>
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;