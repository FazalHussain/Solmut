// SharedContext.tsx

import { createContext, useContext, useState, ReactNode } from 'react';

// Define the context type
interface SharedContextType {
  currentTier: any; // Define the correct type for your tier (e.g., { tier: number, price: number, target: number })
  setCurrentTier: (tier: any) => void;
}

// Create context with default values
const SharedContext = createContext<SharedContextType>({
  currentTier: null,
  setCurrentTier: () => {},
});

// SharedProvider component to wrap around your app
export const SharedProvider = ({ children }: { children: ReactNode }) => {
  const [currentTier, setCurrentTier] = useState<any>(null);

  return (
    <SharedContext.Provider value={{ currentTier, setCurrentTier }}>
      {children}
    </SharedContext.Provider>
  );
};

// Hook to access shared state
export const useSharedState = () => useContext(SharedContext);