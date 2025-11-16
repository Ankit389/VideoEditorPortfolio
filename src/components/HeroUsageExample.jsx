/**
 * HERO COMPONENT USAGE EXAMPLES
 * 
 * This file shows different ways to use the Hero component.
 * Choose the version that fits your project setup.
 */

// ============================================
// EXAMPLE 1: With React Router DOM
// ============================================
import Hero from './Hero';

function AppWithRouter() {
  return (
    <div className="App">
      {/* Basic usage - no background video */}
      <Hero />

      {/* With background video */}
      <Hero backgroundVideo="/videos/hero-background.mp4" />
    </div>
  );
}

// ============================================
// EXAMPLE 2: Without React Router DOM
// ============================================
import HeroNoRouter from './HeroNoRouter';

function AppWithoutRouter() {
  const handlePortfolioClick = () => {
    // Scroll to portfolio section
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
    
    // OR navigate to a different page
    // window.location.href = '/portfolio.html';
  };

  const handleDemoClick = () => {
    // Open modal with demo video
    alert('Opening demo video...');
    // OR: setState to show video modal
  };

  return (
    <div className="App">
      {/* Basic usage */}
      <HeroNoRouter />

      {/* With custom handlers */}
      <HeroNoRouter
        onPortfolioClick={handlePortfolioClick}
        onDemoClick={handleDemoClick}
      />

      {/* With background video */}
      <HeroNoRouter
        backgroundVideo="/videos/hero-background.mp4"
        onPortfolioClick={handlePortfolioClick}
      />
    </div>
  );
}

// ============================================
// EXAMPLE 3: Complete App.jsx Setup
// ============================================
/*
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
*/

// ============================================
// EXAMPLE 4: Simple Single Page App
// ============================================
/*
import HeroNoRouter from './components/HeroNoRouter';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div>
      <HeroNoRouter />
      <div id="portfolio">
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
*/

// ============================================
// BACKGROUND VIDEO SETUP INSTRUCTIONS
// ============================================
/*
1. Place your background video in the public folder:
   - public/videos/hero-background.mp4

2. Use it in the component:
   <Hero backgroundVideo="/videos/hero-background.mp4" />

3. Recommended video specs:
   - Format: MP4 (H.264 codec)
   - Resolution: 1920x1080 or higher
   - File size: Keep under 5MB for web performance
   - Duration: 10-30 seconds (looping)
   - No audio needed (will be muted)
*/

export default {};






