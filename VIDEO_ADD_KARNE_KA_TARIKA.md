# 🎬 Video Add Karne Ka Complete Guide

## ✅ **Haan, Public Folder Sahi Hai!**

**Public folder me videos rakhna bilkul theek hai!** Ye standard practice hai React/Vite projects me.

---

## 📁 **Step-by-Step Guide:**

### Step 1: Public Folder Me Videos Folder Banao

1. **Project folder me jao:**
   ```
   C:\Users\ANKIT PANKAJ\Downloads\VideoEditorPortfolio
   ```

2. **`public` folder kholo** (agar nahi hai toh banao)

3. **`public` folder ke andar `videos` folder banao:**
   ```
   public/
   └── videos/
   ```

---

### Step 2: Video File Ko Videos Folder Me Rakho

1. **Apna video file copy karo:**
   - Original file: `WhatsApp Video 2025-11-16 at 10.57.16_03329a08.mp4`

2. **Video ko rename karo (optional but recommended):**
   - **Better name:** `demo-video.mp4`
   - Ya: `my-demo.mp4`
   - Ya: `portfolio-demo.mp4`
   
   **Kyun?** - Simple name se code me use karna easy hota hai

3. **Rename kiye hue video ko `public/videos/` folder me paste karo:**
   ```
   public/videos/demo-video.mp4
   ```

---

### Step 3: App.jsx Me Video Path Update Karo

`src/App.jsx` file kholo aur line 32 pe video path update karo:

**Agar video ka naam `demo-video.mp4` hai:**
```jsx
demoVideoUrl="/videos/demo-video.mp4"
```

**Agar original naam use karna ho:**
```jsx
demoVideoUrl="/videos/WhatsApp Video 2025-11-16 at 10.57.16_03329a08.mp4"
```

**⚠️ Important:** Agar original naam use kar rahe ho, toh:
- Spaces ke liye URL encoding chahiye
- Better hai simple naam use karo

---

### Step 4: Server Restart Karo

```bash
# Terminal me Ctrl+C press karo
# Phir dobara:
npm run dev
```

---

## 📁 **Final Folder Structure:**

```
VideoEditorPortfolio/
├── public/
│   └── videos/
│       └── demo-video.mp4  ← Yaha video rakho
├── src/
│   ├── components/
│   └── App.jsx
└── package.json
```

---

## ✅ **Quick Checklist:**

- [ ] `public/videos/` folder bana liya
- [ ] Video file `public/videos/` me rakha
- [ ] Video ka naam simple rakha (demo-video.mp4)
- [ ] `App.jsx` me video path update kiya
- [ ] Server restart kiya
- [ ] "Watch Demo" button test kiya

---

## 🎯 **Example:**

### Agar Video Ka Naam `demo-video.mp4` Hai:

**App.jsx me:**
```jsx
<HeroNoRouter 
  onPortfolioClick={handlePortfolioClick}
  onDemoClick={handleDemoClick}
  demoVideoUrl="/videos/demo-video.mp4"
/>
```

### Agar Original Naam Use Karna Ho:

**App.jsx me:**
```jsx
demoVideoUrl="/videos/WhatsApp%20Video%202025-11-16%20at%2010.57.16_03329a08.mp4"
```

**Ya better:**
- Video ko rename karo: `demo-video.mp4`
- Phir use karo: `/videos/demo-video.mp4`

---

## 💡 **Tips:**

1. **Video Name Simple Rakho:**
   - ✅ Good: `demo-video.mp4`
   - ❌ Avoid: `WhatsApp Video 2025-11-16 at 10.57.16_03329a08.mp4`

2. **Multiple Videos:**
   - Agar multiple videos hain, sab `public/videos/` me rakh sakte ho
   - Har video ka unique naam rakho

3. **File Size:**
   - Video ko compress karo agar zyada bada ho
   - Under 50MB recommended

---

## 🚀 **Ab Test Karo:**

1. Video file `public/videos/` me rakho
2. `App.jsx` me path update karo
3. Server restart karo
4. "Watch Demo" button click karo
5. Video modal khul jayega! 🎉

---

**Sab theek hai! Bas video file `public/videos/` me rakho aur path update karo!** 🎬


