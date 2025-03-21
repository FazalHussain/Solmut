import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Flame, Coins, Trophy } from 'lucide-react';

const features = [
  {
    icon: <Zap className="h-6 w-6 text-purple-400" />,
    title: 'Solana-Powered',
    description: 'High-speed, low-cost transactions',
  },
  {
    icon: <Flame className="h-6 w-6 text-purple-400" />,
    title: 'Auto-Burn Mechanism',
    description: 'Reducing supply over time',
  },
  {
    icon: <Coins className="h-6 w-6 text-purple-400" />,
    title: 'Staking Rewards',
    description: 'Earn passive income by staking your tokens',
  },
  {
    icon: <Trophy className="h-6 w-6 text-purple-400" />,
    title: 'Fair Tokenomics',
    description: 'Structured presale and vesting ensure sustainability',
  },
];

const About = () => {
  const ref = useRef(null);
  
  // Trigger animation only when the entire section is in view (fully visible)
  const isFullyInView = useInView(ref, { once: true, amount: 1.0 });

  return (
    <section
      id="about"
      className="pt-20 pb-0 bg-gray-900/50 backdrop-blur-sm border-t border-b border-purple-500/20"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={isFullyInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2 className="text-3xl font-bold sm:text-4xl gradient-text glow">
            About Solmut ($SLMT)
          </h2>
          <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
            Solmut is a Solana-powered meme token built for speed, scalability, and engagement.
            Featuring ultra-low fees, lightning-fast transactions, and an auto-burn mechanism to ensure scarcity.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          initial="hidden"
          animate={isFullyInView ? 'visible' : 'hidden'}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2, // Delay between animations of each feature
              },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-500/40 transform hover:scale-105 transition-all duration-300 neon-border"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-purple-900/50 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-purple-300 mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;