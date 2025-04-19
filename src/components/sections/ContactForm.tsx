'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import Link from 'next/link';
import emailjs from '@emailjs/browser';
import { useEffect } from 'react';




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
  useEffect(() => {
    emailjs.init('BZ--MRnA4TDtOphPM3jQu');
  }, []);
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      
      const response = await emailjs.send(
        'service_7fw3qdj', 
        'template_23p4ofl', 
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        '6QVBb8Wj6grp4iX6K' 
        
      );
      
      if (response.status === 200) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      
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
      <p className="text-muted-foreground mb-8">
          Feel free to reach out for collaborations or just a friendly hello
        </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            placeholder="Your name" 
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
            placeholder="your.email@example.com"
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
            placeholder="Your message..."
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded h-32 dark:bg-gray-800 dark:border-gray-700"
            required
          />
        </div>
        
        <div className="flex justify-between items-center">
          <button
            type="submit"
            disabled={status === 'sending'}
            className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>

          <Link 
            href="/Harendra-Sijapati-cv.pdf" 
            target="_blank" 
            className="bg-gray-600 text-white px-6 py-2 rounded hover:bg-gray-700"
          >
            Download CV
          </Link>
        </div>
        
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