# IAEC Website - Additional Components & Pages

## 1. New Zealand Study Abroad Page - `src/app/study-abroad/new-zealand/page.tsx`

```typescript
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Study in New Zealand 2025 - Top Universities, Student Visa & Work Rights | IAEC Consultants",
  description: "Study in New Zealand with IAEC expert guidance. World-class education, stunning landscapes, friendly culture. Get student visa assistance, scholarships & post-study work opportunities. 95% visa success rate.",
  keywords: "study in New Zealand, New Zealand universities, student visa New Zealand, study abroad NZ, New Zealand education, IAEC NZ counseling, Auckland Wellington universities, post study work visa NZ",
  openGraph: {
    title: "Study in New Zealand 2025 - Universities & Student Visa Guide | IAEC",
    description: "Complete guide to studying in New Zealand. Expert counseling for top NZ universities, student visa process, and work opportunities.",
    images: ['/images/study-newzealand-hero.jpg'],
  },
};

const StudyAbroadNewZealandPage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 via-blue-600 to-teal-600 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Study in New Zealand - Land of the Long White Cloud
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Experience world-class education in stunning natural settings. Quality education, friendly culture, and excellent work opportunities await.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact" className="btn-primary btn-white-text">
                Start Your NZ Journey
              </Link>
              <Link href="#universities" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
                View Top Universities
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="stats-number text-4xl font-bold">130K+</div>
              <p className="text-gray-600">International Students</p>
            </div>
            <div className="space-y-2">
              <div className="stats-number text-4xl font-bold">8</div>
              <p className="text-gray-600">World-Class Universities</p>
            </div>
            <div className="space-y-2">
              <div className="stats-number text-4xl font-bold">3</div>
              <p className="text-gray-600">Major Intakes</p>
            </div>
            <div className="space-y-2">
              <div className="stats-number text-4xl font-bold">95%</div>
              <p className="text-gray-600">IAEC Visa Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in New Zealand */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Choose New Zealand for Higher Education?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                New Zealand offers exceptional education quality in one of the world's safest and most beautiful countries, with a welcoming culture and excellent quality of life.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">🏔️</div>
                <h3 className="text-xl font-semibold mb-3">Stunning Natural Beauty</h3>
                <p className="text-gray-600">
                  From snow-capped mountains to pristine beaches, study in one of the world's most beautiful countries with outdoor activities year-round.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold mb-3">World-Class Education</h3>
                <p className="text-gray-600">
                  All 8 NZ universities rank in the top 500 globally. Known for innovative teaching methods and research excellence.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-semibold mb-3">Friendly Culture</h3>
                <p className="text-gray-600">
                  Kiwis are known for their friendliness and welcoming nature. Safe, peaceful society with strong support for international students.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-semibold mb-3">Work Opportunities</h3>
                <p className="text-gray-600">
                  Students can work 20 hours/week during studies. Post-study work visa allows up to 3 years of work experience.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-semibold mb-3">English-Speaking Country</h3>
                <p className="text-gray-600">
                  Study in English with unique Kiwi accent. Perfect for improving language skills in a natural setting.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-4xl mb-4">🏡</div>
                <h3 className="text-xl font-semibold mb-3">Pathway to Residency</h3>
                <p className="text-gray-600">
                  Strong immigration pathways for skilled graduates. New Zealand actively welcomes skilled professionals to stay.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities */}
      <section id="universities" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Top New Zealand Universities 2025
              </h2>
              <p className="text-lg text-gray-600">
                All eight New Zealand universities offer world-class education and rank in the top 500 globally
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg overflow-hidden">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">University</th>
                    <th className="px-6 py-4 text-left">QS Ranking 2025</th>
                    <th className="px-6 py-4 text-left">Annual Tuition (NZD)</th>
                    <th className="px-6 py-4 text-left">Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="px-6 py-4">
                      <strong>University of Auckland</strong><br/>
                      <small className="text-gray-600">New Zealand's largest and highest-ranked university</small>
                    </td>
                    <td className="px-6 py-4 font-semibold">#68</td>
                    <td className="px-6 py-4">$32,000 - $45,000</td>
                    <td className="px-6 py-4">Auckland</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4">
                      <strong>University of Otago</strong><br/>
                      <small className="text-gray-600">Oldest university, strong in medicine and research</small>
                    </td>
                    <td className="px-6 py-4 font-semibold">#206</td>
                    <td className="px-6 py-4">$30,000 - $42,000</td>
                    <td className="px-6 py-4">Dunedin</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4">
                      <strong>Victoria University of Wellington</strong><br/>
                      <small className="text-gray-600">Capital city university, strong in law and policy</small>
                    </td>
                    <td className="px-6 py-4 font-semibold">#241</td>
                    <td className="px-6 py-4">$29,000 - $40,000</td>
                    <td className="px-6 py-4">Wellington</td>
                  </tr>
                  <tr className="border-b">
                    <td className="px-6 py-4">
                      <strong>University of Canterbury</strong><br/>
                      <small className="text-gray-600">Leading engineering and science programs</small>
                    </td>
                    <td className="px-6 py-4 font-semibold">#256</td>
                    <td className="px-6 py-4">$28,000 - $42,000</td>
                    <td className="px-6 py-4">Christchurch</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">
                      <strong>Massey University</strong><br/>
                      <small className="text-gray-600">Comprehensive university with multiple campuses</small>
                    </td>
                    <td className="px-6 py-4 font-semibold">#292</td>
                    <td className="px-6 py-4">$27,000 - $38,000</td>
                    <td className="px-6 py-4">Palmerston North</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Cost of Studying */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Cost of Studying in New Zealand 2025
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive breakdown of tuition fees and living expenses
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Annual Tuition Fees (NZD)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Bachelor's Degree</span>
                    <span className="font-semibold">$27,000 - $45,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Master's Degree</span>
                    <span className="font-semibold">$28,000 - $50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>PhD</span>
                    <span className="font-semibold">$8,000 - $12,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>MBA</span>
                    <span className="font-semibold">$45,000 - $65,000</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Annual Living Expenses (NZD)</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Accommodation</span>
                    <span className="font-semibold">$12,000 - $20,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Food & Groceries</span>
                    <span className="font-semibold">$3,500 - $5,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Transportation</span>
                    <span className="font-semibold">$1,000 - $2,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Personal Expenses</span>
                    <span className="font-semibold">$2,000 - $3,500</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-white rounded-lg p-8 text-center">
              <h3 className="text-white text-2xl font-semibold mb-4">Estimated Total Annual Cost</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-white font-medium mb-2">Bachelor's Programs</h4>
                  <p className="text-white text-3xl font-bold">NZD $45,000 - $70,000</p>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-2">Master's Programs</h4>
                  <p className="text-white text-3xl font-bold">NZD $48,000 - $75,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your New Zealand Adventure?
            </h2>
            <p className="text-white text-lg mb-8 opacity-90">
              Join thousands of successful students who achieved their dreams with IAEC's expert guidance
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link href="/contact" className="btn-secondary bg-white text-primary hover:bg-gray-100">
                Book Free Counselling
              </Link>
              <Link href="/mock-test" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
                Take Free Mock Test
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl mb-2">📞</div>
                <h3 className="text-white font-semibold mb-2">Call Us</h3>
                <p className="text-white">+91 863 970 6102</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📧</div>
                <h3 className="text-white font-semibold mb-2">Email Us</h3>
                <p className="text-white">ravinder@iaecconsultants.com</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📍</div>
                <h3 className="text-white font-semibold mb-2">Visit Us</h3>
                <p className="text-white">Hyderabad, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudyAbroadNewZealandPage;
```

