'use client';

import Image from 'next/image';
import contactInfo from '../../../../../data/contact-info.json';
import { studyAbroadCountries } from '../../../../lib/countries';
import CountryRibbon from '@/components/home/CountryRibbon';
import { useEffect, useRef } from 'react';

const germanyCountry = studyAbroadCountries.find(country => country.name === 'Germany');

const StudyAbroadGermanyPage = () => {
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
          src={germanyCountry?.heroImage || "/images/placeholders/default-country.png"}
          alt="Study in Germany"
          fill
          style={{ objectFit: 'cover' }}
          className="z-0"
          priority
        />
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        </div>
        <div className="container mx-auto px-4 relative z-10 animate-fade-in text-shadow-md">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-extrabold mb-6 leading-tight !text-white">
              Study in <span className="text-white">Germany</span> - Innovation & Excellence
            </h1>
            <p className="text-2xl mb-8 text-white/90">
              FREE tuition education at world-class universities. Engineering powerhouse, Industry 4.0 leader, and gateway to European innovation careers
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a href="#apply-now" ref={applyNowRef} className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-[#08bcb4] !text-white">
                Start Your Germany Journey
              </a>
              <a href="#universities" ref={universitiesRef} className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
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
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">458K+</div>
              <p className="text-gray-600">International Students</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">400+</div>
              <p className="text-gray-600">Universities</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">FREE</div>
              <p className="text-gray-600">Public University Tuition</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">95%</div>
              <p className="text-gray-600">IAEC Visa Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in Germany Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Germany for Higher Education?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Germany offers the world&apos;s most generous higher education system with tuition-free universities, cutting-edge research, and unmatched engineering excellence.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🆓</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Tuition-Free Public Education</h3>
                <p className="text-gray-600">No tuition fees at 400+ public universities for ALL international students. Only €100-€350 semester contribution covering admin costs.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Industry 4.0 & Engineering Leader</h3>
                <p className="text-gray-600">Home to BMW, Mercedes, Siemens, SAP. World leader in automotive, mechanical engineering, and advanced manufacturing technology.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Research & Innovation Excellence</h3>
                <p className="text-gray-600">50 German universities in world top rankings. Max Planck Institutes, Nobel Prize winners, and cutting-edge research facilities.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">EU Blue Card & Career Opportunities</h3>
                <p className="text-gray-600">18-month job search visa post-graduation. EU Blue Card for skilled professionals with fast-track to permanent residence and citizenship.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Central European Location</h3>
                <p className="text-gray-600">Strategic location in heart of Europe. Easy travel to 9 neighboring countries. Gateway to European markets and opportunities.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🏥</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Quality of Life & Security</h3>
                <p className="text-gray-600">Excellent healthcare system, social security, low crime rates. High standard of living with strong worker rights and benefits.</p>
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
                German Higher Education System
              </h2>
              <p className="text-xl text-gray-600">
                Bologna Process with emphasis on practical application and research excellence
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Bachelor (B.A./B.Sc.)</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">3-4 Years - 180-240 ECTS</div>
                <p className="text-gray-600 text-sm">Comprehensive undergraduate education with strong theoretical and practical foundation.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Master (M.A./M.Sc./M.Eng.)</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">1-2 Years - 60-120 ECTS</div>
                <p className="text-gray-600 text-sm">Specialized advanced study with research or applied focus options.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">👨‍🔬</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Doctorate (Dr.)</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">3-5 Years</div>
                <p className="text-gray-600 text-sm">PhD with independent research, dissertation, and international recognition.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🏫</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Fachhochschule (UAS)</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">Applied Sciences Focus</div>
                <p className="text-gray-600 text-sm">Universities of Applied Sciences with strong industry connections.</p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Academic Structure & Study Options</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Academic Calendar</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Winter Semester:</strong> October - March</li>
                    <li>• <strong>Summer Semester:</strong> April - September</li>
                    <li>• <strong>Christmas Break:</strong> December 20 - January 6</li>
                    <li>• <strong>Summer Break:</strong> July 15 - October 15</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Institution Types</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 106 Public Universities</li>
                    <li>• 217 Universities of Applied Sciences</li>
                    <li>• 57 Art & Music Colleges</li>
                    <li>• 120 Private Universities</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities Section */}
      <section id="universities" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Top German Universities for International Students 2025
              </h2>
              <p className="text-xl text-gray-600">
                World-renowned institutions offering tuition-free education with global recognition
              </p>
            </div>

            <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
              <table className="w-full">
                <thead className="bg-[#08bcb4] text-white">
                  <tr>
                    <th className="p-4 text-left">University</th>
                    <th className="p-4 text-center">THE Ranking 2025</th>
                    <th className="p-4 text-center">Annual Tuition (EUR)</th>
                    <th className="p-4 text-center">Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Technical University of Munich (TUM)</div>
                      <div className="text-sm text-gray-600">Germany&apos;s top-ranked technical university</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#26</td>
                    <td className="p-4 text-center">FREE (€135 semester fee)</td>
                    <td className="p-4 text-center">Munich</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Ludwig Maximilian University Munich (LMU)</div>
                      <div className="text-sm text-gray-600">Research-intensive comprehensive university</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#38</td>
                    <td className="p-4 text-center">FREE (€130 semester fee)</td>
                    <td className="p-4 text-center">Munich</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Heidelberg University</div>
                      <div className="text-sm text-gray-600">Germany&apos;s oldest university and research leader</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#47</td>
                    <td className="p-4 text-center">FREE (€185 semester fee)</td>
                    <td className="p-4 text-center">Heidelberg</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Humboldt University of Berlin</div>
                      <div className="text-sm text-gray-600">Historic university with modern research focus</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#84</td>
                    <td className="p-4 text-center">FREE (€315 semester fee)</td>
                    <td className="p-4 text-center">Berlin</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">RWTH Aachen University</div>
                      <div className="text-sm text-gray-600">Engineering and technology excellence</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#92</td>
                    <td className="p-4 text-center">FREE (€337 semester fee)</td>
                    <td className="p-4 text-center">Aachen</td>
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
                German University Admission Requirements
              </h2>
              <p className="text-xl text-gray-600">
                Entry requirements for international students at German universities
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Bachelor's Requirements */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🎓</div>
                  <h3 className="text-2xl font-bold text-gray-900">Bachelor&apos;s Degree Requirements</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Academic Qualifications</h4>
                      <p className="text-gray-600">12+2 with 60%+ or equivalent Abitur qualification</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">German Language Proficiency</h4>
                      <p className="text-gray-600">TestDaF, DSH, or Goethe Institut C1/C2 for German-taught programs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">English Language Proficiency</h4>
                      <p className="text-gray-600">IELTS 6.0+ or TOEFL 80+ for English-taught programs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">APS Certificate</h4>
                      <p className="text-gray-600">Academic Evaluation Certificate from APS (mandatory for Indian students)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Master's Requirements */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-2xl font-bold text-gray-900">Master&apos;s Degree Requirements</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Academic Qualifications</h4>
                      <p className="text-gray-600">Bachelor&apos;s degree with 60%+ (or equivalent German grade 2.5)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Language Requirements</h4>
                      <p className="text-gray-600">TestDaF 4 or DSH-2 for German; IELTS 6.5+ or TOEFL 90+ for English programs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Statement of Purpose</h4>
                      <p className="text-gray-600">Detailed motivation letter and career goals statement</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Work Experience</h4>
                      <p className="text-gray-600">Relevant professional experience (required for some programs)</p>
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
                Cost of Studying in Germany 2025
              </h2>
              <p className="text-xl text-gray-600">
                World&apos;s most affordable quality education with free tuition at public universities
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Education Costs */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Education Costs (EUR/Year)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Public Universities</span>
                    <span className="font-bold text-[#08bcb4]">FREE</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Semester Contribution</span>
                    <span className="font-bold text-[#08bcb4]">€100 - €350</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Private Universities</span>
                    <span className="font-bold text-[#08bcb4]">€3,000 - €30,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Books & Materials</span>
                    <span className="font-bold text-[#08bcb4]">€200 - €400</span>
                  </div>
                </div>
              </div>

              {/* Living Expenses */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Monthly Living Expenses (EUR)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Student Accommodation</span>
                    <span className="font-bold text-green-600">€300 - €500</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Private Accommodation</span>
                    <span className="font-bold text-green-600">€400 - €800</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Food & Groceries</span>
                    <span className="font-bold text-green-600">€200 - €300</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Transportation</span>
                    <span className="font-bold text-green-600">€60 - €90</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Health Insurance</span>
                    <span className="font-bold text-green-600">€110 - €120</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Cost & Blocked Account */}
            <div className="bg-gray-900 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4 !text-white">Annual Cost & Blocked Account Requirement</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2 !text-white">Total Annual Living Cost</h4>
                  <p className="text-3xl font-bold">EUR €8,500 - €12,000</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 !text-white">Blocked Account Minimum</h4>
                  <p className="text-3xl font-bold">EUR €11,904</p>
                </div>
              </div>
              <p className="mt-4 text-gray-300">Blocked account is mandatory for student visa - withdrawal limit €992/month</p>
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
                Germany Student Visa Process 2025
              </h2>
              <p className="text-xl text-gray-600">
                Step-by-step guide to obtaining your German student visa
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">1</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Get University Acceptance</h3>
                <p className="text-gray-600 text-center">Receive letter of acceptance from German university or Studienkolleg</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">2</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">APS Certificate (Indians)</h3>
                <p className="text-gray-600 text-center">Obtain Academic Evaluation Certificate from APS - mandatory for Indian students</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">3</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Open Blocked Account</h3>
                <p className="text-gray-600 text-center">Open blocked account with €11,904 minimum for financial proof</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">4</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Language Proficiency</h3>
                <p className="text-gray-600 text-center">Submit German (TestDaF/DSH) or English (IELTS/TOEFL) language certificates</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">5</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Visa Application</h3>
                <p className="text-gray-600 text-center">Submit application at German Embassy/VFS Global with all documents</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">6</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Residence Permit</h3>
                <p className="text-gray-600 text-center">Apply for residence permit within 3 months of arrival in Germany</p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Student Visa Requirements & Processing</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Essential Documents</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Valid passport (10 years validity)</li>
                    <li>• University acceptance letter</li>
                    <li>• APS certificate (for Indians)</li>
                    <li>• Blocked account proof (€11,904)</li>
                    <li>• Health insurance coverage</li>
                    <li>• Academic transcripts & certificates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Visa Fees & Timeline</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Visa fee: €75</li>
                    <li>• APS fee: €18,000 (Indians)</li>
                    <li>• Processing time: 6-12 weeks</li>
                    <li>• Validity: 2 years (extendable)</li>
                    <li>• Multiple entry permitted</li>
                    <li>• Apply 3 months before travel</li>
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
                German Scholarships for International Students
              </h2>
              <p className="text-xl text-gray-600">
                Government and institutional funding opportunities beyond free tuition
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-400">
                <h3 className="text-lg font-bold mb-3">DAAD Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">German Academic Exchange Service</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Master&apos;s, PhD, research programs</p>
                  <p><strong>Amount:</strong> €850-1,200/month + benefits</p>
                  <p><strong>Coverage:</strong> Living costs, travel, insurance</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-bold mb-3">Deutschlandstipendium</h3>
                <p className="text-sm text-gray-600 mb-3">National scholarship program</p>
                <div className="text-sm">
                  <p><strong>For:</strong> All degree levels</p>
                  <p><strong>Amount:</strong> €300/month</p>
                  <p><strong>Duration:</strong> 2 semesters (renewable)</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-400">
                <h3 className="text-lg font-bold mb-3">Erasmus+ Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">EU mobility program</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Exchange programs</p>
                  <p><strong>Amount:</strong> €250-700/month</p>
                  <p><strong>Duration:</strong> 3-12 months</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-bold mb-3">Heinrich Böll Foundation</h3>
                <p className="text-sm text-gray-600 mb-3">Green Party foundation scholarships</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Bachelor&apos;s, Master&apos;s, PhD</p>
                  <p><strong>Amount:</strong> €649-1,148/month</p>
                  <p><strong>Focus:</strong> Social justice, sustainability</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-400">
                <h3 className="text-lg font-bold mb-3">Konrad Adenauer Foundation</h3>
                <p className="text-sm text-gray-600 mb-3">Political foundation scholarship</p>
                <div className="text-sm">
                  <p><strong>For:</strong> All levels with leadership potential</p>
                  <p><strong>Amount:</strong> €649-1,148/month</p>
                  <p><strong>Criteria:</strong> Academic excellence, social commitment</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#08bcb4]">
                <h3 className="text-lg font-bold mb-3">University-Specific Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Institution merit-based awards</p>
                <div className="text-sm">
                  <p><strong>Examples:</strong> TUM, LMU, Heidelberg</p>
                  <p><strong>Amount:</strong> €500-2,000/semester</p>
                  <p><strong>Criteria:</strong> Academic performance</p>
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
                Work Opportunities in Germany
              </h2>
              <p className="text-xl text-gray-600">
                Europe&apos;s largest economy with unmatched career opportunities for international graduates
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
                      <li>• 120 full days OR 240 half days per year</li>
                      <li>• Unlimited hours for student jobs at university</li>
                      <li>• No work permit required</li>
                      <li>• Access to tax benefits</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Popular Student Jobs</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Research assistant: €12-15/hour</li>
                      <li>• Working student programs: €12-18/hour</li>
                      <li>• Tutoring: €15-20/hour</li>
                      <li>• Internships: €600-1,200/month</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* After Graduation */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-6">Post-Study Opportunities</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Job Search Visa</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 18 months for job search (all graduates)</li>
                      <li>• Unlimited work hours during search</li>
                      <li>• Can be extended with job offer</li>
                      <li>• No restriction on job type</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">EU Blue Card & Residence</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• EU Blue Card for skilled professionals</li>
                      <li>• Permanent residence after 5 years</li>
                      <li>• German citizenship after 8 years</li>
                      <li>• Family reunification rights</li>
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
                  <h4 className="font-bold text-[#08bcb4] mb-2">Engineering & Manufacturing</h4>
                  <p className="text-2xl font-bold text-gray-900">€45,000 - €70,000</p>
                  <p className="text-sm text-gray-600">BMW, Mercedes, Siemens</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Information Technology</h4>
                  <p className="text-2xl font-bold text-gray-900">€42,000 - €65,000</p>
                  <p className="text-sm text-gray-600">SAP, Zalando, Rocket Internet</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Finance & Banking</h4>
                  <p className="text-2xl font-bold text-gray-900">€40,000 - €60,000</p>
                  <p className="text-sm text-gray-600">Deutsche Bank, Allianz</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Consulting</h4>
                  <p className="text-2xl font-bold text-gray-900">€48,000 - €75,000</p>
                  <p className="text-sm text-gray-600">McKinsey, BCG, Deloitte</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Pharmaceuticals</h4>
                  <p className="text-2xl font-bold text-gray-900">€40,000 - €58,000</p>
                  <p className="text-sm text-gray-600">Bayer, Merck, Boehringer</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Research & Development</h4>
                  <p className="text-2xl font-bold text-gray-900">€38,000 - £55,000</p>
                  <p className="text-sm text-gray-600">Max Planck, Fraunhofer</p>
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
                Why Choose IAEC for Germany Studies?
              </h2>
              <p className="text-xl text-gray-600">
                Expert guidance with proven success record for free German education
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">University & Program Selection</h3>
                <p className="text-gray-600">Expert guidance to choose the right German university and program with Industry 4.0 alignment.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🆓</div>
                <h3 className="text-xl font-bold mb-3">Free Education Guidance</h3>
                <p className="text-gray-600">Complete assistance to secure admission at tuition-free German public universities.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3">APS Certificate Support</h3>
                <p className="text-gray-600">Complete guidance for APS Academic Evaluation Certificate - mandatory for Indian students.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🇩🇪</div>
                <h3 className="text-xl font-bold mb-3">German Language Training</h3>
                <p className="text-gray-600">TestDaF, DSH, and Goethe Institut preparation with experienced German language trainers.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3">Blocked Account Setup</h3>
                <p className="text-gray-600">Assistance with blocked account opening and financial documentation for student visa.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🛂</div>
                <h3 className="text-xl font-bold mb-3">Student Visa Support</h3>
                <p className="text-gray-600">Complete German student visa guidance including embassy appointments and document preparation.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-[#08bcb4] text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Our Germany Success Record</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold">95%</div>
                    <p>Student Visa Success Rate</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">2000+</div>
                    <p>Students in Germany</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">75+</div>
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
                Common queries about studying in Germany
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Is education really free in Germany for international students?</h3>
                <p className="text-gray-600">Yes, all public universities in Germany offer tuition-free education to international students. You only pay a small semester contribution (€100-€350) covering administrative costs.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Do I need to know German to study in Germany?</h3>
                <p className="text-gray-600">Not necessarily. Over 500 programs are taught in English, especially at master&apos;s level. However, learning German opens more opportunities and helps with daily life.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">What is a blocked account and how much do I need?</h3>
                <p className="text-gray-600">A blocked account is mandatory for student visa showing €11,904 for living expenses. You can withdraw maximum €992/month during your studies.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Can I work while studying in Germany?</h3>
                <p className="text-gray-600">Yes, students can work 120 full days or 240 half days per year. Unlimited work hours allowed for university jobs like research assistantships.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">What is APS certificate and is it mandatory?</h3>
                <p className="text-gray-600">APS (Academic Evaluation Certificate) is mandatory for Indian students applying to Germany. It validates your academic credentials and costs around ₹18,000.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Can I get permanent residence in Germany after studies?</h3>
                <p className="text-gray-600">Yes, graduates get 18-month job search visa. After finding employment, you can get EU Blue Card leading to permanent residence in 5 years and citizenship in 8 years.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply-now" className="py-20 bg-gradient-to-r from-[#08bcb4] to-[#069aa2] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience FREE German Excellence?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of successful students who chose Germany and now enjoy EU careers without education debt
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-white">
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

export default StudyAbroadGermanyPage;