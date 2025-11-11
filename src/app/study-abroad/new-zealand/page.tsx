'use client';

import contactInfo from '../../../../data/contact-info.json';
import Image from 'next/image';
import { studyAbroadCountries } from '../../../lib/countries';
import CountryRibbon from '@/components/home/CountryRibbon';
import { useEffect, useRef } from 'react';

const newZealandCountry = studyAbroadCountries.find(country => country.name === 'New Zealand');

const StudyAbroadNewZealandPage = () => {
  const applyNowRef = useRef<HTMLAnchorElement>(null);
  const universitiesRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = (e: MouseEvent) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
      const element = document.getElementById(targetId || '');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const currentApplyNowRef = applyNowRef.current;
    const currentUniversitiesRef = universitiesRef.current;

    if (currentApplyNowRef) {
      currentApplyNowRef.addEventListener('click', handleScroll);
    }
    if (currentUniversitiesRef) {
      currentUniversitiesRef.addEventListener('click', handleScroll);
    }

    return () => {
      if (currentApplyNowRef) {
        currentApplyNowRef.removeEventListener('click', handleScroll);
      }
      if (currentUniversitiesRef) {
        currentUniversitiesRef.removeEventListener('click', handleScroll);
      }
    };
  }, []);

  return (
    <main>
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={newZealandCountry?.heroImage || "/images/countries/newzealand.jpg"}
            alt="Study in New Zealand"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
              <div className="relative z-10 text-center text-white p-4 animate-fade-in text-shadow-md">
                <h1 className="text-6xl font-extrabold !text-white mb-6 leading-tight">
                  Study in New Zealand
                </h1>
                <p className="text-2xl mb-8 text-white/90">
                  Your adventure in world-class education starts here.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="#apply-now-section" ref={applyNowRef} className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-[#08bcb4] !text-white">
                    Start Your New Zealand Journey
                  </a>
                  <a href="#universities" ref={universitiesRef} className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors !text-white">
                    View Top Universities
                  </a>
                </div>
              </div>      </section>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <div className="text-center bg-[#e6fffe] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#08bcb4]">120,000+</h3>
              <p className="text-[#4a5568]">International Students</p>
            </div>
            <div className="text-center bg-[#e6fffe] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#08bcb4]">8</h3>
              <p className="text-[#4a5568]">Universities</p>
            </div>
            <div className="text-center bg-[#e6fffe] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#08bcb4]">NZ$22,000-35,000</h3>
              <p className="text-[#4a5568]">Annual Tuition</p>
            </div>
            <div className="text-center bg-[#e6fffe] p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-[#08bcb4]">3 Intakes</h3>
              <p className="text-[#4a5568]">February, July, November</p>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a202c] mb-6">Why Study in New Zealand?</h2>
            <p className="text-lg text-[#4a5568] mb-6">
              New Zealand offers a unique blend of high-quality education and stunning natural beauty, attracting students from around the globe. Known for its innovation in education, safe environment, and welcoming culture, New Zealand provides an ideal setting for international students.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3 text-[#4a5568]">
                <li>• High-quality education system with global recognition</li>
                <li>• Safe and peaceful country with low crime rates</li>
                <li>• Stunning natural landscapes and outdoor activities</li>
                <li>• English-speaking country with friendly locals</li>
              </ul>
              <ul className="space-y-3 text-[#4a5568]">
                <li>• Post-study work visa opportunities (up to 3 years)</li>
                <li>• Innovative teaching methods and research opportunities</li>
                <li>• Pathway to permanent residency</li>
                <li>• Strong economy and job market</li>
              </ul>
            </div>
          </div>

          <div className="bg-[#f7fafc] p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-[#1a202c] mb-6">New Zealand Education System</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#08bcb4] mb-3">Bachelor&apos;s Degree</h3>
                <p className="text-[#4a5568] mb-2">Duration: 3-4 years</p>
                <p className="text-[#4a5568]">360-480 credits</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#08bcb4] mb-3">Master&apos;s Degree</h3>
                <p className="text-[#4a5568] mb-2">Duration: 1-2 years</p>
                <p className="text-[#4a5568]">120-240 credits</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-[#08bcb4] mb-3">Doctorate (PhD)</h3>
                <p className="text-[#4a5568] mb-2">Duration: 3-4 years</p>
                <p className="text-[#4a5568]">Research + Thesis</p>
              </div>
            </div>
          </div>

          <section id="universities" className="mb-12">
            <h2 className="text-3xl font-bold text-[#1a202c] mb-6">Top New Zealand Universities</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-[#08bcb4] text-white">
                  <tr>
                    <th className="p-4 text-left">University</th>
                    <th className="p-4 text-left">QS Ranking 2025</th>
                    <th className="p-4 text-left">Annual Tuition</th>
                  </tr>
                </thead>
                <tbody className="text-[#4a5568]">
                  <tr className="border-b">
                    <td className="p-4">University of Auckland</td>
                    <td className="p-4">68</td>
                    <td className="p-4">NZ$32,000 - $45,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">University of Otago</td>
                    <td className="p-4">206</td>
                    <td className="p-4">NZ$28,000 - $38,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">Victoria University of Wellington</td>
                    <td className="p-4">241</td>
                    <td className="p-4">NZ$25,000 - $35,000</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4">University of Canterbury</td>
                    <td className="p-4">256</td>
                    <td className="p-4">NZ$24,000 - $34,000</td>
                  </tr>
                  <tr>
                    <td className="p-4">Massey University</td>
                    <td className="p-4">292</td>
                    <td className="p-4">NZ$22,000 - $32,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Student Visa Requirements</h3>
              <ul className="text-[#4a5568] space-y-3">
                <li>• Offer of place from New Zealand education provider</li>
                <li>• IELTS 6.0+ or equivalent English proficiency</li>
                <li>• Proof of funds (NZ$15,000 per year)</li>
                <li>• Medical and chest X-ray certificates</li>
                <li>• Police clearance certificate</li>
                <li>• Comprehensive health insurance</li>
                <li>• Genuine temporary entrant evidence</li>
                <li>• Academic transcripts and qualifications</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Costs & Work Opportunities</h3>
              <h4 className="font-semibold text-[#1a202c] mb-2">Annual Costs:</h4>
              <ul className="text-[#4a5568] space-y-2 mb-4">
                <li>• Tuition: NZ$22,000 - NZ$45,000</li>
                <li>• Living: NZ$15,000 - NZ$20,000</li>
                <li>• Health Insurance: NZ$600 - NZ$1,000</li>
              </ul>
              <h4 className="font-semibold text-[#1a202c] mb-2">Work Rights:</h4>
              <ul className="text-[#4a5568] space-y-2">
                <li>• 20 hours/week during studies</li>
                <li>• Full-time during scheduled holidays</li>
                <li>• Post-study work visa (up to 3 years)</li>
                <li>• Pathway to residence visa</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="apply-now-section" className="py-20 bg-gradient-to-r from-[#08bcb4] to-[#069aa2] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your New Zealand Adventure?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of successful students who chose New Zealand and now enjoy global careers and a vibrant lifestyle
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-white">
                Book Free Counselling
              </a>
              <a href="/mock-test" className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold !text-white">
                Take Free Mock Test
              </a>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2">📞 Call Us</h3>
                <p>{contactInfo.primary.mobile}</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2">📧 Email Us</h3>
                <p>{contactInfo.primary.email}</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2">📍 Visit Us</h3>
                <p>Ahmedabad, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CountryRibbon autoScrollSpeed={1.2} pauseOnHover={true} />
    </main>
  );
};

export default StudyAbroadNewZealandPage;