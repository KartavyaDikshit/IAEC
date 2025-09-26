import contactInfo from &apos;../../../../data/contact-info.json&apos;;
import Image from &apos;next/image&apos;;
import { studyAbroadCountries } from &apos;../../../lib/countries&apos;;

const usaCountry = studyAbroadCountries.find(country => country.name === &apos;United States&apos;);

export const metadata = {
  title: "Study in USA 2025 - Top Universities, F1 Visa Process, Scholarships | IAEC Consultants",
  description: "Study in USA with IAEC expert guidance. 1.1M+ international students choose USA. Get F1 student visa, apply to top US universities, scholarships & OPT work opportunities. 95% visa success rate.",
  keywords: "study in USA, US universities for international students, F1 student visa, study abroad America, US education system, IAEC USA counseling, American universities admission, OPT visa, CPT training, US scholarships, Harvard MIT Stanford",
  openGraph: {
    title: "Study in USA 2025 - Top Universities & F1 Visa Process | IAEC",
    description: "Complete guide to studying in USA. Expert counseling for top US universities, F1 visa process, scholarships, and work opportunities.",
    images: [&apos;/images/study-usa-hero.jpg&apos;],
  },
  twitter: {
    card: &apos;summary_large_image&apos;,
    title: "Study in USA 2025 - Top Universities & F1 Visa Process | IAEC",
    description: "Complete guide to studying in USA. Expert counseling for top US universities, F1 visa process, scholarships, and work opportunities.",
  }
};

const StudyAbroadUsaPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
                  <Image
                    src={usaCountry?.heroImage || "/images/countries/usa.jpg"}
                    alt="Study in the USA"
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                    priority
                  />          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      <div className="relative z-10 text-center text-white p-4 animate-fade-in text-shadow-md">
        <h1 className="text-6xl font-extrabold !text-white mb-6 leading-tight">
          Study in the USA
        </h1>
        <p className="text-2xl mb-8 text-white/90">
          Your American dream starts here.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#apply-now&quot;className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-[#08bcb4] !text-white">
            Start Your USA Journey
          </a>
          <a href="#universities&quot;className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors !text-white">
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
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">1.1M+</div>
              <p className="text-gray-600">International Students</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">4,500+</div>
              <p className="text-gray-600">Universities & Colleges</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">3</div>
              <p className="text-gray-600">Annual Intakes</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">95%</div>
              <p className="text-gray-600">IAEC Visa Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Study in USA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose USA for Higher Education?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The United States stands as the world&apos;s premier destination for international education, offering unmatched academic excellence and career opportunities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">World-Class Universities</h3>
                <p className="text-gray-600">Home to 15+ universities in global top 20 rankings including MIT, Stanford, and Harvard with cutting-edge research facilities.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Multicultural Environment</h3>
                <p className="text-gray-600">Experience diverse cultures from 195+ countries, developing global perspectives and international networks.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Work Opportunities</h3>
                <p className="text-gray-600">On-campus work during studies (20 hrs/week) + Optional Practical Training (OPT) for up to 3 years post-graduation.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Innovation Hub</h3>
                <p className="text-gray-600">Access to Silicon Valley, NASA, and world&apos;s leading tech companies. Perfect launchpad for entrepreneurial dreams.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Abundant Scholarships</h3>
                <p className="text-gray-600">Over $45 billion in financial aid available annually through merit, need-based, and university-specific scholarships.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🌊</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Diverse Geography</h3>
                <p className="text-gray-600">From California beaches to New York skyscrapers, experience diverse climates and landscapes across 50 states.</p>
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
                US Higher Education System
              </h2>
              <p className="text-xl text-gray-600">
                Understanding the American credit-based system and degree structures
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">📚</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Associate Degree</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">2 Years</div>
                <p className="text-gray-600 text-sm">Foundation program offered by community colleges. Pathway to bachelor&apos;s degree.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Bachelor&apos;s Degree</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">4 Years</div>
                <p className="text-gray-600 text-sm">120-130 credit hours. Comprehensive undergraduate education with major specialization.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Master&apos;s Degree</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">1.5-3 Years</div>
                <p className="text-gray-600 text-sm">30-64 credit hours. Advanced specialization with research or coursework focus.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">👨‍🎓</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Doctorate (PhD)</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">5-8 Years</div>
                <p className="text-gray-600 text-sm">Original research contribution. Highest level of academic achievement.</p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Types of US Institutions</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Public Universities</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• State-funded institutions</li>
                    <li>• Lower tuition fees for all students</li>
                    <li>• Large student populations</li>
                    <li>• Extensive research opportunities</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Private Universities</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Privately funded institutions</li>
                    <li>• Smaller class sizes</li>
                    <li>• More personalized attention</li>
                    <li>• Higher tuition but more financial aid</li>
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
                Top US Universities for International Students
              </h2>
              <p className="text-xl text-gray-600">
                World-renowned institutions offering exceptional education and research opportunities
              </p>
            </div>

            <div className="overflow-x-auto bg-white rounded-xl shadow-lg">
              <table className="w-full">
                <thead className="bg-[#08bcb4] text-white">
                  <tr>
                    <th className="p-4 text-left">University</th>
                    <th className="p-4 text-center">QS Ranking 2025</th>
                    <th className="p-4 text-center">Annual Tuition</th>
                    <th className="p-4 text-center">Location</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Massachusetts Institute of Technology (MIT)</div>
                      <div className="text-sm text-gray-600">Engineering, Technology, Sciences</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#1</td>
                    <td className="p-4 text-center">$50,000 - $55,000</td>
                    <td className="p-4 text-center">Cambridge, MA</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Stanford University</div>
                      <div className="text-sm text-gray-600">Business, Engineering, Medicine</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#3</td>
                    <td className="p-4 text-center">$25,000 - $55,000</td>
                    <td className="p-4 text-center">Stanford, CA</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Harvard University</div>
                      <div className="text-sm text-gray-600">Medicine, Law, Business</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#5</td>
                    <td className="p-4 text-center">$25,000 - $51,000</td>
                    <td className="p-4 text-center">Cambridge, MA</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">California Institute of Technology</div>
                      <div className="text-sm text-gray-600">Science, Engineering</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#6</td>
                    <td className="p-4 text-center">$44,000 - $57,000</td>
                    <td className="p-4 text-center">Pasadena, CA</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">University of Chicago</div>
                      <div className="text-sm text-gray-600">Economics, Business, Medicine</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#10</td>
                    <td className="p-4 text-center">$55,000 - $59,000</td>
                    <td className="p-4 text-center">Chicago, IL</td>
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
                US University Admission Requirements
              </h2>
              <p className="text-xl text-gray-600">
                Complete guide to application requirements for international students
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Bachelor&apos;s Requirements */}
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
                      <p className="text-gray-600">12th grade completion with minimum GPA 2.5-3.6</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">English Proficiency</h4>
                      <p className="text-gray-600">TOEFL iBT 61+ or IELTS 6.0+ or PTE 44+</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Standardized Tests</h4>
                      <p className="text-gray-600">SAT or ACT scores (varies by university)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Documents</h4>
                      <p className="text-gray-600">Statement of Purpose, Letters of Recommendation</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Master&apos;s Requirements */}
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
                      <p className="text-gray-600">Bachelor&apos;s degree with minimum CGPA 2.5-3.6</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">English Proficiency</h4>
                      <p className="text-gray-600">TOEFL iBT 78-100 or IELTS 6.5+ or PTE 58+</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Standardized Tests</h4>
                      <p className="text-gray-600">GRE (General/Subject) or GMAT for business programs</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Experience</h4>
                      <p className="text-gray-600">Work experience, Research experience (field-specific)</p>
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
                Cost of Studying in USA
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive breakdown of tuition fees and living expenses
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Tuition Fees */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Annual Tuition Fees</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Public Universities (Bachelor&apos;s)</span>
                    <span className="font-bold text-[#08bcb4]">$8,000 - $25,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Private Universities (Bachelor&apos;s)</span>
                    <span className="font-bold text-[#08bcb4]">$25,000 - $55,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Public Universities (Master&apos;s)</span>
                    <span className="font-bold text-[#08bcb4]">$10,000 - $35,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Private Universities (Master&apos;s)</span>
                    <span className="font-bold text-[#08bcb4]">$30,000 - $60,000</span>
                  </div>
                </div>
              </div>

              {/* Living Expenses */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Annual Living Expenses</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Accommodation</span>
                    <span className="font-bold text-green-600">$7,500 - $22,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Food & Meals</span>
                    <span className="font-bold text-green-600">$8,500</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Transportation</span>
                    <span className="font-bold text-green-600">$2,200</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Books & Supplies</span>
                    <span className="font-bold text-green-600">$1,400</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Personal Expenses</span>
                    <span className="font-bold text-green-600">$2,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Cost Estimation */}
            <div className="bg-gray-900 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4 !text-white">Estimated Total Annual Cost</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2 !text-white">Public Universities</h4>
                  <p className="text-3xl font-bold">$30,000 - $50,000</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 !text-white">Private Universities</h4>
                  <p className="text-3xl font-bold">$50,000 - $80,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* F1 Visa Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                F1 Student Visa Process
              </h2>
              <p className="text-xl text-gray-600">
                Step-by-step guide to obtaining your US student visa
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">1</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">University Admission</h3>
                <p className="text-gray-600 text-center">Get accepted by SEVP-approved institution and receive Form I-20</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">2</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Pay SEVIS Fee</h3>
                <p className="text-gray-600 text-center">Pay $350 SEVIS I-901 fee at least 3 days before visa interview</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">3</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">DS-160 Application</h3>
                <p className="text-gray-600 text-center">Complete online DS-160 form and upload photograph</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">4</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Book Interview</h3>
                <p className="text-gray-600 text-center">Schedule visa interview appointment at US Embassy/Consulate</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">5</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Attend Interview</h3>
                <p className="text-gray-600 text-center">Appear for visa interview with required documents</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">6</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Visa Approval</h3>
                <p className="text-gray-600 text-center">Receive passport with F1 visa and prepare for travel</p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Required Documents for F1 Visa</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Mandatory Documents</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Valid passport (6+ months validity)</li>
                    <li>• Form I-20 from university</li>
                    <li>• DS-160 confirmation page</li>
                    <li>• SEVIS fee payment receipt</li>
                    <li>• Visa application fee receipt</li>
                    <li>• Passport-sized photographs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Supporting Documents</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Academic transcripts</li>
                    <li>• Financial documents (bank statements)</li>
                    <li>• Scholarship letters (if applicable)</li>
                    <li>• English proficiency test scores</li>
                    <li>• Admission letter from university</li>
                    <li>• Statement of Purpose</li>
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
                Scholarships for International Students
              </h2>
              <p className="text-xl text-gray-600">
                Over $45 billion in financial aid available annually
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-400">
                <h3 className="text-lg font-bold mb-3">Fulbright Foreign Student Program</h3>
                <p className="text-sm text-gray-600 mb-3">Covers tuition, accommodation, health insurance, and airfare</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Graduate programs</p>
                  <p><strong>Coverage:</strong> Full funding</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-bold mb-3">Hubert Humphrey Fellowship</h3>
                <p className="text-sm text-gray-600 mb-3">For experienced professionals pursuing graduate study</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Mid-career professionals</p>
                  <p><strong>Coverage:</strong> Full tuition + stipend</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-400">
                <h3 className="text-lg font-bold mb-3">AAUW International Fellowships</h3>
                <p className="text-sm text-gray-600 mb-3">For women pursuing graduate and postgraduate degrees</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Female students</p>
                  <p><strong>Amount:</strong> $12,500 - $30,000</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-bold mb-3">University-Specific Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Merit-based aid offered by individual universities</p>
                <div className="text-sm">
                  <p><strong>For:</strong> All degree levels</p>
                  <p><strong>Amount:</strong> Varies by university</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-400">
                <h3 className="text-lg font-bold mb-3">Private Foundation Grants</h3>
                <p className="text-sm text-gray-600 mb-3">Funding from private organizations and foundations</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Specific fields/regions</p>
                  <p><strong>Amount:</strong> $5,000 - $25,000</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#08bcb4]">
                <h3 className="text-lg font-bold mb-3">Graduate Assistantships</h3>
                <p className="text-sm text-gray-600 mb-3">Teaching/Research assistantships with tuition waiver</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Graduate students</p>
                  <p><strong>Benefits:</strong> Tuition waiver + stipend</p>
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
                Work Opportunities in USA
              </h2>
              <p className="text-xl text-gray-600">
                On-campus and off-campus employment options for international students
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* During Studies */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-6">During Studies</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-[#08bcb4] pl-6">
                    <h4 className="font-bold text-lg mb-2">On-Campus Employment</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Up to 20 hours per week during semester</li>
                      <li>• Full-time during academic breaks</li>
                      <li>• Library assistant, research assistant, tutor</li>
                      <li>• Average: $12-17 per hour</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Curricular Practical Training (CPT)</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Internships as part of curriculum</li>
                      <li>• Must be integral to degree program</li>
                      <li>• Part-time or full-time options</li>
                      <li>• Gain valuable industry experience</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* After Graduation */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-6">After Graduation</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Optional Practical Training (OPT)</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 12 months for all degree programs</li>
                      <li>• Additional 24 months for STEM fields</li>
                      <li>• Work in field related to studies</li>
                      <li>• Pathway to H1B visa sponsorship</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">H1B Work Visa</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 3+3 years (renewable once)</li>
                      <li>• Employer sponsorship required</li>
                      <li>• Pathway to Green Card (Permanent Residency)</li>
                      <li>• Specialty occupation requirement</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Salary Expectations */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Average Salary by Field (USD/Year)</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Computer Science</h4>
                  <p className="text-2xl font-bold text-gray-900">$126,830</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Engineering</h4>
                  <p className="text-2xl font-bold text-gray-900">$100,830</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Management</h4>
                  <p className="text-2xl font-bold text-gray-900">$144,830</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Data Science</h4>
                  <p className="text-2xl font-bold text-gray-900">$103,930</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Chemical Engineering</h4>
                  <p className="text-2xl font-bold text-gray-900">$108,540</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Business</h4>
                  <p className="text-2xl font-bold text-gray-900">$85,000+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Application Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                USA Application Timeline
              </h2>
              <p className="text-xl text-gray-600">
                Plan your application process with our comprehensive timeline
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Fall Intake (August/September)</h3>
                  <p className="text-gray-600">Most popular intake with maximum opportunities</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-[#08bcb4]">
                    <h4 className="font-bold">June-August (Previous Year)</h4>
                    <p className="text-sm text-gray-600">Start preparing, shortlist universities, prepare for standardized tests</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-[#08bcb4]">
                    <h4 className="font-bold">September-November</h4>
                    <p className="text-sm text-gray-600">Take standardized tests, prepare documents, submit applications</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-[#08bcb4]">
                    <h4 className="font-bold">December-April</h4>
                    <p className="text-sm text-gray-600">Receive admission decisions, apply for scholarships</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-[#08bcb4]">
                    <h4 className="font-bold">May-July</h4>
                    <p className="text-sm text-gray-600">F1 visa process, accommodation, pre-departure preparations</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-green-600 mb-4">Spring Intake (January/February)</h3>
                  <p className="text-gray-600">Second major intake with good program variety</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-600">
                    <h4 className="font-bold">January-March (Previous Year)</h4>
                    <p className="text-sm text-gray-600">Research and shortlist universities, begin test preparation</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-600">
                    <h4 className="font-bold">April-July</h4>
                    <p className="text-sm text-gray-600">Take tests, prepare application materials, submit applications</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-600">
                    <h4 className="font-bold">August-October</h4>
                    <p className="text-sm text-gray-600">Receive decisions, scholarship applications, confirm enrollment</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-600">
                    <h4 className="font-bold">November-December</h4>
                    <p className="text-sm text-gray-600">Visa processing, accommodation, travel preparations</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-orange-600 mb-4">Summer Intake (May/June)</h3>
                  <p className="text-gray-600">Limited programs, mainly for specific courses</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-600">
                    <h4 className="font-bold">August-October (Previous Year)</h4>
                    <p className="text-sm text-gray-600">Research programs, prepare for standardized tests</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-600">
                    <h4 className="font-bold">November-January</h4>
                    <p className="text-sm text-gray-600">Complete tests, finalize applications, submit documents</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-600">
                    <h4 className="font-bold">February-March</h4>
                    <p className="text-sm text-gray-600">Admission decisions, scholarship notifications</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-orange-600">
                    <h4 className="font-bold">April-May</h4>
                    <p className="text-sm text-gray-600">Visa application, travel arrangements</p>
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
                Why Choose IAEC for USA Studies?
              </h2>
              <p className="text-xl text-gray-600">
                Expert guidance with 95% visa success rate and comprehensive support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">University Selection</h3>
                <p className="text-gray-600">Expert counseling to choose the right university and program based on your profile and career goals.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold mb-3">Application Assistance</h3>
                <p className="text-gray-600">Complete support for application process, SOP writing, and document preparation.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3">Scholarship Guidance</h3>
                <p className="text-gray-600">Identify and apply for relevant scholarships to minimize your education costs.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3">Test Preparation</h3>
                <p className="text-gray-600">IELTS, TOEFL, GRE, GMAT, SAT preparation with experienced trainers.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🛂</div>
                <h3 className="text-xl font-bold mb-3">Visa Assistance</h3>
                <p className="text-gray-600">Complete F1 visa guidance with mock interviews and document preparation.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">✈️</div>
                <h3 className="text-xl font-bold mb-3">Pre-Departure</h3>
                <p className="text-gray-600">Comprehensive pre-departure orientation covering accommodation, banking, and cultural preparation.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-[#08bcb4] text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Success Statistics</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold">95%</div>
                    <p>Visa Success Rate</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">5000+</div>
                    <p>Students Counseled</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">15+</div>
                    <p>Years Experience</p>
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
                Common queries about studying in the USA
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">What is the minimum GPA required for US universities?</h3>
                <p className="text-gray-600">Most universities require a minimum GPA of 2.5-3.0 for bachelor&apos;s programs and 3.0-3.5 for master&apos;s programs. Top universities may require higher GPAs (3.5+).</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Can I work while studying in the USA?</h3>
                <p className="text-gray-600">Yes, F1 students can work on-campus for up to 20 hours per week during semester and full-time during breaks. Off-campus work requires special authorization through CPT or OPT.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">How much bank balance is required for F1 visa?</h3>
                <p className="text-gray-600">You need to show sufficient funds to cover tuition and living expenses for the first year, typically $45,000-$80,000 depending on the university and location.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Is IELTS mandatory for USA?</h3>
                <p className="text-gray-600">English proficiency is mandatory but you can choose between IELTS, TOEFL, or PTE. Some universities may waive this requirement if you&apos;ve studied in English medium previously.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">What is the validity of F1 visa?</h3>
                <p className="text-gray-600">F1 visa validity varies by country but your stay is authorized as long as you maintain student status. You can remain in the US as long as you&apos;re enrolled in studies.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Can I get permanent residency after studies?</h3>
                <p className="text-gray-600">Yes, through various pathways: H1B work visa leading to Green Card, family sponsorship, investment visa, or other immigration categories. OPT provides initial work authorization.</p>
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
              Ready to Start Your American Dream?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of successful students who achieved their goals with IAEC&apos;s expert guidance
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

export default StudyAbroadUsaPage;