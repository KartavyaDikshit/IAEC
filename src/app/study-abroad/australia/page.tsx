import studyAbroadData from '../../../../data/study-abroad.json';

export const metadata = {
  title: "Study in Australia 2025 - Top Universities, Student Visa & Scholarships | IAEC Consultants",
  description: "Study in Australia with IAEC expert guidance. 2.5M+ global graduates, world-class universities. Get Student Visa Subclass 500, work opportunities & post-study migration. 95% visa success rate.",
  keywords: "study in Australia, Australia universities for international students, student visa subclass 500, study abroad Australia, Australia education system, IAEC Australia counseling, Australian universities admission, post study work visa, Australia migration, Melbourne Sydney universities",
  openGraph: {
    title: "Study in Australia 2025 - Top Universities & Student Visa Guide | IAEC",
    description: "Complete guide to studying in Australia. Expert counseling for top Australian universities, student visa process, scholarships, and migration opportunities.",
    images: ['/images/study-australia-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Study in Australia 2025 - Top Universities & Student Visa Guide | IAEC",
    description: "Complete guide to studying in Australia. Expert counseling for top Australian universities, student visa process, scholarships, and migration opportunities.",
  }
};

const StudyAbroadAustraliaPage = () => {
  const pageData = studyAbroadData.australia;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-900 via-yellow-800 to-red-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6 leading-tight" dangerouslySetInnerHTML={{ __html: pageData.hero.title }}></h1>
            <p className="text-xl mb-8 text-blue-100">
              {pageData.hero.description}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">🏖️ Lifestyle & Climate</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">🎓 World-Class Education</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">🌏 Multicultural Society</span>
              <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">🏡 Migration Opportunities</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#apply-now" className="bg-[#08bcb4] hover:bg-[#069aa2] px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Your Australia Journey
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
            {pageData.quickStats.map((stat, index) => (
              <div className="text-center" key={index}>
                <div className="text-3xl font-bold text-[#08bcb4] mb-2">{stat.stat}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Study in Australia Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {pageData.whyStudy.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {pageData.whyStudy.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pageData.whyStudy.points.map((point, index) => (
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]" key={index}>
                  <div className="text-4xl mb-4">{point.icon}</div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              ))}
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
                Australian Education System (AQF)
              </h2>
              <p className="text-xl text-gray-600">
                Australian Qualification Framework (AQF) - 10 levels of education with credit-based system
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">📜</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Diploma</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">Level 5 - 1-2 Years</div>
                <p className="text-gray-600 text-sm">Practical skills training and pathway to bachelor&apos;s degree programs.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Bachelor&apos;s</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">Level 7 - 3-4 Years</div>
                <p className="text-gray-600 text-sm">144 credit points required. Comprehensive undergraduate education with specialization.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Master&apos;s</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">Level 9 - 1-2 Years</div>
                <p className="text-gray-600 text-sm">96 credit points required. Advanced study and research opportunities.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">👨‍🎓</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Doctorate</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">Level 10 - 3-4 Years</div>
                <p className="text-gray-600 text-sm">Highest qualification with original research contribution.</p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Types of Australian Institutions</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Universities</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Public Universities:</strong> Government-funded, research-focused</li>
                    <li>• <strong>Private Universities:</strong> Specialized courses, smaller classes</li>
                    <li>• Offer bachelor&apos;s, master&apos;s, and doctoral programs</li>
                    <li>• Strong industry connections and research facilities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Other Institutions</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>TAFE:</strong> Technical and Further Education (vocational)</li>
                    <li>• <strong>Private Colleges:</strong> Focused bachelor&apos;s and master&apos;s</li>
                    <li>• Industry-specific training and apprenticeships</li>
                    <li>• Pathways to university programs</li>
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
                Top Australian Universities for International Students 2025
              </h2>
              <p className="text-xl text-gray-600">
                Nine Australian universities rank in the global top 100, offering world-class education and research opportunities
              </p>
            </div>

            <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
              <table className="w-full">
                <thead className="bg-[#08bcb4] text-white">
                  <tr>
                    <th className="p-4 text-left">University</th>
                    <th className="p-4 text-center">QS Ranking 2025</th>
                    <th className="p-4 text-center">Annual Tuition (AUD)</th>
                    <th className="p-4 text-center">Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">University of Melbourne</div>
                      <div className="text-sm text-gray-600">Australia&apos;s #1 ranked university</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#13</td>
                    <td className="p-4 text-center">$45,000 - $50,000</td>
                    <td className="p-4 text-center">Melbourne, VIC</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">University of Sydney</div>
                      <div className="text-sm text-gray-600">Oldest and most prestigious university</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#18</td>
                    <td className="p-4 text-center">$45,000 - $55,000</td>
                    <td className="p-4 text-center">Sydney, NSW</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">University of New South Wales (UNSW)</div>
                      <div className="text-sm text-gray-600">Innovation and technology leader</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#19</td>
                    <td className="p-4 text-center">$43,000 - $48,000</td>
                    <td className="p-4 text-center">Sydney, NSW</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Australian National University (ANU)</div>
                      <div className="text-sm text-gray-600">Capital city research powerhouse</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#30</td>
                    <td className="p-4 text-center">$40,000 - $46,000</td>
                    <td className="p-4 text-center">Canberra, ACT</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Monash University</div>
                      <div className="text-sm text-gray-600">Global presence with international campuses</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#37</td>
                    <td className="p-4 text-center">$42,000 - $47,000</td>
                    <td className="p-4 text-center">Melbourne, VIC</td>
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
                Australian University Admission Requirements
              </h2>
              <p className="text-xl text-gray-600">
                Entry requirements for international students at Australian universities
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
                      <p className="text-gray-600">12th grade completion with good grades (varies by university and course)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">English Proficiency</h4>
                      <p className="text-gray-600">IELTS 6.0+ or TOEFL 78+ or PTE 50+ (varies by course)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Personal Statement</h4>
                      <p className="text-gray-600">Statement of purpose explaining motivation and career goals</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Supporting Documents</h4>
                      <p className="text-gray-600">Transcripts, certificates, recommendation letters</p>
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
                      <p className="text-gray-600">Bachelor&apos;s degree with good academic standing (60%+ or equivalent)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">English Proficiency</h4>
                      <p className="text-gray-600">IELTS 6.5+ or TOEFL 90+ or PTE 58+ (higher for some courses)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Work Experience</h4>
                      <p className="text-gray-600">Relevant professional experience (for some programs, especially MBA)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Research Proposal</h4>
                      <p className="text-gray-600">For research-based programs - detailed research proposal required</p>
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
                Cost of Studying in Australia 2025
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive breakdown of tuition fees and living expenses
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Tuition Fees */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Annual Tuition Fees (AUD)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Bachelor&apos;s Degree</span>
                    <span className="font-bold text-[#08bcb4]">$30,000 - $50,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Master&apos;s Degree</span>
                    <span className="font-bold text-[#08bcb4]">$32,000 - $53,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Doctoral Degree</span>
                    <span className="font-bold text-[#08bcb4]">$25,000 - $42,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">MBA</span>
                    <span className="font-bold text-[#08bcb4]">$55,000 - $95,000</span>
                  </div>
                </div>
              </div>

              {/* Living Expenses */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Annual Living Expenses (AUD)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Accommodation</span>
                    <span className="font-bold text-green-600">$15,000 - $25,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Food & Groceries</span>
                    <span className="font-bold text-green-600">$4,000 - $7,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Transportation</span>
                    <span className="font-bold text-green-600">$1,500 - $3,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Books & Supplies</span>
                    <span className="font-bold text-green-600">$500 - $1,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Personal & Entertainment</span>
                    <span className="font-bold text-green-600">$2,000 - $4,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Cost Estimation */}
            <div className="bg-gray-900 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4">Estimated Total Annual Cost</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-yellow-400">Bachelor&apos;s Programs</h4>
                  <p className="text-3xl font-bold">AUD $53,000 - $75,000</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-yellow-400">Master&apos;s Programs</h4>
                  <p className="text-3xl font-bold">AUD $55,000 - $78,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Student Visa Subclass 500 Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Student Visa Subclass 500 Process
              </h2>
              <p className="text-xl text-gray-600">
                Complete guide to obtaining your Australian Student Visa Subclass 500
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">1</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">University Acceptance</h3>
                <p className="text-gray-600 text-center">Receive Confirmation of Enrollment (CoE) from CRICOS-registered Australian institution</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">2</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Prepare Documents</h3>
                <p className="text-gray-600 text-center">Gather passport, financial evidence, English test results, health insurance, character documents</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">3</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Online Application</h3>
                <p className="text-gray-600 text-center">Submit application through ImmiAccount portal with all required documents</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">4</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Pay Visa Fee</h3>
                <p className="text-gray-600 text-center">Pay AUD $2,000 visa application fee and get Transaction Reference Number (TRN)</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">5</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Health Check</h3>
                <p className="text-gray-600 text-center">Complete mandatory medical examination from panel doctor (if required)</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">6</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Visa Decision</h3>
                <p className="text-gray-600 text-center">Wait for visa decision (processing time varies). Track status online through ImmiAccount</p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Student Visa 500 Requirements</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Essential Documents</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Valid passport</li>
                    <li>• Confirmation of Enrollment (CoE)</li>
                    <li>• English language test results</li>
                    <li>• Overseas Student Health Cover (OSHC)</li>
                    <li>• Financial capacity evidence</li>
                    <li>• Genuine Student (GS) statement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Financial Requirements</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Tuition fees (as shown on CoE)</li>
                    <li>• Living costs: AUD $24,505/year</li>
                    <li>• Travel costs (return flights)</li>
                    <li>• Health insurance coverage</li>
                    <li>• Funds held for 3+ months</li>
                    <li>• Evidence of income source</li>
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
                Australian Scholarships for International Students
              </h2>
              <p className="text-xl text-gray-600">
                Government and university scholarships to support your Australian education
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-400">
                <h3 className="text-lg font-bold mb-3">Australia Awards Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Government scholarships for developing countries</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Undergraduate & Postgraduate</p>
                  <p><strong>Coverage:</strong> Full tuition, living costs, health cover</p>
                  <p><strong>Duration:</strong> Full course duration</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-bold mb-3">Destination Australia Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Study in regional Australia</p>
                <div className="text-sm">
                  <p><strong>For:</strong> International students</p>
                  <p><strong>Amount:</strong> AUD $15,000/year</p>
                  <p><strong>Location:</strong> Regional campuses</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-400">
                <h3 className="text-lg font-bold mb-3">Research Training Program (RTP)</h3>
                <p className="text-sm text-gray-600 mb-3">For research degree students</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Masters & PhD research</p>
                  <p><strong>Coverage:</strong> Tuition fees + stipend</p>
                  <p><strong>Duration:</strong> Up to 3-4 years</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-bold mb-3">University-Specific Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Merit-based awards from individual universities</p>
                <div className="text-sm">
                  <p><strong>Examples:</strong> Melbourne, Sydney, ANU</p>
                  <p><strong>Amount:</strong> AUD $5,000 - $15,000</p>
                  <p><strong>Criteria:</strong> Academic excellence</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-400">
                <h3 className="text-lg font-bold mb-3">APEC Women in Research Fellowship</h3>
                <p className="text-sm text-gray-600 mb-3">Supporting women in STEM fields</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Female researchers</p>
                  <p><strong>Fields:</strong> Science, Math, Technology, Engineering</p>
                  <p><strong>Support:</strong> Research and travel costs</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#08bcb4]">
                <h3 className="text-lg font-bold mb-3">International Postgraduate Research Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Research-focused postgraduate support</p>
                <div className="text-sm">
                  <p><strong>For:</strong> International research students</p>
                  <p><strong>Coverage:</strong> Varies by university</p>
                  <p><strong>Focus:</strong> Research excellence</p>
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
                Work Opportunities in Australia
              </h2>
              <p className="text-xl text-gray-600">
                Study, work, and migration pathways for international students
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* During Studies */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-6">During Studies</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-[#08bcb4] pl-6">
                    <h4 className="font-bold text-lg mb-2">Student Visa Work Rights</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 48 hours per fortnight during study periods</li>
                      <li>• Unlimited hours during scheduled breaks</li>
                      <li>• No restrictions on type of work</li>
                      <li>• Can work in any industry or profession</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Common Student Jobs</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Retail and hospitality (cafes, restaurants)</li>
                      <li>• Tutoring and teaching assistance</li>
                      <li>• Administrative and office work</li>
                      <li>• Average: AUD $15-25 per hour</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* After Graduation */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-6">Post-Study Work</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Temporary Graduate Visa (485)</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 2-4 years post-study work rights</li>
                      <li>• Duration depends on qualification level</li>
                      <li>• Work in any occupation</li>
                      <li>• Pathway to permanent residency</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Skilled Migration Pathways</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Skilled Independent Visa (189)</li>
                      <li>• Skilled Nominated Visa (190)</li>
                      <li>• Regional Skilled Visa (491)</li>
                      <li>• Points-based immigration system</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Prospects */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Graduate Salary Expectations (AUD)</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Engineering</h4>
                  <p className="text-2xl font-bold text-gray-900">$65,000 - $85,000</p>
                  <p className="text-sm text-gray-600">Entry level positions</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">IT & Technology</h4>
                  <p className="text-2xl font-bold text-gray-900">$60,000 - $90,000</p>
                  <p className="text-sm text-gray-600">Software development, cybersecurity</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Healthcare</h4>
                  <p className="text-2xl font-bold text-gray-900">$55,000 - $80,000</p>
                  <p className="text-sm text-gray-600">Nursing, allied health</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Business & Finance</h4>
                  <p className="text-2xl font-bold text-gray-900">$50,000 - $75,000</p>
                  <p className="text-sm text-gray-600">Banking, consulting</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Education</h4>
                  <p className="text-2xl font-bold text-gray-900">$55,000 - $70,000</p>
                  <p className="text-sm text-gray-600">Teaching positions</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Trades & Vocational</h4>
                  <p className="text-2xl font-bold text-gray-900">$50,000 - $85,000</p>
                  <p className="text-sm text-gray-600">Skilled trades</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Australia Application Process & Timeline
              </h2>
              <p className="text-xl text-gray-600">
                Step-by-step guide to applying for Australian universities
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Application Steps</h3>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                    <div>
                      <h4 className="font-semibold">Research & Choose</h4>
                      <p className="text-gray-600 text-sm">Select program and universities that match your profile</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                    <div>
                      <h4 className="font-semibold">Check Requirements</h4>
                      <p className="text-gray-600 text-sm">Review admission criteria and document requirements</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                    <div>
                      <h4 className="font-semibold">Submit Application</h4>
                      <p className="text-gray-600 text-sm">Apply directly to university with all documents</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                    <div>
                      <h4 className="font-semibold">Receive Offer</h4>
                      <p className="text-gray-600 text-sm">Get conditional or unconditional offer letter</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">5</div>
                    <div>
                      <h4 className="font-semibold">Accept & Pay</h4>
                      <p className="text-gray-600 text-sm">Accept offer and pay initial tuition fee</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">6</div>
                    <div>
                      <h4 className="font-semibold">Get CoE</h4>
                      <p className="text-gray-600 text-sm">Receive Confirmation of Enrollment for visa</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Intake Timeline</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-[#08bcb4] mb-2">Semester 1 (February/March)</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Application deadline: October-November</li>
                      <li>• Main intake with maximum course options</li>
                      <li>• Best time for scholarships</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-600 mb-2">Semester 2 (July/August)</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Application deadline: April-May</li>
                      <li>• Good variety of courses available</li>
                      <li>• Popular alternative intake</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-orange-600 mb-2">Trimester 3 (November)</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Application deadline: August-September</li>
                      <li>• Limited courses and universities</li>
                      <li>• Fast-track options available</li>
                    </ul>
                  </div>
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
                Why Choose IAEC for Australia Studies?
              </h2>
              <p className="text-xl text-gray-600">
                Expert guidance with proven success record and comprehensive support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">University & Course Selection</h3>
                <p className="text-gray-600">Expert guidance to choose the right Australian university and program matching your career goals.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold mb-3">Application Support</h3>
                <p className="text-gray-600">Complete assistance with university applications, statement of purpose, and document preparation.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3">Scholarship Guidance</h3>
                <p className="text-gray-600">Identify and apply for Australia Awards, Destination Australia, and university-specific scholarships.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3">Test Preparation</h3>
                <p className="text-gray-600">IELTS, TOEFL, PTE preparation with experienced trainers and practice materials.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🛂</div>
                <h3 className="text-xl font-bold mb-3">Student Visa Subclass 500</h3>
                <p className="text-gray-600">Complete visa guidance including GS statement preparation, document checklist, and interview support.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold mb-3">Pre-Departure & Settlement</h3>
                <p className="text-gray-600">Accommodation assistance, banking setup, and orientation for smooth transition to Australian life.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-[#08bcb4] text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Our Australia Success Record</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold">95%</div>
                    <p>Visa Success Rate</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">2500+</div>
                    <p>Students in Australia</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">100+</div>
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
                Common queries about studying in Australia
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">What is the minimum IELTS score required for Australian universities?</h3>
                <p className="text-gray-600">Most Australian universities require IELTS 6.0 for undergraduate and 6.5-7.0 for postgraduate courses. Requirements vary by course and university.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">How much can I work on Student Visa Subclass 500?</h3>
                <p className="text-gray-600">International students can work 48 hours per fortnight during study periods and unlimited hours during scheduled course breaks.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">What is the new Student Visa 500 fee from 2025?</h3>
                <p className="text-gray-600">From July 2025, the Student Visa Subclass 500 application fee increased to AUD $2,000 per application, unless you are exempt from fee increases.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Can I get permanent residency after studying in Australia?</h3>
                <p className="text-gray-600">Yes, through various skilled migration pathways including Skilled Independent (189), Skilled Nominated (190), and Regional Skilled (491) visas after gaining work experience.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">What is the cost of living in Australia for students?</h3>
                <p className="text-gray-600">Average annual living costs range from AUD $20,000-30,000 including accommodation, food, transport, and personal expenses, varying by city and lifestyle.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Which Australian cities are best for international students?</h3>
                <p className="text-gray-600">Melbourne, Sydney, Brisbane, Perth, and Adelaide offer excellent universities, job opportunities, and quality of life. Melbourne and Sydney are the most popular choices.</p>
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
              Ready to Start Your Australian Adventure?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of successful students who achieved their dreams with IAEC&apos;s expert guidance
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="bg-white text-[#08bcb4] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Book Free Counselling
              </a>
              <a href="/mock-test" className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors">
                Take Free Mock Test
              </a>
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2">📞 Call Us</h3>
                <p>+91-XXXXXXXXXX</p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2">📧 Email Us</h3>
                <p>info@iaecconsultants.com</p>
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

export default StudyAbroadAustraliaPage;