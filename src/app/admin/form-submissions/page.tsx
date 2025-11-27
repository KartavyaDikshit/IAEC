'use client'

import { useState, useEffect } from 'react'
import * as XLSX from 'xlsx'

interface Submission {
  id: string;
  name: string;
  email: string;
  phone: string;
  formType: string;
  data: {
    destination?: string;
    test?: string;
    message?: string;
  };
  createdAt: string;
}

export default function FormSubmissionsPage() {
  const [submissions, setSubmissions] = useState<Submission[]>([])
  const [loading, setLoading] = useState(true)
  const [exporting, setExporting] = useState(false)

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch('/api/forms')
        const rawData = await response.json()
        const parsedSubmissions = rawData.map((submission: Submission) => ({
          ...submission,
          data: typeof submission.data === 'string' 
            ? JSON.parse(submission.data) 
            : submission.data,
        })).sort((a: Submission, b: Submission) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        setSubmissions(parsedSubmissions);
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchSubmissions()
  }, [])

  const handleExportToExcel = () => {
    setExporting(true);
    try {
      const formattedData = submissions.map(submission => ({
        ID: submission.id,
        Name: submission.name,
        Email: submission.email,
        Phone: submission.phone,
        'Form Type': formatFormType(submission.formType),
        Destination: submission.data?.destination,
        'Test Type': submission.data?.test,
        Message: submission.data?.message,
        'Submitted On': new Date(submission.createdAt).toLocaleString(),
      }));

      const worksheet = XLSX.utils.json_to_sheet(formattedData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Submissions');
      XLSX.writeFile(workbook, 'form-submissions.xlsx');
    } catch (error) {
      console.error('Error exporting to Excel:', error);
      alert('Failed to export submissions to Excel.');
    } finally {
      setExporting(false);
    }
  };

  const formatFormType = (formType: string) => {
    switch (formType) {
      case 'mock-test':
        return 'Mock Test';
      case 'study-preparation':
        return 'Study Preparation';
      case 'contact':
        return 'Contact Us';
      case 'booking':
        return 'Booking';
      default:
        return formType;
    }
  }

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Form Submissions</h1>
        <button
          onClick={handleExportToExcel}
          disabled={exporting}
          className="px-4 py-2 bg-[#08bcb4] !text-white rounded-md hover:bg-[#069aa2] disabled:opacity-50 transition-colors"
        >
          {exporting ? 'Exporting...' : 'Export to Excel'}
        </button>
      </div>
      
      {loading ? (
        <div className="text-center">Loading submissions...</div>
      ) : submissions.length === 0 ? (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <p className="text-gray-500">No submissions found.</p>
        </div>
      ) : (
        <div className="bg-white p-2 sm:p-4 rounded-lg shadow-md">
          {/* Mobile Card View */}
          <div className="md:hidden">
            {submissions.map((submission) => (
              <div key={submission.id} className="border rounded-lg p-4 mb-4 shadow">
                <div className="font-bold text-lg mb-2">{submission.name}</div>
                <div className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold">Email:</span> {submission.email}
                </div>
                <div className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold">Phone:</span> {submission.phone}
                </div>
                <div className="text-sm text-gray-600 mb-1">
                  <span className="font-semibold">Form:</span> {formatFormType(submission.formType)}
                </div>
                {(submission.data?.destination || submission.data?.test) && (
                  <div className="text-sm text-gray-600 mb-1">
                    <span className="font-semibold">Details:</span> {submission.data.destination || submission.data.test}
                  </div>
                )}
                {submission.data?.message && (
                  <div className="text-sm text-gray-600 mt-2">
                    <span className="font-semibold">Message:</span>
                    <p className="italic">{submission.data.message}</p>
                  </div>
                )}
                 <div className="text-xs text-gray-400 mt-2">
                  {new Date(submission.createdAt).toLocaleString()}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full min-w-full">
              <thead>
                <tr className="border-b">
                  <th className="p-3 text-left text-sm font-semibold">Name</th>
                  <th className="p-3 text-left text-sm font-semibold">Email</th>
                  <th className="p-3 text-left text-sm font-semibold">Phone</th>
                  <th className="p-3 text-left text-sm font-semibold">Form Type</th>
                  <th className="p-3 text-left text-sm font-semibold">Details</th>
                  <th className="p-3 text-left text-sm font-semibold">Message</th>
                  <th className="p-3 text-left text-sm font-semibold">Submitted On</th>
                </tr>
              </thead>
              <tbody>
                {submissions.map((submission) => (
                  <tr key={submission.id} className="border-b hover:bg-gray-50">
                    <td className="p-3 text-sm">{submission.name}</td>
                    <td className="p-3 text-sm">{submission.email}</td>
                    <td className="p-3 text-sm">{submission.phone}</td>
                    <td className="p-3 text-sm">{formatFormType(submission.formType)}</td>
                    <td className="p-3 text-sm">{submission.data?.destination || submission.data?.test}</td>
                    <td className="p-3 text-sm max-w-xs truncate">{submission.data?.message}</td>
                    <td className="p-3 text-sm">{new Date(submission.createdAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
