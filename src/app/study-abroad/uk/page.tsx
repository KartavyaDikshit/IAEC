import contactInfo from '../../../../data/contact-info.json';
import Image from 'next/image';

export const metadata = {
  title: "Study in UK 2025 - Top Universities, Student Visa & Scholarships | IAEC Consultants",
  description: "Study in UK with IAEC expert guidance. Home to Oxford & Cambridge, 600,000+ international students. Get UK student visa, scholarships & post-study work opportunities. 95% visa success rate.",
  keywords: "study in UK, UK universities for international students, UK student visa, study abroad Britain, UK education system, IAEC UK counseling, British universities admission, Tier 4 visa, Graduate Route visa, UK scholarships, Chevening scholarship",
  openGraph: {
    title: "Study in UK 2025 - Top Universities & Student Visa Guide | IAEC",
    description: "Complete guide to studying in UK. Expert counseling for top UK universities, student visa process, scholarships, and post-study work opportunities.",
    images: ['/images/study-uk-hero.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Study in UK 2025 - Top Universities & Student Visa Guide | IAEC",
    description: "Complete guide to studying in UK. Expert counseling for top UK universities, student visa process, scholarships, and post-study work opportunities.",
  }
};

const StudyAbroadUkPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
        <Image
          src="/images/countries/uk.jpg"
          alt="Study in the UK"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority
        />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
      <div className="relative z-10 text-center text-white p-4 animate-fade-in text-shadow-md">
        <h1 className="text-6xl font-extrabold !text-white mb-6 leading-tight">
          Study in the UK
        </h1>
        <p className="text-2xl mb-8 text-white/90">
          Your gateway to global success.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#apply-now" className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-[#08bcb4] !text-white">
            Start Your UK Journey
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
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">600K+</div>
              <p className="text-gray-600">International Students</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#08bcb4] mb-2">130+</div>
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

      {/* Why Study in UK Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose UK for Higher Education?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The United Kingdom combines centuries-old academic traditions with modern teaching methodologies, offering globally recognized degrees and shorter study durations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🏰</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Historic Excellence</h3>
                <p className="text-gray-600">Home to world's oldest English-speaking universities including Oxford (1096) and Cambridge (1209) with centuries of academic tradition.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">⏱️</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Shorter Duration</h3>
                <p className="text-gray-600">3-year bachelor's and 1-year master's programs save time and money compared to other countries. Graduate faster with the same quality.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Global Recognition</h3>
                <p className="text-gray-600">UK degrees are recognized worldwide and highly valued by employers globally. Second most popular study destination after USA.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">🚆</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Gateway to Europe</h3>
                <p className="text-gray-600">Easy access to European countries by train or flight. Explore Rome, Milan, Paris during weekends and holidays.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">💷</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Generous Scholarships</h3>
                <p className="text-gray-600">Extensive scholarship options including Chevening, Commonwealth, and university-specific awards for international students.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-[#08bcb4]">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Post-Study Work</h3>
                <p className="text-gray-600">Graduate Route visa allows 2-3 years post-study work. Multiple pathways to permanent residency and career opportunities.</p>
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
                UK Higher Education System
              </h2>
              <p className="text-xl text-gray-600">
                Understanding the British education structure and pathways
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Foundation Year</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">1 Year</div>
                <p className="text-gray-600 text-sm">Pathway courses to prepare students for undergraduate study. Bridge academic gaps.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🎓</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Bachelor's Degree</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">3-4 Years</div>
                <p className="text-gray-600 text-sm">Ordinary (3 years) or Honours (4 years). Comprehensive undergraduate education with specialization.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">🏆</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Master's Degree</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">1-2 Years</div>
                <p className="text-gray-600 text-sm">Taught or research-based programs. Intensive advanced study with global career prospects.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-3xl mb-4">👨‍🎓</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Doctorate (PhD)</h3>
                <div className="text-[#08bcb4] font-semibold text-lg mb-2">3-4 Years</div>
                <p className="text-gray-600 text-sm">Research-focused doctoral programs. Original research contribution to knowledge.</p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Academic Year Structure</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Main Intakes</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>September/October:</strong> Primary intake with maximum course options</li>
                    <li>• <strong>January:</strong> Limited courses available for UG, Masters, and PhD</li>
                    <li>• <strong>May:</strong> Some foundation and pathway programs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Academic Calendar</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Term 1:</strong> September to December</li>
                    <li>• <strong>Term 2:</strong> January to March</li>
                    <li>• <strong>Term 3:</strong> April to June/July</li>
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
                Top UK Universities for International Students 2025
              </h2>
              <p className="text-xl text-gray-600">
                World's most prestigious institutions offering exceptional education and research opportunities
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
                      <div className="font-semibold">University of Oxford</div>
                      <div className="text-sm text-gray-600">World's oldest English-speaking university</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#3</td>
                    <td className="p-4 text-center">£27,000 - £39,000</td>
                    <td className="p-4 text-center">Oxford, England</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">University of Cambridge</div>
                      <div className="text-sm text-gray-600">Historic collegiate university</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#5</td>
                    <td className="p-4 text-center">£28,000 - £44,000</td>
                    <td className="p-4 text-center">Cambridge, England</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">Imperial College London</div>
                      <div className="text-sm text-gray-600">Science, Engineering, Medicine, Business</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#9</td>
                    <td className="p-4 text-center">£32,000 - £50,000</td>
                    <td className="p-4 text-center">London, England</td>
                  </tr>
                  <tr className="border-b hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">University College London (UCL)</div>
                      <div className="text-sm text-gray-600">London's leading multidisciplinary university</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#22</td>
                    <td className="p-4 text-center">£21,000 - £46,000</td>
                    <td className="p-4 text-center">London, England</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-semibold">University of Edinburgh</div>
                      <div className="text-sm text-gray-600">Scotland's premier research university</div>
                    </td>
                    <td className="p-4 text-center font-bold text-[#08bcb4]">#29</td>
                    <td className="p-4 text-center">£24,000 - £34,000</td>
                    <td className="p-4 text-center">Edinburgh, Scotland</td>
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
                UK University Admission Requirements
              </h2>
              <p className="text-xl text-gray-600">
                Entry requirements for international students at UK universities
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Bachelor's Requirements */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🎓</div>
                  <h3 className="text-2xl font-bold text-gray-900">Bachelor's Degree Requirements</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Academic Qualifications</h4>
                      <p className="text-gray-600">A-levels or equivalent qualification (12th grade with good grades)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">English Proficiency</h4>
                      <p className="text-gray-600">IELTS 6.0+ or TOEFL 80+ (varies by university and course)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Personal Statement</h4>
                      <p className="text-gray-600">Compelling personal statement explaining motivation and suitability</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">References</h4>
                      <p className="text-gray-600">Academic references from teachers or professionals</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Master's Requirements */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="text-2xl font-bold text-gray-900">Master's Degree Requirements</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Academic Qualifications</h4>
                      <p className="text-gray-600">Bachelor's degree with minimum 2:2 classification (55%+ equivalent)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">English Proficiency</h4>
                      <p className="text-gray-600">IELTS 6.5+ or TOEFL 90+ (higher for competitive programs)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Statement of Purpose</h4>
                      <p className="text-gray-600">Research interests, career goals, and academic objectives</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-[#08bcb4] rounded-full mt-3"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Work Experience</h4>
                      <p className="text-gray-600">Relevant professional experience (varies by program)</p>
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
                Cost of Studying in UK 2025
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive breakdown of tuition fees and living expenses
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Tuition Fees */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Annual Tuition Fees (£)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">UK Students (Undergraduate)</span>
                    <span className="font-bold text-[#08bcb4]">£9,535</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">International (Undergraduate)</span>
                    <span className="font-bold text-[#08bcb4]">£15,000 - £40,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">UK Students (Postgraduate)</span>
                    <span className="font-bold text-[#08bcb4]">£10,000 - £15,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">International (Postgraduate)</span>
                    <span className="font-bold text-[#08bcb4]">£16,000 - £50,000</span>
                  </div>
                </div>
              </div>

              {/* Living Expenses */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Annual Living Expenses (£)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Accommodation (London)</span>
                    <span className="font-bold text-green-600">£15,000 - £18,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Accommodation (Outside London)</span>
                    <span className="font-bold text-green-600">£10,000 - £15,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Food & Personal</span>
                    <span className="font-bold text-green-600">£3,000 - £5,000</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Transportation</span>
                    <span className="font-bold text-green-600">£1,000 - £2,500</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow">
                    <span className="font-medium">Books & Materials</span>
                    <span className="font-bold text-green-600">£500 - £1,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Total Cost Estimation */}
            <div className="bg-gray-900 text-white p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold mb-4 !text-white">Estimated Total Annual Cost</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold mb-2 !text-white">London Universities</h4>
                  <p className="text-3xl font-bold !text-white">£30,000 - £58,000</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 !text-white">Outside London</h4>
                  <p className="text-3xl font-bold !text-white">£25,000 - £50,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* UK Student Visa Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                UK Student Visa Process 2025
              </h2>
              <p className="text-xl text-gray-600">
                Complete guide to obtaining your UK Student visa (previously Tier 4)
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">1</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Receive CAS</h3>
                <p className="text-gray-600 text-center">Get Confirmation of Acceptance for Studies (CAS) from licensed UK institution</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">2</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Prepare Documents</h3>
                <p className="text-gray-600 text-center">Gather passport, financial documents, English test results, TB test (if required)</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">3</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Online Application</h3>
                <p className="text-gray-600 text-center">Complete online Student visa application form and pay application fee</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">4</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Biometrics</h3>
                <p className="text-gray-600 text-center">Book and attend biometric appointment at visa application center</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">5</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Wait for Decision</h3>
                <p className="text-gray-600 text-center">Processing typically takes 3-6 weeks. Track application online</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-[#08bcb4] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">6</div>
                </div>
                <h3 className="text-lg font-bold text-center mb-3">Collect BRP</h3>
                <p className="text-gray-600 text-center">Upon arrival, collect Biometric Residence Permit within 10 days</p>
              </div>
            </div>

            <div className="mt-12 bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Student Visa Requirements</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Essential Documents</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Valid passport (6+ months validity)</li>
                    <li>• Confirmation of Acceptance for Studies (CAS)</li>
                    <li>• English language test results</li>
                    <li>• Financial evidence (bank statements)</li>
                    <li>• Academic qualifications & transcripts</li>
                    <li>• TB test results (if from listed countries)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-[#08bcb4]">Financial Requirements</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Tuition fees (as stated on CAS)</li>
                    <li>• Living costs: £1,265/month (London)</li>
                    <li>• Living costs: £1,015/month (outside London)</li>
                    <li>• Funds must be held for 28 consecutive days</li>
                    <li>• Bank statements in English</li>
                    <li>• Parental consent if sponsored by parents</li>
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
                UK Scholarships for International Students
              </h2>
              <p className="text-xl text-gray-600">
                Extensive funding opportunities from government, universities, and private organizations
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-400">
                <h3 className="text-lg font-bold mb-3">Chevening Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">UK government's global scholarship programme</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Master's degree students</p>
                  <p><strong>Coverage:</strong> Full tuition, living costs, flights</p>
                  <p><strong>Duration:</strong> One year</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-400">
                <h3 className="text-lg font-bold mb-3">Commonwealth Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">For students from Commonwealth countries</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Master's and PhD</p>
                  <p><strong>Coverage:</strong> Full funding including flights</p>
                  <p><strong>Focus:</strong> Development-related subjects</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-400">
                <h3 className="text-lg font-bold mb-3">GREAT Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Joint initiative by British Council and UK universities</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Students from specific countries</p>
                  <p><strong>Amount:</strong> £10,000 minimum</p>
                  <p><strong>Coverage:</strong> Tuition fee contribution</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-bold mb-3">Rhodes Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Prestigious scholarship for Oxford University</p>
                <div className="text-sm">
                  <p><strong>For:</strong> Postgraduate study at Oxford</p>
                  <p><strong>Coverage:</strong> Full costs + stipend</p>
                  <p><strong>Duration:</strong> 2-4 years</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-400">
                <h3 className="text-lg font-bold mb-3">University-Specific Awards</h3>
                <p className="text-sm text-gray-600 mb-3">Merit and need-based scholarships by universities</p>
                <div className="text-sm">
                  <p><strong>For:</strong> All levels of study</p>
                  <p><strong>Amount:</strong> £3,000 - £25,000</p>
                  <p><strong>Criteria:</strong> Academic excellence</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-[#08bcb4]">
                <h3 className="text-lg font-bold mb-3">Subject-Specific Scholarships</h3>
                <p className="text-sm text-gray-600 mb-3">Scholarships for specific fields of study</p>
                <div className="text-sm">
                  <p><strong>Fields:</strong> STEM, Arts, Business</p>
                  <p><strong>Providers:</strong> Professional bodies, trusts</p>
                  <p><strong>Amount:</strong> Variable</p>
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
                Work Opportunities in UK
              </h2>
              <p className="text-xl text-gray-600">
                Part-time work during studies and post-graduation career opportunities
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
                      <li>• Up to 20 hours per week during term time</li>
                      <li>• Full-time during university holidays</li>
                      <li>• On-campus and off-campus employment allowed</li>
                      <li>• No restrictions on type of work</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-blue-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Popular Part-time Jobs</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Campus jobs: Library, admin, tutoring</li>
                      <li>• Retail and hospitality positions</li>
                      <li>• Research assistantships</li>
                      <li>• Average: £8-12 per hour</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* After Graduation */}
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-6">After Graduation</h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-green-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Graduate Route Visa</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• 2 years for Bachelor's/Master's graduates</li>
                      <li>• 3 years for PhD graduates</li>
                      <li>• Work in any job at any skill level</li>
                      <li>• Switch to Skilled Worker visa later</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-purple-400 pl-6">
                    <h4 className="font-bold text-lg mb-2">Skilled Worker Visa</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Employer sponsorship required</li>
                      <li>• 5 years renewable visa</li>
                      <li>• Pathway to permanent residency</li>
                      <li>• Minimum salary: £26,200</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Prospects */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-6">Graduate Career Prospects</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Finance & Banking</h4>
                  <p className="text-2xl font-bold text-gray-900">£25,000 - £60,000</p>
                  <p className="text-sm text-gray-600">London financial sector</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Technology</h4>
                  <p className="text-2xl font-bold text-gray-900">£30,000 - £70,000</p>
                  <p className="text-sm text-gray-600">Software development, IT</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Healthcare</h4>
                  <p className="text-2xl font-bold text-gray-900">£24,000 - £80,000</p>
                  <p className="text-sm text-gray-600">NHS and private sector</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Engineering</h4>
                  <p className="text-2xl font-bold text-gray-900">£25,000 - £55,000</p>
                  <p className="text-sm text-gray-600">All engineering fields</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Business & Management</h4>
                  <p className="text-2xl font-bold text-gray-900">£22,000 - £50,000</p>
                  <p className="text-sm text-gray-600">Corporate sector</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-bold text-[#08bcb4] mb-2">Research & Academia</h4>
                  <p className="text-2xl font-bold text-gray-900">£28,000 - £45,000</p>
                  <p className="text-sm text-gray-600">Universities, research institutes</p>
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
                UK Application Timeline 2025-26
              </h2>
              <p className="text-xl text-gray-600">
                Plan your application process with our comprehensive timeline guide
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">September 2025 Entry</h3>
                  <p className="text-gray-600">Main intake with maximum course options</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-[#08bcb4]">
                    <h4 className="font-bold">September 2024 - November 2024</h4>
                    <p className="text-sm text-gray-600">Research universities, take IELTS/TOEFL, prepare documents</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-[#08bcb4]">
                    <h4 className="font-bold">December 2024 - February 2025</h4>
                    <p className="text-sm text-gray-600">Submit applications through UCAS (UG) or directly (PG)</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-[#08bcb4]">
                    <h4 className="font-bold">March 2025 - May 2025</h4>
                    <p className="text-sm text-gray-600">Receive offers, apply for scholarships, make final decisions</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-[#08bcb4]">
                    <h4 className="font-bold">June 2025 - August 2025</h4>
                    <p className="text-sm text-gray-600">Student visa application, accommodation, pre-departure prep</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-green-600 mb-4">January 2026 Entry</h3>
                  <p className="text-gray-600">Limited courses but good alternative option</p>
                </div>
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-600">
                    <h4 className="font-bold">March 2025 - May 2025</h4>
                    <p className="text-sm text-gray-600">Course research, test preparation, shortlist universities</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-600">
                    <h4 className="font-bold">June 2025 - August 2025</h4>
                    <p className="text-sm text-gray-600">Submit applications, complete English tests</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-600">
                    <h4 className="font-bold">September 2025 - November 2025</h4>
                    <p className="text-sm text-gray-600">Receive admission decisions, apply for scholarships</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow border-l-4 border-green-600">
                    <h4 className="font-bold">November 2025 - December 2025</h4>
                    <p className="text-sm text-gray-600">Visa processing, accommodation booking, travel arrangements</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-yellow-50 p-8 rounded-xl border border-yellow-200">
              <h3 className="text-xl font-bold text-center mb-4 text-gray-900">Important Application Deadlines</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">UCAS Deadlines (Undergraduate)</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• <strong>15 October:</strong> Oxford, Cambridge, Medicine, Dentistry</li>
                    <li>• <strong>29 January:</strong> Most other undergraduate courses</li>
                    <li>• <strong>30 June:</strong> Late applications (limited options)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Direct Applications (Postgraduate)</h4>
                  <ul className="text-gray-700 space-y-1 text-sm">
                    <li>• <strong>December-March:</strong> Most popular courses</li>
                    <li>• <strong>April-June:</strong> Later applications (if spaces available)</li>
                    <li>• Rolling admissions for many programs</li>
                  </ul>
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
                Why Choose IAEC for UK Studies?
              </h2>
              <p className="text-xl text-gray-600">
                Expert guidance with proven track record and comprehensive support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold mb-3">University Selection</h3>
                <p className="text-gray-600">Expert guidance to choose the right UK university and course based on your profile and career goals.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">📝</div>
                <h3 className="text-xl font-bold mb-3">UCAS Application</h3>
                <p className="text-gray-600">Complete support for UCAS applications, personal statements, and all documentation requirements.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-xl font-bold mb-3">Scholarship Guidance</h3>
                <p className="text-gray-600">Identify and apply for Chevening, Commonwealth, and other scholarship opportunities.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">📋</div>
                <h3 className="text-xl font-bold mb-3">Test Preparation</h3>
                <p className="text-gray-600">IELTS, TOEFL, and PTE preparation with experienced trainers and mock tests.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">🛂</div>
                <h3 className="text-xl font-bold mb-3">Student Visa Support</h3>
                <p className="text-gray-600">Complete UK Student visa guidance with document preparation and interview coaching.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">✈️</div>
                <h3 className="text-xl font-bold mb-3">Pre-Departure Support</h3>
                <p className="text-gray-600">Accommodation assistance, banking guidance, and cultural orientation for smooth transition.</p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-[#08bcb4] text-white p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-4">Our UK Success Record</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold">95%</div>
                    <p>Visa Success Rate</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">3000+</div>
                    <p>Students in UK</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">150+</div>
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
                Common queries about studying in the UK
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">What is the minimum IELTS score for UK universities?</h3>
                <p className="text-gray-600">Most UK universities require IELTS 6.0 for undergraduate and 6.5 for postgraduate courses. Top universities may require higher scores (7.0+).</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Can I work while studying in UK on Student visa?</h3>
                <p className="text-gray-600">Yes, Student visa holders can work up to 20 hours per week during term time and full-time during holidays. No restrictions on type of work.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">How much bank balance is required for UK Student visa?</h3>
                <p className="text-gray-600">You need to show tuition fees plus £1,265/month living costs (London) or £1,015/month (outside London) for up to 9 months of study.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">What is Graduate Route visa and who is eligible?</h3>
                <p className="text-gray-600">Graduate Route allows international graduates to stay and work in UK for 2-3 years after completing degree. Available for all graduates from recognized institutions.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Is UK education expensive for international students?</h3>
                <p className="text-gray-600">UK education costs £25,000-58,000 per year total. However, shorter duration (3-year bachelor's, 1-year master's) reduces overall costs compared to other countries.</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-bold mb-3 text-[#08bcb4]">Can I get permanent residency in UK after studies?</h3>
                <p className="text-gray-600">Yes, through various pathways including Skilled Worker visa after Graduate Route, leading to Indefinite Leave to Remain (ILR) after 5 years continuous residence.</p>
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
              Ready to Begin Your UK Education Journey?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of successful students who achieved their dreams with IAEC's expert guidance
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

export default StudyAbroadUkPage;