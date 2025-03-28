import { useState, useEffect } from 'react';
import { Wallet, Timer } from 'lucide-react';
import Countdown from 'react-countdown';
import { motion, AnimatePresence } from "framer-motion";

import { useSharedState } from '../hook/SharedContext'; // Adjust path as needed
import { usePresaleProgress } from "../hook/presaleProvider"; // Import the hook
import { MAXIMUM_BUY, MINIMUM_BUY, PRESALE_TOKEN_ALLOCATION } from '../constants/constants';


const Presale = () => {

  const [ctaText, setCtaText] = useState("Buy Now");
  const [recentBuyers, setRecentBuyers] = useState(0);
  const [showLimitedTag, setShowLimitedTag] = useState(true);
  const [amount, setAmount] = useState<string>('1000');

  const presaleEndDate = new Date('2025-06-01T00:00:00');
  const { currentTier } = usePresaleProgress();
  const tokenPrice = currentTier?.price;
  const { phantom } = useSharedState();

  const handleWalletAction = () => {
    if (phantom.walletAddress) {
      phantom.disconnectWallet();
    } else {
      phantom.connectWallet();
    }
  }


  // Rotate button text every few seconds to create urgency
  useEffect(() => {
    const texts = ["Buy Now", "Limited Spots Left!", "Best Price Guaranteed"];
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

  const calculateTokens = (usdAmount: string): number => {
    return parseFloat(usdAmount) / tokenPrice;
  };

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      return <span className="text-red-500">Presale Ended!</span>;
    }

    return (
      <div className="grid grid-cols-4 gap-4 text-center">
        {[
          { value: days, label: 'Days' },
          { value: hours, label: 'Hours' },
          { value: minutes, label: 'Minutes' },
          { value: seconds, label: 'Seconds' }
        ].map((item, index) => (
          <div key={index} className="bg-gray-800/50 rounded-lg p-4 border border-purple-500/20">
            <div className="text-3xl font-bold gradient-text">{item.value}</div>
            <div className="text-gray-400 text-sm">{item.label}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section id="presale" className="pt-20 pb-0 bg-gray-900/50 backdrop-blur-sm border-t border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl gradient-text glow">Presale Now Live!</h2>
          <p className="mt-4 text-xl text-gray-300">
            Join the revolution early and secure your $SLMT tokens at the best price
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">Presale Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Token Price:</span>
                  <span className="text-white font-semibold">${tokenPrice}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Allocation:</span>
                  <span className="text-white font-semibold">{PRESALE_TOKEN_ALLOCATION.toLocaleString()} $SLMT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Minimum Buy:</span>
                  <span className="text-white font-semibold">${MINIMUM_BUY}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Maximum Buy:</span>
                  <span className="text-white font-semibold">${MAXIMUM_BUY.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-purple-300 mb-4">Time Remaining</h4>
              <Countdown date={presaleEndDate} renderer={renderer} />
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-300 mb-2">
                  Enter amount in USD
                </label>
                <input
                  type="number"
                  id="amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full bg-gray-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                  min="50"
                  max="5000"
                />
              </div>
              <div className="flex items-center justify-between text-gray-400">
                <span>You will receive:</span>
                <span className="text-white font-semibold">
                  {calculateTokens(amount).toLocaleString()} $SLMT
                </span>
              </div>

              <button
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 neon-border"
                onClick={() => {
                  handleWalletAction();
                  setShowLimitedTag(false); // Hide tag after clicking
                }}
              >
                <Wallet size={20} />
                <span>{phantom.walletAddress ? ctaText : "Connect Wallet to Buy"}</span>
              </button>

              {/* Limited time tag */}
              {showLimitedTag && (
                <div className="text-sm text-red-500 mt-4 bg-gradient-to-r from-red-500 to-red-700 px-4 py-2 rounded-lg shadow-xl flex items-center justify-center space-x-2 transform hover:scale-105 transition-transform duration-200 ease-in-out w-full">
                  <span className="font-semibold text-white text-base">🔥</span>
                  <span className="text-white font-semibold text-lg">Limited-time offer, act fast!</span>
                </div>
              )}

              {/* Social Proof */}
              {recentBuyers > 0 && (
                <AnimatePresence>
                  <motion.p
                    key={recentBuyers} // Ensures new entries animate separately
                    initial={{ opacity: 0, y: 30 }} // Start slightly below
                    animate={{ opacity: 1, y: -10 }} // Fully visible in place
                    exit={{ opacity: 0, y: -50 }} // Moves up and fades out
                    transition={{ duration: 2, ease: "easeOut" }} // Slow fade & move
                    className="absolute left-8 text-white text-xs font-semibold drop-shadow-md"
                  >
                    🎉 {recentBuyers} people just bought $SLMT! 🚀
                  </motion.p>
                </AnimatePresence>
              )}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-purple-300 mb-6">How to Participate</h3>
              <div className="space-y-6">
                {[
                  {
                    title: 'Connect Your Wallet',
                    description: 'Click the "Connect Wallet" button and select your Solana wallet'
                  },
                  {
                    title: 'Enter Amount',
                    description: 'Choose how many tokens you want to purchase (min $50, max $5,000)'
                  },
                  {
                    title: 'Confirm Transaction',
                    description: 'Approve the transaction in your wallet and wait for confirmation'
                  },
                  {
                    title: 'Receive Tokens',
                    description: 'Your $SLMT tokens will be available for claim after the presale ends'
                  }
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

            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-8 border border-purple-500/20">
              <div className="flex items-center gap-4">
                <Timer className="w-12 h-12 text-purple-400" />
                <div>
                  <h4 className="text-xl font-bold text-purple-300">Don't Miss Out!</h4>
                  <p className="text-gray-400">
                    Early participants get the best price and bonus rewards
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presale;