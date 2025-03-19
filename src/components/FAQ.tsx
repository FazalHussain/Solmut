import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What is Solmut ($SLMT)?',
    answer: 'Solmut is a community-driven meme token built on the Solana blockchain, featuring high-speed transactions, low fees, and innovative tokenomics including an auto-burn mechanism and staking rewards.'
  },
  {
    question: 'How does the auto-burn mechanism work?',
    answer: 'The auto-burn mechanism automatically burns a percentage of tokens from each transaction, reducing the total supply over time and potentially increasing the value of remaining tokens. This creates a deflationary effect on the token supply.'
  },
  {
    question: 'What are the staking rewards?',
    answer: 'Stakers can earn up to 40% APY through our staking program. The base APY is 25%, with additional bonus rewards up to 15% for longer staking periods. Rewards are automatically compounded for maximum returns.'
  },
  {
    question: 'How can I buy $SLMT?',
    answer: 'During the presale phase, you can purchase $SLMT directly through our website by connecting your Solana wallet. After the presale ends, $SLMT will be available on major Solana DEXes.'
  },
  {
    question: 'When does the presale end?',
    answer: 'The presale is scheduled to end on June 1st, 2025, or when the hard cap is reached. Early participants get the best price and bonus rewards.'
  },
  {
    question: 'Is there a vesting period for presale tokens?',
    answer: 'Presale tokens are unlocked and distributed immediately after the presale ends. However, team and development tokens are subject to a vesting schedule to ensure long-term project stability.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="pt-20 pb-0 bg-gray-900/50 backdrop-blur-sm border-t border-purple-500/20">
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