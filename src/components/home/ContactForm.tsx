
'use client';

import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Log the form data to the console by sending it to an API route
    await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    // Open WhatsApp chat with pre-filled message
    const whatsappNumber = '91XXXXXXXXXX'; // Replace with your WhatsApp number
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nDestination: ${formData.destination}\nMessage: ${formData.message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold" style={{ color: '#08bcb4' }}>Enquire Now</h2>
        </div>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800 font-bold mb-2">Name</label>
            <input type="text" name="name" id="name" onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800 font-bold mb-2">Email</label>
            <input type="email" name="email" id="email" onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-800 font-bold mb-2">Phone Number</label>
            <input type="text" name="phone" id="phone" onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" required />
          </div>
          <div className="mb-4">
            <label htmlFor="destination" className="block text-gray-800 font-bold mb-2">Destination Interested In</label>
            <input type="text" name="destination" id="destination" onChange={handleChange} className="w-full px-3 py-2 border rounded-lg" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-800 font-bold mb-2">Message</label>
            <textarea name="message" id="message" rows={4} onChange={handleChange} className="w-full px-3 py-2 border rounded-lg"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" style={{ backgroundColor: '#08bcb4', color: 'white' }} className="px-6 py-3 rounded-md text-lg font-semibold hover:opacity-80 transition-opacity">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
