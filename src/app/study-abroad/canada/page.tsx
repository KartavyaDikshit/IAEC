import contactInfo from '../../../../data/contact-info.json';
import Image from 'next/image';
import { studyAbroadCountries } from '../../../lib/countries';

const canadaCountry = studyAbroadCountries.find(country => country.name === 'Canada');

export const metadata = {
  title: "Study in Canada 2025 - Top Universities, Study Permit & Express Entry | IAEC Consultants",
  description: "Study in Canada with IAEC expert guidance. 1M+ international students, world-class education. Get Study Permit, PGWP, Express Entry pathway to PR. 95% visa success rate.",
  keywords: "study in Canada, Canada universities for international students, study permit Canada, Canada education system, IAEC Canada counseling, Canadian universities admission, PGWP work permit, Express Entry Canada, Toronto McGill UBC universities",
  openGraph: {
    title: "Study in Canada 2025 - Top Universities & Study Permit Guide | IAEC",
    description: "Complete guide to studying in Canada. Expert counseling for top Canadian universities, study permit process, PGWP, and Express Entry pathways.",
    images: ['/images/study-canada-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Study in Canada 2025 - Top Universities & Study Permit Guide | IAEC",
    description: "Complete guide to studying in Canada. Expert counseling for top Canadian universities, study permit process, PGWP, and Express Entry pathways.",
  }
};

const StudyAbroadCanadaPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
                  <Image
                    src={canadaCountry?.heroImage || "/images/countries/canada.jpg"}
                    alt="Study in Canada"
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                    priority
                  />         
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      <div className="relative z-10 text-center text-white p-4 animate-fade-in text-shadow-md">
        <h1 className="text-6xl font-extrabold !text-white mb-6 leading-tight">
          Study in Canada
        </h1>
        <p className="text-2xl mb-8 text-white/90">
          Your future in a land of opportunities.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#apply-now" className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-[#08bcb4] !text-white">
            Start Your Canada Journey
          </a>
          <a href="#universities" className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors !text-white">
            View Top Universities
          </a>
        </div>
      </div>
      
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">1M+</div>
              <p className="text-gray-600">International Students</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">146</div>
              <p className="text-gray-600">Universities</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">3</div>
              <p className="text-gray-600">Major Intakes</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">95%</div>
              <p className="text-gray-600">IAEC Visa Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in Canada Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Canada for Higher Education?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Canada ranks #1 in quality of life globally, offering world-class education, cultural diversity, and direct pathways to permanent residency through Express Entry.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🍁</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">World&apos;s Best Quality of Life</h3>
                <p className="text-gray-600">Canada ranks #1 globally for quality of life. Safe, peaceful, politically stable with excellent healthcare and human rights protection.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Affordable World-Class Education</h3>
                <p className="text-gray-600">Lower tuition fees compared to USA and UK. Canadian degrees are globally recognized with rigorous quality standards among the highest worldwide.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Multicultural & Bilingual</h3>
                <p className="text-gray-600">Study in English or French. Experience Canada's welcoming multicultural society with students from 200+ countries creating vibrant diversity.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Post-Graduation Work Permit (PGWP)</h3>
                <p className="text-gray-600">Work in Canada for up to 3 years after graduation through PGWP. Gain valuable Canadian work experience and earn competitive salaries.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🏡</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Express Entry to Permanent Residency</h3>
                <p className="text-gray-600">Direct pathway to Canadian permanent residency through Express Entry system. Canadian education and work experience boost your CRS score significantly.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🔬</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Research & Innovation Excellence</h3>
                <p className="text-gray-600">Canada allocates top 3 highest budget globally for post-secondary education. State-of-the-art labs and cutting-edge research opportunities.</p>
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
                Canadian Education System
              </h2>
              <p className="text-xl text-gray-600">
                Standardized credit system with flexible pathways and bilingual options
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Certificate</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">1 Year</div>
                <p className="text-gray-600 text-sm">Specialized training and skill development programs for career enhancement.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">📜</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Diploma</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">2-3 Years</div>
                <p className="text-gray-600 text-sm">Practical education with industry connections and PGWP eligibility.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Bachelor&apos;s</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">4 Years</div>
                <p className="text-gray-600 text-sm">90-120 credit hours. Comprehensive undergraduate education with co-op options.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Master&apos;s</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">1-2 Years</div>
                <p className="text-gray-600 text-sm">30+ credit hours. Research or coursework-based advanced study programs.</p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Academic Calendar & Intakes</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Three Major Intakes</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Fall (September):</strong> Primary intake with all programs available</li>
                    <li>• <strong>Winter (January):</strong> Second intake with good program selection</li>
                    <li>• <strong>Summer (May):</strong> Limited programs, fast-track options</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Grading System</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>GPA Scale:</strong> 0.0 to 4.0 (A = 4.0, F = 0.0)</li>
                    <li>• <strong>Credit System:</strong> 3-5 credits per course</li>
                    <li>• Academic year: September to April/May</li>
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
                Top Canadian Universities for International Students 2025
              </h2>
              <p className="text-xl text-gray-600">
                Nine Canadian universities rank in global top 200, with three in top 100 - offering world-class education and research opportunities
              </p>
            </div>

            <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
              <table className="w-full">
                <thead className="bg-[#08bcb4] text-white">
                  <tr>
                    <th className="p-4 text-left">University</th>
                    <th className="p-4 text-center">QS Ranking 2025</th>
                    <th className="p-4 text-center">Annual Tuition (CAD)</th>
                    <th className="p-4 text-center">Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">University of Toronto</div>
                      <div className="text-sm text-gray-600">Canada&apos;s highest-ranked institution</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#21</td>
                    <td className="p-4 text-center">$30,000 - $58,000</td>
                    <td className="p-4 text-center">Toronto, ON</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">McGill University</div>
                      <div className="text-sm text-gray-600">Harvard of Canada with bilingual environment</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#27</td>
                    <td className="p-4 text-center">$21,000 - $56,000</td>
                    <td className="p-4 text-center">Montreal, QC</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">University of British Columbia</div>
                      <div className="text-sm text-gray-600">Beautiful Vancouver campus with ocean views</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#40</td>
                    <td className="p-4 text-center">$32,000 - $55,000</td>
                    <td className="p-4 text-center">Vancouver, BC</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">University of Alberta</div>
                      <div className="text-sm text-gray-600">Research powerhouse with strong engineering</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#94</td>
                    <td className="p-4 text-center">$13,000 - $49,000</td>
                    <td className="p-4 text-center">Edmonton, AB</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">McMaster University</div>
                      <div className="text-sm text-gray-600">Renowned for health sciences and research</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#119</td>
                    <td className="p-4 text-center">$25,000 - $60,000</td>
                    <td className="p-4 text-center">Hamilton, ON</td>
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
                Canadian University Admission Requirements
              </h2>
              <p className="text-xl text-gray-600">
                Entry requirements for international students at Canadian universities
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
                      <p className="text-gray-600">12th grade completion with 65%+ (varies by program and province)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">English Proficiency</h4>
                      <p className="text-gray-600">IELTS 6.5+ or TOEFL 90+ or PTE 60+ (may vary by program)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Personal Statement</h4>
                      <p className="text-gray-600">Statement of purpose and extracurricular achievements</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Supporting Documents</h4>
                      <p className="text-gray-600">Transcripts, recommendation letters, portfolio (if required)</p>
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
                      <p className="text-gray-600">Bachelor's degree with 70%+ CGPA (3.0/4.0 GPA minimum)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">English Proficiency</h4>
                      <p className="text-gray-600">IELTS 7.0+ or TOEFL 100+ or PTE 65+ for most programs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Standardized Tests</h4>
                      <p className="text-gray-600">GRE/GMAT (for some programs), especially business and engineering</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Work Experience</h4>
                      <p className="text-gray-600">Relevant professional experience (required for MBA and some programs)</p>
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
                Cost of Studying in Canada 2025
              </h2>
              <p className="text-xl text-gray-600">
                Affordable quality education with excellent return on investment
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Tuition Fees */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Annual Tuition Fees (CAD)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Bachelor's Degree</span>
                    <span className="font-bold text-[#08bcb4]">$15,700 - $53,500</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Master's Degree</span>
                    <span className="font-bold text-[#08bcb4]">$13,700 - $45,800</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">PhD Program</span>
                    <span className="font-bold text-[#08bcb4]">$7,000 - $15,100</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">MBA Program</span>
                    <span className="font-bold text-[#08bcb4]">$33,400 - $80,000</span>
                  </div>
                </div>
              </div>

              {/* Living Expenses */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Annual Living Expenses (CAD)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">On-Campus Accommodation</span>
                    <span className="font-bold text-green-600">$8,000 - $15,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Off-Campus (Shared)</span>
                    <span className="font-bold text-green-600">$9,000 - $18,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Food & Groceries</span>
                    <span className="font-bold text-green-600">$6,000 - $8,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Transportation</span>
                    <span className="font-bold text-green-600">$1,200 - $2,400</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Books & Personal</span>
                    <span className="font-bold text-green-600">$4,800 - $6,000</span>
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
                  <p className="text-3xl font-bold">CAD $35,000 - $75,000</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 !text-white">Master&apos;s Programs</h4>
                  <p className="text-3xl font-bold">CAD $33,000 - $70,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Study Permit Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Canada Study Permit Process 2025
              </h2>
              <p className="text-xl text-gray-600">
                Complete guide with new PAL/TAL requirements and study permit caps
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">1</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Get University Acceptance</h3>
                <p className="text-gray-600 text-center">Receive letter of acceptance from a Designated Learning Institution (DLI)</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">2</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Obtain PAL/TAL (NEW)</h3>
                <p className="text-gray-600 text-center">Get Provincial/Territorial Attestation Letter from your chosen province</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">3</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Financial Proof</h3>
                <p className="text-gray-600 text-center">Show tuition fees + CAD $24,505/year living costs proof</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">4</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Submit Online Application</h3>
                <p className="text-gray-600 text-center">Apply through IRCC portal with all documents and pay CAD $150 fee</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">5</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Biometrics & Medical</h3>
                <p className="text-gray-600 text-center">Complete biometrics collection and medical exam (if required)</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">6</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Get Study Permit</h3>
                <p className="text-gray-600 text-center">Processing typically 4-12 weeks. Track application status online</p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Study Permit Changes 2025</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">New Requirements</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Provincial Attestation Letter (PAL) required</li>
                    <li>• Study permit cap: 437,000 for 2025 (10% reduction)</li>
                    <li>• Graduate students now need PAL/TAL</li>
                    <li>• Enhanced language proficiency requirements</li>
                    <li>• Stricter financial proof standards</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">PAL/TAL Exempt Categories</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• K-12 students</li>
                    <li>• Government priority groups</li>
                    <li>• Francophone minority students</li>
                    <li>• Study permit renewals (same DLI & level)</li>
                    <li>• Certain vulnerable cohorts</li>
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
                Canadian Scholarships for International Students
              </h2>
              <p className="text-xl text-gray-600">
                Generous funding opportunities from government, provinces, and universities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-400">
                <h3 className="text-lg font-bold mb-3">Canadian Commonwealth Scholarship</h3>
                <p className="text-sm text-gray-600 mb-3">For students from Commonwealth countries</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Master's and PhD programs</p>
                  <p><strong>Coverage:</strong> Full tuition, living costs, travel</p>
                  <p><strong>Value:</strong> Up to CAD $50,000</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-bold mb-3">Vanier Canada Graduate Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Canada's premier doctoral scholarship</p>
                <div className="text-sm">
                  <p><strong>For:</strong> PhD students</p>
                  <p><strong>Amount:</strong> CAD $50,000/year</p>
                  <p><strong>Duration:</strong> 3 years</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-400">
                <h3 className="text-lg font-bold mb-3">Provincial Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Each province offers specific programs</p>
                <div className="text-sm">
                  <p><strong>Examples:</strong> Ontario Trillium, Quebec Merit</p>
                  <p><strong>Amount:</strong> CAD $5,000 - $25,000</p>
                  <p><strong>Criteria:</strong> Academic excellence</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-bold mb-3">University-Specific Awards</h3>
                <p className="text-sm text-gray-600 mb-3">Merit-based institutional scholarships</p>
                <div className="text-sm">
                  <p><strong>Universities:</strong> UofT, McGill, UBC, etc.</p>
                  <p><strong>Amount:</strong> CAD $3,000 - $40,000</p>
                  <p><strong>Types:</strong> Entrance, academic achievement</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-400">
                <h3 className="text-lg font-bold mb-3">National Research Council (NRCC)</h3>
                <p className="text-sm text-gray-600 mb-3">For research-focused students</p>
                <div className="text-sm">
                  <p><strong>For:</strong> STEM fields research</p>
                  <p><strong>Coverage:</strong> Research funding + stipend</p>
                  <p><strong>Duration:</strong> Project-based</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#08bcb4]">
                <h3 className="text-lg font-bold mb-3">Francophone Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">For French-speaking students</p>
                <div className="text-sm">
                  <p><strong>Programs:</strong> Various francophone initiatives</p>
                  <p><strong>Benefit:</strong> Tuition reduction + support</p>
                  <p><strong>Advantage:</strong> Easier permanent residency path</p>
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
                Work Opportunities in Canada
              </h2>
              <p className="text-xl text-gray-600">
                Study, work, and pathway to permanent residency through Express Entry
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* During Studies */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-6">During Studies</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-[#08bcb4] pl-6">
                    <h4 className="font-bold text-lg mb-2">On/Off Campus Work Rights</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 20 hours per week during studies</li>
                      <li>• Full-time during scheduled breaks</li>
                      <li>• No work permit required</li>
                      <li>• Gain Canadian work experience</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Popular Part-time Jobs</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Research/Teaching Assistant: CAD 15-17/hour</li>
                      <li>• Retail & Customer Service: CAD 12-16/hour</li>
                      <li>• Tutoring: CAD 17-25/hour</li>
                      <li>• Food Service: CAD 12-15/hour</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* After Graduation */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-6">Post-Graduation Work Permit (PGWP)</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">PGWP Duration</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 8 months - 2 years program: Same duration permit</li>
                      <li>• 2+ years program: 3-year work permit</li>
                      <li>• Field of study restrictions (2024 changes)</li>
                      <li>• Work anywhere in Canada</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Express Entry Pathway</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Canadian education: 15-30 CRS points</li>
                      <li>• Canadian work experience: 40-80 points</li>
                      <li>• French proficiency: 25-50 bonus points</li>
                      <li>• Provincial Nominee Programs (PNP)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Prospects */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Graduate Salary Expectations (CAD)</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Information Technology</h4>
                  <p className="text-2xl font-bold text-gray-900">$60,000 - $95,000</p>
                  <p className="text-sm text-gray-600">Software development, cybersecurity</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Engineering</h4>
                  <p className="text-2xl font-bold text-gray-900">$65,000 - $90,000</p>
                  <p className="text-sm text-gray-600">Civil, mechanical, electrical</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Healthcare</h4>
                  <p className="text-2xl font-bold text-gray-900">$70,000 - $110,000</p>
                  <p className="text-sm text-gray-600">Nursing, pharmacy, therapy</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Finance & Business</h4>
                  <p className="text-2xl font-bold text-gray-900">$55,000 - $85,000</p>
                  <p className="text-sm text-gray-600">Banking, accounting, consulting</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Skilled Trades</h4>
                  <p className="text-2xl font-bold text-gray-900">$50,000 - $80,000</p>
                  <p className="text-sm text-gray-600">Plumbing, electrical, carpentry</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Management</h4>
                  <p className="text-2xl font-bold text-gray-900">$75,000 - $120,000</p>
                  <p className="text-sm text-gray-600">Project management, operations</p>
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
                Why Choose IAEC for Canada Studies?
              </h2>
              <p className="text-xl text-gray-600">
                Expert guidance with proven success record and comprehensive support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">University & Program Selection</h3>
                <p className="text-gray-600">Expert guidance to choose the right Canadian university and program with Express Entry alignment.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold mb-3">Application & SOP Support</h3>
                <p className="text-gray-600">Complete assistance with university applications, statement of purpose, and document preparation.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold mb-3">PAL/TAL Assistance</h3>
                <p className="text-gray-600">Navigate new Provincial Attestation Letter requirements and study permit cap system.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3">Test Preparation</h3>
                <p className="text-gray-600">IELTS, TOEFL, PTE, GRE, GMAT preparation with experienced trainers and mock tests.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🛂</div>
                <h3 className="text-xl font-bold mb-3">Study Permit & Visa Support</h3>
                <p className="text-gray-600">Complete study permit guidance including financial documentation and interview preparation.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🏡</div>
                <h3 className="text-xl font-bold mb-3">Express Entry Consulting</h3>
                <p className="text-gray-600">Strategic planning for Express Entry and permanent residency pathways from the start.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-[#08bcb4] text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Our Canada Success Record</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold">95%</div>
                    <p>Study Permit Success Rate</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">3500+</div>
                    <p>Students in Canada</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">120+</div>
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
                Common queries about studying in Canada
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">What is PAL/TAL and why is it required for Canada study permit 2025?</h3>
                <p className="text-gray-600">Provincial/Territorial Attestation Letter (PAL/TAL) is a new requirement introduced in 2025 due to study permit caps. It confirms provincial capacity to accommodate new students.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">How much can I work while studying in Canada on study permit?</h3>
                <p className="text-gray-600">International students can work 20 hours per week during studies and full-time during scheduled breaks without requiring a separate work permit.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">What is PGWP and how long can I work after graduation?</h3>
                <p className="text-gray-600">Post-Graduation Work Permit allows you to work up to 3 years after graduation, depending on program length. It&apos;s your pathway to Express Entry and PR.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">How does Canadian education help with Express Entry and permanent residency?</h3>
                <p className="text-gray-600">Canadian education gives 15-30 CRS points, work experience adds 40-80 points. Combined with French proficiency, you get significant advantages in Express Entry draws.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">What is the cost of studying in Canada compared to other countries?</h3>
                <p className="text-gray-600">Canada offers affordable quality education with total costs CAD 35,000-75,000/year, significantly lower than USA and competitive with Australia and UK.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Which Canadian provinces are best for international students?</h3>
                <p className="text-gray-600">Ontario (Toronto), Quebec (Montreal), British Columbia (Vancouver), and Alberta offer excellent universities, job opportunities, and provincial nomination programs for PR.</p>
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
              Ready to Begin Your Canadian Dream?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of successful students who achieved their dreams with IAEC&apos;s expert guidance and now call Canada home
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
    </div>
  );
};

export default StudyAbroadCanadaPage;