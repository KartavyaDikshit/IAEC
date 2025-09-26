import Image from &apos;next/image&apos;;
import contactInfo from &apos;../../../../../data/contact-info.json&apos;;
import { studyAbroadCountries } from &apos;../../../../lib/countries&apos;;

const spainCountry = studyAbroadCountries.find(country => country.name === &apos;Spain&apos;);

export const metadata = {
  title: "Study in Spain 2025 - Top Universities, Student Visa & Affordable EU Education | IAEC Consultants",
  description: "Study in Spain with IAEC expert guidance. Affordable education, vibrant culture, Mediterranean lifestyle. Get Spanish student visa, work rights, EU benefits. 95% visa success rate.",
  keywords: "study in Spain, Spain universities for international students, Spain student visa, Spain education system, IAEC Spain counseling, Spanish universities admission, Barcelona Madrid Valencia, EU study benefits, study abroad Spain",
  openGraph: {
    title: "Study in Spain 2025 - Top Universities & Student Visa Guide | IAEC",
    description: "Complete guide to studying in Spain. Expert counseling for top Spanish universities, student visa process, Mediterranean lifestyle, and EU opportunities.",
    images: [&apos;/images/study-spain-hero.jpg&apos;],
  },
  twitter: {
    card: &apos;summary_large_image&apos;,
    title: "Study in Spain 2025 - Top Universities & Student Visa Guide | IAEC",
    description: "Complete guide to studying in Spain. Expert counseling for top Spanish universities, student visa process, Mediterranean lifestyle, and EU opportunities.",
  }
};

const StudyAbroadSpainPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src={spainCountry?.heroImage || "/images/countries/spain.jpg"}
            alt="Study in Spain"
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
              Study in Spain
            </h1>
            <p className="text-2xl mb-8 text-white/90">
              Vibrant culture, diverse programs, and a warm welcome.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#apply-now&quot;className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-[#08bcb4] !text-white">
                Start Your Spain Journey
              </a>
              <a href="#universities&quot;className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors !text-white">
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
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">200K+</div>
              <p className="text-gray-600">International Students</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">88</div>
              <p className="text-gray-600">Universities</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">€800</div>
              <p className="text-gray-600">Minimum Annual Tuition</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">95%</div>
              <p className="text-gray-600">IAEC Visa Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in Spain Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Spain for Higher Education?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Spain offers an unbeatable combination of world-class education, Mediterranean lifestyle, vibrant culture, and Europe&apos;s most affordable tuition fees.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">☀️</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Mediterranean Lifestyle</h3>
                <p className="text-gray-600">Year-round sunshine, beautiful coastlines, vibrant festivals, and world-famous cuisine. Perfect work-life balance with outdoor activities.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Most Affordable EU Education</h3>
                <p className="text-gray-600">Tuition fees from €800-€4,000/year at public universities. Lowest living costs in Western Europe with excellent quality of life.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Global Language Opportunity</h3>
                <p className="text-gray-600">Spanish is the world&apos;s 2nd most spoken language (500M speakers). Massive career advantage in global markets and Latin America.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">World-Renowned Universities</h3>
                <p className="text-gray-600">55+ universities in global rankings. Historic institutions like University of Barcelona (1450) with modern innovation and research.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">EU Work Rights & Opportunities</h3>
                <p className="text-gray-600">Work 20 hours/week during studies. EU job market access post-graduation. Growing tech sector and tourism industry.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Rich Cultural Heritage</h3>
                <p className="text-gray-600">UNESCO World Heritage Sites, Flamenco, Art museums (Prado, Guggenheim), Architecture (Gaudí), and vibrant local festivals.</p>
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
                Spanish Higher Education System
              </h2>
              <p className="text-xl text-gray-600">
                Bologna Process aligned with ECTS credits and European higher education standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Grado (Bachelor&apos;s)</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">4 Years - 240 ECTS</div>
                <p className="text-gray-600 text-sm">Comprehensive undergraduate education with strong theoretical foundation.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Máster (Master&apos;s)</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">1-2 Years - 60-120 ECTS</div>
                <p className="text-gray-600 text-sm">Advanced specialization with research or professional focus options.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">👨‍🔬</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Doctorado (PhD)</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">3-5 Years</div>
                <p className="text-gray-600 text-sm">Research doctorate with international collaboration opportunities.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🎨</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Specialized Programs</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">Diverse Options</div>
                <p className="text-gray-600 text-sm">Business schools, art academies, and professional training institutes.</p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Academic Structure & Features</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Academic Calendar</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>First Semester:</strong> September - January</li>
                    <li>• <strong>Christmas Break:</strong> December 20 - January 7</li>
                    <li>• <strong>Second Semester:</strong> February - June</li>
                    <li>• <strong>Summer Break:</strong> June - September</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Pay-per-Credit System</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Flexible fee structure based on credits taken</li>
                    <li>• First enrollment: €12-30 per credit</li>
                    <li>• 60 ECTS credits per academic year</li>
                    <li>• Regional fee variations across Spain</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Universities Section */}
      <section id="universities&quot;className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Top Spanish Universities for International Students 2025
              </h2>
              <p className="text-xl text-gray-600">
                Prestigious institutions combining academic excellence with Mediterranean lifestyle
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
                      <div className="font-semibold">University of Barcelona</div>
                      <div className="text-sm text-gray-600">Spain&apos;s largest university with 63,000+ students</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#149</td>
                    <td className="p-4 text-center">€1,500 - €3,500</td>
                    <td className="p-4 text-center">Barcelona</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Pompeu Fabra University</div>
                      <div className="text-sm text-gray-600">Top-ranked young university, research excellence</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#176</td>
                    <td className="p-4 text-center">€5,000 - €7,000</td>
                    <td className="p-4 text-center">Barcelona</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Autonomous University of Barcelona</div>
                      <div className="text-sm text-gray-600">Research-focused with strong international programs</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#199</td>
                    <td className="p-4 text-center">€1,200 - €3,500</td>
                    <td className="p-4 text-center">Barcelona</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">University of Navarra</div>
                      <div className="text-sm text-gray-600">Private university with international reputation</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#251-300</td>
                    <td className="p-4 text-center">€10,000 - €17,000</td>
                    <td className="p-4 text-center">Pamplona</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Autonomous University of Madrid</div>
                      <div className="text-sm text-gray-600">Leading public university in Spain&apos;s capital</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#351-400</td>
                    <td className="p-4 text-center">€2,000 - €6,840</td>
                    <td className="p-4 text-center">Madrid</td>
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
                Spanish University Admission Requirements
              </h2>
              <p className="text-xl text-gray-600">
                Entry requirements for international students at Spanish universities
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Bachelor&apos;s Requirements */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🎓</div>
                  <h3 className="text-2xl font-bold text-gray-900">Grado (Bachelor&apos;s) Requirements</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Academic Qualifications</h4>
                      <p className="text-gray-600">12th grade completion with good academic record, equivalent to Spanish Bachillerato</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Language Proficiency</h4>
                      <p className="text-gray-600">DELE B2/C1 for Spanish programs, IELTS 6.0+ for English-taught programs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">University Entrance Exam</h4>
                      <p className="text-gray-600">PCE (Competency Tests) or Selectividad for certain programs and universities</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Documents Legalization</h4>
                      <p className="text-gray-600">Academic credentials must be apostilled and officially translated</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Master&apos;s Requirements */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-2xl font-bold text-gray-900">Máster (Master&apos;s) Requirements</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Academic Qualifications</h4>
                      <p className="text-gray-600">Bachelor&apos;s degree (240 ECTS) in relevant field with satisfactory grades</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Language Requirements</h4>
                      <p className="text-gray-600">DELE C1-C2 for Spanish; IELTS 6.5+ or TOEFL 90+ for English programs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Statement of Purpose</h4>
                      <p className="text-gray-600">Detailed motivation letter and academic/professional objectives</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Work Experience</h4>
                      <p className="text-gray-600">Relevant professional experience (required for some MBA and specialized programs)</p>
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
                Cost of Studying in Spain 2025
              </h2>
              <p className="text-xl text-gray-600">
                Europe&apos;s most affordable education destination with excellent quality of life
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Tuition Fees */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Annual Tuition Fees (EUR)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Public Universities</span>
                    <span className="font-bold text-[#08bcb4]">€800 - €4,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Private Universities</span>
                    <span className="font-bold text-[#08bcb4]">€6,000 - €20,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Business Schools</span>
                    <span className="font-bold text-[#08bcb4]">€12,000 - €35,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">PhD Programs</span>
                    <span className="font-bold text-[#08bcb4]">€200 - €3,000</span>
                  </div>
                </div>
              </div>

              {/* Living Expenses */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Monthly Living Expenses (EUR)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Accommodation (Madrid/Barcelona)</span>
                    <span className="font-bold text-green-600">€300 - €600</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Accommodation (Other cities)</span>
                    <span className="font-bold text-green-600">€200 - €400</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Food & Groceries</span>
                    <span className="font-bold text-green-600">€200 - €300</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Transportation</span>
                    <span className="font-bold text-green-600">€20 - €55</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Personal Expenses</span>
                    <span className="font-bold text-green-600">€100 - €200</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Cost Comparison */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h3 className="text-2xl font-bold text-center mb-6">Cost Comparison by Spanish Cities</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Madrid & Barcelona</h4>
                  <p className="text-2xl font-bold text-gray-900">€800 - €1,200/month</p>
                  <p className="text-sm text-gray-600">Major cities, highest costs</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Valencia & Seville</h4>
                  <p className="text-2xl font-bold text-gray-900">€600 - €900/month</p>
                  <p className="text-sm text-gray-600">Mid-size cities, moderate costs</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Granada & Salamanca</h4>
                  <p className="text-2xl font-bold text-gray-900">€500 - €700/month</p>
                  <p className="text-sm text-gray-600">Student cities, lowest costs</p>
                </div>
              </div>
            </div>

            {/* Total Annual Cost */}
            <div className="bg-gray-900 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4 !text-white">Estimated Total Annual Cost</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Bachelor&apos;s Programs (Public)</h4>
                  <p className="text-3xl font-bold">EUR €7,000 - €16,000</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Master&apos;s Programs (Public)</h4>
                  <p className="text-3xl font-bold">EUR €8,500 - €18,500</p>
                </div>
              </div>
              <p className="mt-4 text-gray-300">Including tuition, accommodation, and living expenses</p>
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
                Spain Student Visa Process 2025
              </h2>
              <p className="text-xl text-gray-600">
                Step-by-step guide to obtaining your Spanish student visa (Type C/D)
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">1</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Get University Acceptance</h3>
                <p className="text-gray-600 text-center">Receive confirmation of enrollment from Spanish university or educational institution</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">2</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Choose Visa Type</h3>
                <p className="text-gray-600 text-center">Type C (90-180 days) or Type D (&gt;180 days) based on study duration</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">3</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Financial Documentation</h3>
                <p className="text-gray-600 text-center">Show €600/month financial capacity for entire study duration</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">4</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Health Insurance</h3>
                <p className="text-gray-600 text-center">Obtain comprehensive health coverage authorized to operate in Spain</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">5</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Medical & Police Clearance</h3>
                <p className="text-gray-600 text-center">Submit medical certificate and criminal background check</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">6</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">TIE Card (Type D)</h3>
                <p className="text-gray-600 text-center">Apply for Foreigner Identity Card within 30 days of arrival (Type D only)</p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Student Visa Requirements & Processing</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Essential Documents</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Valid passport (15 months validity for Type D)</li>
                    <li>• University acceptance/enrollment letter</li>
                    <li>• Completed visa application form</li>
                    <li>• Financial proof (€600/month minimum)</li>
                    <li>• Health insurance coverage</li>
                    <li>• Medical certificate (no contagious diseases)</li>
                    <li>• Criminal background check</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Processing & Fees</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Visa fee: €60 (most countries)</li>
                    <li>• US citizens: €135, Canadians: €80</li>
                    <li>• Processing time: 15-30 days</li>
                    <li>• Apply 90 days before travel</li>
                    <li>• Embassy appointment required</li>
                    <li>• Work rights: 20 hours/week</li>
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
                Spanish Scholarships for International Students
              </h2>
              <p className="text-xl text-gray-600">
                Government and institutional funding opportunities to make Spain even more affordable
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-400">
                <h3 className="text-lg font-bold mb-3">MAEC-AECID Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Spanish government scholarship program</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Master&apos;s, PhD, research programs</p>
                  <p><strong>Coverage:</strong> Full tuition + monthly stipend</p>
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
                <h3 className="text-lg font-bold mb-3">Carolina Foundation</h3>
                <p className="text-sm text-gray-600 mb-3">Postgraduate studies support</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Master&apos;s and PhD programs</p>
                  <p><strong>Benefits:</strong> Tuition coverage + living allowance</p>
                  <p><strong>Focus:</strong> Latin American and European students</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-bold mb-3">Regional Government Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Autonomous community funding</p>
                <div className="text-sm">
                  <p><strong>Examples:</strong> Catalonia, Madrid, Andalusia</p>
                  <p><strong>Amount:</strong> €1,000-5,000/year</p>
                  <p><strong>Criteria:</strong> Academic merit, financial need</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-400">
                <h3 className="text-lg font-bold mb-3">University-Specific Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Institution merit awards</p>
                <div className="text-sm">
                  <p><strong>Universities:</strong> Barcelona, Pompeu Fabra, Navarra</p>
                  <p><strong>Support:</strong> Partial to full tuition waiver</p>
                  <p><strong>Selection:</strong> Academic excellence</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#08bcb4]">
                <h3 className="text-lg font-bold mb-3">Business School Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">MBA and executive program funding</p>
                <div className="text-sm">
                  <p><strong>Schools:</strong> IE, ESADE, IESE</p>
                  <p><strong>Coverage:</strong> 25-100% tuition reduction</p>
                  <p><strong>Criteria:</strong> Leadership potential, diversity</p>
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
                Work Opportunities in Spain
              </h2>
              <p className="text-xl text-gray-600">
                Build your career in Europe&apos;s cultural and economic hub with Mediterranean lifestyle
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
                      <li>• 20 hours per week during academic year</li>
                      <li>• Full-time work during holidays</li>
                      <li>• No work permit required</li>
                      <li>• Access to social security benefits</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Popular Student Jobs</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Tourism/hospitality: €7-12/hour</li>
                      <li>• Language tutoring: €15-25/hour</li>
                      <li>• Research assistant: €8-15/hour</li>
                      <li>• Restaurant/retail: €6-9/hour</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* After Graduation */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-6">Post-Study Opportunities</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Job Search Extensions</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• TIE extension for job search</li>
                      <li>• Convert to work permit upon employment</li>
                      <li>• EU Blue Card eligibility</li>
                      <li>• Path to Spanish residency</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Growing Industries</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Tourism and hospitality</li>
                      <li>• Technology and startups</li>
                      <li>• Renewable energy sector</li>
                      <li>• International business services</li>
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
                  <h4 className="font-bold text-[#08bcb4] mb-2">Tourism & Hospitality</h4>
                  <p className="text-2xl font-bold text-gray-900">€18,000 - €35,000</p>
                  <p className="text-sm text-gray-600">Hotels, restaurants, events</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Technology</h4>
                  <p className="text-2xl font-bold text-gray-900">€25,000 - €45,000</p>
                  <p className="text-sm text-gray-600">Software, startups, fintech</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Business & Finance</h4>
                  <p className="text-2xl font-bold text-gray-900">€22,000 - £42,000</p>
                  <p className="text-sm text-gray-600">Banking, consulting, trade</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Education & Translation</h4>
                  <p className="text-2xl font-bold text-gray-900">€20,000 - €35,000</p>
                  <p className="text-sm text-gray-600">Language teaching, interpretation</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Engineering</h4>
                  <p className="text-2xl font-bold text-gray-900">€24,000 - €40,000</p>
                  <p className="text-sm text-gray-600">Renewable energy, construction</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Healthcare</h4>
                  <p className="text-2xl font-bold text-gray-900">€26,000 - £48,000</p>
                  <p className="text-sm text-gray-600">Nursing, physiotherapy, research</p>
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
                Why Choose IAEC for Spain Studies?
              </h2>
              <p className="text-xl text-gray-600">
                Expert guidance with proven success record for Spanish university admissions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">University & Program Selection</h3>
                <p className="text-gray-600">Expert guidance for choosing the right Spanish university with focus on affordable, quality education.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🇪🇸</div>
                <h3 className="text-xl font-bold mb-3">Spanish Language Training</h3>
                <p className="text-gray-600">DELE preparation and Spanish language courses to maximize opportunities and cultural integration.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3">Document Legalization Support</h3>
                <p className="text-gray-600">Complete assistance with apostille, translation, and credential recognition process.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3">PCE & Selectividad Preparation</h3>
                <p className="text-gray-600">Specialized coaching for Spanish university entrance exams and competency tests.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3">Scholarship & Financial Guidance</h3>
                <p className="text-gray-600">Help identify and apply for Spanish government, regional, and university scholarships.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🛂</div>
                <h3 className="text-xl font-bold mb-3">Student Visa Support</h3>
                <p className="text-gray-600">Complete Spanish visa guidance including Type C/D selection and TIE card assistance.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-[#08bcb4] text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Our Spain Success Record</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold">95%</div>
                    <p>Student Visa Success Rate</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">1200+</div>
                    <p>Students in Spain</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">60+</div>
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
                Common queries about studying in Spain
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Do I need to know Spanish to study in Spain?</h3>
                <p className="text-gray-600">While many programs are taught in Spanish, there are English-taught options, especially at postgraduate level. Learning Spanish greatly enhances opportunities and cultural experience.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">How much can I work while studying in Spain on student visa?</h3>
                <p className="text-gray-600">Student visa holders can work up to 20 hours per week during studies and full-time during holidays. No separate work permit required.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">What&apos;s the difference between Type C and Type D student visas?</h3>
                <p className="text-gray-600">Type C is for studies lasting 90-180 days (no work/TIE rights). Type D is for stays over 180 days (work rights, TIE card required within 30 days).</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Can I stay in Spain after graduation to work?</h3>
                <p className="text-gray-600">Yes, you can extend your TIE for job search and convert to work permit once employed. This leads to potential long-term residency and EU benefits.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Which Spanish cities are best for international students?</h3>
                <p className="text-gray-600">Barcelona (cosmopolitan), Madrid (capital), Valencia (coastal), Granada (historic), and Salamanca (student city) are top choices with vibrant student communities.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">What is the PCE exam and do I need it?</h3>
                <p className="text-gray-600">PCE (Pruebas de Competencias Específicas) are university entrance exams for non-EU students. Requirements vary by university and program - some require it, others don&apos;t.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply-now&quot;className="py-20 bg-gradient-to-r from-[#08bcb4] to-[#069aa2] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience Spanish Passion?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of successful students who chose Spain and now enjoy EU careers with Mediterranean lifestyle and vibrant culture
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact&quot;className="bg-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-white">
                Book Free Counselling
              </a>
              <a href="/mock-test&quot;className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold !text-white">
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

export default StudyAbroadSpainPage;