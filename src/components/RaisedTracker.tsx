import { useRef } from 'react';
import { usePresaleProgress } from "../hook/presaleProvider";
import { SharedProvider } from "../hook/SharedContext";
import { motion, AnimatePresence, useInView } from "framer-motion";


const RaisedTracker = () => {
  const ref = useRef(null);
  const isFullyInView = useInView(ref, { once: true, amount: 0.3 });

  const { overallProgress, setTotalRaised, highlight, currentTier, totalRaised, tierProgress } = usePresaleProgress();

  const isLastTier = currentTier.tier == 4;

  return (

    <section className="pt-0 pb-0 bg-gray-900/50 backdrop-blur-sm border-purple-500/20" ref={ref}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isFullyInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        className="backdrop-blur-sm rounded-xl p-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-6 gradient-text glow">Presale Progress</h3>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mb-6">
            <div className="bg-gray-800/50 border border-purple-500/20 rounded-lg p-4">
              <span className="text-gray-400 text-sm">Current Price</span>
              <div className="text-white text-xl font-bold">${currentTier.price.toFixed(3)}</div>
            </div>

            <div className="bg-gray-800/50 border border-purple-500/20 rounded-lg p-4">
              <span className="text-gray-400 text-sm">Current Tier</span>
              <div className="text-white text-xl font-bold">Tier {currentTier.tier}</div>
            </div>

            <div className="bg-gray-800/50 border border-purple-500/20 rounded-lg p-4">
              <span className="text-gray-400 text-sm">Total Raised</span>
              <div className="text-white text-xl font-bold">${totalRaised.toLocaleString()}</div>
            </div>

            <div className="bg-gray-800/50 border border-purple-500/20 rounded-lg p-4">
              <span className="text-gray-400 text-sm">{isLastTier ? "Max Tier Reached" : "To Next Tier"}</span>
              <div className="text-purple-400 text-xl font-bold">{tierProgress}%</div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="relative mx-auto w-full max-w-4xl bg-gray-700 rounded-full h-6 overflow-hidden border border-purple-500/30">
            <div
              className={`h-full bg-purple-500 rounded-full transition-all duration-700 ${highlight ? "animate-highlight" : ""
                }`}
              style={{ width: `${Math.min(100, parseFloat(overallProgress))}%` }}
            ></div>
          </div>

          {/* {<div className="text-center mt-6">
            <button
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:scale-105 transition-all duration-200"
              onClick={() => setTotalRaised(totalRaised + 5000)}
            >
              Simulate $5,000 Raised (Testing)
            </button>
          </div>} */}
        </div>

      </motion.div>

    </section>
  );
};

export default RaisedTracker;