import { useState, useEffect } from 'react';
import { TOTAL_SUPPLY, SLMT_PRICE, PUMP_FUN_URL } from '../constants/constants';
import BuyNowButtonPumpFun from './BuyNowPumpFun';
import { motion, AnimatePresence } from "framer-motion";


const TokenStats = () => {
  const [marketCap, setMarketCap] = useState<number | null>(null);
  const [numberOfHolders, setNumberOfHolders] = useState<number | null>(null);
  const [recentBuyers, setRecentBuyers] = useState(0);
  const [ctaText, setCtaText] = useState('Purchase on Pump.fun');

  const handlAction = async () => {
    window.open(PUMP_FUN_URL, '_blank');
  };

  // Simulated data
  const simulatedMarketCap = 5000; // $5,000,000
  const simulatedNumberOfHolders = 150; // 1,500 holders

  useEffect(() => {
    // Set simulated data
    setMarketCap(simulatedMarketCap);
    setNumberOfHolders(simulatedNumberOfHolders);
  }, []);

  useEffect(() => {
    const texts = ['Purchase on Pump.fun', 'Join the Fair Launch!', 'Instant Trading Available'];
    let index = 0;
    const interval = setInterval(() => {
      setCtaText(texts[index]);
      index = (index + 1) % texts.length;
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // Simulated live counter for buyers
  useEffect(() => {
    const interval = setInterval(() => {
      setRecentBuyers((prev) => prev + Math.floor(Math.random() * 5)); // Simulate random purchases
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="tokenstats" className="pt-0 pb-0 bg-gray-900/50 backdrop-blur-sm border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl gradient-text glow">Token Statistics</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Market Overview Card */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 flex flex-col h-full">
            <div className="flex-grow">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">Market Overview</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Market Cap:</span>
                  <span className="text-white font-semibold">
                    {marketCap !== null ? `$${marketCap.toLocaleString()}` : 'Loading...'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Number of Holders:</span>
                  <span className="text-white font-semibold">
                    {numberOfHolders !== null ? numberOfHolders.toLocaleString() : 'Loading...'}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Total Supply:</span>
                  <span className="text-white font-semibold">{TOTAL_SUPPLY.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">SLMT Price:</span>
                  <span className="text-white font-semibold">{SLMT_PRICE.toFixed(9)}</span>
                </div>
              </div>
            </div>

            {/* Buy Now Button */}
            <div className="mt-8">
              <BuyNowButtonPumpFun handlAction={handlAction} ctaText={ctaText} />
              {recentBuyers > 0 && (
                <AnimatePresence>
                  <motion.p
                    key={recentBuyers} // Ensures new entries animate separately
                    initial={{ opacity: 0, y: 30 }} // Start slightly below
                    animate={{ opacity: 1, y: 5 }} // Fully visible in place
                    exit={{ opacity: 0, y: -100 }} // Moves up and fades out
                    transition={{ duration: 2, ease: "easeOut" }} // Slow fade & move
                    className="absolute left-8 text-white text-xs font-semibold drop-shadow-md"
                  >
                    🎉 {recentBuyers} people just bought $SLMT! 🚀
                  </motion.p>
                </AnimatePresence>
              )}
            </div>
          </div>

          {/* How to Participate Card */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-purple-300 mb-6">How to Participate</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Visit pump.fun',
                    description: 'Navigate to the Pump.fun website using the "Buy Now" button on the left.',
                  },
                  {
                    title: 'Connect Your Wallet',
                    description: 'Connect your Solana wallet to interact with the platform.',
                  },
                  {
                    title: 'Get Some Solana',
                    description: 'Transfer Some Solana if you dont have',
                  },
                  {
                    title: 'Purchase SLMT Tokens',
                    description: 'Enter the amount you wish to purchase and confirm the transaction.',
                  },
                ].map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-300 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-200">{step.title}</h4>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenStats;