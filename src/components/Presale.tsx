import React, { useState } from 'react';
import { Wallet, Timer, ArrowRight } from 'lucide-react';
import Countdown from 'react-countdown';
import WalletConnector from './WalletConnector';

const Presale = () => {
  const [amount, setAmount] = useState<string>('1000');
  const presaleEndDate = new Date('2025-06-01T00:00:00');
  const tokenPrice = 0.005;

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
    <section id="presale" className="py-20 bg-gray-900/50 backdrop-blur-sm border-t border-b border-purple-500/20">
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
                  <span className="text-white font-semibold">15,000,000 $SLMT</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Minimum Buy:</span>
                  <span className="text-white font-semibold">$50</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Maximum Buy:</span>
                  <span className="text-white font-semibold">$5,000</span>
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
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transform hover:scale-105 transition-all duration-200 neon-border">
                <Wallet size={20} />
                <span>Connect Wallet to Buy</span>
              </button>
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