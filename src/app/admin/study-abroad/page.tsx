'use client'

import Link from 'next/link'
import studyAbroadData from '../../../../data/study-abroad.json'

export default function AdminStudyAbroad() {
  const countries = Object.keys(studyAbroadData)

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Edit Study Abroad Pages</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {countries.map(country => (
          <div key={country} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold capitalize">{country}</h2>
            <div className="mt-4">
              <Link href={`/admin/study-abroad/edit/${country}`} className="bg-[#08bcb4] text-white px-4 py-2 rounded-lg hover:bg-[#069aa2] transition-colors">
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
