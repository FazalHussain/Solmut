import React from "react";
import { Twitter, Send, FileText, Users, Info, BarChart3 } from "lucide-react";

const footerLinks = [
  {
    name: "Whitepaper",
    url: "/whitepaper.pdf", // Update with actual URL
    icon: <FileText className="w-4 h-4 text-gray-300" />,
  },
  {
    name: "Community Guidelines",
    url: "/community-guidelines", // Update with actual URL
    icon: <Users className="w-4 h-4 text-purple-300" />,
  },
  {
    name: "About",
    url: "/about",
    icon: <Info className="w-4 h-4 text-gray-400" />,
  },
  {
    name: "Tokenomics",
    url: "/tokenomics",
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

const Footer = () => {
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

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center space-x-6 text-gray-300 mb-4">
          {footerLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
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