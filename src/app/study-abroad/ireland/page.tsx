'use client';

'use client';

import contactInfo from '../../../../data/contact-info.json';
import Image from 'next/image';
import { studyAbroadCountries } from '../../../lib/countries';
import CountryRibbon from '@/components/home/CountryRibbon';
import { useEffect, useRef } from 'react';

const irelandCountry = studyAbroadCountries.find(country => country.name === 'Ireland');

const StudyAbroadIrelandPage = () => {
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
            src={irelandCountry?.heroImage || "/images/countries/ireland.jpg"}
            alt="Study in Ireland"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
              <div className="relative z-10 text-center text-white p-4 animate-fade-in text-shadow-md">
                <h1 className="text-6xl font-extrabold !text-white mb-6 leading-tight">
                  Study in Ireland
                </h1>
                <p className="text-2xl mb-8 text-white/90">
                  Your gateway to European innovation and culture.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a href="#apply-now" ref={applyNowRef} className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-[#08bcb4] !text-white">
                    Start Your Ireland Journey
                  </a>
                  <a href="#universities" ref={universitiesRef} className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors !text-white">
                    View Top Universities
                  </a>
                </div>
              </div>      </section>
      {/* </section> */}

      {/* Quick Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">1000+</div>
              <p className="text-gray-600">MNCs in Ireland</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">72</div>
              <p className="text-gray-600">Universities</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">2</div>
              <p className="text-gray-600">Major Intakes</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">95%</div>
              <p className="text-gray-600">IAEC Visa Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in Ireland Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Ireland for Higher Education?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Ireland is the only English-speaking country in the EU, offering world-class education, tech innovation, and easy access to European opportunities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🍀</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">English-Speaking EU Country</h3>
                <p className="text-gray-600">Only English-speaking nation in the EU. Study in English and gain access to 27 EU countries for work and travel opportunities.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">European Tech Hub</h3>
                <p className="text-gray-600">Home to 1000+ MNCs including Google, Apple, Facebook, Microsoft, and IBM. 9 of 10 global ICT companies have European HQ in Ireland.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">World-Class Universities</h3>
                <p className="text-gray-600">Trinity College Dublin, UCD, and other prestigious institutions ranked globally. Home to Europe&apos;s leading research centers and Nobel laureates.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Affordable Quality Education</h3>
                <p className="text-gray-600">Lower tuition fees (€10,000-€25,000) compared to UK/USA. Excellent value for money with globally recognized degrees.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">2-Year Stay Back Visa</h3>
                <p className="text-gray-600">Graduate visa allows 2 years to work in Ireland post-studies. Excellent pathway to EU residence and citizenship.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🏰</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Rich Cultural Heritage</h3>
                <p className="text-gray-600">Land of storytellers, Nobel Prize winners, and cultural legends. Safe, welcoming society with strong literary and artistic traditions.</p>
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
                Irish Education System (NFQ)
              </h2>
              <p className="text-xl text-gray-600">
                National Framework of Qualifications with globally recognized standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Higher Certificate</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">Level 6 - 2 Years</div>
                <p className="text-gray-600 text-sm">Specialized vocational education and professional development programs.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Bachelor&apos;s Degree</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">Level 7/8 - 3-4 Years</div>
                <p className="text-gray-600 text-sm">Comprehensive undergraduate education with honours and ordinary degrees.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Master&apos;s Degree</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">Level 9 - 1-2 Years</div>
                <p className="text-gray-600 text-sm">Advanced study and research opportunities in specialized fields.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">👨‍🎓</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Doctoral Degree</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">Level 10 - 3+ Years</div>
                <p className="text-gray-600 text-sm">Highest qualification with original research and dissertation.</p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Academic Calendar & Institution Types</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Academic Year Structure</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Semester 1:</strong> September - December</li>
                    <li>• <strong>Christmas Break:</strong> December - January</li>
                    <li>• <strong>Semester 2:</strong> January - May</li>
                    <li>• <strong>Summer Break:</strong> May - September</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Higher Education Institutions</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 7 Public Universities</li>
                    <li>• 14 Institutes of Technology (IoT)</li>
                    <li>• 7 Colleges of Education</li>
                    <li>• 15 Private Higher Education Institutions</li>
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
                Top Irish Universities for International Students 2025
              </h2>
              <p className="text-xl text-gray-600">
                Prestigious institutions with global rankings and strong industry connections
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
                      <div className="font-semibold">Trinity College Dublin (TCD)</div>
                      <div className="text-sm text-gray-600">Ireland&apos;s oldest and most prestigious university</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#87</td>
                    <td className="p-4 text-center">€14,000 - €55,000</td>
                    <td className="p-4 text-center">Dublin</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">University College Dublin (UCD)</div>
                      <div className="text-sm text-gray-600">Ireland&apos;s largest university with global reach</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#126</td>
                    <td className="p-4 text-center">€20,000 - €60,000</td>
                    <td className="p-4 text-center">Dublin</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">University College Cork (UCC)</div>
                      <div className="text-sm text-gray-600">Research-intensive with strong industry ties</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#273</td>
                    <td className="p-4 text-center">€14,000 - €20,000</td>
                    <td className="p-4 text-center">Cork</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">University of Galway (UG)</div>
                      <div className="text-sm text-gray-600">Strong international focus with 45 countries</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#273</td>
                    <td className="p-4 text-center">€14,000 - €50,000</td>
                    <td className="p-4 text-center">Galway</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Dublin City University (DCU)</div>
                      <div className="text-sm text-gray-600">Innovation-focused with strong tech programs</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#412</td>
                    <td className="p-4 text-center">€12,000 - €19,000</td>
                    <td className="p-4 text-center">Dublin</td>
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
                Irish University Admission Requirements
              </h2>
              <p className="text-xl text-gray-600">
                Entry requirements for international students at Irish universities
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
                      <p className="text-gray-600">12th grade completion with good grades (varies by course and university)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">English Proficiency</h4>
                      <p className="text-gray-600">IELTS 6.0-6.5+ or TOEFL 80-90+ or PTE 56-63+ (varies by program)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Personal Statement</h4>
                      <p className="text-gray-600">Statement of purpose and motivation letter for chosen field</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Supporting Documents</h4>
                      <p className="text-gray-600">Transcripts, certificates, recommendation letters, portfolio (if required)</p>
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
                      <p className="text-gray-600">Bachelor&apos;s degree with 60%+ (2.1 honours or equivalent)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">English Proficiency</h4>
                      <p className="text-gray-600">IELTS 6.5-7.0+ or TOEFL 90-100+ or PTE 63-70+ for most programs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Work Experience</h4>
                      <p className="text-gray-600">Relevant professional experience (required for some programs, especially MBA)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Research Proposal</h4>
                      <p className="text-gray-600">For research-based programs - detailed research proposal and supervisor contact</p>
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
                Cost of Studying in Ireland 2025
              </h2>
              <p className="text-xl text-gray-600">
                Affordable European education with excellent career prospects
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Tuition Fees */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Annual Tuition Fees (EUR)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Bachelor&apos;s Degree</span>
                    <span className="font-bold text-[#08bcb4]">€9,850 - €55,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Master&apos;s Degree</span>
                    <span className="font-bold text-[#08bcb4]">€9,950 - €35,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">PhD Program</span>
                    <span className="font-bold text-[#08bcb4]">€4,000 - €20,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Student Contribution</span>
                    <span className="font-bold text-[#08bcb4]">€3,000 (max/year)</span>
                  </div>
                </div>
              </div>

              {/* Living Expenses */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Monthly Living Expenses (EUR)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Accommodation</span>
                    <span className="font-bold text-green-600">€450 - €1,200</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Food & Groceries</span>
                    <span className="font-bold text-green-600">€250 - €350</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Transportation</span>
                    <span className="font-bold text-green-600">€50 - €70</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Utilities & Internet</span>
                    <span className="font-bold text-green-600">€200 - €225</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Personal & Social</span>
                    <span className="font-bold text-green-600">€150 - €400</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Cost Estimation */}
            <div className="bg-gray-900 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4 !text-white">Estimated Total Annual Cost</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2 !text-white">Bachelor&apos;s Programs</h4>
                  <p className="text-3xl font-bold">EUR €22,000 - €67,000</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 !text-white">Master&apos;s Programs</h4>
                  <p className="text-3xl font-bold">EUR €22,000 - €47,000</p>
                </div>
              </div>
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
                Ireland Student Visa Process 2025
              </h2>
              <p className="text-xl text-gray-600">
                Step-by-step guide to obtaining your Irish student visa
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">1</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Check Visa Requirements</h3>
                <p className="text-gray-600 text-center">Use Irish visa checker tool to determine if you need a visa based on nationality</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">2</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Get University Acceptance</h3>
                <p className="text-gray-600 text-center">Receive letter of acceptance from Irish institution with course details</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">3</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Prepare Financial Proof</h3>
                <p className="text-gray-600 text-center">Show €585/month (€4,680 for courses &lt;8 months) + tuition fees</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">4</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Online Application</h3>
                <p className="text-gray-600 text-center">Apply through AVATS system with all required documents</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">5</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Submit Documents</h3>
                <p className="text-gray-600 text-center">Submit original documents at VFS/Embassy with visa fees</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">6</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Visa Decision</h3>
                <p className="text-gray-600 text-center">Decision typically within 8 weeks. Apply 2-3 months before travel</p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Student Visa Requirements & Fees</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Essential Documents</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Passport valid for 12+ months</li>
                    <li>• Letter of acceptance from Irish institution</li>
                    <li>• Proof of English language proficiency</li>
                    <li>• Financial evidence (bank statements)</li>
                    <li>• Health insurance coverage</li>
                    <li>• Academic transcripts and certificates</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Visa Fees & Processing</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Single entry visa: €60</li>
                    <li>• Multi-entry visa: €100 (recommended)</li>
                    <li>• Processing time: Up to 8 weeks</li>
                    <li>• Apply 2-3 months before travel</li>
                    <li>• Biometric collection may be required</li>
                    <li>• Original documents must be submitted</li>
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
                Irish Scholarships for International Students
              </h2>
              <p className="text-xl text-gray-600">
                Government and university scholarships to support your Irish education
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-400">
                <h3 className="text-lg font-bold mb-3">Government of Ireland Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">International postgraduate scholarships</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Master&apos;s and PhD programs</p>
                  <p><strong>Amount:</strong> €18,500 stipend + fees</p>
                  <p><strong>Duration:</strong> 1-4 years</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-bold mb-3">Trinity College Dublin Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Undergraduate and postgraduate awards</p>
                <div className="text-sm">
                  <p><strong>Types:</strong> Entrance, academic excellence</p>
                  <p><strong>Amount:</strong> €5,000 - €25,000</p>
                  <p><strong>Criteria:</strong> Merit-based</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-400">
                <h3 className="text-lg font-bold mb-3">UCD Global Excellence Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">For high-achieving international students</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Undergraduate programs</p>
                  <p><strong>Amount:</strong> €4,000 - €8,000</p>
                  <p><strong>Coverage:</strong> Tuition fee reduction</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-bold mb-3">DCU International Student Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Merit-based financial assistance</p>
                <div className="text-sm">
                  <p><strong>For:</strong> All programs</p>
                  <p><strong>Amount:</strong> €3,000 - €6,000</p>
                  <p><strong>Renewal:</strong> Annual based on performance</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-400">
                <h3 className="text-lg font-bold mb-3">UCC International Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Regional and merit-based awards</p>
                <div className="text-sm">
                  <p><strong>Types:</strong> Country-specific awards</p>
                  <p><strong>Amount:</strong> €2,000 - €10,000</p>
                  <p><strong>Focus:</strong> Academic achievement</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#08bcb4]">
                <h3 className="text-lg font-bold mb-3">Enterprise Ireland Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Innovation and entrepreneurship focus</p>
                <div className="text-sm">
                  <p><strong>For:</strong> STEM and business programs</p>
                  <p><strong>Support:</strong> Funding + mentorship</p>
                  <p><strong>Benefit:</strong> Industry connections</p>
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
                Work Opportunities in Ireland
              </h2>
              <p className="text-xl text-gray-600">
                Study, work, and build your career in Europe&apos;s tech hub
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
                      <li>• 20 hours per week during term time</li>
                      <li>• 40 hours per week during holidays</li>
                      <li>• No work permit required</li>
                      <li>• All sectors and industries accessible</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Popular Student Jobs</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Retail & hospitality: €10-12/hour</li>
                      <li>• Research assistant: €12-15/hour</li>
                      <li>• Tutoring: €15-20/hour</li>
                      <li>• Tech internships: €15-25/hour</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* After Graduation */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-6">Post-Study Opportunities</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Third Level Graduate Scheme</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 2 years stay back for master&apos;s graduates</li>
                      <li>• 1 year stay back for bachelor&apos;s graduates</li>
                      <li>• Work in any field</li>
                      <li>• Path to EU Blue Card</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Long-term Residence & EU Benefits</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Critical Skills Employment Permit</li>
                      <li>• General Employment Permit</li>
                      <li>• EU long-term residence</li>
                      <li>• Irish citizenship after 5 years</li>
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
                  <p className="text-2xl font-bold text-gray-900">€35,000 - €70,000</p>
                  <p className="text-sm text-gray-600">Software development, data science</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Financial Services</h4>
                  <p className="text-2xl font-bold text-gray-900">€30,000 - €60,000</p>
                  <p className="text-sm text-gray-600">Banking, fintech, insurance</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Pharmaceuticals</h4>
                  <p className="text-2xl font-bold text-gray-900">€32,000 - €65,000</p>
                  <p className="text-sm text-gray-600">Research, manufacturing, quality</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Engineering</h4>
                  <p className="text-2xl font-bold text-gray-900">€30,000 - €55,000</p>
                  <p className="text-sm text-gray-600">Mechanical, civil, electrical</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Business & Management</h4>
                  <p className="text-2xl font-bold text-gray-900">€28,000 - €50,000</p>
                  <p className="text-sm text-gray-600">Consulting, operations, marketing</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Healthcare</h4>
                  <p className="text-2xl font-bold text-gray-900">€30,000 - €60,000</p>
                  <p className="text-sm text-gray-600">Nursing, pharmacy, therapy</p>
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
                Why Choose IAEC for Ireland Studies?
              </h2>
              <p className="text-xl text-gray-600">
                Expert guidance with proven success record and comprehensive support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">University & Course Selection</h3>
                <p className="text-gray-600">Expert guidance to choose the right Irish university and program with EU career alignment.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold mb-3">Application & Documentation</h3>
                <p className="text-gray-600">Complete assistance with university applications, personal statements, and document preparation.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3">Scholarship Guidance</h3>
                <p className="text-gray-600">Identify and apply for Government of Ireland, university-specific, and private scholarships.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3">Test Preparation</h3>
                <p className="text-gray-600">IELTS, TOEFL, PTE preparation with experienced trainers and mock tests.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🛂</div>
                <h3 className="text-xl font-bold mb-3">Student Visa Support</h3>
                <p className="text-gray-600">Complete Irish student visa guidance including AVATS application and document preparation.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🏡</div>
                <h3 className="text-xl font-bold mb-3">Pre-Departure & Settlement</h3>
                <p className="text-gray-600">Accommodation assistance, banking setup, and orientation for smooth transition to Irish life.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-[#08bcb4] text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Our Ireland Success Record</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold">95%</div>
                    <p>Student Visa Success Rate</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">800+</div>
                    <p>Students in Ireland</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">25+</div>
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
                Common queries about studying in Ireland
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">What are the benefits of studying in Ireland as an EU country?</h3>
                <p className="text-gray-600">Ireland offers EU access, English instruction, 2-year post-study work rights, and pathways to EU residence and citizenship. Work anywhere in 27 EU countries after graduation.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">How much can I work while studying in Ireland on student visa?</h3>
                <p className="text-gray-600">International students can work 20 hours per week during term time and 40 hours per week during holidays without requiring a work permit.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">What is the Third Level Graduate Scheme and how long can I stay?</h3>
                <p className="text-gray-600">Master&apos;s graduates can stay 2 years, bachelor&apos;s graduates 1 year to work in Ireland. This provides pathway to Critical Skills Employment Permit and long-term residence.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Which companies hire international graduates in Ireland?</h3>
                <p className="text-gray-600">1000+ MNCs including Google, Apple, Facebook, Microsoft, IBM, Pfizer, and financial services companies. Ireland is the European HQ for many global firms.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">What is the cost of studying in Ireland compared to other EU countries?</h3>
                <p className="text-gray-600">Ireland offers competitive tuition fees (€10,000-€25,000) with excellent ROI. Lower than UK, similar to Netherlands, higher than Germany but with English instruction.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">How can I get Irish citizenship and EU passport?</h3>
                <p className="text-gray-600">After 5 years of continuous residence in Ireland (including study + work periods), you can apply for Irish citizenship and EU passport, granting full EU rights.</p>
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
              Ready to Experience the Emerald Isle?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of successful students who chose Ireland and now enjoy EU citizenship and global careers
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

export default StudyAbroadIrelandPage;