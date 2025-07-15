
'use client';

import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6 text-center text-[#21243D]">Contact Us</h1>

      {success && (
        <div className="mb-4 p-3 bg-green-100 text-green-700 rounded text-center">
          ✅ Message sent successfully!
        </div>
      )}

      <form className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={(x) =>
            setFormData({ ...formData, name: x.target.value })
          }
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={(x) =>
            setFormData({ ...formData, email: x.target.value })
          }
          className="w-full border px-3 py-2 rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows={4}
          value={formData.message}
          onChange={(x) =>
            setFormData({ ...formData, message: x.target.value })
          }
          className="w-full border px-3 py-2 rounded"
        ></textarea>
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-[#FF6464] text-white py-2 rounded hover:bg-[#21243D] transition disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;