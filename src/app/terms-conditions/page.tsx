import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms & Conditions | IAEC Consultants",
  description: "Terms and conditions for using IAEC Consultants services and website.",
};

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Terms & Conditions</h1>
          
          <div className="prose max-w-none">
            <p className="text-sm text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              These terms and conditions outline the rules and regulations for the use of IAEC Consultants Pvt Ltd&apos;s 
              Website, located at www.iaecconsultants.com. By accessing this website, we assume you accept these terms 
              and conditions. Do not continue to use IAEC if you do not agree to take all of the terms and conditions 
              stated on this page.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Definitions</h2>
            <p className="mb-4">
              The following terminology applies to these Terms and Conditions: &quot;Client&quot;, &quot;You&quot; and &quot;Your&quot; refers to you, 
              the person accessing this website and accepting the Company&apos;s terms and conditions. &quot;The Company&quot;, &quot;Ourselves&quot;, 
              &quot;We&quot;, &quot;Our&quot; and &quot;Us&quot;, refers to our Company. &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot;, refers to both the Client and ourselves.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. Services</h2>
            <p className="mb-4">
              IAEC Consultants Pvt Ltd provides overseas education consulting services including but not limited to:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>University and course selection guidance</li>
              <li>Application assistance</li>
              <li>Visa documentation support</li>
              <li>Test preparation guidance</li>
              <li>Pre-departure orientation</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Fees and Payments</h2>
            <p className="mb-4">
              Service fees are clearly communicated before engagement. All fees are non-refundable unless specified 
              in writing. Payment terms and conditions will be provided separately for each service engagement.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
            <p className="mb-4">
              Unless otherwise stated, IAEC Consultants Pvt Ltd and/or its licensors own the intellectual property 
              rights for all material on this website. All intellectual property rights are reserved.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. User Responsibilities</h2>
            <p className="mb-4">Users of our services agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide accurate and complete information</li>
              <li>Cooperate in the application process</li>
              <li>Meet all deadlines communicated by our team</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="mb-4">
              IAEC Consultants Pvt Ltd provides guidance and support but cannot guarantee admission to universities 
              or visa approvals. Our liability is limited to the fees paid for our services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Privacy</h2>
            <p className="mb-4">
              We are committed to protecting your privacy. Please review our Privacy Policy, which also governs 
              your use of the website, to understand our practices.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Modifications</h2>
            <p className="mb-4">
              We reserve the right to revise these terms and conditions at any time. By using this website, 
              you are agreeing to be bound by the current version of these terms and conditions.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contact Information</h2>
            <p className="mb-4">
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p><strong>IAEC Consultants Pvt Ltd</strong></p>
              <p>#402, 4th Floor, Gurupartha Estates</p>
              <p>Narayanguda, Hyderabad - 500029</p>
              <p>Phone: +91 863 970 6102</p>
              <p>Email: ravinder@iaecconsultants.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}