# ⚡ Quick EmailJS Setup - Gmail Integration

## 🎯 **Goal:**
Contact form se messages aapke Gmail (`businesswriter33@gmail.com`) me aayenge.

---

## 🚀 **3 Simple Steps:**

### Step 1: EmailJS Package Install Karo

Terminal me:
```bash
npm install @emailjs/browser
```

---

### Step 2: EmailJS Account Setup (5 minutes)

1. **Website:** https://www.emailjs.com/
2. **Sign Up** karo (free)
3. **Email verify** karo

#### Gmail Service Add Karo:
1. Dashboard me **Email Services** section
2. **Add New Service** → **Gmail** select karo
3. Apna Gmail account connect karo
4. Service name rakho: `gmail`
5. **Service ID** copy karo

#### Email Template Banao:
1. **Email Templates** section
2. **Create New Template**
3. Settings:
   - **To Email:** `businesswriter33@gmail.com`
   - **Subject:** `New Message from {{from_name}}`
   - **Message:**
     ```
     Name: {{from_name}}
     Email: {{from_email}}
     
     Message:
     {{message}}
     ```
4. **Template ID** copy karo

#### Public Key Copy Karo:
1. **Account** → **General**
2. **Public Key** copy karo

---

### Step 3: Contact.jsx Me Code Update Karo

`src/components/Contact.jsx` file kholo:

1. **Line 3 pe** import uncomment karo:
   ```jsx
   import emailjs from '@emailjs/browser';
   ```

2. **handleSubmit function me** (line ~60):
   - `YOUR_SERVICE_ID` ko apna Service ID se replace karo
   - `YOUR_TEMPLATE_ID` ko apna Template ID se replace karo
   - `YOUR_PUBLIC_KEY` ko apna Public Key se replace karo

3. **EmailJS code uncomment karo** (line ~75-85)

4. **Temporary simulation code remove karo** (line ~88)

---

## ✅ **Test Karo:**

1. Server restart: `npm run dev`
2. Contact form me test message bhejo
3. Gmail inbox check karo
4. Message aana chahiye! 🎉

---

## 📝 **Example Values:**

```jsx
const EMAILJS_SERVICE_ID = 'service_abc123';
const EMAILJS_TEMPLATE_ID = 'template_xyz789';
const EMAILJS_PUBLIC_KEY = 'abcdefghijklmnop';
```

---

## 🎯 **Complete Checklist:**

- [ ] `npm install @emailjs/browser` run kiya
- [ ] EmailJS account banaya
- [ ] Gmail service add kiya
- [ ] Email template banaya
- [ ] Service ID, Template ID, Public Key copy kiye
- [ ] `Contact.jsx` me code update kiya
- [ ] Test message bheja
- [ ] Gmail me message aaya ✅

---

## 🆘 **Agar Problem Ho:**

### Error: "emailjs is not defined"
→ `npm install @emailjs/browser` run karo

### Error: "Invalid service ID"
→ Service ID sahi hai ya nahi check karo

### Message Gmail me nahi aaya
→ EmailJS dashboard me logs check karo
→ Spam folder check karo

---

**Setup complete hone ke baad messages aapke Gmail me aayenge!** 🚀


