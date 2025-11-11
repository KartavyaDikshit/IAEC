'use client'

'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { studyAbroadCountries } from '@/lib/countries'

export default function MockTestForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    test: '',
    destination: '' // Added destination field
  });
  const router = useRouter();
  const [phoneError, setPhoneError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'phone') {
      const digitsOnly = value.replace(/\D/g, '');
      if (digitsOnly.length < 10 && digitsOnly.length > 0) {
        setPhoneError('Phone number must be at least 10 digits.');
      } else if (value.length > 0 && digitsOnly.length !== value.length) {
        setPhoneError('Phone number can only contain digits.');
      } else {
        setPhoneError(null);
      }
    } else if (name === 'email') {
      if (value.length > 0 && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        setEmailError('Invalid email address.');
      } else {
        setEmailError(null);
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Final validation before submission
    let hasError = false;
    if (!formData.name) {
      hasError = true;
    }
    if (!formData.email || emailError) {
      setEmailError(emailError || 'Email is required.');
      hasError = true;
    }
    if (!formData.phone || phoneError || formData.phone.replace(/\D/g, '').length < 10) {
      setPhoneError(phoneError || 'Phone number is required and must be at least 10 digits.');
      hasError = true;
    }
    if (!formData.test) {
      alert('Please select a test.');
      hasError = true;
    }
    if (!formData.destination) {
      alert('Please select a preferred destination.');
      hasError = true;
    }
    if (hasError) {
      alert('Please correct the errors in the form.');
      return;
    }

    try {
      const response = await fetch('/api/forms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          formType: 'mock-test',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          data: {
            test: formData.test,
            destination: formData.destination
          }
        })
      });

      if (response.ok) {
        router.push('/thank-you'); // Redirect to thank you page
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
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <input 
              type="text" 
              name="name"
              placeholder="Full Name*" 
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-[#08bcb4] focus:outline-none"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input 
              type="email" 
              name="email"
              placeholder="Email Address*" 
              className={`w-full p-4 border-2 ${emailError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:border-[#08bcb4] focus:outline-none`}
              required
              value={formData.email}
              onChange={handleChange}
            />
            {emailError && <p className="text-red-500 text-sm mt-1">{emailError}</p>}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone Number*" 
              className={`w-full p-4 border-2 ${phoneError ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:border-[#08bcb4] focus:outline-none`}
              required
              value={formData.phone}
              onChange={handleChange}
            />
            {phoneError && <p className="text-red-500 text-sm mt-1">{phoneError}</p>}
          </div>
          <select 
            name="test"
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-[#08bcb4] focus:outline-none"
            value={formData.test}
            onChange={handleChange}
            required
          >
            <option value="">Select Test*</option>
            <option>IELTS</option>
            <option>TOEFL</option>
            <option>PTE</option>
            <option>Duolingo</option>
          </select>
        </div>
        <div>
          <select 
            name="destination"
            className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-[#08bcb4] focus:outline-none"
            value={formData.destination}
            onChange={handleChange}
            required
          >
            <option value="">Preferred Destination*</option>
            {studyAbroadCountries.map((country) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
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
