/**
 * SERVICES COMPONENT USAGE EXAMPLES
 * 
 * This file shows different ways to use the Services component.
 */

// ============================================
// EXAMPLE 1: Basic Usage
// ============================================
import Services from './Services';

function AppBasic() {
  return (
    <div className="App">
      <Services />
    </div>
  );
}

// ============================================
// EXAMPLE 2: Complete App Structure
// ============================================
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Hero />
      <About profilePicture="/images/profile.jpg" />
      <Services />
      <Portfolio />
    </div>
  );
}

export default App;

// ============================================
// EXAMPLE 3: With Router
// ============================================
/*
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About profilePicture="/images/profile.jpg" />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Router>
  );
}

export default App;
*/

// ============================================
// EXAMPLE 4: Single Page Scroll Navigation
// ============================================
/*
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <Hero />
      <About profilePicture="/images/profile.jpg" />
      <Services />
    </div>
  );
}

export default App;
*/

// ============================================
// EXAMPLE 5: Custom Button Handler
// ============================================
/*
// To add custom button handler, you would need to modify Services.jsx
// to accept an onGetStarted prop:

import Services from './components/Services';

function App() {
  const handleGetStarted = () => {
    // Scroll to contact form or open contact modal
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <Services onGetStarted={handleGetStarted} />
    </div>
  );
}
*/

export default {};






