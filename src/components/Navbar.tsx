import React, { useState } from 'react';
import { Menu, X, MessageSquare, Twitter, Send } from 'lucide-react';
//import { useSharedState } from '../hook/SharedContext'; // Adjust path as needed
import { TELEGRAM_URL, TWITTER_URL, WHITEPAPER_URL } from '../constants/constants';


//import { WalletButton } from '../components/WalletButton';

const Navbar = () => {

  //const { phantom } = useSharedState();


  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ['Home', 'About', 'Tokenomics', 'TokenStats', 'Staking', 'FAQ', 'Whitepaper'];

  return (
    <nav className="fixed w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center cursor-pointer" onClick={() => window.location.href = '/'}>
            <img src="/images/solmut.png" alt="Solmut Logo" className="w-8 h-8 mr-2 rounded-full" />
            <span className="text-2xl font-bold gradient-text glow">SOLMUT</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={item === 'Whitepaper' ? WHITEPAPER_URL : `#${item.toLowerCase()}`}
                  target={item === 'Whitepaper' ? "_blank" : "_self"}  // Open whitepaper in a new tab
                  className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item}
                </a>
              ))}

              <div className="flex space-x-2 ml-4">
                <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  <Send size={20} />
                </a>
                <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                  <Twitter size={20} />
                </a>
              </div>

              {/* <WalletButton
                onClick={!!phantom.walletAddress ? phantom.disconnectWallet : phantom.connectWallet}
                isConnected={!!phantom.walletAddress}
                isConnecting={phantom.connecting}
                address={phantom.walletAddress}/> */}
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
                href={item === 'Whitepaper' ? WHITEPAPER_URL : `#${item.toLowerCase()}`}
                target={item === 'Whitepaper' ? "_blank" : "_self"}  // Open whitepaper in a new tab
                className="text-gray-300 hover:text-purple-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item}
              </a>
            ))}
            {/* <WalletButton
                onClick={!!phantom.walletAddress ? phantom.disconnectWallet : phantom.connectWallet}
                isConnected={!!phantom.walletAddress}
                isConnecting={phantom.connecting}
                address={phantom.walletAddress}/> */}

            <div className="flex space-x-4 px-3 py-2">
              <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
                <Send size={20} />
              </a>
              <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-purple-400 transition-colors duration-200">
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