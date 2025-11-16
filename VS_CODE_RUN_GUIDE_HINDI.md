# 🚀 VS Code Mein Project Run Karne Ka Complete Guide

## ✅ **AB KYA KARNA HAI:**

### Step 1: VS Code Mein Project Open Karo

1. **VS Code kholo**
2. **File** → **Open Folder** (ya `Ctrl+K` then `Ctrl+O`)
3. Folder select karo: `C:\Users\ANKIT PANKAJ\Downloads\VideoEditorPortfolio`
4. **Select Folder** click karo

---

## 🎯 **Step 2: Terminal Open Karo VS Code Mein**

### Method 1: Keyboard Shortcut
- Press `Ctrl + `` (backtick - Esc key ke niche)
- Ya `Ctrl + Shift + ``

### Method 2: Menu Se
- **Terminal** → **New Terminal** (ya `Ctrl+Shift+` `)

### Method 3: Right Click Se
- Left side file explorer me folder pe right click
- **Open in Integrated Terminal**

---

## ⚡ **Step 3: Terminal Mein Ye Commands Run Karo**

Terminal open hone ke baad, ye commands run karo:

### 1. Pehle Check Karo Ki Sahi Folder Mein Ho:
```bash
pwd
```
Ya Windows PowerShell me:
```powershell
Get-Location
```
Output hona chahiye: `C:\Users\ANKIT PANKAJ\Downloads\VideoEditorPortfolio`

### 2. Dependencies Install Karo (agar pehle se nahi kiya):
```bash
npm install
```

### 3. Dev Server Run Karo:
```bash
npm run dev
```

---

## ✅ **Step 4: Server Start Hone Ka Wait Karo**

`npm run dev` run karne ke baad, aapko terminal me kuch aisa dikhna chahiye:

```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
➜  press h + enter to show help
```

---

## 🌐 **Step 5: Browser Mein Website Kholo**

1. Terminal me jo URL dikhe (usually `http://localhost:5173/`)
2. **Ctrl + Click** karo URL pe (ya manually copy-paste karo browser me)
3. Ya directly browser me type karo: `http://localhost:5173/`

---

## ❌ **Agar ERR_CONNECTION_REFUSED Aaye:**

### Problem 1: Dev Server Run Nahi Hoa
**Solution:** Terminal me `npm run dev` run karo

### Problem 2: Port Already Use Ho Raha Hai
**Solution:** Different port use karo:
```bash
npm run dev -- --port 3000
```
Phir browser me jao: `http://localhost:3000`

### Problem 3: Dependencies Install Nahi Hui
**Solution:** Dobara install karo:
```bash
npm install
```

### Problem 4: Vite Not Found Error
**Solution:** 
```bash
npm install
npm run dev
```

---

## 🔍 **Troubleshooting - Agar Kuch Bhi Nahi Chale:**

### Check Karo:

1. **Node.js Installed Hai?**
   ```bash
   node --version
   ```
   Output hona chahiye: `v18.x.x` ya higher

2. **npm Installed Hai?**
   ```bash
   npm --version
   ```
   Output hona chahiye: `v9.x.x` ya higher

3. **package.json Hai?**
   - VS Code me left side `package.json` file dikhni chahiye
   - Agar nahi hai, toh project properly setup nahi hua

4. **node_modules Folder Hai?**
   - Left side explorer me `node_modules` folder dikhna chahiye
   - Agar nahi hai, toh `npm install` run karo

5. **vite.config.js Hai?**
   - Root folder me `vite.config.js` file honi chahiye

---

## ✅ **Complete Checklist:**

- [ ] VS Code me project folder open kiya
- [ ] Terminal open ki (VS Code me)
- [ ] Sahi folder me ho (package.json dikhna chahiye)
- [ ] `npm install` run kiya
- [ ] `npm run dev` run kiya
- [ ] Terminal me "VITE ready" message aya
- [ ] Browser me `http://localhost:5173/` khola
- [ ] Website dikh rahi hai

---

## 🎯 **Quick Steps (Jaldi Karo):**

1. VS Code kholo
2. Folder open karo: `C:\Users\ANKIT PANKAJ\Downloads\VideoEditorPortfolio`
3. Terminal open karo (`Ctrl + ``)
4. Run karo: `npm run dev`
5. Browser me jao: `http://localhost:5173/`

---

**Agar abhi bhi problem ho, terminal me jo error aaye uska screenshot bhejo!** 🚀



