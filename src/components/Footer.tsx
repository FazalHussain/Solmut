import React from "react";
import { Twitter, Send, FileText, Users, Info, BarChart3 } from "lucide-react";

const footerLinks = [
  {
    name: "Whitepaper",
    url: "whitepaper",
    icon: <FileText className="w-4 h-4 text-gray-300" />,
  },
  {
    name: "Community Guidelines",
    url: "/community-guidelines",
    icon: <Users className="w-4 h-4 text-purple-300" />,
  },
  {
    name: "About",
    url: "about",
    icon: <Info className="w-4 h-4 text-gray-400" />,
  },
  {
    name: "Tokenomics",
    url: "tokenomics",
    icon: <BarChart3 className="w-4 h-4 text-green-400" />,
  },
];

const socialLinks = [
  {
    name: "Twitter",
    url: "https://twitter.com/solmutOfficial",
    icon: <Twitter className="w-6 h-6 text-blue-400" />,
  },
  {
    name: "Telegram",
    url: "https://t.me/solmutOfficial",
    icon: <Send className="w-6 h-6 text-blue-500" />,
  },
];

const listingLinks = [
  {
    name: "CoinMooner",
    url: "https://coinmooner.com/coins/solmut-slmt",
    logo: "/images/coinmooner.png", // Update with actual image path
  },
  {
    name: "CoinSniper",
    url: "https://coinsniper.net/coin/79522",
    logo: "/images/coinsniper.png", // Update with actual image path
  },
  {
    name: "CoinDiscovery",
    url: "https://coindiscovery.app/coin/solmut/overview",
    logo: "/images/coindiscovery.png", // Update with actual image path
  },
];

const Footer = () => {
  
  const scrollToSection = (id: string, event: React.MouseEvent) => {
    event.preventDefault(); // Prevent default anchor behavior
    const element = document.getElementById(id);
    if (element) {
      // Scroll to the element with the target ID
      element.scrollIntoView({
        behavior: "smooth",
        block: "start", // You can adjust this to control where the scroll ends (e.g., top, center)
      });
    }
  };


  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-purple-500/20 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-gray-800/50 border border-purple-500/20 rounded-full hover:border-purple-500/40 hover:text-white transition-all duration-200"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Listing Platforms */}
        <div className="flex justify-center space-x-24 mb-4">
          {listingLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all duration-200 transform hover:scale-110"
            >
              <img
                src={link.logo}
                alt={link.name}
                className="h-8 w-auto"
              />
            </a>
          ))}
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center space-x-6 text-gray-300 mb-4 mt-6">
          {footerLinks.map((link) => (
            <a
            key={link.name}
            href={`#${link.url}`} // Link to the section by ID
            onClick={(event) => scrollToSection(link.url, event)} // Handle the scroll on click
            className="flex items-center gap-1 text-sm hover:text-white transition-all duration-200"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Solmut ($SLMT). All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;