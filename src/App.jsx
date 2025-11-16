import HeroNoRouter from './components/HeroNoRouter';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const handlePortfolioClick = () => {
    // Scroll to portfolio section (agar banaya ho)
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
    // Ya About section pe scroll karo
    else {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleDemoClick = () => {
    // Demo video ke liye (agar banaya ho)
    console.log('Opening demo video...');
  };

  return (
    <div className="App">
      <HeroNoRouter 
        onPortfolioClick={handlePortfolioClick}
        onDemoClick={handleDemoClick}
        demoVideoUrl="/videos/WhatsApp Video 2025-11-16 at 10.57.17_2a3a2431.mp4" // Demo video - pehli video use ho rahi hai
      />
      <About profilePicture="/images/profile.jpg" />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

