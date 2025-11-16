/**
 * EXAMPLE App.jsx - Video Editor Portfolio
 * 
 * This file shows how to integrate the Hero component into your app.
 * Choose the example that fits your setup (with or without React Router).
 */

// ============================================
// EXAMPLE 1: With React Router DOM
// ============================================
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
// import Portfolio from './pages/Portfolio';
// import About from './pages/About';

function AppWithRouter() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route 
            path="/" 
            element={
              <Hero backgroundVideo="/videos/hero-background.mp4" />
            } 
          />
          {/* Uncomment when you create these pages */}
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default AppWithRouter;


// ============================================
// EXAMPLE 2: Without React Router (Single Page)
// ============================================
/*
import HeroNoRouter from './components/HeroNoRouter';
// import Portfolio from './components/Portfolio';
// import About from './components/About';

function AppWithoutRouter() {
  const handlePortfolioClick = () => {
    // Scroll to portfolio section
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDemoClick = () => {
    // You can add a modal or video player here
    console.log('Opening demo video...');
    // Example: Show video modal
    // setShowVideoModal(true);
  };

  return (
    <div className="App">
      <HeroNoRouter
        backgroundVideo="/videos/hero-background.mp4"
        onPortfolioClick={handlePortfolioClick}
        onDemoClick={handleDemoClick}
      />
      
      {/* Portfolio section */}
      {/* <div id="portfolio">
        <Portfolio />
      </div> */}
      
      {/* About section */}
      {/* <About /> */}
    </div>
  );
}

export default AppWithoutRouter;
*/


// ============================================
// EXAMPLE 3: Simple - Just Hero Component
// ============================================
/*
import HeroNoRouter from './components/HeroNoRouter';

function App() {
  return (
    <div className="App">
      <HeroNoRouter />
    </div>
  );
}

export default App;
*/






