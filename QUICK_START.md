# ⚡ QUICK START - Project Setup

## ❌ Problem: package.json nahi mil raha

Agar `package.json` file nahi hai, toh pehle project initialize karna hoga.

---

## 🚀 STEP-BY-STEP SETUP (Jaldi Karo!)

### Step 1: Vite React Project Create Karo

```bash
cd "C:\Users\ANKIT PANKAJ\Downloads\VideoEditorPortfolio"
npm create vite@latest . -- --template react
```

**Important:** Agar folder me already kuch files hain, toh yeh command fail ho sakta hai. Agar fail ho, toh yeh try karo:

```bash
npm create vite@latest video-portfolio -- --template react
cd video-portfolio
# Ab sab files ko copy karo yaha se
```

### Step 2: Dependencies Install Karo

```bash
npm install
```

### Step 3: Sab Packages Install Karo

```bash
npm install react-router-dom react-player framer-motion react-icons
npm install -D tailwindcss postcss autoprefixer daisyui prettier
```

### Step 4: Tailwind CSS Setup Karo

```bash
npx tailwindcss init -p
```

### Step 5: Tailwind Config Update Karo

`tailwind.config.js` file me yeh dalo:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}
```

### Step 6: index.css Update Karo

`src/index.css` file ke TOP me yeh add karo:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Step 7: Dev Server Run Karo

```bash
npm run dev
```

---

## ✅ Jo Components Ready Hain:

1. ✅ **Hero.jsx** - Home section (with Purnima Rani name)
2. ✅ **About.jsx** - About Me section (with skills)
3. ✅ **Services.jsx** - Services section (4 service cards)

---

## 📝 App.jsx Me Components Kaise Use Karein

`src/App.jsx` file me yeh code dalo:

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

---

## 🎯 Agar Error Aaye:

### Error: "package.json not found"
→ Pehle `npm create vite@latest . -- --template react` run karo

### Error: "module not found"
→ `npm install` dobara run karo

### Error: "Tailwind not working"
→ `src/index.css` me `@tailwind` directives check karo

### Port already in use
→ `npm run dev -- --port 3000`

---

## 📦 Complete One-Line Setup (Agar project already hai):

```bash
npm install && npm install react-router-dom react-player framer-motion react-icons && npm install -D tailwindcss postcss autoprefixer daisyui prettier && npx tailwindcss init -p
```

---

**Jaldi karo aur batao agar koi problem ho!** 🚀



