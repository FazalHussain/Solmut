import React from 'react';
import { PieChart, DollarSign, Lock, Users } from 'lucide-react';

const tokenomicsData = [
  { name: 'Presale', percentage: 15, status: 'Unlocked', color: 'from-purple-500 to-blue-500' },
  { name: 'Team/Development', percentage: 20, status: 'Locked', color: 'from-blue-500 to-indigo-500' },
  { name: 'Liquidity Pool', percentage: 10, status: 'Unlocked', color: 'from-indigo-500 to-purple-500' },
  { name: 'Staking/Rewards', percentage: 10, status: 'Locked', color: 'from-purple-400 to-blue-400' },
  { name: 'Marketing', percentage: 5, status: 'Unlocked', color: 'from-blue-400 to-indigo-400' },
  { name: 'Reserve', percentage: 25, status: 'Locked', color: 'from-indigo-400 to-purple-400' },
  { name: 'Staking Reserve', percentage: 15, status: 'Locked', color: 'from-purple-300 to-blue-300' },
];

const Tokenomics = () => {
  return (
    <section id="tokenomics" className="py-20 bg-gray-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl gradient-text glow">Tokenomics</h2>
          <p className="mt-4 text-xl text-gray-300">
            Total Supply: 100,000,000 $SLMT
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            {tokenomicsData.map((item, index) => (
              <div
                key={index}
                className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-purple-300">{item.name}</h3>
                  <span className="text-lg font-bold gradient-text">{item.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${item.color}`}
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
                <span className="text-sm text-gray-400 mt-2 inline-block">
                  Status: {item.status}
                </span>
              </div>
            ))}
          </div>

          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20">
            <h3 className="text-2xl font-bold text-purple-300 mb-6">Vesting Schedule</h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Lock className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-200">Unlock Conditions</h4>
                  <p className="text-gray-400">Maximum 5% unlock per cycle (every 6 months)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <DollarSign className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-200">Price Requirements</h4>
                  <p className="text-gray-400">2× the last unlock price for 30 days</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Users className="w-6 h-6 text-purple-400 mt-1" />
                <div>
                  <h4 className="text-lg font-semibold text-gray-200">Team Flexibility</h4>
                  <p className="text-gray-400">Can delay or reduce unlocks but not increase them</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;