import { useState, useEffect } from "react";

const tiers = [
  { tier: 1, price: 0.025, target: 5000 },
  { tier: 2, price: 0.035, target: 10000 },
  { tier: 3, price: 0.05, target: 55000 }
];

const RaisedTracker = () => {
  const [totalRaised, setTotalRaised] = useState<number>(0);
  const [highlight, setHighlight] = useState<boolean>(false);

  const totalTarget = 55000; // Final presale goal

  // Determine current tier
  const currentTierIndex = tiers.findIndex((tier) => totalRaised < tier.target);
  const currentTier = tiers[currentTierIndex] || tiers[tiers.length - 1];

  // Amount needed to reach the next tier
  const nextTierTarget = currentTier.target;
  const remainingToNextTier = Math.max(0, nextTierTarget - totalRaised);

  // Percentage progress to next tier
  const tierProgress = ((totalRaised / nextTierTarget) * 100).toFixed(2);

  // Overall progress bar
  const overallProgress = ((totalRaised / totalTarget) * 100).toFixed(2);

  useEffect(() => {
    setHighlight(true);
    const timer = setTimeout(() => setHighlight(false), 1500);
    return () => clearTimeout(timer);
  }, [totalRaised]);

  return (
    <section className="pt-10 pb-16 bg-gray-900/50 backdrop-blur-sm border-t border-purple-500/20">
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
            <span className="text-gray-400 text-sm">To Next Tier</span>
            <div className="text-purple-400 text-xl font-bold">{tierProgress}%</div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="relative mx-auto w-full max-w-4xl bg-gray-700 rounded-full h-6 overflow-hidden border border-purple-500/30">
          <div
            className={`h-full bg-purple-500 rounded-full transition-all duration-700 ${
              highlight ? "animate-highlight" : ""
            }`}
            style={{ width: `${Math.min(100, overallProgress)}%` }}
          ></div>
        </div>

        {/* Test Button (Remove in production) */}
        <div className="text-center mt-6">
          <button
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-lg hover:scale-105 transition-all duration-200"
            onClick={() => setTotalRaised(totalRaised + 5000)}
          >
            Simulate $5,000 Raised (Testing)
          </button>
        </div>
      </div>
    </section>
  );
};

export default RaisedTracker;