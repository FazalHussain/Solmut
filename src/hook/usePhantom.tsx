import { useState, useEffect, useCallback } from 'react';

export const usePhantom = () => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [connecting, setConnecting] = useState(false);

  const checkIfPhantomIsInstalled = useCallback(() => {
    const provider = window.phantom?.solana;
    return provider?.isPhantom || false;
  }, []);

  const isMobile = () => {
    return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  };


  const connectWallet = useCallback(async () => {
    try {
      setConnecting(true);
      const provider = window.phantom?.solana;
      
      if (!provider) {
        if (isMobile()) {
            // Redirect to Google Play Store
            window.location.href = 'https://play.google.com/store/apps/details?id=app.phantom';
          } else {
            // Redirect to Phantom browser extension
            window.location.href = 'https://chromewebstore.google.com/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa';
          }
        return;
      }

      const response = await provider.connect();
      const address = response.publicKey.toString();
      setWalletAddress(address);
    } catch (error) {
      console.error('Error connecting wallet:', error);
    } finally {
      setConnecting(false);
    }
  }, []);

  const disconnectWallet = useCallback(async () => {
    try {
      const provider = window.phantom?.solana;
      if (provider) {
        await provider.disconnect();
        setWalletAddress(null);
      }
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
    }
  }, []);

  useEffect(() => {
    const provider = window.phantom?.solana;

    if (provider) {
      // Handle account changes
      const onAccountChange = (publicKey: { toString: () => string } | null) => {
        if (publicKey) {
          setWalletAddress(publicKey.toString());
        } else {
          setWalletAddress(null);
        }
      };

      // Handle disconnect
      const onDisconnect = () => {
        setWalletAddress(null);
      };

      provider.on('accountChanged', onAccountChange);
      provider.on('disconnect', onDisconnect);

      return () => {
        provider.removeListener('accountChanged', onAccountChange);
        provider.removeListener('disconnect', onDisconnect);
      };
    }
  }, []);

  return {
    walletAddress,
    connecting,
    isPhantomInstalled: checkIfPhantomIsInstalled(),
    connectWallet,
    disconnectWallet
  };
};