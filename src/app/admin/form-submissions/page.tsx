'use client'

import { useState, useEffect } from 'react'

export default function FormSubmissionsPage() {
  const [submissions, setSubmissions] = useState([])

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch('/api/forms')
        const data = await response.json()
        setSubmissions(data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchSubmissions()
  }, [])

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Form Submissions</h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Phone</th>
              <th className="p-4 text-left">Form Type</th>
              <th className="p-4 text-left">Destination/Test</th>
              <th className="p-4 text-left">Message</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission, index) => (
              <tr key={index} className="border-b">
                <td className="p-4">{submission.name}</td>
                <td className="p-4">{submission.email}</td>
                <td className="p-4">{submission.phone}</td>
                <td className="p-4">{submission.formType}</td>
                <td className="p-4">{submission.destination || submission.test}</td>
                <td className="p-4">{submission.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
