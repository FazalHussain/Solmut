import React, { useState } from 'react';
import { Menu, X, MessageSquare, Twitter } from 'lucide-react';

import { useConnectWallet } from "../hook/connectWallet"; // Import the hook

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'About', 'Tokenomics', 'Presale', 'Staking', 'FAQ', 'Whitepaper'];
  const { connect, disconnect, connected, publicKey } = useConnectWallet();

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/images/solmut.png" alt="Solmut Logo" className="w-8 h-8 mr-2" />
            <span className="text-2xl font-bold gradient-text glow">SOLMUT</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item}
                </a>
              ))}

              <div className="flex space-x-2 ml-4">
                <a href="https://t.me/solmutOfficial" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  <MessageSquare size={20} />
                </a>
                <a href="https://twitter.com/solmutOfficial" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  <Twitter size={20} />
                </a>
              </div>
              <button
                onClick={connected ? disconnect : connect}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg"
              >
                {connected ? `Disconnect (${publicKey?.toBase58().slice(0, 4)}...${publicKey?.toBase58().slice(-4)})` : "Connect Wallet"}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-purple-400 focus:outline-none transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800/95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-purple-400 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <button
              onClick={connected ? disconnect : connect}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg"
            >
              {connected ? `Disconnect (${publicKey?.toBase58().slice(0, 4)}...${publicKey?.toBase58().slice(-4)})` : "Connect Wallet"}
            </button>
            <div className="flex space-x-4 px-3 py-2">
              <a href="https://t.me/solmutOfficial" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                <MessageSquare size={20} />
              </a>
              <a href="https://x.com/solmutOfficial" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;