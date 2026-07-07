'use client'
import { useState, useEffect } from 'react'

interface Accreditation {
  id: string;
  src: string;
  alt: string;
}

export default function AccreditationsManagement() {
  const [accreditations, setAccreditations] = useState<Accreditation[]>([])
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)

  useEffect(() => {
    fetchAccreditations()
  }, [])

  const fetchAccreditations = async () => {
    try {
      const response = await fetch('/api/admin/accreditations')
      if (response.ok) {
        const data = await response.json()
        setAccreditations(data || [])
      }
    } catch (error) {
      console.error('Error fetching accreditations:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAdd = () => {
    setAccreditations([
      ...accreditations,
      { id: Date.now().toString(), src: '/images/certifications/', alt: 'New Accreditation' }
    ])
  }

  const handleRemove = (id: string) => {
    setAccreditations(accreditations.filter(a => a.id !== id))
  }

  const handleChange = (id: string, field: 'src' | 'alt', value: string) => {
    setAccreditations(accreditations.map(a => 
      a.id === id ? { ...a, [field]: value } : a
    ))
  }

  const handleSave = async () => {
    setSaving(true)
    try {
      const response = await fetch('/api/admin/accreditations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(accreditations),
      })

      if (response.ok) {
        alert('Accreditations saved successfully!')
      } else {
        alert('Failed to save accreditations.')
      }
    } catch (error) {
      console.error('Error saving:', error)
      alert('Error saving accreditations.')
    } finally {
      setSaving(false)
    }
  }

  if (loading) return <div className="p-8 text-center">Loading...</div>

  return (
    <div className="p-4 sm:p-6 md:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-0">Manage Accreditations (Image SEO)</h1>
        <div className="space-x-4">
          <button 
            onClick={handleAdd}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors text-sm sm:text-base"
          >
            Add New Image
          </button>
          <button 
            onClick={handleSave}
            disabled={saving}
            className="bg-[#08bcb4] text-white px-4 py-2 rounded-lg hover:bg-[#069aa2] disabled:opacity-50 transition-colors text-sm sm:text-base"
          >
            {saving ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden p-6 space-y-6">
        {accreditations.length === 0 ? (
          <p className="text-gray-500">No accreditations found.</p>
        ) : (
          <div className="grid gap-6">
            {accreditations.map((item, index) => (
              <div key={item.id} className="border p-4 rounded-lg flex flex-col md:flex-row items-center gap-4">
                <div className="flex-shrink-0">
                  <img src={item.src} alt={item.alt} className="h-16 w-16 object-contain border rounded bg-gray-50" />
                </div>
                <div className="flex-grow space-y-4 w-full">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Image Source Path</label>
                    <input 
                      type="text" 
                      value={item.src} 
                      onChange={(e) => handleChange(item.id, 'src', e.target.value)}
                      className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-[#08bcb4] focus:border-[#08bcb4] sm:text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Image Alt Text (SEO)</label>
                    <input 
                      type="text" 
                      value={item.alt} 
                      onChange={(e) => handleChange(item.id, 'alt', e.target.value)}
                      className="mt-1 w-full border-gray-300 rounded-md shadow-sm focus:ring-[#08bcb4] focus:border-[#08bcb4] sm:text-sm"
                      placeholder="e.g. NAFSA Association of International Educators Accreditation Logo"
                    />
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button 
                    onClick={() => handleRemove(item.id)}
                    className="text-red-600 hover:text-red-900 mt-6"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