## 2. Terms & Conditions Page - `src/app/terms-conditions/page.tsx`

```typescript
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
              These terms and conditions outline the rules and regulations for the use of IAEC Consultants Pvt Ltd's 
              Website, located at www.iaecconsultants.com. By accessing this website, we assume you accept these terms 
              and conditions. Do not continue to use IAEC if you do not agree to take all of the terms and conditions 
              stated on this page.
            </p>

            <h2 className="text-2xl font-semibold mt-8 mb-4">2. Definitions</h2>
            <p className="mb-4">
              The following terminology applies to these Terms and Conditions: "Client", "You" and "Your" refers to you, 
              the person accessing this website and accepting the Company's terms and conditions. "The Company", "Ourselves", 
              "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves.
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
```

## 3. Privacy Policy Page - `src/app/privacy-policy/page.tsx`

```typescript
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
              IAEC Consultants Pvt Ltd ("we", "our", or "us") is committed to protecting and respecting your privacy. 
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
```

## 4. Updated Contact Information Data - `data/contact-info.json`

```json
{
  "company": {
    "name": "IAEC Consultants Pvt. Ltd.",
    "tagline": "Your Global Study Partner",
    "established": "2000"
  },
  "primary": {
    "mobile": "+91 863 970 6102",
    "landline": "+91(0)79 4938 6834",
    "email": "ravinder@iaecconsultants.com",
    "website": "www.iaecconsultants.com"
  },
  "social": {
    "facebook": "https://www.facebook.com/iaecconsultantspvtltd",
    "twitter": "https://x.com/iaec_india",
    "instagram": "https://www.instagram.com/iaecconsultantspvtltd",
    "linkedin": "https://www.linkedin.com/company/iaecconsultantspvtltd/"
  },
  "branches": {
    "headOffice": {
      "type": "head",
      "name": "Head Office",
      "city": "Hyderabad",
      "state": "Telangana",
      "address": "#402, 4th Floor, Gurupartha Estates, Opp. Indian Oil Petrol Pump, Beside YMCA & Andhra Bank, Narayanguda, Hyderabad – 500 029",
      "mobile": "+91 863 970 6102",
      "email": "ravinder@iaecconsultants.com"
    },
    "ahmedabad": {
      "type": "branch",
      "name": "Ahmedabad Branch",
      "city": "Ahmedabad",
      "state": "Gujarat",
      "address": "IAEC Consultants Pvt. Ltd.\nA-202, 2nd Floor, Karmayog Heights,\nHL College Road, Above Kotak Mahindra Bank,\nSardar Patel Nagar, Navrangpura,\nAhmedabad -380009, Gujarat, INDIA.",
      "landline": "+91(0)79 4938 6834",
      "mobile": "+91 863 970 6102"
    },
    "kukatpally": {
      "type": "branch",
      "name": "Kukatpally Branch",
      "city": "Kukatpally",
      "state": "Telangana",
      "address": "K P H B Phase 1, Kukatpally,\nHyderabad, Telangana 500072",
      "mobile": "+91 7729997891",
      "email": "kripal@iaecconsultants.com"
    }
  },
  "businessHours": {
    "weekdays": "9:00 AM - 6:00 PM",
    "saturday": "9:00 AM - 4:00 PM",
    "sunday": "Closed",
    "timezone": "Asia/Kolkata"
  }
}
```

