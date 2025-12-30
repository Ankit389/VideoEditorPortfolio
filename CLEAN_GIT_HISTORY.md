# Git History Clean Karne Ke Liye Commands

## Problem:
Purane commits mein videos hain jo GitHub push ko block kar rahi hain.

## Solution - Git History Clean Karein:

### Option 1: Origin se Reset (Sabse Simple) ✅

```bash
# 1. Origin se latest code fetch karo
git fetch origin

# 2. Origin/main par reset karo (purane commits skip honge)
git reset --hard origin/main

# 3. Sirf code files add karo (videos nahi)
git add .gitignore src/ package.json public/video/.gitkeep

# 4. Naya clean commit
git commit -m "Portfolio code without videos"

# 5. Force push (purane commits overwrite honge)
git push origin main --force
```

### Option 2: Git Filter-Branch (Advanced)

```bash
# Purane commits se videos remove karo
git filter-branch --force --index-filter "git rm --cached --ignore-unmatch public/video/*.mp4 dist/videos/*.mp4" --prune-empty --tag-name-filter cat -- --all

# Force push
git push origin --force --all
```

### Option 3: BFG Repo Cleaner (Fastest)

1. Download BFG: https://rtyley.github.io/bfg-repo-cleaner/
2. Run commands:
```bash
java -jar bfg.jar --delete-files "*.mp4"
git reflog expire --expire=now --all
git gc --prune=now --aggressive
git push origin --force --all
```

## Recommended: Option 1 (Simple aur Safe)

