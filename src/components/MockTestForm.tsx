'use client'

import { useState } from 'react'

export default function MockTestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    test: ''
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
        body: JSON.stringify({ ...formData, formType: 'mock-test' })
      });

      if (response.ok) {
        setShowThankYou(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          test: ''
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
            <p className="mb-4">You have been registered for the mock test.</p>
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
            name="test"
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-[#08bcb4] focus:outline-none"
            value={formData.test}
            onChange={handleChange}
          >
            <option>Select Test*</option>
            <option>IELTS</option>
            <option>TOEFL</option>
            <option>PTE</option>
            <option>Duolingo</option>
          </select>
        </div>
        <button 
          type="submit"
          className="bg-[#08bcb4] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#069aa2] transition-all"
        >
          Register for Test
        </button>
      </form>
    </div>
  )
}
