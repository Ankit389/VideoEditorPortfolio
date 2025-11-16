# Services Component

A responsive Services section component showcasing video editing services for Purnima Rani's Video Editor portfolio.

## Features

✨ **Fully Responsive** - Works perfectly on mobile, tablet, and desktop  
🎨 **Modern Grid Layout** - Responsive 4-column grid (1 on mobile, 2 on tablet, 4 on desktop)  
🎯 **4 Service Cards** - Professional video editing services with icons  
💫 **Hover Effects** - Beautiful animations and transitions on hover  
🎬 **Smooth Animations** - Framer Motion animations on scroll  
📱 **Mobile-First** - Optimized for all screen sizes  
✅ **Feature Lists** - Each service includes feature highlights  

## Quick Start

### Basic Usage

```jsx
import Services from './components/Services';

function App() {
  return (
    <div>
      <Services />
    </div>
  );
}
```

### Complete App Example

```jsx
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
```

## Props

Currently, the Services component doesn't require any props. It's ready to use out of the box!

## Services Displayed

The component automatically displays these 4 services:

1. **Professional Video Editing**
   - Icon: Video camera
   - Color: Blue to Cyan gradient
   - Features: Color Correction, Audio Mixing, Transitions, Effects

2. **YouTube Videos & Shorts**
   - Icon: YouTube
   - Color: Red to Pink gradient
   - Features: Thumbnail Design, SEO Optimization, Hook Creation, Engagement

3. **Instagram Reels & Social Media Edits**
   - Icon: Instagram
   - Color: Purple to Pink gradient
   - Features: Trend Adaptation, Viral Hooks, Text Overlay, Music Sync

4. **Ready-to-Post Content**
   - Icon: Rocket
   - Color: Orange to Yellow gradient
   - Features: Quick Turnaround, Zero Revisions, All Formats, Optimized

## Layout Structure

The component uses a responsive grid:

- **Mobile (< 768px):** 1 column
- **Tablet (768px - 1024px):** 2 columns
- **Desktop (> 1024px):** 4 columns

## Hover Effects

Each service card includes:

- **Lift Animation** - Card moves up on hover
- **Border Glow** - Gradient border glow effect
- **Background Gradient** - Subtle gradient overlay
- **Shine Effect** - Animated shine sweep
- **Icon Animation** - Icon scales and rotates slightly
- **Text Gradient** - Title gets gradient on hover
- **Arrow Animation** - "Learn More" arrow moves

## Customization

### Change Service Content

Edit the `services` array in `Services.jsx` (around line 25):

```jsx
const services = [
  {
    id: 1,
    title: 'Your Service Title',
    description: 'Your service description...',
    icon: FaVideo, // Choose an icon from react-icons/fa
    color: 'from-blue-500 to-cyan-500',
    iconColor: 'text-blue-500',
    bgGradient: 'from-blue-500/10 to-cyan-500/10',
    borderColor: 'border-blue-500/30',
    hoverBorder: 'hover:border-blue-500/70',
    features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4']
  },
  // Add more services...
];
```

### Change Section Title

Edit the title in `Services.jsx` (around line 85):

```jsx
<span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
  What I Offer
</span>
```

### Change Colors

#### Section Title Gradient
```jsx
className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400"
```

#### Background Gradient
```jsx
className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
```

#### Individual Service Colors
Change in the service object:
- `color`: Icon background gradient
- `iconColor`: Icon color
- `bgGradient`: Hover background gradient
- `borderColor`: Border color
- `hoverBorder`: Hover border color

### Adjust Animation Speed

Modify in the component:

```jsx
const containerVariants = {
  visible: {
    transition: {
      staggerChildren: 0.15,  // Change this
      delayChildren: 0.1,    // Or this
    },
  },
};
```

### Modify Grid Layout

Edit the grid classes in `Services.jsx` (around line 102):

```jsx
// Current: 1 col mobile, 2 col tablet, 4 col desktop
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"

// Example: 2 columns on tablet
className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
```

## Dependencies

- `framer-motion` - For animations
- `react-icons` - For icons (FaVideo, FaYoutube, FaInstagram, FaRocket, etc.)

## Browser Support

- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Mobile browsers: ✅

## Examples

See `ServicesUsageExample.jsx` for complete usage examples.