## 5. Enhanced TestimonialEditor Component - `src/components/admin/TestimonialEditor.tsx`

```typescript
'use client';
import { useState } from 'react';

interface TestimonialFormData {
  name: string;
  content: string;
  university: string;
  course: string;
  country: string;
  rating: number;
  image?: File;
}

interface TestimonialEditorProps {
  initialData?: TestimonialFormData;
  onSubmit: (data: TestimonialFormData) => Promise<void>;
  onCancel: () => void;
}

export default function TestimonialEditor({ initialData, onSubmit, onCancel }: TestimonialEditorProps) {
  const [formData, setFormData] = useState<TestimonialFormData>({
    name: initialData?.name || '',
    content: initialData?.content || '',
    university: initialData?.university || '',
    course: initialData?.course || '',
    country: initialData?.country || '',
    rating: initialData?.rating || 5,
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.content.trim()) newErrors.content = 'Content is required';
    if (!formData.university.trim()) newErrors.university = 'University is required';
    if (!formData.course.trim()) newErrors.course = 'Course is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (formData.rating < 1 || formData.rating > 5) newErrors.rating = 'Rating must be between 1 and 5';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const submitData = { ...formData };
      if (imageFile) {
        submitData.image = imageFile;
      }
      await onSubmit(submitData);
    } catch (error) {
      console.error('Error submitting testimonial:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, image: 'Image must be less than 5MB' });
        return;
      }
      
      // Validate file type
      if (!file.type.startsWith('image/')) {
        setErrors({ ...errors, image: 'Please select a valid image file' });
        return;
      }

      setImageFile(file);
      setErrors({ ...errors, image: '' });
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6">
        {initialData ? 'Edit Testimonial' : 'Add New Testimonial'}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Student Name *</label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`w-full p-3 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter student name"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Student Photo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          {imageFile && (
            <div className="mt-2">
              <img
                src={URL.createObjectURL(imageFile)}
                alt="Preview"
                className="w-20 h-20 object-cover rounded-lg"
              />
            </div>
          )}
          {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
          <p className="text-sm text-gray-500 mt-1">Upload a photo of the student (max 5MB)</p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Testimonial Content *</label>
          <textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            rows={4}
            className={`w-full p-3 border rounded-lg ${errors.content ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="Enter the testimonial content"
          />
          {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">University *</label>
            <input
              type="text"
              value={formData.university}
              onChange={(e) => setFormData({ ...formData, university: e.target.value })}
              className={`w-full p-3 border rounded-lg ${errors.university ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="University name"
            />
            {errors.university && <p className="text-red-500 text-sm mt-1">{errors.university}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Course *</label>
            <input
              type="text"
              value={formData.course}
              onChange={(e) => setFormData({ ...formData, course: e.target.value })}
              className={`w-full p-3 border rounded-lg ${errors.course ? 'border-red-500' : 'border-gray-300'}`}
              placeholder="Course name"
            />
            {errors.course && <p className="text-red-500 text-sm mt-1">{errors.course}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Country *</label>
            <select
              value={formData.country}
              onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              className={`w-full p-3 border rounded-lg ${errors.country ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Ireland">Ireland</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Italy">Italy</option>
              <option value="Spain">Spain</option>
              <option value="Malta">Malta</option>
              <option value="Latvia">Latvia</option>
            </select>
            {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Rating *</label>
            <select
              value={formData.rating}
              onChange={(e) => setFormData({ ...formData, rating: parseInt(e.target.value) })}
              className={`w-full p-3 border rounded-lg ${errors.rating ? 'border-red-500' : 'border-gray-300'}`}
            >
              <option value={5}>⭐⭐⭐⭐⭐ (5 Stars)</option>
              <option value={4}>⭐⭐⭐⭐ (4 Stars)</option>
              <option value={3}>⭐⭐⭐ (3 Stars)</option>
              <option value={2}>⭐⭐ (2 Stars)</option>
              <option value={1}>⭐ (1 Star)</option>
            </select>
            {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating}</p>}
          </div>
        </div>

        <div className="flex space-x-4 pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary btn-white-text px-6 py-3 disabled:opacity-50"
          >
            {isSubmitting ? 'Saving...' : (initialData ? 'Update Testimonial' : 'Add Testimonial')}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="btn-secondary px-6 py-3"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
```

## 6. Image Requirements

Create the following images and place them in the `public/images/` directory:

### Required Images:
1. `iaec-landing-logo.png` - Header logo (recommended size: 180x60px)
2. `footer-logo.png` - Footer logo (recommended size: 180x60px, white version)
3. `study-newzealand-hero.jpg` - New Zealand page hero image
4. `home-og.jpg` - Open Graph image for homepage
5. `og-image.jpg` - Default Open Graph image
6. `twitter-image.jpg` - Twitter card image

### Image Specifications:
- Logo images should be PNG with transparent backgrounds
- Hero images should be high-resolution (minimum 1200x600px)
- Open Graph images should be 1200x630px
- Optimize all images for web (use tools like TinyPNG)

## 7. Final Testing Checklist

### Pre-Deployment:
- [ ] All new files created and implemented
- [ ] Contact information updated throughout
- [ ] Button styling applied consistently
- [ ] Logo images properly placed
- [ ] Social media links working
- [ ] New Zealand page accessible
- [ ] Terms & Privacy pages accessible
- [ ] Admin panel styling fixed
- [ ] npm run build passes without errors
- [ ] npm run lint passes without warnings

### Post-Deployment:
- [ ] All pages load correctly
- [ ] Contact forms function properly  
- [ ] WhatsApp integration works
- [ ] Admin login and features work
- [ ] Google Analytics tracking active
- [ ] Mobile responsiveness verified
- [ ] SEO meta tags present
- [ ] Page speed optimized

This completes the comprehensive implementation guide for all requested IAEC website updates.