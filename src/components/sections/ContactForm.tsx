// src/components/sections/ContactForm.tsx
'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

type StatusType = '' | 'sending' | 'success' | 'error';

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<StatusType>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      // Simply set error status without capturing the error
      setStatus('error');
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
            required
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block mb-2">Message</label>
          <textarea
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded h-32 dark:bg-gray-800 dark:border-gray-700"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={status === 'sending'}
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>
        
        {status === 'success' && (
          <p className="text-green-500">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-500">Failed to send message. Please try again.</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;