import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Copy } from 'lucide-react';
import { CONTRACT_ADDRESS } from '../constants/constants';

const ContractAddress = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const handleCopy = () => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS);
  };

  return (
    <section
      id="contract-address"
      className="pt-20 pb-0 bg-gray-900/50 backdrop-blur-sm border-purple-500/20"
      ref={ref}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold sm:text-4xl gradient-text glow">
            SLMT Token Contract
          </h2>

          <p className="text-1xl font-semibold sm:text-2xl text-gray-200 mt-12 mb-12">
            {CONTRACT_ADDRESS}
          </p>

          <button
            onClick={handleCopy}
            className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-200 shadow-md"
          >
            <Copy className="h-5 w-5" />
            Copy Address
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContractAddress;