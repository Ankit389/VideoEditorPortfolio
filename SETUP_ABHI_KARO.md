# ⚡ JALDI SETUP KARO - Step by Step

## ❌ Problem: package.json nahi mil raha

Iska matlab **project abhi initialize nahi hua hai**. Pehle setup karna hoga.

---

## 🚀 STEP-BY-STEP (Copy-Paste Karo)

### ✅ STEP 1: Project Folder Me Jao

```bash
cd "C:\Users\ANKIT PANKAJ\Downloads\VideoEditorPortfolio"
```

### ✅ STEP 2: Vite React Project Create Karo

**Option A: Same folder me (agar folder empty hai):**
```bash
npm create vite@latest . -- --template react
```

**Option B: New folder me (agar error aaye toh):**
```bash
npm create vite@latest portfolio -- --template react
cd portfolio
```
*(Fir sab files ko copy kar lena)*

### ✅ STEP 3: Base Dependencies Install Karo

```bash
npm install
```

### ✅ STEP 4: Sab Required Packages Install Karo

```bash
npm install react-router-dom react-player framer-motion react-icons
```

### ✅ STEP 5: Tailwind CSS Install Karo

```bash
npm install -D tailwindcss postcss autoprefixer daisyui
```

### ✅ STEP 6: Tailwind Initialize Karo

```bash
npx tailwindcss init -p
```

### ✅ STEP 7: Tailwind Config Update Karo

`tailwind.config.js` file kholo aur yeh code dalo:

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

### ✅ STEP 8: index.css Update Karo

`src/index.css` file kholo aur **TOP me** yeh add karo:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### ✅ STEP 9: App.jsx Update Karo

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

### ✅ STEP 10: Dev Server Run Karo

```bash
npm run dev
```

**Success!** Browser me `http://localhost:5173` khul jayega! 🎉

---

## 🎯 QUICK ONE-LINER (Sab ek sath)

Agar pehle se Vite project ho, toh:

```bash
npm install && npm install react-router-dom react-player framer-motion react-icons && npm install -D tailwindcss postcss autoprefixer daisyui && npx tailwindcss init -p
```

---

## ✅ JO COMPONENTS READY HAIN:

1. ✅ **Hero.jsx** - Home section
2. ✅ **About.jsx** - About Me section  
3. ✅ **Services.jsx** - Services section (4 cards)

**Sab components ready hain, bas setup karna hai!**

---

## ❌ AGAR ERROR AAYE:

### Error: "package.json not found"
→ Step 2 dobara run karo (Vite project create)

### Error: "module not found"
→ Step 3 aur 4 dobara run karo (npm install)

### Error: "Tailwind not working"
→ Step 7 aur 8 check karo (config aur index.css)

### Port already in use
→ `npm run dev -- --port 3000`

---

**Sab steps follow karo aur batao agar koi problem ho!** 🚀



