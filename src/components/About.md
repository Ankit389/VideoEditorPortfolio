# About Component

A responsive About Me section component for Purnima Rani's Video Editor portfolio.

## Features

✨ **Fully Responsive** - Works perfectly on mobile, tablet, and desktop  
🎨 **Modern Design** - Styled with Tailwind CSS and gradient effects  
🎬 **Smooth Animations** - Framer Motion animations on scroll  
📸 **Optional Profile Picture** - Beautiful placeholder if none provided  
✅ **Skills Display** - Showcases editing tools and expertise  
📱 **Mobile-First** - Optimized for all screen sizes  

## Quick Start

### Basic Usage (No Profile Picture)

```jsx
import About from './components/About';

function App() {
  return (
    <div>
      <About />
    </div>
  );
}
```

### With Profile Picture

```jsx
import About from './components/About';

function App() {
  return (
    <div>
      <About profilePicture="/images/profile.jpg" />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `profilePicture` | `string` | `undefined` | Path to profile picture image |

## Skills Displayed

The component automatically displays these skills:
- **CapCut** - Video editing software
- **VN** - Video editor app
- **Canva** - Design tool
- **Motion Graphics** - Animation expertise
- **Color Grading** - Post-production skill

## Profile Picture Setup

1. **Place your image** in the `public` folder:
   ```
   public/images/profile.jpg
   ```

2. **Use it in the component:**
   ```jsx
   <About profilePicture="/images/profile.jpg" />
   ```

3. **Recommended Image Specs:**
   - Format: JPG, PNG, or WebP
   - Resolution: At least 800x800px (square recommended)
   - File size: Under 500KB
   - Aspect ratio: 1:1 (square) works best

4. **If no picture provided:**
   - A beautiful gradient placeholder will be displayed
   - The component works perfectly without it

## Customization

### Change Skills

Edit the `skills` array in `About.jsx`:

```jsx
const skills = [
  { name: 'CapCut', icon: FaVideo, color: 'text-blue-500' },
  { name: 'Your Skill', icon: YourIcon, color: 'text-purple-500' },
  // Add more skills...
];
```

### Change Professional Summary

Edit the paragraph text in the component (around line 110):

```jsx
<p className="text-base sm:text-lg">
  Your professional summary text here...
</p>
```

### Change Colors

Edit the gradient classes:
- Title gradient: `from-purple-400 via-pink-400 to-purple-400`
- Background: `from-gray-900 via-gray-800 to-gray-900`
- Border accent: `from-purple-600 to-pink-600`

## Layout Structure

The component uses a two-column layout:
- **Left Column (Mobile: Bottom):** Profile picture
- **Right Column (Mobile: Top):** Professional summary and skills

On mobile, the content reorders automatically for better UX.

## Dependencies

- `framer-motion` - For animations
- `react-icons` - For skill icons (FaVideo, FaPalette, etc.)

## Browser Support

- Chrome/Edge: ✅
- Firefox: ✅
- Safari: ✅
- Mobile browsers: ✅

## Examples

See `AboutUsageExample.jsx` for complete usage examples.






