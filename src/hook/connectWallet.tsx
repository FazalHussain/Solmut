import { useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

export const useConnectWallet = () => {
  const { wallet, select, connect, disconnect, connected, wallets, publicKey } = useWallet();

  const handleConnect = async () => {
    if (!wallet) {
      if (wallets.length === 0) {
        alert("No wallets available. Please install Phantom or another wallet.");
        return;
      }

      select(wallets[0].adapter.name); // Auto-select the first available wallet
      return; // Stop here, let effect handle connection
    }

    try {
      await connect();
    } catch (error) {
      console.error("Connection Error:", error);
    }
  };

  // Auto-connect after selecting a wallet
  useEffect(() => {
    if (wallet) {
      connect().catch((error) => console.error("Auto Connect Error:", error));
    }
    if (connected && publicKey) {
      console.log("Connected Wallet Address:", publicKey.toBase58());
    }
  }, [wallet, connect]);

  return { connect: handleConnect, disconnect, connected, publicKey };
};