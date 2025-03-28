import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Tokenomics from './components/Tokenomics';
import Presale from './components/Presale';
import Staking from './components/Staking';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ZKCompression from './components/ZKCompression';
import RaisedTracker from './components/RaisedTracker';
import { SharedProvider } from './hook/SharedContext';

const App = () => {

  return (
    <div className="min-h-screen bg-gray-900">
      <SharedProvider>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Tokenomics />
          <Presale />
          <RaisedTracker />
          <Staking />
          <ZKCompression />
          <FAQ />
          <Footer />
        </main>
      </SharedProvider>

    </div>
  );
};

export default App;