import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Chart = () => {
  const ref = useRef(null);
  const [hasLoaded, setHasLoaded] = useState(false);
  const isFullyInView = useInView(ref, { once: true, amount: 0.3 });

  // Load iframe when it comes into view
  React.useEffect(() => {
    if (isFullyInView && !hasLoaded) {
      setHasLoaded(true);
    }
  }, [isFullyInView, hasLoaded]);

  return (
    <section className="pt-0 pb-16 bg-gray-900/50 backdrop-blur-sm border-t border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold sm:text-4xl gradient-text glow">Live $SLMT Chart</h2>
        </div>
        <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-purple-500/20 shadow-lg">
          <div
            ref={ref}
            className="relative w-full pt-8"
            style={{ paddingBottom: '70%', minHeight: '400px' }}
          >
            {/* Only render iframe if it's in view */}
            {hasLoaded && (
              <motion.iframe
                src="https://dexscreener.com/solana/5Tx1WAKgWXRi6gnRRdkn9RUMWY9jXTcakD294CVpi7Ug?embed=1&loadChartSettings=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=1&chartType=usd&interval=5"
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                initial={{ opacity: 0 }} // start with hidden iframe
                animate={{ opacity: 1 }} // animate to visible once loaded
                transition={{ duration: 1 }} // smooth transition
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chart;