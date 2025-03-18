import React from 'react';

const Whitepaper = () => {
  return (
    <section id="whitepaper" className="py-20 bg-gray-900/30 backdrop-blur-sm flex justify-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl gradient-text glow">Solmut ($SLMT) Whitepaper</h2>
        <p className="mt-4 text-xl text-gray-300">
          The Ultimate Solana Dog, Racing to the Moon! 🚀🐶
        </p>

        <div className="space-y-12 mt-12">
          {[
            {
              title: '1. Introduction',
              content:
                'Cryptocurrency has evolved beyond just a financial asset—it has become a cultural movement driven by strong communities. Solmut ($SLMT) is a Solana-powered meme token built for speed, scalability, and engagement.',
            },
            {
              title: '2. Why Solmut ($SLMT)?',
              content:
                '✅ Built on Solana – Faster and cheaper transactions. ✅ Community-Driven – Governance and growth shaped by its holders. ✅ Auto-Burn Mechanism – Reduces supply over time. ✅ Staking Rewards – Earn passive income.',
            },
            {
              title: '3. Tokenomics',
              content:
                'Total supply: 100M. 15% Presale ✅, 20% Team 🔒, 10% Liquidity ✅, 10% Staking 🔒, 5% Marketing ✅, 25% Reserve 🔒, 15% Staking Reserve 🔒.',
            },
            {
              title: '4. Features & Utilities',
              content:
                '🔥 Auto-Burn, 💰 Staking, ⚡ Fast & Cheap Transactions, 🌎 Community Governance.',
            },
            {
              title: '5. Roadmap',
              content:
                '✅ Phase 1: Token minted, community building. 🔲 Phase 2: Presale launch, DEX & CEX listings. 🔲 Phase 3: Staking launch, token burns. 🔲 Phase 4: Governance activation, more listings.',
            },
            {
              title: '6. Smart Contract & Security',
              content:
                '✅ Built on Solana SPL Token Standard. ✅ Undergoing independent security audits before launch.',
            },
            {
              title: '7. Conclusion',
              content:
                "Solmut ($SLMT) is more than just a meme token—it's a high-speed, low-cost community-driven project with real utility. Join the revolution! 🚀🐶",
            },
          ].map((section, index) => (
            <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20 text-center">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">{section.title}</h3>
              <p className="text-gray-400">{section.content}</p>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="mt-12">
          <p className="text-gray-400 text-lg">Join our community:</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="https://solmuts.com" className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">🌐 Website</a>
            <a href="https://x.com/SolmutOfficial" className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
            <a href="https://t.me/solmutOfficial" className="text-purple-400 hover:underline" target="_blank" rel="noopener noreferrer">💬 Telegram</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whitepaper;