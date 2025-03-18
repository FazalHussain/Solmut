import { useState } from 'react';
import { Calculator, TrendingUp, Lock, Coins } from 'lucide-react';

import { useConnectWallet } from "../hook/connectWallet"; // Import the hook


const Staking = () => {

  // Use the custom hook for wallet logic
  const { connect, connected } = useConnectWallet();

  const [stakeAmount, setStakeAmount] = useState<string>('1000');
  const [stakingPeriod, setStakingPeriod] = useState<string>('30');

  const calculateRewards = (amount: string, days: string): number => {
    const baseAPY = 25; // 25% base APY
    const bonusAPY = Math.min(parseInt(days) / 30 * 5, 15); // Additional 5% per month, max 15%
    const totalAPY = baseAPY + bonusAPY;
    return (parseFloat(amount) * totalAPY / 100) * (parseInt(days) / 365);
  };

  return (
    <section id="staking" className="py-20 bg-gray-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl gradient-text glow">Staking Rewards</h2>
          <p className="mt-4 text-xl text-gray-300">
            Earn passive income by staking your $SLMT tokens
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-purple-300 mb-6">Rewards Calculator</h3>
            <div className="space-y-6">
              <div>
                <label htmlFor="stakeAmount" className="block text-sm font-medium text-gray-300 mb-2">
                  Amount to Stake ($SLMT)
                </label>
                <input
                  type="number"
                  id="stakeAmount"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  className="w-full bg-gray-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                  min="100"
                />
              </div>

              <div>
                <label htmlFor="stakingPeriod" className="block text-sm font-medium text-gray-300 mb-2">
                  Staking Period (Days)
                </label>
                <select
                  id="stakingPeriod"
                  value={stakingPeriod}
                  onChange={(e) => setStakingPeriod(e.target.value)}
                  className="w-full bg-gray-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                >
                  <option value="30">30 Days</option>
                  <option value="90">90 Days</option>
                  <option value="180">180 Days</option>
                  <option value="365">365 Days</option>
                </select>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-6 border border-purple-500/20">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400">Estimated Rewards:</span>
                  <span className="text-2xl font-bold gradient-text">
                    {calculateRewards(stakeAmount, stakingPeriod).toFixed(2)} $SLMT
                  </span>
                </div>
                <div className="text-sm text-gray-400">
                  Base APY: 25% + Bonus APY up to 15% for longer staking periods
                </div>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transform hover:scale-105 transition-all duration-200 neon-border"
                onClick={connected ? () => { } : connect}
                disabled={connected}>
                <Lock size={20} />
                <span>{connected ? "Your Staking Journey Begins Soon!" : "Connect Wallet to Stake"}</span>
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-purple-300 mb-6">Staking Benefits</h3>
              <div className="space-y-6">
                {[
                  {
                    icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
                    title: 'High APY Returns',
                    description: 'Earn up to 40% APY with longer staking periods'
                  },
                  {
                    icon: <Lock className="w-6 h-6 text-purple-400" />,
                    title: 'Auto-Compound',
                    description: 'Rewards are automatically reinvested for maximum returns'
                  },
                  {
                    icon: <Coins className="w-6 h-6 text-purple-400" />,
                    title: 'Flexible Periods',
                    description: 'Choose staking periods from 30 to 365 days'
                  },
                  {
                    icon: <Calculator className="w-6 h-6 text-purple-400" />,
                    title: 'Real-time Tracking',
                    description: 'Monitor your rewards and earnings in real-time'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1">{benefit.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-200">{benefit.title}</h4>
                      <p className="text-gray-400">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-8 border border-purple-500/20">
              <div className="flex items-center gap-4">
                <TrendingUp className="w-12 h-12 text-purple-400" />
                <div>
                  <h4 className="text-xl font-bold text-purple-300">Stake More, Earn More!</h4>
                  <p className="text-gray-400">
                    Longer staking periods earn bonus APY rewards
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

export default Staking;