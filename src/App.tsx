import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter, PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton
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


  // Default styles that can be overridden by your app
  import '@solana/wallet-adapter-react-ui/styles.css';

  function App() {

    // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;

  // You can also provide a custom RPC endpoint.
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new UnsafeBurnerWalletAdapter(),
      new PhantomWalletAdapter()
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network]
  );

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
                <Staking />
                <FAQ />
                <Footer />
              </main>
            </div>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>


    );
}

  export default App;