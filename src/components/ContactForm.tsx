'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    destination: '',
    message: ''
  });
  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...formData, formType: 'contact' })
      });

      if (response.ok) {
        setShowThankYou(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          destination: '',
          message: ''
        });
      } else {
        alert('Error submitting form');
      }
    } catch (error) {
      console.error(error);
      alert('Error submitting form');
    }
  };

  return (
    <div>
      {showThankYou && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
            <p className="mb-4">Your form has been submitted successfully.</p>
            <button 
              onClick={() => setShowThankYou(false)}
              className="bg-[#08bcb4] text-white px-4 py-2 rounded-lg hover:bg-[#069aa2] transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <input 
            type="text" 
            name="name"
            placeholder="Full Name*" 
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-[#08bcb4] focus:outline-none"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email Address*" 
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-[#08bcb4] focus:outline-none"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <input 
            type="tel" 
            name="phone"
            placeholder="Phone Number*" 
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-[#08bcb4] focus:outline-none"
            required
            value={formData.phone}
            onChange={handleChange}
          />
          <select 
            name="destination"
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-[#08bcb4] focus:outline-none"
            value={formData.destination}
            onChange={handleChange}
          >
            <option>Preferred Destination*</option>
            <option>USA</option>
            <option>UK</option>
            <option>Australia</option>
            <option>Canada</option>
            <option>Ireland</option>
            <option>Germany</option>
          </select>
        </div>
        <textarea 
          name="message"
          placeholder="Your Message..."
          rows={5}
          className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-[#08bcb4] focus:outline-none"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button 
          type="submit"
          className="bg-[#08bcb4] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#069aa2] transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}
