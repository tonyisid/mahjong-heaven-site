import Hero from './components/Hero';
import Gameplay from './components/Gameplay';
import Features from './components/Features';
import WhyPlay from './components/WhyPlay';
import Download from './components/Download';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <Hero />
      <Gameplay />
      <Features />
      <WhyPlay />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
