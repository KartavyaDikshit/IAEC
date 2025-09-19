import contactInfo from '../../../../../data/contact-info.json';

export const metadata = {
  title: "Study in France 2025 - Top Universities, Student Visa & Excellence | IAEC Consultants",
  description: "Study in France with IAEC expert guidance. World-class education, affordable fees, art & culture. Get French student visa, campus France, EU residence. 95% visa success rate.",
  keywords: "study in France, France universities for international students, France student visa, France education system, IAEC France counseling, French universities admission, Campus France, Sorbonne PSL Paris, EU study benefits",
  openGraph: {
    title: "Study in France 2025 - Top Universities & Student Visa Guide | IAEC",
    description: "Complete guide to studying in France. Expert counseling for top French universities, student visa process, Campus France, and EU opportunities.",
    images: ['/images/study-france-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Study in France 2025 - Top Universities & Student Visa Guide | IAEC",
    description: "Complete guide to studying in France. Expert counseling for top French universities, student visa process, Campus France, and EU opportunities.",
  }
};

const StudyAbroadFrancePage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/countries/france.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Study in <span className="text-yellow-400">France</span> - Excellence & Culture
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Home to world&apos;s finest universities, art, culture, and luxury brands. Gateway to European excellence with affordable education and global recognition
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">🎓 Academic Excellence</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">🎨 Art & Culture Hub</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">💰 Affordable Education</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">🌍 EU Gateway</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#apply-now" className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-[#08bcb4] !text-white">
                Start Your France Journey
              </a>
              <a href="#universities" className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
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
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">400K+</div>
              <p className="text-gray-600">International Students</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">3500+</div>
              <p className="text-gray-600">Higher Ed Institutions</p>
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

      {/* Why Study in France Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose France for Higher Education?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                France combines academic excellence with cultural richness, offering world-class education at affordable costs in the heart of Europe.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Academic Excellence & Innovation</h3>
                <p className="text-gray-600">Home to Sorbonne, PSL, Sciences Po - world-renowned institutions. 28 Nobel laureates from French universities demonstrate academic superiority.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Highly Affordable Education</h3>
                <p className="text-gray-600">Public university fees from €170/year. Government subsidizes education making quality accessible. Lower living costs compared to UK/US.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Art, Culture & Heritage Capital</h3>
                <p className="text-gray-600">Birthplace of luxury brands, fashion, culinary arts. Access to Louvre, Eiffel Tower, and Europe's richest cultural heritage.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Gateway to Europe</h3>
                <p className="text-gray-600">EU membership opens doors to 27 countries. Easy travel, work opportunities, and European residence pathways through French education.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Work Rights & Career Opportunities</h3>
                <p className="text-gray-600">20 hours/week work during studies. Post-study work visa available. Major MNCs and luxury brands headquartered in France.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🥖</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Quality of Life & Language</h3>
                <p className="text-gray-600">Learn French - global diplomatic language. High quality of life, world-class healthcare, and excellent social security system.</p>
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
                French Higher Education System (LMD)
              </h2>
              <p className="text-xl text-gray-600">
                Licence-Master-Doctorat system aligned with European standards
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Licence (L1-L3)</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">3 Years - 180 ECTS</div>
                <p className="text-gray-600 text-sm">Bachelor&apos;s degree equivalent with specialization options and broad academic foundation.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Master (M1-M2)</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">2 Years - 120 ECTS</div>
                <p className="text-gray-600 text-sm">Advanced specialization with research or professional tracks available.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">👨‍🎓</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Doctorat</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">3+ Years</div>
                <p className="text-gray-600 text-sm">PhD with original research, thesis defense, and international recognition.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🏫</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Grandes Écoles</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">5 Years Elite</div>
                <p className="text-gray-600 text-sm">Prestigious institutions with selective admission and professional focus.</p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Academic Calendar & Institution Types</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Academic Year Structure</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Semester 1:</strong> September - January</li>
                    <li>• <strong>Christmas Break:</strong> December 20 - January 3</li>
                    <li>• <strong>Semester 2:</strong> January - June</li>
                    <li>• <strong>Summer Break:</strong> June - September</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Institution Categories</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 72 Public Universities</li>
                    <li>• 200+ Grandes Écoles (Engineering, Business)</li>
                    <li>• 3000+ Private Institutions</li>
                    <li>• Specialized Art & Architecture Schools</li>
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
                Top French Universities for International Students 2025
              </h2>
              <p className="text-xl text-gray-600">
                World-renowned institutions with global rankings and academic excellence
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
                      <div className="font-semibold">Paris Sciences et Lettres (PSL)</div>
                      <div className="text-sm text-gray-600">France&apos;s highest-ranked institution</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#24</td>
                    <td className="p-4 text-center">€170 - €2,770</td>
                    <td className="p-4 text-center">Paris</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Institut Polytechnique de Paris</div>
                      <div className="text-sm text-gray-600">STEM powerhouse and engineering excellence</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#46</td>
                    <td className="p-4 text-center">€500 - €6,243</td>
                    <td className="p-4 text-center">Paris</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Sorbonne University</div>
                      <div className="text-sm text-gray-600">Historic prestige with global recognition</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#63</td>
                    <td className="p-4 text-center">€170 - €3,770</td>
                    <td className="p-4 text-center">Paris</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Université Paris-Saclay</div>
                      <div className="text-sm text-gray-600">Research excellence and innovation hub</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#73</td>
                    <td className="p-4 text-center">€170 - €2,770</td>
                    <td className="p-4 text-center">Paris</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Sciences Po</div>
                      <div className="text-sm text-gray-600">Political science and international affairs</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#350</td>
                    <td className="p-4 text-center">€0 - €14,720</td>
                    <td className="p-4 text-center">Paris</td>
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
                French University Admission Requirements
              </h2>
              <p className="text-xl text-gray-600">
                Entry requirements for international students at French universities
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Bachelor's Requirements */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🎓</div>
                  <h3 className="text-2xl font-bold text-gray-900">Licence (Bachelor&apos;s) Requirements</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Academic Qualifications</h4>
                      <p className="text-gray-600">Baccalauréat or equivalent (12th grade) with good grades</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">French Language Proficiency</h4>
                      <p className="text-gray-600">DELF B2/DALF C1 for French-taught programs, IELTS/TOEFL for English programs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Campus France Application</h4>
                      <p className="text-gray-600">Complete Études en France procedure for visa application</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Supporting Documents</h4>
                      <p className="text-gray-600">Academic transcripts, motivation letter, recommendation letters</p>
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
                      <p className="text-gray-600">Bachelor&apos;s degree (180 ECTS) with good academic standing</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Language Requirements</h4>
                      <p className="text-gray-600">DALF C1 for French programs, IELTS 6.5+ or TOEFL 90+ for English programs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Research Proposal</h4>
                      <p className="text-gray-600">For research master's - detailed proposal and supervisor contact</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Professional Experience</h4>
                      <p className="text-gray-600">Some programs require relevant work experience, especially for business</p>
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
                Cost of Studying in France 2025
              </h2>
              <p className="text-xl text-gray-600">
                Europe's most affordable quality education with government subsidies
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Tuition Fees */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Annual Tuition Fees (EUR)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Public Universities (EU)</span>
                    <span className="font-bold text-[#08bcb4]">€170 - €620</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Public Universities (Non-EU)</span>
                    <span className="font-bold text-[#08bcb4]">€2,895 - €3,941</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Grandes Écoles</span>
                    <span className="font-bold text-[#08bcb4]">€500 - €10,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Private Universities</span>
                    <span className="font-bold text-[#08bcb4]">€1,500 - €20,000</span>
                  </div>
                </div>
              </div>

              {/* Living Expenses */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Monthly Living Expenses (EUR)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Accommodation (Paris)</span>
                    <span className="font-bold text-green-600">€600 - €1,200</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Accommodation (Other cities)</span>
                    <span className="font-bold text-green-600">€300 - €600</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Food & Groceries</span>
                    <span className="font-bold text-green-600">€250 - €400</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Transportation</span>
                    <span className="font-bold text-green-600">€75 - €100</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Books & Personal</span>
                    <span className="font-bold text-green-600">€100 - €200</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Cost Estimation */}
            <div className="bg-gray-900 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4 !text-white">Estimated Total Annual Cost</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Bachelor&apos;s Programs</h4>
                  <p className="text-3xl font-bold">EUR €8,000 - €25,000</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-white">Master&apos;s Programs</h4>
                  <p className="text-3xl font-bold">EUR €10,000 - €30,000</p>
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
                France Student Visa Process 2025
              </h2>
              <p className="text-xl text-gray-600">
                Complete guide with Campus France and visa application steps
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">1</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Campus France Registration</h3>
                <p className="text-gray-600 text-center">Register on Études en France platform and create your application</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">2</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">University Application</h3>
                <p className="text-gray-600 text-center">Apply to French universities through Campus France platform</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">3</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Get University Acceptance</h3>
                <p className="text-gray-600 text-center">Receive acceptance letter from French institution</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">4</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Financial Documentation</h3>
                <p className="text-gray-600 text-center">Show €615/month financial proof plus tuition fees</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">5</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Visa Application</h3>
                <p className="text-gray-600 text-center">Submit visa application at VFS Global/Embassy with documents</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">6</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Visa Validation</h3>
                <p className="text-gray-600 text-center">Validate VLS-TS visa within 3 months of arrival in France</p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Student Visa Types & Requirements</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Visa Categories</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Short-stay (&lt;90 days):</strong> Free Schengen visa</li>
                    <li>• <strong>Temporary (3-6 months):</strong> VLS-T visa</li>
                    <li>• <strong>Long-stay (&gt;6 months):</strong> VLS-TS visa</li>
                    <li>• <strong>Research scholar:</strong> Special visa for PhD/research</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Visa Fees & Processing</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Visa fee: €50-99 (country dependent)</li>
                    <li>• Campus France fee: €270</li>
                    <li>• Validation fee: €50 (in France)</li>
                    <li>• Processing time: 2-5 weeks</li>
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
                French Scholarships for International Students
              </h2>
              <p className="text-xl text-gray-600">
                Government and institutional funding opportunities for international students
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-400">
                <h3 className="text-lg font-bold mb-3">Eiffel Excellence Scholarship</h3>
                <p className="text-sm text-gray-600 mb-3">French government&apos;s flagship program</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Master&apos;s and PhD programs</p>
                  <p><strong>Amount:</strong> €1,181-1,700/month + allowances</p>
                  <p><strong>Duration:</strong> 12-36 months</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-bold mb-3">Charpak Scholarship Program</h3>
                <p className="text-sm text-gray-600 mb-3">Specifically for Indian students</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Master&apos;s programs in France</p>
                  <p><strong>Coverage:</strong> Partial tuition + living costs</p>
                  <p><strong>Value:</strong> €8,000 per year</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-400">
                <h3 className="text-lg font-bold mb-3">Erasmus+ Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">EU mobility and exchange program</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Exchange and joint programs</p>
                  <p><strong>Amount:</strong> €250-700/month</p>
                  <p><strong>Duration:</strong> 3-12 months</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-bold mb-3">Campus Bourses</h3>
                <p className="text-sm text-gray-600 mb-3">Database of French scholarships</p>
                <div className="text-sm">
                  <p><strong>Types:</strong> Government, regional, institutional</p>
                  <p><strong>Amount:</strong> €1,000 - €20,000</p>
                  <p><strong>Platform:</strong> CampusBourses.fr</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-400">
                <h3 className="text-lg font-bold mb-3">University-Specific Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Institution merit-based awards</p>
                <div className="text-sm">
                  <p><strong>Examples:</strong> PSL, Sorbonne, Sciences Po</p>
                  <p><strong>Amount:</strong> €2,000 - €15,000</p>
                  <p><strong>Criteria:</strong> Academic excellence</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#08bcb4]">
                <h3 className="text-lg font-bold mb-3">Regional Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Local government funding</p>
                <div className="text-sm">
                  <p><strong>Regions:</strong> Île-de-France, Auvergne-Rhône-Alpes</p>
                  <p><strong>Support:</strong> Living costs + integration</p>
                  <p><strong>Focus:</strong> Regional development</p>
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
                Work Opportunities in France
              </h2>
              <p className="text-xl text-gray-600">
                Study, work, and build your career in Europe's cultural and economic heart
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
                      <li>• 964 hours per year (20 hours per week)</li>
                      <li>• No work permit required</li>
                      <li>• Access to all sectors</li>
                      <li>• Social security benefits</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Popular Student Jobs</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Teaching assistant: €12-15/hour</li>
                      <li>• Retail & hospitality: €10-12/hour</li>
                      <li>• Research assistant: €15-20/hour</li>
                      <li>• Language tutoring: €20-25/hour</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* After Graduation */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-6">Post-Study Opportunities</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Graduate Work Visa</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• APS visa: 24 months for Master&apos;s/PhD</li>
                      <li>• Job search and work authorization</li>
                      <li>• Path to EU Blue Card</li>
                      <li>• Residence permit pathways</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Career Opportunities</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Luxury brands: LVMH, L&apos;Oréal, Hermès</li>
                      <li>• Tech companies: Airbus, Dassault, Ubisoft</li>
                      <li>• Finance: BNP Paribas, Société Générale</li>
                      <li>• Consulting: McKinsey, BCG, Capgemini</li>
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
                  <h4 className="font-bold text-[#08bcb4] mb-2">Luxury & Fashion</h4>
                  <p className="text-2xl font-bold text-gray-900">€35,000 - €60,000</p>
                  <p className="text-sm text-gray-600">LVMH, Hermès, Chanel</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Engineering & Tech</h4>
                  <p className="text-2xl font-bold text-gray-900">€38,000 - €65,000</p>
                  <p className="text-sm text-gray-600">Airbus, Thales, Safran</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Finance & Banking</h4>
                  <p className="text-2xl font-bold text-gray-900">€40,000 - €70,000</p>
                  <p className="text-sm text-gray-600">BNP Paribas, Crédit Agricole</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Pharmaceuticals</h4>
                  <p className="text-2xl font-bold text-gray-900">€35,000 - €55,000</p>
                  <p className="text-sm text-gray-600">Sanofi, Servier, Ipsen</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Consulting</h4>
                  <p className="text-2xl font-bold text-gray-900">€45,000 - €80,000</p>
                  <p className="text-sm text-gray-600">McKinsey, BCG, Capgemini</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Hospitality & Tourism</h4>
                  <p className="text-2xl font-bold text-gray-900">€25,000 - €45,000</p>
                  <p className="text-sm text-gray-600">Accor, Club Med, Michelin</p>
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
                Why Choose IAEC for France Studies?
              </h2>
              <p className="text-xl text-gray-600">
                Expert guidance with proven success record and comprehensive support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">University & Program Selection</h3>
                <p className="text-gray-600">Expert guidance to choose the right French university and program with career alignment.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🇫🇷</div>
                <h3 className="text-xl font-bold mb-3">Campus France Support</h3>
                <p className="text-gray-600">Complete assistance with Études en France platform and Campus France application process.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3">Scholarship Guidance</h3>
                <p className="text-gray-600">Identify and apply for Eiffel, Charpak, Erasmus+, and university-specific scholarships.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3">Language Preparation</h3>
                <p className="text-gray-600">DELF/DALF French language training and IELTS/TOEFL preparation for English programs.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🛂</div>
                <h3 className="text-xl font-bold mb-3">Student Visa Support</h3>
                <p className="text-gray-600">Complete French student visa guidance including VLS-TS application and validation process.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🏡</div>
                <h3 className="text-xl font-bold mb-3">Pre-Departure & Settlement</h3>
                <p className="text-gray-600">Accommodation assistance, cultural orientation, and French lifestyle preparation.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-[#08bcb4] text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Our France Success Record</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold">95%</div>
                    <p>Student Visa Success Rate</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">1200+</div>
                    <p>Students in France</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">50+</div>
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
                Common queries about studying in France
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Do I need to know French to study in France?</h3>
                <p className="text-gray-600">Not necessarily. Many programs are taught in English, especially at master&apos;s level. However, basic French helps with daily life and career opportunities.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">How much can I work while studying in France on student visa?</h3>
                <p className="text-gray-600">International students can work up to 964 hours per year (20 hours per week) without requiring a separate work permit.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">What is Campus France and is it mandatory?</h3>
                <p className="text-gray-600">Campus France (Études en France) is mandatory for students from select countries including India. It's the official platform for university applications and visa processing.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Can I stay in France after graduation to work?</h3>
                <p className="text-gray-600">Yes, master's and PhD graduates can get APS (Autorisation Provisoire de Séjour) visa for 24 months to search for work and gain professional experience.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">What is the cost difference between public and private universities in France?</h3>
                <p className="text-gray-600">Public universities charge €170-€3,941/year while private institutions range from €1,500-€20,000/year. Government subsidies make public education very affordable.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Which French cities are best for international students?</h3>
                <p className="text-gray-600">Paris offers the most universities and opportunities. Lyon, Toulouse, Marseille, and Strasbourg are also excellent choices with lower living costs and quality education.</p>
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
              Ready to Experience French Excellence?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of successful students who chose France and now enjoy EU careers and global recognition
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

export default StudyAbroadFrancePage;