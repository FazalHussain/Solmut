import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  // Existing FAQs
  {
    question: 'What is Solmut ($SLMT)?',
    answer: 'Solmut is a community-driven meme token created on Pump.fun, a platform that allows users to launch memecoins on the Solana blockchain. The platform offers a unique bonding curve mechanism to determine token prices based on supply and demand, ensuring fair access for all participants. '
  },
  {
    question: 'How does the bonding curve mechanism work on Pump.fun?',
    answer: 'Pump.fun utilizes a bonding curve model where token prices increase predictably as more tokens are purchased. This mechanism ensures liquidity and fair access, preventing pre-sale advantages often seen in other crypto projects. As demand grows, the price per token rises according to a fixed mathematical formula. '
  },
  {
    question: 'What are the fees associated with using Pump.fun?',
    answer: "Pump.fun charges a 1% fee on all trades conducted on the platform. Additionally, when a token 'graduates' from Pump.fun to Raydium—a decentralized exchange on Solana—there is a fixed fee of 6 SOL. This fee covers network costs and Raydium's fees, and it is deducted from the token's liquidity pool. "
  },
  {
    question: 'How does the token graduation process work?',
    answer: "Once a token reaches a market capitalization of approximately $69,000, it 'graduates' from Pump.fun to Raydium. At this stage, $12,000 worth of the token's liquidity is deposited into Raydium, and the corresponding liquidity provider (LP) tokens are burned, effectively locking the liquidity and enhancing market stability. "
  },
  {
    question: 'What recent changes has Pump.fun implemented?',
    answer: 'In March 2025, Pump.fun introduced PumpSwap, a native decentralized exchange (DEX) that facilitates seamless token migration. This development allows tokens to transition from their bonding curve phase to open-market trading instantly and without migration fees, enhancing liquidity and trading opportunities for token creators and investors. '
  },
  {
    question: 'How does PumpSwap benefit token creators?',
    answer: 'PumpSwap offers token creators a streamlined migration process, eliminating previous migration fees and delays. This native DEX ensures tokens maintain momentum as they move from the bonding curve model to open-market trading, providing immediate liquidity and potential revenue-sharing opportunities in the future. '
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="pt-20 pb-0 bg-gray-900/50 backdrop-blur-sm border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold sm:text-4xl gradient-text glow">Frequently Asked Questions</h2>
          <p className="mt-4 text-xl text-gray-300">
            Everything you need to know about $SLMT
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl border border-purple-500/20 overflow-hidden transition-all duration-200 hover:border-purple-500/40"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-purple-300">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-purple-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-purple-400" />
                )}
              </button>
              <div
                className={`px-6 transition-all duration-200 ease-in-out ${
                  openIndex === index ? 'py-4' : 'h-0 overflow-hidden'
                }`}
              >
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;