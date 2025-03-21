import React from 'react';
import { motion } from 'framer-motion';
import { WHITEPAPER_URL } from '../constants/constants';
import { Download, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center animated-bg">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-gray-900/50 to-gray-900/90" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-0 text-center">
        
        {/* Mascot Image */}
        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <img
              src="https://black-fast-dormouse-2.mypinata.cloud/ipfs/bafybeidtjlqdnxhhujus2gjbhtt6ycnkcbr2o3mpmokde5g7amt3siznqm"
              alt="Solmut Mascot"
              className="w-full h-full object-contain transform hover:scale-105 transition-all duration-300"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(147, 51, 234, 0.3))',
              }}
            />
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center border-2 border-white">
              <img
                src="https://cryptologos.cc/logos/solana-sol-logo.png"
                alt="Solana Logo"
                className="w-8 h-8"
              />
            </div>
          </div>
        </motion.div>

        {/* Animated Text Below Image */}
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-8 glow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Solmut ($SLMT) – The Ultimate{' '}
          <span className="gradient-text">Solana Dog</span>,{' '}
          <br className="hidden md:block" />
          Racing to the Moon!
        </motion.h1>

        <motion.p 
          className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          A high-speed, community-driven meme token with staking rewards and an auto-burn mechanism on the Solana blockchain.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <a
            href="#presale"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg text-white bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 transform hover:scale-105 transition-all duration-200 neon-border"
          >
            <Rocket className="mr-2" size={20} />
            Join Presale
          </a>
          <a
            href={WHITEPAPER_URL}
            target="_blank"
            className="inline-flex items-center px-8 py-4 border border-purple-500/30 text-lg font-medium rounded-lg text-purple-300 bg-gray-900/50 hover:bg-gray-800/50 backdrop-blur-sm transform hover:scale-105 transition-all duration-200"
          >
            <Download className="mr-2" size={20} />
            View Whitepaper
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;