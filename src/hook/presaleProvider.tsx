import { useState, useEffect } from "react";

// Define tiers
const tiers = [
    { tier: 1, price: 0.0020, target: 10000 },
    { tier: 2, price: 0.0030, target: 25000 },
    { tier: 3, price: 0.0040, target: 45000 },
    { tier: 4, price: 0.0050, target: 70000 }
  ];

// Custom hook for presale progress
export const usePresaleProgress = (initialRaised: number = 2000) => {
  const [totalRaised, setTotalRaised] = useState<number>(initialRaised);
  const [highlight, setHighlight] = useState<boolean>(false);
   
  // Access setCurrentTier from shared state
  //const { setCurrentTier } = useSharedState();

  const totalTarget = tiers[tiers.length - 1].target; // Final presale goal
  const currentTierIndex = tiers.findIndex((tier) => totalRaised < tier.target);
  const currentTier = tiers[currentTierIndex] || tiers[tiers.length - 1];
  //console.log(currentTier.price);
  const tierProgress = ((totalRaised / currentTier.target) * 100).toFixed(2);
  const overallProgress = ((totalRaised / totalTarget) * 100).toFixed(2);

  useEffect(() => {
    //setCurrentTier(currentTier); // Set the currentTier globally in shared state

    setHighlight(true);
    const timer = setTimeout(() => setHighlight(false), 1500);
    return () => clearTimeout(timer);
  }, [totalRaised, currentTier]);
  return {
    totalRaised,
    setTotalRaised,
    highlight,
    currentTier,
    tierProgress,
    overallProgress,
  };
};