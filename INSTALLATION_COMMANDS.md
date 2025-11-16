# Quick Installation Commands

Copy and paste these commands in order. Make sure you're in the project directory.

## ⚡ Quick Setup (Copy All at Once)

### Step 1: Verify Node.js & npm
```bash
node --version
npm --version
```

### Step 2: Create Vite React Project
```bash
npm create vite@latest . -- --template react
```

### Step 3: Install Base Dependencies
```bash
npm install
```

### Step 4: Install All Required Packages
```bash
npm install react-router-dom react-player framer-motion react-icons
```

### Step 5: Install Tailwind CSS & PostCSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Step 6: Install DaisyUI (Optional)
```bash
npm install -D daisyui@latest
```

### Step 7: Install Prettier (Optional)
```bash
npm install -D prettier
```

### Step 8: Verify Installation
```bash
npm run dev
```

---

## 📋 Complete One-Liner (After Vite Setup)

If you already have Vite React project created, run this single command:

```bash
npm install react-router-dom react-player framer-motion react-icons && npm install -D tailwindcss postcss autoprefixer daisyui@latest prettier && npx tailwindcss init -p
```

---

## 🔧 Configuration Files

### tailwind.config.js
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
    require('daisyui'), // Remove this line if you didn't install DaisyUI
  ],
}
```

### src/index.css
Add these lines at the TOP of the file:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## ✅ Verification Commands

```bash
# Check if all packages are installed
npm list react-router-dom react-player framer-motion react-icons

# Check Tailwind CSS
npm list tailwindcss

# Check DaisyUI (if installed)
npm list daisyui

# Run development server
npm run dev

# Check for linting errors
npm run lint
```

---

## 🚀 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Format code with Prettier
npx prettier --write "src/**/*.{js,jsx,json,css}"

# Run linter
npm run lint
```

---

## 📦 Package Versions (Latest as of 2024)

- `react-router-dom`: ^6.x
- `react-player`: ^2.x
- `framer-motion`: ^11.x
- `react-icons`: ^5.x
- `tailwindcss`: ^3.x
- `daisyui`: ^4.x (optional)
- `prettier`: ^3.x (optional)

---

## 🔍 Troubleshooting Commands

```bash
# Clear npm cache
npm cache clean --force

# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# On Windows (PowerShell)
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install

# Check for outdated packages
npm outdated

# Update all packages (use with caution)
npm update
```

---

## 📝 Git Setup (Optional)

```bash
# Initialize Git repository
git init

# Create .gitignore (should already exist from Vite)
# Verify it includes:
# - node_modules
# - dist
# - .env
# - .DS_Store
```

---

**Note:** After running these commands, refer to `SETUP_GUIDE.md` for detailed configuration instructions!






