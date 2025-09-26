'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import studyAbroadData from '../../../../../../data/study-abroad.json'

interface StudyAbroadData {
  [country: string]: {
    hero: {
      title: string;
      description: string;
    };
  };
}

export default function EditStudyAbroadPage() {
  const params = useParams()
  const country = params.country as string

  const [heroTitle, setHeroTitle] = useState('')
  const [heroDescription, setHeroDescription] = useState('')

  useEffect(() => {
    if (country && (studyAbroadData as StudyAbroadData)[country]) {
      setHeroTitle((studyAbroadData as StudyAbroadData)[country].hero.title)
      setHeroDescription((studyAbroadData as StudyAbroadData)[country].hero.description)
    }
  }, [country])

  const handleSave = async () => {
    try {
      const response = await fetch(`/api/admin/study-abroad/${country}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ hero: { title: heroTitle, description: heroDescription } })
        }
      )

      if (response.ok) {
        alert('Content updated successfully!')
      } else {
        alert('Error updating content')
      }
    } catch (error) {
      console.error(error)
      alert('Error updating content')
    }
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Edit {country.charAt(0).toUpperCase() + country.slice(1)}</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold mb-4">Hero Section</h2>
        <div className="mb-4">
          <label htmlFor="heroTitle" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            id="heroTitle"
            value={heroTitle}
            onChange={(e) => setHeroTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#08bcb4] focus:border-[#08bcb4]"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="heroDescription" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            id="heroDescription"
            value={heroDescription}
            onChange={(e) => setHeroDescription(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#08bcb4] focus:border-[#08bcb4]"
          />
        </div>
        <button
          onClick={handleSave}
          className="bg-[#08bcb4] text-white px-4 py-2 rounded-lg hover:bg-[#069aa2] transition-colors"
        >
          Save Changes
        </button>
      </div>
    </div>
  )
}