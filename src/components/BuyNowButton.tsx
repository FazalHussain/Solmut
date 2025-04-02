import { useState, useEffect } from "react";
import { Wallet } from "lucide-react"; // Assuming you're using Lucide icons

const BuyNowButton = ({ handleWalletAction, ctaText, phantom, setShowLimitedTag }) => {
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const shakeInterval = setInterval(() => {
      setIsShaking((prev) => !prev); // Toggle shaking class every 500ms
    }, 500);

    return () => clearInterval(shakeInterval); // Cleanup on unmount
  }, []);

  return (
    <button
      className={`w-full bg-gradient-to-r from-purple-600 to-blue-600 
                  hover:scale-105 transition-transform duration-200 ease-in-out 
                  text-white font-bold py-3 px-6 rounded-lg flex items-center 
                  justify-center space-x-2 neon-border 
                  ${isShaking ? "shake-animation" : ""}`}
      onClick={() => {
        handleWalletAction();
        setShowLimitedTag(false);
      }}
    >
      <Wallet size={20} />
      <span>{phantom.walletAddress ? ctaText : "Connect Wallet to Buy"}</span>
    </button>
  );
};

export default BuyNowButton;