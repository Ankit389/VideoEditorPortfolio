# Portfolio Components

A collection of responsive, animated components for Purnima Rani's Video Editor portfolio.

---

## 📦 Available Components

### Hero Component

A responsive, animated hero section component.

**Files:**
- `Hero.jsx` - Main component (requires React Router DOM)
- `HeroNoRouter.jsx` - Version without React Router dependency
- `HeroUsageExample.jsx` - Usage examples and documentation

**Features:**
✨ **Fully Responsive** - Works perfectly on mobile, tablet, and desktop  
🎬 **Optional Background Video** - Support for video backgrounds  
🎨 **Beautiful Animations** - Smooth fade-in animations using Framer Motion  
💅 **Modern Design** - Styled with Tailwind CSS gradient effects  
📱 **Mobile-First** - Optimized for all screen sizes

---

### About Component

A responsive About Me section component with skills display.

**Files:**
- `About.jsx` - Main About component
- `AboutUsageExample.jsx` - Usage examples and documentation
- `About.md` - Component documentation

**Features:**
✨ **Fully Responsive** - Works perfectly on mobile, tablet, and desktop  
📸 **Optional Profile Picture** - Beautiful placeholder if none provided  
✅ **Skills Display** - Shows editing tools and expertise with icons  
🎨 **Modern Design** - Styled with Tailwind CSS and gradient effects  
🎬 **Smooth Animations** - Framer Motion animations on scroll  
📱 **Mobile-First** - Optimized for all screen sizes

## Quick Start

### With React Router DOM

```jsx
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Hero />
    </div>
  );
}
```

### Without React Router DOM

```jsx
import HeroNoRouter from './components/HeroNoRouter';

function App() {
  const handlePortfolioClick = () => {
    // Scroll to portfolio section
    const portfolioSection = document.getElementById('portfolio');
    portfolioSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <HeroNoRouter onPortfolioClick={handlePortfolioClick} />
    </div>
  );
}
```

## Props

### Hero.jsx

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `backgroundVideo` | `string` | `undefined` | Path to background video file |

### HeroNoRouter.jsx

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `backgroundVideo` | `string` | `undefined` | Path to background video file |
| `onPortfolioClick` | `function` | Scrolls to #portfolio | Callback when "View Portfolio" is clicked |
| `onDemoClick` | `function` | `undefined` | Callback when "Watch Demo" is clicked |

## Background Video Setup

1. Place your video file in the `public` folder:
   ```
   public/videos/hero-background.mp4
   ```

2. Use it in the component:
   ```jsx
   <Hero backgroundVideo="/videos/hero-background.mp4" />
   ```

3. **Recommended Video Specs:**
   - Format: MP4 (H.264 codec)
   - Resolution: 1920x1080 or 4K
   - File size: Under 5MB (compress if needed)
   - Duration: 10-30 seconds (looping)
   - Audio: Not needed (video is muted)

## Customization

### Change Colors

Edit the Tailwind classes in the component:
- Purple/Pink gradient: `from-purple-600 to-pink-600`
- Background gradient: `from-gray-900 via-purple-900 to-gray-900`

### Adjust Animations

Modify the `containerVariants` and `itemVariants` in the component:
- `staggerChildren`: Delay between elements
- `duration`: Animation speed
- `delayChildren`: Initial delay

### Change Text Content

The component displays:
- **Name:** Purnima Rani
- **Profession:** Video Editor
- **Tagline:** "Blending creativity and precision to produce engaging video content"

To change these, edit the component directly.

## Browser Support

- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Mobile browsers: ✅

## Dependencies

- `framer-motion` - For animations
- `react-icons` - For icons (FaArrowRight, FaPlayCircle)
- `react-router-dom` - Only for `Hero.jsx` (optional for `HeroNoRouter.jsx`)

---

## 🚀 Quick Start

### Using Both Components

```jsx
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Hero />
      <About profilePicture="/images/profile.jpg" />
    </div>
  );
}

export default App;
```

---

## 📚 Documentation

- **Hero Component:** See `HeroUsageExample.jsx` for complete usage examples
- **About Component:** See `AboutUsageExample.jsx` and `About.md` for documentation
- **Complete Guides:** 
  - `HERO_COMPONENT_GUIDE.md` - Hero component guide
  - `ABOUT_COMPONENT_GUIDE.md` - About component guide

---

## 🛠️ Dependencies

All components require:
- `framer-motion` - For animations
- `react-icons` - For icons
- `react-router-dom` - Only for `Hero.jsx` (optional)

Install with:
```bash
npm install framer-motion react-icons react-router-dom
```

