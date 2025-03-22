import { useEffect } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

export const useConnectWallet = () => {
  const { wallet, connect, disconnect, connected, publicKey } = useWallet();

  const handleConnect = async () => {
    if (!wallet) {
      alert("Please select a wallet manually.");
      return;
    }

    try {
      await connect();
    } catch (error) {
      console.error("Connection Error:", error);
    }
  };

  useEffect(() => {
    if (wallet && !connected) {
      console.log("Wallet selected but not connected. Waiting for manual connection.");
    }
  }, [wallet, connected]);

  return { connect: handleConnect, disconnect, connected, publicKey };
};