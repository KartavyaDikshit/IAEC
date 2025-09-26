import Image from 'next/image';
import contactInfo from '../../../../../data/contact-info.json';
import { studyAbroadCountries } from '../../../../lib/countries';

const maltaCountry = studyAbroadCountries.find(country => country.name === 'Malta');

export const metadata = {
  title: "Study in Malta 2025 - Top Universities, Student Visa & English-Speaking EU | IAEC Consultants",
  description: "Study in Malta with IAEC expert guidance. English-speaking EU country, affordable education, Mediterranean lifestyle. Get Maltese student visa, work rights, residence pathways. 95% visa success rate.",
  keywords: "study in Malta, Malta universities for international students, Malta student visa, Malta education system, IAEC Malta counseling, University of Malta, English-speaking EU, Mediterranean study abroad, affordable EU education",
  openGraph: {
    title: "Study in Malta 2025 - Top Universities & Student Visa Guide | IAEC",
    description: "Complete guide to studying in Malta. Expert counseling for top Maltese universities, student visa process, English-speaking EU benefits, and Mediterranean lifestyle.",
    images: ['/images/study-malta-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Study in Malta 2025 - Top Universities & Student Visa Guide | IAEC",
    description: "Complete guide to studying in Malta. Expert counseling for top Maltese universities, student visa process, English-speaking EU benefits, and Mediterranean lifestyle.",
  }
};

const StudyAbroadMaltaPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={maltaCountry?.heroImage || "/images/countries/malta.jpg"}
            alt="Study in Malta"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority
          />
          <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        </div>
        <div className="container mx-auto px-4 relative z-10 animate-fade-in text-shadow-md">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-6xl font-extrabold !text-white mb-6 leading-tight">
              Study in Malta
            </h1>
            <p className="text-2xl mb-8 text-white/90">
              Your Mediterranean gateway to European education.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#apply-now" className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-[#08bcb4] !text-white">
                Start Your Malta Journey
              </a>
              <a href="#universities" className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors !text-white">
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
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">13K+</div>
              <p className="text-gray-600">International Students</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">8</div>
              <p className="text-gray-600">Major Universities</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">€1,080</div>
              <p className="text-gray-600">Semester Fee (Non-EU)</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">95%</div>
              <p className="text-gray-600">IAEC Visa Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in Malta Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Malta for Higher Education?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Malta offers the unique combination of English-language education within the EU, Mediterranean climate, and affordable living costs on a safe island paradise.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🇬🇧</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">English-Speaking EU Country</h3>
                <p className="text-gray-600">English and Maltese are official languages. Study in English while enjoying EU citizenship benefits and Schengen access.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🏝️</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Mediterranean Island Paradise</h3>
                <p className="text-gray-600">Year-round sunshine, crystal-clear waters, historic architecture, and vibrant cultural festivals on a beautiful Mediterranean island.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Highly Affordable Education</h3>
                <p className="text-gray-600">€1,080 per semester for non-EU students. Free for EU citizens. Lowest cost English-language education in Europe.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Historic University Heritage</h3>
                <p className="text-gray-600">University of Malta founded in 1769, offering over 250 years of academic tradition with modern facilities and international recognition.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Safe & Welcoming Environment</h3>
                <p className="text-gray-600">One of the safest countries in Europe with low crime rates, friendly locals, and strong international student support systems.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Strategic Location & EU Benefits</h3>
                <p className="text-gray-600">Central Mediterranean position with easy access to Europe, Africa, and Middle East. Full EU working rights and residence pathways.</p>
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
                Maltese Higher Education System
              </h2>
              <p className="text-xl text-gray-600">
                Bologna Process aligned with ECTS credits and European quality assurance frameworks
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Bachelor&apos;s Degree</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">3-4 Years - 180-240 ECTS</div>
                <p className="text-gray-600 text-sm">Comprehensive undergraduate education with strong practical components.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Master&apos;s Degree</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">1-2 Years - 90-120 ECTS</div>
                <p className="text-gray-600 text-sm">Advanced specialization with research or professional focus options.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">👨‍🔬</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Doctoral (PhD)</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">3-4 Years</div>
                <p className="text-gray-600 text-sm">Research doctorate with international collaboration opportunities.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🏥</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Professional Programs</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">5-6 Years</div>
                <p className="text-gray-600 text-sm">Medicine, dentistry, and pharmacy with clinical practice integration.</p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Academic Structure & Features</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Academic Calendar</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>First Semester:</strong> October - February</li>
                    <li>• <strong>Study Week:</strong> February (no lectures)</li>
                    <li>• <strong>Second Semester:</strong> February - June</li>
                    <li>• <strong>Summer Break:</strong> June - October</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Quality Assurance</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Malta Further and Higher Education Authority (MFHEA) accreditation</li>
                    <li>• European University Association membership</li>
                    <li>• Bologna Process compliance</li>
                    <li>• International programme recognition</li>
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
                Top Maltese Universities for International Students 2025
              </h2>
              <p className="text-xl text-gray-600">
                Quality institutions offering diverse programs in English with EU recognition
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
                      <div className="font-semibold">University of Malta</div>
                      <div className="text-sm text-gray-600">Malta&apos;s largest university with 11,000+ students</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#751</td>
                    <td className="p-4 text-center">€2,160 (Non-EU)</td>
                    <td className="p-4 text-center">Msida</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">American University of Malta</div>
                      <div className="text-sm text-gray-600">Private American-style liberal arts education</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">Unranked</td>
                    <td className="p-4 text-center">€5,000 - €7,000</td>
                    <td className="p-4 text-center">Cospicua</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Malta College of Arts, Science & Technology</div>
                      <div className="text-sm text-gray-600">Vocational and technical education leader</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">Unranked</td>
                    <td className="p-4 text-center">€1,500 - €3,000</td>
                    <td className="p-4 text-center">Paola</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">St Martin&apos;s Institute of Higher Education</div>
                      <div className="text-sm text-gray-600">Specialized programs in education and social sciences</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">Unranked</td>
                    <td className="p-4 text-center">€3,000 - €5,000</td>
                    <td className="p-4 text-center">Hamrun</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Mediterranean School of Business</div>
                      <div className="text-sm text-gray-600">MBA and business programs with international focus</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">Unranked</td>
                    <td className="p-4 text-center">€13,500 - €15,000</td>
                    <td className="p-4 text-center">St Julian&apos;s</td>
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
                Maltese University Admission Requirements
              </h2>
              <p className="text-xl text-gray-600">
                Entry requirements for international students at Maltese universities
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
                      <p className="text-gray-600">Completion of secondary education (12th grade) with good grades in relevant subjects</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">English Language Proficiency</h4>
                      <p className="text-gray-600">IELTS 6.0+, TOEFL 90+, or equivalent (may be waived for native speakers)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Application Process</h4>
                      <p className="text-gray-600">Online application through university portal with supporting documents</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Subject-Specific Requirements</h4>
                      <p className="text-gray-600">Additional requirements for medicine, engineering, and other specialized programs</p>
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
                      <p className="text-gray-600">Bachelor&apos;s degree in relevant field with good academic standing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">English Language Requirements</h4>
                      <p className="text-gray-600">IELTS 6.5+, TOEFL 100+, or equivalent for most programs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Statement of Purpose</h4>
                      <p className="text-gray-600">Detailed motivation letter explaining academic and career goals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Professional Experience</h4>
                      <p className="text-gray-600">Work experience required for some professional programs (MBA, etc.)</p>
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
                Cost of Studying in Malta 2025
              </h2>
              <p className="text-xl text-gray-600">
                Affordable EU education with English instruction and Mediterranean lifestyle
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Tuition Fees */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Annual Tuition Fees (EUR)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">EU/EEA Citizens</span>
                    <span className="font-bold text-[#08bcb4]">FREE</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Non-EU (Public Universities)</span>
                    <span className="font-bold text-[#08bcb4]">€2,160</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Private Universities</span>
                    <span className="font-bold text-[#08bcb4]">€5,000 - €15,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Medicine & Dentistry</span>
                    <span className="font-bold text-[#08bcb4]">€15,000 - €25,000</span>
                  </div>
                </div>
              </div>

              {/* Living Expenses */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Monthly Living Expenses (EUR)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Accommodation (Shared)</span>
                    <span className="font-bold text-green-600">€300 - €500</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Accommodation (Private)</span>
                    <span className="font-bold text-green-600">€600 - €1,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Food & Groceries</span>
                    <span className="font-bold text-green-600">€200 - €300</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Transportation</span>
                    <span className="font-bold text-green-600">€21 - €50</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Personal Expenses</span>
                    <span className="font-bold text-green-600">€100 - €200</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Advantages */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-center mb-6">Malta&apos;s Cost Advantages</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">EU Citizens</h4>
                  <p className="text-2xl font-bold text-gray-900">FREE Tuition</p>
                  <p className="text-sm text-gray-600">All public university programs</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Non-EU Students</h4>
                  <p className="text-2xl font-bold text-gray-900">€1,080/semester</p>
                  <p className="text-sm text-gray-600">Lowest in English-speaking EU</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Living Costs</h4>
                  <p className="text-2xl font-bold text-gray-900">€600-1,200/month</p>
                  <p className="text-sm text-gray-600">Including accommodation</p>
                </div>
              </div>
            </div>

            {/* Total Annual Cost */}
            <div className="bg-gray-900 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4 !text-white">Estimated Total Annual Cost</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">EU Citizens</h4>
                  <p className="text-3xl font-bold">EUR €7,200 - €14,400</p>
                  <p className="text-sm text-gray-300">Living expenses only</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Non-EU Students</h4>
                  <p className="text-3xl font-bold">EUR €9,360 - €16,560</p>
                  <p className="text-sm text-gray-300">Including tuition and living</p>
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
                Malta Student Visa Process 2025
              </h2>
              <p className="text-xl text-gray-600">
                Step-by-step guide to obtaining your Maltese student visa (Schengen Type D)
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">1</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Get University Acceptance</h3>
                <p className="text-gray-600 text-center">Receive official enrollment letter from recognized Maltese educational institution</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">2</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Determine Visa Type</h3>
                <p className="text-gray-600 text-center">Short-stay (Type C) for &lt;90 days or Long-stay (Type D) for &gt;90 days programs</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">3</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Financial Documentation</h3>
                <p className="text-gray-600 text-center">Show €1,000,000 (₹10 lakh) financial capacity for entire study duration</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">4</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Health Insurance</h3>
                <p className="text-gray-600 text-center">Obtain travel medical insurance with minimum €50,000 coverage for entire stay</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">5</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Document Apostille</h3>
                <p className="text-gray-600 text-center">Get all education certificates apostilled and translated to English</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">6</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Embassy Appointment</h3>
                <p className="text-gray-600 text-center">Submit application at VFS Global or Maltese embassy with biometrics</p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Student Visa Requirements & Processing</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Essential Documents</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Valid passport (10 months validity)</li>
                    <li>• University enrollment letter</li>
                    <li>• Completed visa application form</li>
                    <li>• Financial proof (bank statements)</li>
                    <li>• Health insurance (€50,000 coverage)</li>
                    <li>• Accommodation confirmation</li>
                    <li>• Academic documents (apostilled)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Processing Information</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Visa fee: €100-120</li>
                    <li>• Processing time: 15-30 days</li>
                    <li>• Apply 9 weeks before course start</li>
                    <li>• Work rights: 20 hours/week (after 3 months)</li>
                    <li>• Post-study work permit available</li>
                    <li>• Residence permit for long courses</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Opportunities Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Work Opportunities in Malta
              </h2>
              <p className="text-xl text-gray-600">
                Build your career in English-speaking EU environment with Mediterranean lifestyle
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
                      <li>• 20 hours per week after 3 months of study</li>
                      <li>• Work permit required through employer</li>
                      <li>• Full-time work during academic breaks</li>
                      <li>• English-language work environment</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Popular Student Jobs</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Tourism/hospitality: €6-10/hour</li>
                      <li>• Language tutoring: €15-25/hour</li>
                      <li>• Customer service: €7-12/hour</li>
                      <li>• Research assistant: €8-15/hour</li>
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
                      <li>• EU-wide job search opportunities</li>
                      <li>• Path to permanent residence</li>
                      <li>• Maltese citizenship pathways available</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Growing Industries</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Financial services and fintech</li>
                      <li>• Gaming and IT industry</li>
                      <li>• Tourism and hospitality</li>
                      <li>• Maritime and shipping</li>
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
                  <h4 className="font-bold text-[#08bcb4] mb-2">Finance & Banking</h4>
                  <p className="text-2xl font-bold text-gray-900">€25,000 - €45,000</p>
                  <p className="text-sm text-gray-600">Financial services, banks, fintech</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">IT & Gaming</h4>
                  <p className="text-2xl font-bold text-gray-900">€22,000 - €40,000</p>
                  <p className="text-sm text-gray-600">Software development, gaming</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Tourism & Hospitality</h4>
                  <p className="text-2xl font-bold text-gray-900">€18,000 - €30,000</p>
                  <p className="text-sm text-gray-600">Hotels, restaurants, tourism</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Healthcare</h4>
                  <p className="text-2xl font-bold text-gray-900">€28,000 - €50,000</p>
                  <p className="text-sm text-gray-600">Nursing, pharmacy, medicine</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Engineering</h4>
                  <p className="text-2xl font-bold text-gray-900">€24,000 - €42,000</p>
                  <p className="text-sm text-gray-600">Civil, electrical, mechanical</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Business & Management</h4>
                  <p className="text-2xl font-bold text-gray-900">€20,000 - £38,000</p>
                  <p className="text-sm text-gray-600">Marketing, operations, consulting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* IAEC Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose IAEC for Malta Studies?
              </h2>
              <p className="text-xl text-gray-600">
                Expert guidance with proven success record for Maltese university admissions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">University & Program Selection</h3>
                <p className="text-gray-600">Expert guidance for choosing the right Maltese university with focus on affordable, English-taught programs.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🏝️</div>
                <h3 className="text-xl font-bold mb-3">Malta Lifestyle Preparation</h3>
                <p className="text-gray-600">Comprehensive guidance on island life, accommodation options, and cultural adaptation for Malta.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3">Document Apostille Support</h3>
                <p className="text-gray-600">Complete assistance with apostille, translation, and document preparation for Malta visa applications.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3">Financial Planning & Scholarships</h3>
                <p className="text-gray-600">Help with financial planning and identifying scholarship opportunities at Maltese universities.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🛂</div>
                <h3 className="text-xl font-bold mb-3">Visa & Work Permit Support</h3>
                <p className="text-gray-600">Complete Malta visa guidance including Schengen visa, residence permits, and work permit procedures.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold mb-3">Accommodation & Arrival Support</h3>
                <p className="text-gray-600">Assistance with finding suitable accommodation and smooth transition to life in Malta.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-[#08bcb4] text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Our Malta Success Record</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold">95%</div>
                    <p>Student Visa Success Rate</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">500+</div>
                    <p>Students in Malta</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">8</div>
                    <p>Partner Universities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common queries about studying in Malta
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Is education free for EU citizens in Malta?</h3>
                <p className="text-gray-600">Yes, EU/EEA citizens can study for free at public universities in Malta. Non-EU students pay €1,080 per semester, which is still very affordable.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Can I work while studying in Malta on a student visa?</h3>
                <p className="text-gray-600">Yes, students can work up to 20 hours per week after 3 months of study, but need to obtain a work permit through their employer.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">What are the language requirements for studying in Malta?</h3>
                <p className="text-gray-600">Most programs are taught in English. IELTS 6.0+ or TOEFL 90+ is typically required, though requirements may be waived for native English speakers.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Can I stay in Malta after graduation to work?</h3>
                <p className="text-gray-600">Yes, you can apply for a work permit after graduation. Malta offers pathways to permanent residence and eventual citizenship for qualified graduates.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">How is the weather and lifestyle in Malta?</h3>
                <p className="text-gray-600">Malta has a Mediterranean climate with mild winters and warm summers. The island offers beautiful beaches, historic sites, vibrant nightlife, and outdoor activities year-round.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">What types of accommodation are available for students?</h3>
                <p className="text-gray-600">Students can choose from university hostels (limited), shared apartments, private rooms, or studio apartments, with costs ranging from €300-1,000 per month.</p>
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
              Ready to Experience Malta&apos;s Island Paradise?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of successful students who chose Malta and now enjoy EU careers with English education and Mediterranean lifestyle
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-white">
                Book Free Counselling
              </a>
              <a href="/mock-test" className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors text-white">
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

export default StudyAbroadMaltaPage;
