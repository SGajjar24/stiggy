import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Button from './ui/Button';
import Input from './ui/Input';

const ContactForm: React.FC = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Order Inquiry',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const subjectParam = searchParams.get('subject');
    const emailParam = searchParams.get('email');

    setFormData(prev => ({
      ...prev,
      subject: subjectParam || 'Order Inquiry',
      email: emailParam || ''
    }));
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '83a05dbd-9847-45c4-8be5-a9c911ca5eaf'; // Fallback for demo

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          ...formData,
          from_name: "Stiggy India Website"
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setError(result.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Failed to send message. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Determine if the message field should be shown
  const isNewsletter = formData.subject === 'Newsletter';

  return (
    <div className="min-h-screen pt-32 pb-20 container mx-auto px-4 md:px-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-display font-bold text-4xl md:text-5xl uppercase mb-6 text-center">
          {isNewsletter ? 'Join Our Newsletter' : 'Get In Touch'}
        </h1>
        <p className="text-gray-500 text-center mb-12">
          {isNewsletter
            ? 'You are one step away from exclusive drops and discounts. Confirm your details below.'
            : 'Have a question about your order or want to collaborate? Fill out the form below.'}
        </p>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 text-green-800 p-8 text-center rounded-lg">
            <h3 className="text-2xl font-bold mb-2">
              {isNewsletter ? 'Subscription Confirmed!' : 'Message Sent!'}
            </h3>
            <p>
              {isNewsletter
                ? 'Welcome to the cult. Check your inbox soon.'
                : "Thanks for reaching out. We'll get back to you shortly."}
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', subject: 'Order Inquiry', message: '' });
              }}
              className="mt-6 text-sm underline font-bold"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 text-red-500 p-3 rounded text-sm text-center">
                {error}
              </div>
            )}

            {/* Web3Form Honeypot */}
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold uppercase tracking-wide">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-brand-black transition-colors"
              >
                <option value="Product Issue">Product Issue</option>
                <option value="Newsletter">Newsletter</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {!isNewsletter && (
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wide">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required={!isNewsletter}
                  rows={6}
                  placeholder="How can we help?"
                  className="w-full bg-gray-50 border border-gray-200 p-4 focus:outline-none focus:border-brand-black transition-colors"
                ></textarea>
              </div>
            )}

            <Button
              type="submit"
              disabled={isSubmitting}
              fullWidth
            >
              {isSubmitting ? 'Sending...' : (isNewsletter ? 'Join Newsletter' : 'Send Message')}
            </Button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm;