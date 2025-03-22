import React from 'react';
import { Wallet, Loader2 } from 'lucide-react';

interface WalletButtonProps {
  onClick: () => void;
  isConnected: boolean;
  isConnecting: boolean;
  address?: string | null;
}

export const WalletButton: React.FC<WalletButtonProps> = ({
  onClick,
  isConnected,
  isConnecting,
  address
}) => {
  return (
    <button
      onClick={onClick}
      disabled={isConnecting}
      className={`
        flex items-center gap-2 px-6 py-3 rounded-lg font-medium text-sm
        transition-all duration-200 
        ${isConnected 
          ? 'bg-green-100 text-green-700 hover:bg-green-200' 
          : 'bg-purple-600 text-white hover:bg-purple-700'
        }
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
    >
      {isConnecting ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <Wallet className="w-5 h-5" />
      )}
      
      {isConnected ? (
        <span>
          {address?.slice(0, 4)}...{address?.slice(-4)}
        </span>
      ) : (
        'Connect Wallet'
      )}
    </button>
  );
};