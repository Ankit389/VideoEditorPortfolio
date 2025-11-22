# 📧 Contact Form Setup - Gmail Integration

## ✅ **Contact Form Ban Gaya!**

Contact form component ban gaya hai with:

- ✅ Name field
- ✅ Email field
- ✅ Message field
- ✅ Beautiful design
- ✅ Form validation

---

## 🚀 **Gmail Me Messages Kaise Aayenge:**

Contact form se messages aapke Gmail me bhejne ke liye, **EmailJS** use karenge (free service).

---

## 📦 **Step 1: EmailJS Package Install Karo**

Terminal me ye command run karo:

```bash
npm install @emailjs/browser
```

---

## 🔧 **Step 2: EmailJS Account Setup**

### 1. EmailJS Account Banao:

- Website: https://www.emailjs.com/
- **Sign Up** karo (free account)
- Email verify karo

### 2. Email Service Add Karo:

- Dashboard me jao
- **Email Services** section me
- **Add New Service** click karo
- **Gmail** select karo
- Apna Gmail account connect karo
- Service name rakho: `gmail` (ya koi bhi naam)

### 3. Email Template Banao:

- **Email Templates** section me
- **Create New Template** click karo
- Template settings:

  - **To Email:** `purnimarani086@gmail.com`
  - **From Name:** `{{from_name}}`
  - **Subject:** `New Contact Form Message from {{from_name}}`
  - **Message:**

    ```
    Name: {{from_name}}
    Email: {{from_email}}

    Message:
    {{message}}
    ```

- Template save karo
- Template ID copy karo

### 4. Public Key Copy Karo:

- **Account** → **General** section me
- **Public Key** copy karo

---

## 💻 **Step 3: Contact.jsx Me EmailJS Code Add Karo**

`src/components/Contact.jsx` file kholo aur `handleSubmit` function update karo:

### Pehle Import Add Karo (file ke top me):

```jsx
import emailjs from "@emailjs/browser";
```

### Phir `handleSubmit` Function Update Karo:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

  // Validation
  if (!formData.name || !formData.email || !formData.message) {
    setError("Please fill in all fields");
    return;
  }

  if (!formData.email.includes("@")) {
    setError("Please enter a valid email address");
    return;
  }

  setIsSubmitting(true);

  try {
    // EmailJS Configuration
    const serviceID = "YOUR_SERVICE_ID"; // EmailJS service ID
    const templateID = "YOUR_TEMPLATE_ID"; // EmailJS template ID
    const publicKey = "YOUR_PUBLIC_KEY"; // EmailJS public key

    // Send email
    await emailjs.send(
      serviceID,
      templateID,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "purnimarani086@gmail.com",
      },
      publicKey
    );

    // Success
    setIsSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  } catch (err) {
    setError("Failed to send message. Please try again.");
    console.error("Error sending email:", err);
  } finally {
    setIsSubmitting(false);
  }
};
```

### Values Replace Karo:

- `YOUR_SERVICE_ID` - EmailJS service ID
- `YOUR_TEMPLATE_ID` - EmailJS template ID
- `YOUR_PUBLIC_KEY` - EmailJS public key

---

## 🔐 **Step 4: Environment Variables (Optional but Recommended)**

Security ke liye, keys ko environment variable me rakho:

### `.env` File Banao (project root me):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Contact.jsx Me Use Karo:

```jsx
const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
```

---

## ✅ **Step 5: Test Karo**

1. Server restart karo: `npm run dev`
2. Contact form me test message bhejo
3. Apne Gmail inbox check karo
4. Message aana chahiye!

---

## 🎯 **Complete Setup Checklist:**

- [ ] EmailJS package install kiya (`npm install @emailjs/browser`)
- [ ] EmailJS account banaya
- [ ] Gmail service add kiya
- [ ] Email template banaya
- [ ] Service ID, Template ID, Public Key copy kiye
- [ ] `Contact.jsx` me code update kiya
- [ ] Values replace kiye
- [ ] Test message bheja
- [ ] Gmail me message aaya ✅

---

## 📧 **Alternative: Formspree (Easier Option)**

Agar EmailJS setup mushkil lag raha ho, toh **Formspree** use kar sakte ho (even easier):

### Formspree Setup:

1. Website: https://formspree.io/
2. Free account banao
3. New form create karo
4. Form endpoint copy karo
5. `Contact.jsx` me form action update karo:

```jsx
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  {/* form fields */}
</form>
```

---

## 🎉 **Ready!**

Ab contact form se messages aapke Gmail me aayenge! 🚀

**Setup complete hone ke baad test karo aur batao!**
