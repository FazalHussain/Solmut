import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { PieChart, DollarSign, Lock, Users } from 'lucide-react';
import { TOTAL_SUPPLY } from '../constants/constants';

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
  const ref = useRef(null);
  const isFullyInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="tokenomics" className="pt-20 pb-20 bg-gray-900/30 backdrop-blur-sm" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Animation */}
        <motion.div
          className="text-center mb-16"
          initial={false}
          animate={isFullyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl gradient-text glow">Tokenomics</h2>
          <p className="mt-4 text-xl font-semibold text-gray-200">
            Total Supply: {TOTAL_SUPPLY.toLocaleString()} $SLMT
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Tokenomics Cards Animation */}
          <motion.div
            className="space-y-6"
            initial={false}
            animate={isFullyInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {tokenomicsData.map((item, index) => (
              <motion.div
                key={index}
                className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={isFullyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-purple-300">{item.name}</h3>
                  <span className="text-lg font-bold gradient-text">{item.percentage}%</span>
                </div>
                <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${item.color}`}
                    initial={{ width: 0 }}
                    animate={isFullyInView ? { width: `${item.percentage}%` } : {}}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                  />
                </div>
                <span className="text-sm text-gray-400 mt-2 inline-block">
                  Status: {item.status}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Vesting Schedule Animation */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20"
            initial={false}
            animate={isFullyInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h3 className="text-2xl font-bold text-purple-300 mb-6">Vesting Schedule</h3>
            <div className="space-y-6">
              {[
                { icon: Lock, title: "Unlock Conditions", desc: "Maximum 5% unlock per cycle (every 6 months)" },
                { icon: DollarSign, title: "Price Requirements", desc: "2× the last unlock price for 30 days" },
                { icon: Users, title: "Team Flexibility", desc: "Can delay or reduce unlocks but not increase them" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isFullyInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                >
                  <item.icon className="w-6 h-6 text-purple-400 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-200">{item.title}</h4>
                    <p className="text-gray-400">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;