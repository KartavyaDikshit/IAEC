import contactInfo from '../../../../../data/contact-info.json';

export const metadata = {
  title: "Study in Italy 2025 - Top Universities, Student Visa & Art Culture | IAEC Consultants",
  description: "Study in Italy with IAEC expert guidance. Art, culture, design excellence, affordable education. Get Italian student visa, residence permit, EU benefits. 95% visa success rate.",
  keywords: "study in Italy, Italy universities for international students, Italy student visa, Italy education system, IAEC Italy counseling, Italian universities admission, Bologna Sapienza Milan, EU study benefits, art design Italy",
  openGraph: {
    title: "Study in Italy 2025 - Top Universities & Student Visa Guide | IAEC",
    description: "Complete guide to studying in Italy. Expert counseling for top Italian universities, student visa process, art & design programs, and EU opportunities.",
    images: ['/images/study-italy-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Study in Italy 2025 - Top Universities & Student Visa Guide | IAEC",
    description: "Complete guide to studying in Italy. Expert counseling for top Italian universities, student visa process, art & design programs, and EU opportunities.",
  }
};

const StudyAbroadItalyPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/countries/italy.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <div className="container mx-auto px-4 relative z-10">
      <div className="relative z-10 text-center text-white p-4 animate-fade-in text-shadow-md">
        <h1 className="text-6xl font-extrabold !text-white mb-6 leading-tight">
          Study in Italy
        </h1>
        <p className="text-2xl mb-8 text-white/90">
          Immerse yourself in art, history, and world-class education.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#apply-now" className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-[#08bcb4] !text-white">
            Start Your Italy Journey
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
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">108K+</div>
              <p className="text-gray-600">International Students</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">172</div>
              <p className="text-gray-600">Universities</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">€900</div>
              <p className="text-gray-600">Minimum Annual Tuition</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">95%</div>
              <p className="text-gray-600">IAEC Visa Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in Italy Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Italy for Higher Education?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Italy combines world-class education with Renaissance heritage, offering unmatched cultural immersion alongside academic excellence at affordable costs.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Art, Design & Fashion Capital</h3>
                <p className="text-gray-600">Home to Renaissance masters, fashion houses like Prada, Versace, and world-renowned art academies. Milan Fashion Week, Venice Biennale.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Highly Affordable Education</h3>
                <p className="text-gray-600">Public university fees from €900-€4,000/year. Income-based ISEE system makes education even more affordable for students.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">World&apos;s Oldest University Heritage</h3>
                <p className="text-gray-600">University of Bologna (1088) - world's oldest university. Rich academic tradition with modern innovation in education and research.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Gateway to Europe</h3>
                <p className="text-gray-600">EU membership provides access to 27 countries. Central Mediterranean location ideal for European travel and career opportunities.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Luxury Industry & Innovation</h3>
                <p className="text-gray-600">Home to luxury brands, automotive excellence (Ferrari, Lamborghini), and thriving industries in fashion, design, and technology.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🍝</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Lifestyle & Cultural Experience</h3>
                <p className="text-gray-600">Mediterranean climate, incredible cuisine, rich history. UNESCO World Heritage Sites, museums, and unmatched cultural immersion.</p>
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
                Italian Higher Education System
              </h2>
              <p className="text-xl text-gray-600">
                Bologna Process aligned with ECTS credit system and European standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Laurea Triennale</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">3 Years - 180 ECTS</div>
                <p className="text-gray-600 text-sm">Bachelor's degree with comprehensive foundation in chosen field of study.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Laurea Magistrale</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">2 Years - 120 ECTS</div>
                <p className="text-gray-600 text-sm">Master's degree with advanced specialization and research components.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">👨‍🔬</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Dottorato (PhD)</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">3-4 Years</div>
                <p className="text-gray-600 text-sm">Doctorate with independent research and international recognition.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🎨</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Art & Music Academies</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">Specialized Programs</div>
                <p className="text-gray-600 text-sm">Fine arts, music, design, and fashion specialized institutions.</p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Academic Structure & Options</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Academic Calendar</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>First Semester:</strong> September/October - January</li>
                    <li>• <strong>Christmas Break:</strong> December 20 - January 8</li>
                    <li>• <strong>Second Semester:</strong> February - July</li>
                    <li>• <strong>Summer Break:</strong> July - September</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Institution Types</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 96 Public Universities</li>
                    <li>• 29 Private Universities</li>
                    <li>• 41 Fine Arts Academies</li>
                    <li>• 6 Musical Conservatories</li>
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
                Top Italian Universities for International Students 2025
              </h2>
              <p className="text-xl text-gray-600">
                World-renowned institutions combining academic excellence with cultural heritage
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
                      <div className="font-semibold">University of Bologna</div>
                      <div className="text-sm text-gray-600">World&apos;s oldest university (1088) with global reputation</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#146</td>
                    <td className="p-4 text-center">€900 - €4,000</td>
                    <td className="p-4 text-center">Bologna</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Scuola Normale Superiore di Pisa</div>
                      <div className="text-sm text-gray-600">Elite research institution for exceptional students</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#154</td>
                    <td className="p-4 text-center">FREE (Merit-based)</td>
                    <td className="p-4 text-center">Pisa</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Sapienza University of Rome</div>
                      <div className="text-sm text-gray-600">Largest European university with comprehensive programs</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#185</td>
                    <td className="p-4 text-center">€1,000 - €3,000</td>
                    <td className="p-4 text-center">Rome</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Politecnico di Milano</div>
                      <div className="text-sm text-gray-600">Engineering, architecture, and design excellence</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#201-250</td>
                    <td className="p-4 text-center">€900 - €3,900</td>
                    <td className="p-4 text-center">Milan</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">University of Padua</div>
                      <div className="text-sm text-gray-600">Historic university with strong research focus</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#201-250</td>
                    <td className="p-4 text-center">€1,500 - €3,200</td>
                    <td className="p-4 text-center">Padua</td>
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
                Italian University Admission Requirements
              </h2>
              <p className="text-xl text-gray-600">
                Entry requirements for international students at Italian universities
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Bachelor's Requirements */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🎓</div>
                  <h3 className="text-2xl font-bold text-gray-900">Laurea Triennale (Bachelor&apos;s) Requirements</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Academic Qualifications</h4>
                      <p className="text-gray-600">12 years of education (12th grade) with good academic standing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Language Proficiency</h4>
                      <p className="text-gray-600">CILS/CELI B2 for Italian programs, IELTS 6.0+ for English programs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Pre-enrollment</h4>
                      <p className="text-gray-600">Universitaly portal pre-enrollment and embassy attestation</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Entrance Tests</h4>
                      <p className="text-gray-600">TOLC or program-specific entrance examinations (varies by course)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Master's Requirements */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-2xl font-bold text-gray-900">Laurea Magistrale (Master&apos;s) Requirements</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Academic Qualifications</h4>
                      <p className="text-gray-600">Bachelor's degree (180 ECTS) in relevant field with good academic record</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Language Requirements</h4>
                      <p className="text-gray-600">CILS/CELI B2-C1 for Italian; IELTS 6.5+ or TOEFL 90+ for English programs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Statement of Purpose</h4>
                      <p className="text-gray-600">Detailed motivation letter explaining academic goals and career plans</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Portfolio (if applicable)</h4>
                      <p className="text-gray-600">Required for art, design, and architecture programs</p>
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
                Cost of Studying in Italy 2025
              </h2>
              <p className="text-xl text-gray-600">
                Europe&apos;s most affordable quality education with ISEE income-based fee reduction
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Tuition Fees */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Annual Tuition Fees (EUR)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Public Universities</span>
                    <span className="font-bold text-[#08bcb4]">€900 - €4,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Private Universities</span>
                    <span className="font-bold text-[#08bcb4]">€6,000 - €20,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Art/Design Schools</span>
                    <span className="font-bold text-[#08bcb4]">€8,000 - €15,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Business Schools</span>
                    <span className="font-bold text-[#08bcb4]">€10,000 - €35,000</span>
                  </div>
                </div>
              </div>

              {/* Living Expenses */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Monthly Living Expenses (EUR)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Accommodation (Major cities)</span>
                    <span className="font-bold text-green-600">€400 - €800</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Accommodation (Smaller cities)</span>
                    <span className="font-bold text-green-600">€250 - €500</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Food & Groceries</span>
                    <span className="font-bold text-green-600">€250 - €350</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Transportation</span>
                    <span className="font-bold text-green-600">€35 - €50</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Books & Personal</span>
                    <span className="font-bold text-green-600">€100 - €150</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ISEE System Explanation */}
            <div className="bg-gray-900 text-white p-8 rounded-xl text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 !text-white">ISEE Income-Based Fee Reduction</h3>
              <p className="text-lg mb-4">Italian universities use ISEE (Equivalent Economic Situation Indicator) to reduce fees based on family income</p>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-yellow-400">Low Income (€0-€20,000)</h4>
                  <p className="text-2xl font-bold">€900 - €1,500</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-yellow-400">Middle Income (€20K-€50K)</h4>
                  <p className="text-2xl font-bold">€1,500 - €3,000</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-yellow-400">Higher Income (€50K+)</h4>
                  <p className="text-2xl font-bold">€3,000 - €4,000</p>
                </div>
              </div>
            </div>

            {/* Total Cost Estimation */}
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <h3 className="text-2xl font-bold mb-4 !text-white">Estimated Total Annual Cost</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Bachelor's Programs</h4>
                  <p className="text-3xl font-bold">EUR €9,000 - €18,000</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Master&apos;s Programs</h4>
                  <p className="text-3xl font-bold">EUR €10,000 - €20,000</p>
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
                Italy Student Visa Process 2025
              </h2>
              <p className="text-xl text-gray-600">
                Step-by-step guide to obtaining your Italian national long-stay visa (Type D)
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">1</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Get University Acceptance</h3>
                <p className="text-gray-600 text-center">Receive acceptance letter from Italian university through Universitaly portal</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">2</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Pre-enrollment & Embassy</h3>
                <p className="text-gray-600 text-center">Complete pre-enrollment and embassy attestation of academic documents</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">3</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Financial Documentation</h3>
                <p className="text-gray-600 text-center">Show €460/month financial proof for duration of study (minimum €5,824/year)</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">4</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Health Insurance</h3>
                <p className="text-gray-600 text-center">Obtain health insurance coverage minimum €30,000 valid in Italy/Schengen</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">5</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Visa Application</h3>
                <p className="text-gray-600 text-center">Submit Type D visa application at Italian embassy with all documents</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">6</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Residence Permit</h3>
                <p className="text-gray-600 text-center">Apply for Permesso di Soggiorno within 8 days of arrival in Italy</p>
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
                    <li>• Completed visa application form</li>
                    <li>• Financial means proof (€460/month)</li>
                    <li>• Health insurance (€30,000 coverage)</li>
                    <li>• Accommodation proof in Italy</li>
                    <li>• Academic documents (apostilled)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Processing & Timeline</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Visa fee: €50-70</li>
                    <li>• Processing time: Up to 90 days</li>
                    <li>• Multiple entry permitted</li>
                    <li>• Valid for study duration</li>
                    <li>• Apply 90 days before travel</li>
                    <li>• Embassy interview required</li>
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
                Italian Scholarships for International Students
              </h2>
              <p className="text-xl text-gray-600">
                Government and institutional funding opportunities for international students
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-400">
                <h3 className="text-lg font-bold mb-3">Italian Government Scholarship</h3>
                <p className="text-sm text-gray-600 mb-3">Ministry of Foreign Affairs scholarship</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Master&apos;s, PhD, research programs</p>
                  <p><strong>Amount:</strong> €900/month + tuition coverage</p>
                  <p><strong>Duration:</strong> 6-9 months</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-bold mb-3">Regional DSU Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Right to Education scholarships</p>
                <div className="text-sm">
                  <p><strong>For:</strong> All degree levels (income-based)</p>
                  <p><strong>Coverage:</strong> Tuition fees + living allowance</p>
                  <p><strong>Amount:</strong> €1,500-5,000/year</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-400">
                <h3 className="text-lg font-bold mb-3">Invest Your Talent</h3>
                <p className="text-sm text-gray-600 mb-3">Italian companies partnership</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Master&apos;s in specific fields</p>
                  <p><strong>Benefits:</strong> Internships + job opportunities</p>
                  <p><strong>Companies:</strong> ENI, Leonardo, Pirelli</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-bold mb-3">Erasmus+ Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">EU mobility program</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Exchange and joint programs</p>
                  <p><strong>Amount:</strong> €250-400/month</p>
                  <p><strong>Duration:</strong> 3-12 months</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-400">
                <h3 className="text-lg font-bold mb-3">University Merit Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Institution-specific awards</p>
                <div className="text-sm">
                  <p><strong>Universities:</strong> Bologna, Sapienza, Politecnico Milano</p>
                  <p><strong>Amount:</strong> €1,000-8,000/year</p>
                  <p><strong>Criteria:</strong> Academic excellence</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#08bcb4]">
                <h3 className="text-lg font-bold mb-3">Fashion & Design Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Creative industry funding</p>
                <div className="text-sm">
                  <p><strong>Schools:</strong> IED, NABA, Polimoda</p>
                  <p><strong>Support:</strong> Partial to full tuition</p>
                  <p><strong>Focus:</strong> Portfolio-based selection</p>
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
                Work Opportunities in Italy
              </h2>
              <p className="text-xl text-gray-600">
                Study, work, and build your career in Europe&apos;s fashion and design capital
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
                      <li>• Full-time during academic breaks</li>
                      <li>• No work permit required</li>
                      <li>• Access to social security benefits</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Popular Student Jobs</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Fashion/design internships: €500-800/month</li>
                      <li>• Tourism/hospitality: €7-10/hour</li>
                      <li>• Language tutoring: €15-25/hour</li>
                      <li>• Research assistant: €8-12/hour</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* After Graduation */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold">Post-Study Opportunities</h3>
                </div>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Job Search Visa</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 12 months for job search</li>
                      <li>• Convert to work permit upon employment</li>
                      <li>• EU residence pathways available</li>
                      <li>• Access to Italian job market</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Career Opportunities</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Fashion houses: Prada, Versace, Dolce & Gabbana</li>
                      <li>• Automotive: Ferrari, Lamborghini, Fiat</li>
                      <li>• Design firms: Alessi, Kartell, Cassina</li>
                      <li>• Tourism and cultural sectors</li>
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
                  <h4 className="font-bold text-[#08bcb4] mb-2">Fashion & Design</h4>
                  <p className="text-2xl font-bold text-gray-900">€25,000 - €45,000</p>
                  <p className="text-sm text-gray-600">Luxury brands, design firms</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Engineering</h4>
                  <p className="text-2xl font-bold text-gray-900">€28,000 - €50,000</p>
                  <p className="text-sm text-gray-600">Automotive, aerospace</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Tourism & Hospitality</h4>
                  <p className="text-2xl font-bold text-gray-900">€20,000 - €35,000</p>
                  <p className="text-sm text-gray-600">Hotels, cultural tourism</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Architecture</h4>
                  <p className="text-2xl font-bold text-gray-900">€24,000 - €42,000</p>
                  <p className="text-sm text-gray-600">Architecture firms, restoration</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Business & Finance</h4>
                  <p className="text-2xl font-bold text-gray-900">€26,000 - €48,000</p>
                  <p className="text-sm text-gray-600">Banking, consulting</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Art & Culture</h4>
                  <p className="text-2xl font-bold text-gray-900">€18,000 - £30,000</p>
                  <p className="text-sm text-gray-600">Museums, galleries, restoration</p>
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
                Why Choose IAEC for Italy Studies?
              </h2>
              <p className="text-xl text-gray-600">
                Expert guidance with proven success record for Italian university admissions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">University & Program Selection</h3>
                <p className="text-gray-600">Expert guidance for choosing the right Italian university with focus on art, design, and cultural programs.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🏛️</div>
                <h3 className="text-xl font-bold mb-3">Universitaly Portal Support</h3>
                <p className="text-gray-600">Complete assistance with pre-enrollment, document submission, and embassy attestation process.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold mb-3">Portfolio & Creative Guidance</h3>
                <p className="text-gray-600">Specialized support for art, design, fashion, and architecture portfolio preparation.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🇮🇹</div>
                <h3 className="text-xl font-bold mb-3">Italian Language Training</h3>
                <p className="text-gray-600">CILS/CELI preparation and Italian language courses for better integration and opportunities.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3">ISEE & Scholarship Guidance</h3>
                <p className="text-gray-600">Help with ISEE documentation for fee reduction and scholarship applications for financial support.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🛂</div>
                <h3 className="text-xl font-bold mb-3">Student Visa Support</h3>
                <p className="text-gray-600">Complete Italian Type D visa guidance including document preparation and embassy appointments.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-[#08bcb4] text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Our Italy Success Record</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold">95%</div>
                    <p>Student Visa Success Rate</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">800+</div>
                    <p>Students in Italy</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">45+</div>
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
                Common queries about studying in Italy
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Do I need to know Italian to study in Italy?</h3>
                <p className="text-gray-600">Not necessarily. Many programs are taught in English, especially at master&apos;s level. However, basic Italian helps with daily life and enhances job opportunities.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">How much can I work while studying in Italy on student visa?</h3>
                <p className="text-gray-600">International students can work up to 20 hours per week during studies and full-time during academic breaks without requiring a separate work permit.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">What is ISEE and how does it help reduce tuition fees?</h3>
                <p className="text-gray-600">ISEE (Equivalent Economic Situation Indicator) assesses family income to determine tuition fees. Lower income families can pay as little as €900/year at public universities.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Can I stay in Italy after graduation to work?</h3>
                <p className="text-gray-600">Yes, graduates get a 12-month job search visa. Once employed, you can convert to a work permit and eventually apply for EU residence.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">What is Universitaly portal and is it mandatory?</h3>
                <p className="text-gray-600">Universitaly is the official portal for university pre-enrollment in Italy. It's mandatory for non-EU students to complete pre-enrollment for visa application.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Which Italian cities are best for international students?</h3>
                <p className="text-gray-600">Milan (fashion/design), Rome (history/culture), Florence (art), Bologna (oldest university), and Turin (automotive) are top choices with vibrant student communities.</p>
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
              Ready to Experience Italian Renaissance?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of successful students who chose Italy and now enjoy EU careers immersed in art, culture, and innovation
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

export default StudyAbroadItalyPage;