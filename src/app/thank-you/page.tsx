import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thank You! - IAEC Consultants',
  description: 'Thank you for contacting IAEC Consultants. We have received your submission and will get back to you shortly.',
};

export default function ThankYouPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 py-12 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <svg
          className="mx-auto h-16 w-16 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <h1 className="mt-6 text-3xl font-extrabold text-gray-900">Thank You!</h1>
        <p className="mt-2 text-lg text-gray-600">
          Your form has been submitted successfully. We appreciate you reaching out.
        </p>
        <p className="mt-2 text-base text-gray-500">
          Our team will review your request and get back to you shortly.
        </p>
        <div className="mt-6">
          <Link href="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm bg-[#08bcb4] hover:bg-[#069aa2] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#08bcb4] !text-white">
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
