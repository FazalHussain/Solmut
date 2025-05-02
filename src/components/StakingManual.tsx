import { useState, useRef } from 'react';
import { Calculator, TrendingUp, Lock, Coins } from 'lucide-react';
import { motion, useInView } from "framer-motion";
import { STAKING_ADDRESS } from '../constants/constants';
import { validatePumpTokenStakeTx } from '../utility/StakingValidation';

const StakingManual = () => {
    const ref = useRef(null);
    const isFullyInView = useInView(ref, { once: true, amount: 0.3 });


    const [stakeAmount, setStakeAmount] = useState<string>('1000');
    const [stakingPeriod, setStakingPeriod] = useState<string>('30');
    const [transactionHash, setTransactionHash] = useState<string>('');

    const calculateRewards = (amount: string, days: string): number => {
        const baseAPY = 15;
        const bonusAPY = Math.min(parseInt(days) / 30 * 5, 15);
        const totalAPY = baseAPY + bonusAPY;
        return (parseFloat(amount) * totalAPY / 100) * (parseInt(days) / 365);
    };

    const [validating, setValidating] = useState(false);
    const [status, setStatus] = useState<"idle" | "valid" | "invalid">("idle");

    const handleStakeClick = async () => {
        if (!transactionHash) return;

        setValidating(true);
        setStatus("idle");

        const amount = parseFloat(stakeAmount) * Math.pow(10, 6);

        const isValid = await validatePumpTokenStakeTx(transactionHash, amount);

        if (isValid) {
            setStatus("valid");
            // 🚀 Trigger backend call or mint rewards here
        } else {
            setStatus("invalid");
        }

        setValidating(false);
    };

    return (
        <section id="staking" className="pt-20 pb-0 bg-gray-900/30 backdrop-blur-sm" ref={ref}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isFullyInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl font-bold sm:text-4xl gradient-text glow">Staking Rewards</h2>
                    <p className="mt-4 text-xl text-gray-300">
                        Earn passive income by staking your $SLMT tokens
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 40 }}
                        animate={isFullyInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                        className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20"
                    >
                        <h3 className="text-2xl font-bold text-purple-300 mb-6">Rewards Calculator</h3>
                        <div className="space-y-6">
                            <div>
                                <label htmlFor="stakeAmount" className="block text-sm font-medium text-gray-300 mb-2">
                                    Amount to Stake ($SLMT)
                                </label>
                                <input
                                    type="number"
                                    id="stakeAmount"
                                    value={stakeAmount}
                                    onChange={(e) => setStakeAmount(e.target.value)}
                                    className="w-full bg-gray-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                                    min="100"
                                />
                            </div>

                            <div>
                                <label htmlFor="stakingPeriod" className="block text-sm font-medium text-gray-300 mb-2">
                                    Staking Period (Days)
                                </label>
                                <select
                                    id="stakingPeriod"
                                    value={stakingPeriod}
                                    onChange={(e) => setStakingPeriod(e.target.value)}
                                    className="w-full bg-gray-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                                >
                                    <option value="7">7 Days</option>
                                    <option value="30">30 Days</option>
                                    <option value="90">90 Days</option>
                                    <option value="180">180 Days</option>
                                </select>
                            </div>

                            <div className="bg-gray-900/50 rounded-lg p-6 border border-purple-500/20">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-gray-400">Estimated Rewards:</span>
                                    <span className="text-2xl font-bold gradient-text">
                                        {calculateRewards(stakeAmount, stakingPeriod).toFixed(2)} $SLMT
                                    </span>
                                </div>
                                <div className="text-sm text-gray-400">
                                    Base APY: 15% + Bonus APY up to 15% for longer staking periods
                                </div>
                            </div>

                            <div className="bg-gray-900/50 rounded-lg p-4 border border-purple-500/20">
                                <p className="text-sm text-purple-300 mb-2">
                                    Please transfer <strong>{stakeAmount} $SLMT</strong> to the staking address below:
                                </p>
                                <div className="text-lg font-semibold text-gray-200">
                                    <strong>Staking Address:</strong><br />
                                    <span className="text-white">{STAKING_ADDRESS}</span>
                                </div>

                                <label htmlFor="transactionHash" className="block text-sm font-medium text-gray-300 mt-4 mb-1">
                                    Enter your Transaction Hash
                                </label>
                                <input
                                    type="text"
                                    id="transactionHash"
                                    value={transactionHash}
                                    onChange={(e) => setTransactionHash(e.target.value)}
                                    className="w-full bg-gray-900/50 border border-purple-500/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                                    placeholder="e.g. 5N1H8ZfLwM2qX3..."
                                />
                            </div>

                            <button
                                onClick={handleStakeClick}
                                className={`w-full ${transactionHash
                                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500'
                                    : 'bg-gray-700 cursor-not-allowed'
                                    } text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transform transition-all duration-200 neon-border`}
                                disabled={!transactionHash}
                            >
                                <Lock size={20} />
                                <span>{validating
                                    ? 'Validating...'
                                    : transactionHash
                                        ? 'Stake Now'
                                        : 'Please Enter Transaction Hash'}</span>
                            </button>

                            {status === "valid" && (
                                <div className="text-green-400 text-sm text-center">✅ Staking Successful</div>
                            )}
                            {status === "invalid" && (
                                <div className="text-red-400 text-sm text-center">❌ Invalid Transaction. Please try again.</div>
                            )}

                        </div>
                    </motion.div>

                    <div className="space-y-8">
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isFullyInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20"
                        >
                            <h3 className="text-2xl font-bold text-purple-300 mb-6">Staking Benefits</h3>
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
                                        title: 'High APY Returns',
                                        description: 'Earn up to 20% APY with longer staking periods'
                                    },
                                    {
                                        icon: <Lock className="w-6 h-6 text-purple-400" />,
                                        title: 'Auto-Compound',
                                        description: 'Rewards are automatically reinvested for maximum returns'
                                    },
                                    {
                                        icon: <Coins className="w-6 h-6 text-purple-400" />,
                                        title: 'Flexible Periods',
                                        description: 'Choose staking periods from 30 to 365 days'
                                    },
                                    {
                                        icon: <Calculator className="w-6 h-6 text-purple-400" />,
                                        title: 'Real-time Tracking',
                                        description: 'Monitor your rewards and earnings in real-time'
                                    }
                                ].map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="mt-1">{benefit.icon}</div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-200">{benefit.title}</h4>
                                            <p className="text-gray-400">{benefit.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl p-8 border border-purple-500/20">
                            <div className="flex items-center gap-4">
                                <TrendingUp className="w-12 h-12 text-purple-400" />
                                <div>
                                    <h4 className="text-xl font-bold text-purple-300">Stake More, Earn More!</h4>
                                    <p className="text-gray-400">
                                        Longer staking periods earn bonus APY rewards
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StakingManual;