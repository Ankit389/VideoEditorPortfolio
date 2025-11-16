/**
 * CONTACT FORM WITH EMAILJS INTEGRATION
 * 
 * Is file me complete EmailJS integration code hai.
 * 
 * Steps:
 * 1. npm install @emailjs/browser
 * 2. EmailJS account banao (https://www.emailjs.com/)
 * 3. Gmail service add karo
 * 4. Email template banayo
 * 5. Service ID, Template ID, Public Key copy karo
 * 6. Contact.jsx me ye code use karo
 */

import { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactWithEmailJS = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // EmailJS Configuration
  // Yaha apne EmailJS values dalo:
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your service ID
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your template ID
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your public key

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please fill in all fields');
      return;
    }

    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'businesswriter33@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );

      // Success
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
      
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Error sending email:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields same as Contact.jsx */}
      {/* ... */}
    </form>
  );
};

export default ContactWithEmailJS;


