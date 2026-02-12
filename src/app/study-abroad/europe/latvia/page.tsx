'use client';

import Image from 'next/image';
import contactInfo from '../../../../../data/contact-info.json';
import { studyAbroadCountries } from '../../../../lib/countries';
import CountryRibbon from '@/components/home/CountryRibbon';
import { useEffect, useRef } from 'react';

const latviaCountry = studyAbroadCountries.find(country => country.name === 'Latvia');

const StudyAbroadLatviaPage = () => {
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
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
          src={latviaCountry?.heroImage || "/images/placeholders/default-country.png"}
          alt="Study in Latvia"
          fill
          style={{ objectFit: 'cover' }}
          className="z-0"
          priority
        />
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        </div>
        <div className="container mx-auto px-4 relative z-10 animate-fade-in text-shadow-md">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-extrabold !text-white mb-6 leading-tight">
              Study in Latvia
            </h1>
            <p className="text-2xl mb-8 text-white/90">
              Affordable European education with a vibrant student life.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#apply-now" ref={applyNowRef} className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-[#08bcb4] !text-white">
                Start Your Latvia Journey
              </a>
              <a href="#universities" ref={universitiesRef} className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors !text-white">
                View Top Universities
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">11K+</div>
              <p className="text-gray-600">International Students</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">20+</div>
              <p className="text-gray-600">Higher Education Institutions</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">€3,000</div>
              <p className="text-gray-600">Average Annual Tuition</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">90%</div>
              <p className="text-gray-600">Visa Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in Latvia Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Latvia for Higher Education?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Latvia offers exceptional value with some of Europe&apos;s most affordable education costs, quality universities, and a unique Baltic cultural experience within the EU.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Ultra-Affordable EU Education</h3>
                <p className="text-gray-600">Among Europe&apos;s most affordable tuition fees (€3,000-€5,000/year) with extremely low living costs and high quality of life.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🇪🇺</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">EU Membership Benefits</h3>
                <p className="text-gray-600">Full EU membership since 2004. Access to European job market, Schengen mobility, and pathways to permanent residence.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Quality Academic Standards</h3>
                <p className="text-gray-600">Bologna Process aligned education with ECTS credits, internationally recognized degrees, and strong research programs.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">English-Taught Programs</h3>
                <p className="text-gray-600">Extensive range of English-taught bachelor&apos;s, master&apos;s, and PhD programs across all major academic disciplines.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Rich Cultural Heritage</h3>
                <p className="text-gray-600">Historic cities, medieval architecture, UNESCO World Heritage sites, and vibrant arts and music festivals.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🌲</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Natural Beauty & Lifestyle</h3>
                <p className="text-gray-600">Pristine forests, Baltic Sea coastline, clean environment, and excellent work-life balance with outdoor activities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education System Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Latvian Higher Education System
              </h2>
              <p className="text-xl text-gray-600">
                European Credit Transfer System (ECTS) aligned with three-cycle degree structure
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Bachelor&apos;s Degree</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">3-4 Years - 180-240 ECTS</div>
                <p className="text-gray-600 text-sm">Comprehensive undergraduate education with practical experience.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Master&apos;s Degree</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">1.5-2 Years - 90-120 ECTS</div>
                <p className="text-gray-600 text-sm">Advanced specialization with research or professional focus.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">👨‍🔬</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Doctoral (PhD)</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">3-4 Years</div>
                <p className="text-gray-600 text-sm">Research-focused doctorate with international collaboration.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🏥</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Professional Programs</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">5-6 Years</div>
                <p className="text-gray-600 text-sm">Medicine, dentistry, pharmacy with clinical integration.</p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Academic Structure & Features</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Academic Calendar</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Autumn Semester:</strong> September - January</li>
                    <li>• <strong>Winter Break:</strong> December - January</li>
                    <li>• <strong>Spring Semester:</strong> February - June</li>
                    <li>• <strong>Summer Break:</strong> June - September</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Quality Assurance</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Accredited by Academic Information Centre (AIC)</li>
                    <li>• Bologna Process and ECTS compliance</li>
                    <li>• European Higher Education Area integration</li>
                    <li>• International quality recognition</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities Section */}
      <section id="universities"className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Top Latvian Universities for International Students 2025
              </h2>
              <p className="text-xl text-gray-600">
                Quality institutions offering diverse programs with affordable tuition and EU recognition
              </p>
            </div>

            <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
              <table className="w-full">
                <thead className="bg-[#08bcb4] text-white">
                  <tr>
                    <th className="p-4 text-left">University</th>
                    <th className="p-4 text-center">QS Ranking 2025</th>
                    <th className="p-4 text-center">Annual Tuition (EUR)</th>
                    <th className="p-4 text-center">Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">University of Latvia</div>
                      <div className="text-sm text-gray-600">Largest comprehensive university with 15,000+ students</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#801-850</td>
                    <td className="p-4 text-center">€2,000 - €6,000</td>
                    <td className="p-4 text-center">Riga</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Riga Technical University</div>
                      <div className="text-sm text-gray-600">Leading engineering and technology university</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#761</td>
                    <td className="p-4 text-center">€2,950 - €4,830</td>
                    <td className="p-4 text-center">Riga</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Rīga Stradiņš University</div>
                      <div className="text-sm text-gray-600">Premier medical and health sciences university</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">Unranked</td>
                    <td className="p-4 text-center">€2,700 - €15,000</td>
                    <td className="p-4 text-center">Riga</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Turība University</div>
                      <div className="text-sm text-gray-600">Business and management focus with international programs</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">Unranked</td>
                    <td className="p-4 text-center">€3,330</td>
                    <td className="p-4 text-center">Riga</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Latvia University of Life Sciences</div>
                      <div className="text-sm text-gray-600">Agriculture, forestry, and environmental sciences</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">Unranked</td>
                    <td className="p-4 text-center">€2,500 - €4,500</td>
                    <td className="p-4 text-center">Jelgava</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Requirements Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Latvian University Admission Requirements
              </h2>
              <p className="text-xl text-gray-600">
                Entry requirements for international students at Latvian universities
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Bachelor's Requirements */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🎓</div>
                  <h3 className="text-2xl font-bold text-gray-900">Bachelor&apos;s Requirements</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Academic Qualifications</h4>
                      <p className="text-gray-600">Completion of secondary education (12th grade) with good academic performance</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">English Language Proficiency</h4>
                      <p className="text-gray-600">IELTS 5.5+, TOEFL 72+, or PTE 51+ for English-taught programs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Application Process</h4>
                      <p className="text-gray-600">Online application through university portals with required documents</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Document Requirements</h4>
                      <p className="text-gray-600">Transcripts, certificates, passport copy, and motivation letter</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Master's Requirements */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-2xl font-bold text-gray-900">Master&apos;s Requirements</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Academic Qualifications</h4>
                      <p className="text-gray-600">Bachelor&apos;s degree in relevant field with satisfactory grades</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">English Language Requirements</h4>
                      <p className="text-gray-600">IELTS 7.0+, TOEFL 90+, or PTE 67+ for most master&apos;s programs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Statement of Purpose</h4>
                      <p className="text-gray-600">Detailed motivation letter explaining academic and career objectives</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Additional Requirements</h4>
                      <p className="text-gray-600">Letters of recommendation and relevant work experience (program-specific)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost & Financial Information Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Cost of Studying in Latvia 2025
              </h2>
              <p className="text-xl text-gray-600">
                One of Europe&apos;s most affordable destinations for quality higher education
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Tuition Fees */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Annual Tuition Fees (EUR)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Bachelor&apos;s Programs</span>
                    <span className="font-bold text-[#08bcb4]">€3,000 - €5,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Master&apos;s Programs</span>
                    <span className="font-bold text-[#08bcb4]">€3,700 - €6,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Medical Programs</span>
                    <span className="font-bold text-[#08bcb4]">€15,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">PhD Programs</span>
                    <span className="font-bold text-[#08bcb4]">€3,000 - €6,000</span>
                  </div>
                </div>
              </div>

              {/* Living Expenses */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Monthly Living Expenses (EUR)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Accommodation (Student)</span>
                    <span className="font-bold text-green-600">€150 - €300</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Accommodation (Private)</span>
                    <span className="font-bold text-green-600">€300 - €500</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Food & Groceries</span>
                    <span className="font-bold text-green-600">€150 - €250</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Transportation</span>
                    <span className="font-bold text-green-600">€20 - €50</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Personal Expenses</span>
                    <span className="font-bold text-green-600">€100 - €200</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Comparison */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-center mb-6">Cost Comparison by Latvian Cities</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Riga (Capital)</h4>
                  <p className="text-2xl font-bold text-gray-900">€600 - €900/month</p>
                  <p className="text-sm text-gray-600">Higher costs, more opportunities</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Jelgava & Daugavpils</h4>
                  <p className="text-2xl font-bold text-gray-900">€450 - €650/month</p>
                  <p className="text-sm text-gray-600">Moderate costs, student-friendly</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Smaller Cities</h4>
                  <p className="text-2xl font-bold text-gray-900">€350 - €500/month</p>
                  <p className="text-sm text-gray-600">Lowest costs, quiet lifestyle</p>
                </div>
              </div>
            </div>

            {/* Total Annual Cost */}
            <div className="bg-gray-900 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4 !text-white">Estimated Total Annual Cost</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Bachelor&apos;s Programs</h4>
                  <p className="text-3xl font-bold">EUR €7,200 - €13,800</p>
                  <p className="text-sm text-gray-300">Including tuition and living</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Master&apos;s Programs</h4>
                  <p className="text-3xl font-bold">EUR €7,900 - €14,800</p>
                  <p className="text-sm text-gray-300">Including tuition and living</p>
                </div>
              </div>
              <p className="mt-4 text-gray-300">Among the most affordable in Europe</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Visa Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Latvia Student Visa Process 2025
              </h2>
              <p className="text-xl text-gray-600">
                Step-by-step guide to obtaining your Latvian student visa (Type D)
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">1</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">University Acceptance</h3>
                <p className="text-gray-600 text-center">Receive official invitation from recognized Latvian university or educational institution</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">2</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Visa Type Selection</h3>
                <p className="text-gray-600 text-center">Choose between Short-stay (Type C) for &lt;90 days or Long-stay (Type D) for longer programs</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">3</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Financial Documentation</h3>
                <p className="text-gray-600 text-center">Show €420-€500 per month financial capacity for entire study duration</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">4</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Health Insurance</h3>
                <p className="text-gray-600 text-center">Obtain comprehensive health insurance with minimum €30,000 coverage for EU</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">5</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Document Preparation</h3>
                <p className="text-gray-600 text-center">Prepare and notarize all academic and personal documents in Latvian or English</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">6</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Residence Permit</h3>
                <p className="text-gray-600 text-center">Apply for temporary residence permit if studying longer than one year</p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Student Visa Requirements & Processing</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Essential Documents</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Valid passport (12 months validity for Type D)</li>
                    <li>• University invitation/enrollment letter</li>
                    <li>• Completed visa application form</li>
                    <li>• Financial proof (bank statements)</li>
                    <li>• Health insurance (€30,000 coverage)</li>
                    <li>• Accommodation proof</li>
                    <li>• Academic documents (notarized)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Processing & Fees</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Visa fee: €60</li>
                    <li>• Processing time: 2-3 months</li>
                    <li>• Apply at least 2 months before travel</li>
                    <li>• Work rights: 20 hours/week</li>
                    <li>• Post-study work permit available</li>
                    <li>• Path to permanent residence</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarships Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Latvian Scholarships for International Students
              </h2>
              <p className="text-xl text-gray-600">
                Government and institutional funding opportunities to make Latvia even more affordable
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-400">
                <h3 className="text-lg font-bold mb-3">Latvian Government Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Ministry of Education and Science funding</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Bachelor&apos;s, Master&apos;s, and PhD programs</p>
                  <p><strong>Coverage:</strong> Full or partial tuition support</p>
                  <p><strong>Duration:</strong> Program length</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-bold mb-3">Erasmus+ Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">EU mobility program funding</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Exchange and joint degree programs</p>
                  <p><strong>Amount:</strong> €300-400/month</p>
                  <p><strong>Duration:</strong> 3-12 months</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-400">
                <h3 className="text-lg font-bold mb-3">University Merit Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Institution-specific academic awards</p>
                <div className="text-sm">
                  <p><strong>Universities:</strong> UL, RTU, RSU, Turība</p>
                  <p><strong>Benefits:</strong> Tuition reduction or stipends</p>
                  <p><strong>Criteria:</strong> Academic excellence</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-bold mb-3">Research Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">PhD and research program funding</p>
                <div className="text-sm">
                  <p><strong>Focus:</strong> STEM, social sciences, humanities</p>
                  <p><strong>Support:</strong> Research stipends + tuition</p>
                  <p><strong>Requirements:</strong> Research proposal</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-400">
                <h3 className="text-lg font-bold mb-3">Country-Specific Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Bilateral education agreements</p>
                <div className="text-sm">
                  <p><strong>Countries:</strong> India, China, Ukraine, Belarus</p>
                  <p><strong>Support:</strong> Various levels of support</p>
                  <p><strong>Application:</strong> Through national agencies</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#08bcb4]">
                <h3 className="text-lg font-bold mb-3">Need-Based Support</h3>
                <p className="text-sm text-gray-600 mb-3">Financial assistance programs</p>
                <div className="text-sm">
                  <p><strong>Support:</strong> Living allowances, housing support</p>
                  <p><strong>Eligibility:</strong> Financial need demonstration</p>
                  <p><strong>Application:</strong> University financial aid offices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Opportunities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Work Opportunities in Latvia
              </h2>
              <p className="text-xl text-gray-600">
                Build your career in the Baltic region with EU benefits and growing economy
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* During Studies */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-6">During Studies</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-[#08bcb4] pl-6">
                    <h4 className="font-bold text-lg mb-2">Student Work Rights</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 20 hours per week during studies</li>
                      <li>• Full-time work during breaks</li>
                      <li>• No separate work permit required</li>
                      <li>• Access to local job market</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Popular Student Jobs</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Customer service: €4-7/hour</li>
                      <li>• Language tutoring: €10-20/hour</li>
                      <li>• Research assistant: €5-12/hour</li>
                      <li>• Hospitality/retail: €4-6/hour</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* After Graduation */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-6">Post-Study Opportunities</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Post-Study Work Rights</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Apply for work permit after graduation</li>
                      <li>• EU Blue Card eligibility</li>
                      <li>• Path to permanent residence</li>
                      <li>• Latvian citizenship opportunities</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Growing Industries</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Information technology</li>
                      <li>• Financial services</li>
                      <li>• Manufacturing and logistics</li>
                      <li>• Healthcare and pharmaceuticals</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Prospects */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Graduate Salary Expectations (EUR)</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Information Technology</h4>
                  <p className="text-2xl font-bold text-gray-900">€18,000 - €35,000</p>
                  <p className="text-sm text-gray-600">Software development, IT services</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Engineering</h4>
                  <p className="text-2xl font-bold text-gray-900">€16,000 - €28,000</p>
                  <p className="text-sm text-gray-600">Civil, mechanical, electrical</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Finance & Banking</h4>
                  <p className="text-2xl font-bold text-gray-900">€15,000 - €30,000</p>
                  <p className="text-sm text-gray-600">Banking, accounting, fintech</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Healthcare</h4>
                  <p className="text-2xl font-bold text-gray-900">€20,000 - €40,000</p>
                  <p className="text-sm text-gray-600">Medicine, nursing, pharmacy</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Business & Management</h4>
                  <p className="text-2xl font-bold text-gray-900">€14,000 - £25,000</p>
                  <p className="text-sm text-gray-600">Marketing, operations, consulting</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Education</h4>
                  <p className="text-2xl font-bold text-gray-900">€12,000 - €22,000</p>
                  <p className="text-sm text-gray-600">Teaching, research, academia</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IAEC Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose IAEC for Latvia Studies?
              </h2>
              <p className="text-xl text-gray-600">
                Expert guidance with proven success record for Latvian university admissions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">University & Program Selection</h3>
                <p className="text-gray-600">Expert guidance for choosing the right Latvian university with focus on quality, affordability, and career prospects.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-3">English Program Matching</h3>
                <p className="text-gray-600">Comprehensive database of English-taught programs across all Latvian universities and disciplines.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3">Document & Visa Support</h3>
                <p className="text-gray-600">Complete assistance with document preparation, notarization, and visa applications for Latvia.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3">Cost Optimization & Scholarships</h3>
                <p className="text-gray-600">Help minimize costs through scholarship applications and budget planning for affordable Latvian education.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🛂</div>
                <h3 className="text-xl font-bold mb-3">Residence Permit Guidance</h3>
                <p className="text-gray-600">Support with temporary residence permits and long-term settlement procedures in Latvia.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🏘️</div>
                <h3 className="text-xl font-bold mb-3">Baltic Lifestyle Preparation</h3>
                <p className="text-gray-600">Guidance on adapting to Latvian culture, climate, and student life in the Baltic region.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-[#08bcb4] text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Our Latvia Success Record</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold">90%</div>
                    <p>Student Visa Success Rate</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">350+</div>
                    <p>Students in Latvia</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">15+</div>
                    <p>Partner Universities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common queries about studying in Latvia
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Is Latvia a good choice for international students?</h3>
                <p className="text-gray-600">Yes, Latvia offers excellent value with affordable tuition, quality education, EU benefits, and a safe, welcoming environment for international students.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Can I work while studying in Latvia?</h3>
                <p className="text-gray-600">Yes, international students can work up to 20 hours per week during studies and full-time during breaks without needing a separate work permit.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Are there English-taught programs in Latvia?</h3>
                <p className="text-gray-600">Yes, Latvian universities offer extensive English-taught programs at all levels, from bachelor&apos;s to PhD across various disciplines.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">What are the living costs like in Latvia?</h3>
                <p className="text-gray-600">Latvia has among the lowest living costs in Europe, with students typically spending €350-850 per month including accommodation, food, and personal expenses.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Can I stay in Latvia after graduation?</h3>
                <p className="text-gray-600">Yes, graduates can apply for work permits and eventually permanent residence. Latvia offers pathways to long-term settlement and EU citizenship.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">How is the weather and lifestyle in Latvia?</h3>
                <p className="text-gray-600">Latvia has a temperate climate with distinct seasons. The lifestyle balances modern city amenities with beautiful nature, offering excellent work-life balance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply-now"className="py-20 bg-gradient-to-r from-[#08bcb4] to-[#069aa2] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience Baltic Excellence?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of successful students who chose Latvia and now enjoy EU careers with affordable education and excellent quality of life
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact"className="bg-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-white">
                Book Free Counselling
              </a>
              
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2">📞 Call Us</h3>
                <p><a href={`tel:${contactInfo.primary.mobile}`}>{contactInfo.primary.mobile}</a></p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2">📧 Email Us</h3>
                <p><a href={`mailto:${contactInfo.primary.email}`}>{contactInfo.primary.email}</a></p>
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
    </div>
  );
};

export default StudyAbroadLatviaPage;
