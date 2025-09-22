import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | IAEC Consultants",
  description: "Privacy policy explaining how IAEC Consultants collects, uses, and protects your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
          
          <div className="prose max-w-none">
            <p className="text-sm text-gray-600 mb-6">Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
            <p className="mb-4">
              IAEC Consultants Pvt Ltd (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting and respecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit 
              our website www.iaecconsultants.com or use our services.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold mt-6 mb-3">2.1 Personal Information</h3>
            <p className="mb-4">We may collect the following personal information:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name and contact information (email, phone number, address)</li>
              <li>Educational background and academic records</li>
              <li>Career goals and preferences</li>
              <li>Financial information for service fees</li>
              <li>Passport and visa-related documents</li>
            </ul>

            <h3 className="text-xl font-semibold mt-6 mb-3">2.2 Technical Information</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>IP address and browser information</li>
              <li>Website usage data and analytics</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use your information for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Providing education consulting services</li>
              <li>Processing university applications</li>
              <li>Communicating with you about our services</li>
              <li>Improving our website and services</li>
              <li>Complying with legal requirements</li>
              <li>Marketing and promotional activities (with consent)</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">4. Information Sharing</h2>
            <p className="mb-4">We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Universities and educational institutions (with consent)</li>
              <li>Government agencies for visa processing</li>
              <li>Service providers who assist in our operations</li>
              <li>Legal authorities when required by law</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Security</h2>
            <p className="mb-4">
              We implement appropriate security measures to protect your personal information against unauthorized 
              access, alteration, disclosure, or destruction. However, no method of transmission over the internet 
              is 100% secure.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Retention</h2>
            <p className="mb-4">
              We retain your personal information for as long as necessary to provide our services and comply with 
              legal obligations. Student records are maintained for a minimum of 7 years as per regulatory requirements.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent for marketing communications</li>
            </ul>

            <h2 className="text-2xl font-semibold mt-8 mb-4">8. Cookies</h2>
            <p className="mb-4">
              Our website uses cookies to enhance your experience. You can control cookie settings through your 
              browser preferences. Some features may not function properly if cookies are disabled.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">9. Third-Party Links</h2>
            <p className="mb-4">
              Our website may contain links to third-party websites. We are not responsible for the privacy 
              practices of these external sites.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to This Policy</h2>
            <p className="mb-4">
              We may update this Privacy Policy from time to time. We will notify you of significant changes 
              by posting the updated policy on our website.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
            <p className="mb-4">
              If you have questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p><strong>IAEC Consultants Pvt Ltd</strong></p>
              <p>Data Protection Officer</p>
              <p>#402, 4th Floor, Gurupartha Estates</p>
              <p>Narayanguda, Hyderabad - 500029</p>
              <p>Phone: +91 863 970 6102</p>
              <p>Email: privacy@iaecconsultants.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}