// SharedContext.tsx
import { createContext, useContext, useState, ReactNode } from 'react';
import { usePhantom } from './usePhantom'; // Import the usePhantom hook

// Define the context type
interface SharedContextType {
  phantom: {
    walletAddress: string | null;
    connecting: boolean;
    isPhantomInstalled: boolean;
    connectWallet: () => void;
    disconnectWallet: () => void;
  };
}

// Create context with default values
const SharedContext = createContext<SharedContextType>({
  phantom: {
    walletAddress: null,
    connecting: false,
    isPhantomInstalled: false,
    connectWallet: () => {},
    disconnectWallet: () => {},
  },
});

// SharedProvider component to wrap around your app
export const SharedProvider = ({ children }: { children: ReactNode }) => {
  const phantom = usePhantom(); // Use the usePhantom hook to manage wallet state

  return (
    <SharedContext.Provider value={{ phantom }}>
      {children}
    </SharedContext.Provider>
  );
};

// Hook to access shared state
export const useSharedState = () => useContext(SharedContext);