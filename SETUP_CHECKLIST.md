# Setup Checklist - Follow Step by Step

Print this page or keep it open while setting up. Check off each item as you complete it.

---

## ✅ Pre-Setup Verification

- [ ] **Step 1:** Open terminal/command prompt
- [ ] **Step 2:** Navigate to project folder:
  ```bash
  cd "C:\Users\ANKIT PANKAJ\Downloads\VideoEditorPortfolio"
  ```
- [ ] **Step 3:** Check Node.js version (should be v18+):
  ```bash
  node --version
  ```
- [ ] **Step 4:** Check npm version (should be v9+):
  ```bash
  npm --version
  ```

**❌ If Step 3 or 4 failed:** Download Node.js from https://nodejs.org/ and install the LTS version, then restart your terminal.

---

## 🚀 Project Creation

- [ ] **Step 5:** Create Vite React project:
  ```bash
  npm create vite@latest . -- --template react
  ```
  - When prompted, select `React`
  - Select `JavaScript` (recommended for beginners)

- [ ] **Step 6:** Install base dependencies:
  ```bash
  npm install
  ```

**Expected Output:** `node_modules` folder should be created.

---

## 📦 Core Libraries Installation

- [ ] **Step 7:** Install React Router DOM:
  ```bash
  npm install react-router-dom
  ```

- [ ] **Step 8:** Install React Player:
  ```bash
  npm install react-player
  ```

- [ ] **Step 9:** Install Framer Motion:
  ```bash
  npm install framer-motion
  ```

- [ ] **Step 10:** Install React Icons:
  ```bash
  npm install react-icons
  ```

**OR install all at once:**
```bash
npm install react-router-dom react-player framer-motion react-icons
```

---

## 🎨 Tailwind CSS Setup

- [ ] **Step 11:** Install Tailwind CSS:
  ```bash
  npm install -D tailwindcss postcss autoprefixer
  ```

- [ ] **Step 12:** Initialize Tailwind:
  ```bash
  npx tailwindcss init -p
  ```

**Expected Output:** Two files created:
- `tailwind.config.js`
- `postcss.config.js`

- [ ] **Step 13:** Open `tailwind.config.js` and replace content with:
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
    plugins: [],
  }
  ```

- [ ] **Step 14:** Open `src/index.css` and add at the TOP:
  ```css
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

---

## 🎁 Optional: DaisyUI

- [ ] **Step 15 (Optional):** Install DaisyUI:
  ```bash
  npm install -D daisyui@latest
  ```

- [ ] **Step 16 (Optional):** If DaisyUI installed, update `tailwind.config.js`:
  ```javascript
  plugins: [
    require('daisyui'),
  ],
  ```

---

## 🔧 Optional: Development Tools

### Prettier (Code Formatter)

- [ ] **Step 17 (Optional):** Install Prettier:
  ```bash
  npm install -D prettier
  ```

- [ ] **Step 18 (Optional):** Create `.prettierrc` file with:
  ```json
  {
    "semi": true,
    "trailingComma": "es5",
    "singleQuote": true,
    "printWidth": 80,
    "tabWidth": 2
  }
  ```

### ESLint (Code Linter)

- [ ] **Step 19:** ESLint comes pre-installed with Vite. Verify it works:
  ```bash
  npm run lint
  ```

### Git (Version Control)

- [ ] **Step 20 (Optional):** Initialize Git:
  ```bash
  git init
  ```

- [ ] **Step 21 (Optional):** Verify `.gitignore` exists and includes:
  - `node_modules`
  - `dist`
  - `.env`
  - `.DS_Store`

---

## ✅ Final Verification

- [ ] **Step 22:** Start development server:
  ```bash
  npm run dev
  ```

- [ ] **Step 23:** Open browser to the URL shown (usually `http://localhost:5173`)

- [ ] **Step 24:** You should see the default Vite + React welcome page

**🎉 Success!** Your development environment is ready!

---

## 🧪 Test Each Package

Verify each package works by testing:

### React Router DOM
- [ ] Can import `BrowserRouter`, `Routes`, `Route` from `react-router-dom`

### React Player
- [ ] Can import `ReactPlayer` from `react-player`

### Framer Motion
- [ ] Can import `motion` from `framer-motion`

### React Icons
- [ ] Can import icons from `react-icons/fa` (example: `FaFacebook`)

### Tailwind CSS
- [ ] Can use Tailwind classes like `bg-blue-500`, `text-white`, `p-4`

---

## 📋 Project Structure Checklist

After setup, your project should have:

```
VideoEditorPortfolio/
├── node_modules/          ✅ Should exist
├── public/                ✅ Should exist
├── src/
│   ├── assets/            (you'll create this)
│   ├── components/        (you'll create this)
│   ├── pages/             (you'll create this)
│   ├── App.jsx            ✅ Should exist
│   ├── main.jsx           ✅ Should exist
│   ├── App.css            ✅ Should exist
│   └── index.css          ✅ Should exist (with Tailwind directives)
├── .gitignore             ✅ Should exist
├── index.html             ✅ Should exist
├── package.json           ✅ Should exist
├── tailwind.config.js     ✅ Should exist (after Tailwind setup)
├── postcss.config.js      ✅ Should exist (after Tailwind setup)
└── vite.config.js         ✅ Should exist
```

---

## 🆘 Troubleshooting Checklist

If something doesn't work:

- [ ] Restarted terminal after Node.js installation?
- [ ] All commands run from correct directory?
- [ ] No typos in commands?
- [ ] Internet connection stable during `npm install`?
- [ ] Node.js version is v18 or higher?
- [ ] Cleared npm cache? (`npm cache clean --force`)
- [ ] Deleted `node_modules` and reinstalled?
- [ ] Checked for error messages in terminal?

---

## 🎯 Next Steps (After Setup)

- [ ] Create folder structure (components, pages, assets)
- [ ] Set up React Router routes
- [ ] Add sample video with React Player
- [ ] Create animated component with Framer Motion
- [ ] Add icons with React Icons
- [ ] Style with Tailwind CSS
- [ ] Build your portfolio!

---

**Status:** ⬜ Not Started | 🟡 In Progress | ✅ Complete

**Your Progress:** _____ / 24 steps completed

**Date Started:** ___________

**Date Completed:** ___________

---

Good luck with your Video Editor Portfolio! 🎬✨






