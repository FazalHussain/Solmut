import { ShieldCheck, Scale, Database, Rocket, Zap, Layers, Eye, CheckCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const zkFeatures = [
  {
    icon: <ShieldCheck className="h-6 w-6 text-purple-400" />,
    title: 'Cost-Efficient',
    description: 'Reduces on-chain storage costs using Merkle trees and Zero-Knowledge proofs.'
  },
  {
    icon: <Scale className="h-6 w-6 text-purple-400" />,
    title: 'Scalability Boost',
    description: 'Optimized for high-speed, large-scale transactions without network congestion.'
  },
  {
    icon: <Database className="h-6 w-6 text-purple-400" />,
    title: 'State Compression',
    description: 'Stores only essential data on-chain while keeping everything verifiable.'
  },
  {
    icon: <Rocket className="h-6 w-6 text-purple-400" />,
    title: 'Optimized Airdrops',
    description: 'Compressed accounts enable seamless token distributions to thousands of users.'
  },
  {
    icon: <Zap className="h-6 w-6 text-purple-400" />,
    title: 'Faster Transactions',
    description: 'Compressed state updates make interactions more efficient with minimal delays.'
  },
  {
    icon: <Layers className="h-6 w-6 text-purple-400" />,
    title: 'Decentralized Verification',
    description: 'Ensures full transparency by allowing anyone to verify transactions on-chain.'
  },
  {
    icon: <Eye className="h-6 w-6 text-purple-400" />,
    title: 'Trustless Validation',
    description: 'Users can validate their balances and airdrops using Merkle proofs without centralization.'
  },
  {
    icon: <CheckCircle className="h-6 w-6 text-purple-400" />,
    title: 'Lower Fees',
    description: 'Solmut ($SLMT) transactions become up to 90% cheaper while maintaining integrity.'
  }
];

const ZKCompression = () => {
  const ref = useRef(null);
  const isFullyInView = useInView(ref, { once: false, amount: 0.1 }); 
  return (
    <section
      id="zk-compression"
      className="pt-20 pb-0 px-4 sm:px-6 lg:px-8 bg-gray-900/50 backdrop-blur-sm border-purple-500/20" ref={ref}
    >
      <motion.div
        ref={ref} 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={isFullyInView ? { opacity: 1} : {}}
        transition={{ duration: 1.5 }}
      >
        <div className="text-center">
          <motion.h2
            ref={ref}
            className="text-2xl sm:text-3xl font-bold gradient-text glow"
            initial={{ y: -50, opacity: 0 }}
            animate={isFullyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Zero-Knowledge (ZK) Compression for Solmut ($SLMT)
          </motion.h2>

          <motion.p
            ref={ref}
            className="mt-4 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isFullyInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Optimizing storage, reducing costs, and enhancing scalability on Solana.
            ZK Compression (State Compression) allows Solmut to store data efficiently while keeping it verifiable on-chain.
          </motion.p>
        </div>

        <motion.div
          ref={ref} 
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={isFullyInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 1 }}
        >
          {zkFeatures.map((feature, index) => (
            <motion.div
            ref={ref} 
              key={index}
              className="p-5 sm:p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 hover:border-purple-500/40 transform hover:scale-105 transition-all duration-300"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-900/50">
                  {feature.icon}
                </div>
                <h3 className="text-md sm:text-lg font-semibold text-purple-300">{feature.title}</h3>
              </div>
              <p className="mt-2 text-gray-400 text-sm sm:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={ref} 
          className="mt-16 text-gray-300"
          initial={{ opacity: 0 }}
          animate={isFullyInView ? { opacity: 1} : {}}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-purple-300 text-center">How ZK Compression Works:</h3>
          <motion.div
            ref={ref} 
            className="mt-6 space-y-4 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isFullyInView ? { opacity: 1} : {}}
            transition={{ delay: 1, duration: 1 }}
          >
            <p>
              Instead of storing every account state update directly on Solana, transactions and balances are aggregated into a
              <span className="text-purple-400"> Merkle Tree</span>. The root of this tree is stored on-chain, while individual
              data points remain off-chain. <span className="text-purple-400">Zero-Knowledge Proofs (ZKPs)</span> ensure that any
              updates remain valid and verifiable.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li><span className="text-purple-400">Step 1:</span> Group transactions into a Merkle Tree and store only the root hash on-chain.</li>
              <li><span className="text-purple-400">Step 2:</span> Generate ZK Proofs for data integrity and validation.</li>
              <li><span className="text-purple-400">Step 3:</span> Modify Solmut smart contracts to handle compressed accounts.</li>
              <li><span className="text-purple-400">Step 4:</span> Enable users to verify balances and transactions via Merkle proofs.</li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          ref={ref} 
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={isFullyInView ? { opacity: 1} : {}}
          transition={{ delay: 1.2, duration: 1 }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-purple-300 text-center">Final Benefits of ZK Compression</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 text-gray-300 text-sm sm:text-base">
            <motion.div
              ref={ref} 
              className="p-4 sm:p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 text-center"
              initial={{ opacity: 0 }}
              animate={isFullyInView ? { opacity: 1} : {}}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              ✅ <span className="text-purple-400">Lower Fees:</span> Saves 90%+ in storage and transaction costs.
            </motion.div>
            <motion.div
              ref={ref} 
              className="p-4 sm:p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 text-center"
              initial={{ opacity: 0 }}
              animate={isFullyInView ? { opacity: 1} : {}}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              ✅ <span className="text-purple-400">Scalability:</span> Handles millions of transactions without slowing Solana.
            </motion.div>
            <motion.div
              ref={ref} 
              className="p-4 sm:p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 text-center"
              initial={{ opacity: 0 }}
              animate={isFullyInView ? { opacity: 1} : {}}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              ✅ <span className="text-purple-400">Decentralization:</span> Keeps all data verifiable on-chain.
            </motion.div>
            <motion.div
              ref={ref} 
              className="p-4 sm:p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 text-center"
              initial={{ opacity: 0 }}
              animate={isFullyInView ? { opacity: 1} : {}}
              transition={{ delay: 2, duration: 0.6 }}
            >
              ✅ <span className="text-purple-400">Efficient Airdrops:</span> Distribute tokens at minimal cost.
            </motion.div>
            <motion.div
              ref={ref} 
              className="p-4 sm:p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 text-center"
              initial={{ opacity: 0 }}
              animate={isFullyInView ? { opacity: 1} : {}}
              transition={{ delay: 2.2, duration: 0.6 }}
            >
              ✅ <span className="text-purple-400">Trustless Validation:</span> Users can verify claims without centralization.
            </motion.div>
            <motion.div
              ref={ref} 
              className="p-4 sm:p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-purple-500/20 text-center"
              initial={{ opacity: 0 }}
              animate={isFullyInView ? { opacity: 1} : {}}
              transition={{ delay: 2.4, duration: 0.6 }}
            >
              ✅ <span className="text-purple-400">Faster Transactions:</span> Smart contract interactions run efficiently.
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ZKCompression;