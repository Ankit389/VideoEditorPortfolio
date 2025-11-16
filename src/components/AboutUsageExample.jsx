/**
 * ABOUT COMPONENT USAGE EXAMPLES
 * 
 * This file shows different ways to use the About component.
 */

// ============================================
// EXAMPLE 1: Basic Usage (No Profile Picture)
// ============================================
import About from './About';

function AppBasic() {
  return (
    <div className="App">
      <About />
    </div>
  );
}

// ============================================
// EXAMPLE 2: With Profile Picture
// ============================================
import About from './About';

function AppWithPicture() {
  return (
    <div className="App">
      {/* Profile picture from public folder */}
      <About profilePicture="/images/profile.jpg" />
      
      {/* Or from assets folder */}
      {/* <About profilePicture={require('../assets/profile.jpg')} /> */}
    </div>
  );
}

// ============================================
// EXAMPLE 3: Complete App Structure
// ============================================
/*
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="App">
      <Hero />
      <About profilePicture="/images/profile.jpg" />
      <Portfolio />
    </div>
  );
}

export default App;
*/

// ============================================
// EXAMPLE 4: With Router
// ============================================
/*
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About profilePicture="/images/profile.jpg" />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
*/

// ============================================
// PROFILE PICTURE SETUP INSTRUCTIONS
// ============================================
/*
1. Place your profile picture in the public folder:
   - public/images/profile.jpg (or .png, .webp)

2. Use it in the component:
   <About profilePicture="/images/profile.jpg" />

3. Recommended image specs:
   - Format: JPG, PNG, or WebP
   - Resolution: At least 800x800px (square recommended)
   - File size: Under 500KB (compress if needed)
   - Aspect ratio: 1:1 (square) works best

4. If no profile picture is provided:
   - A placeholder with gradient background will be shown
   - The component works perfectly without it
*/

export default {};






