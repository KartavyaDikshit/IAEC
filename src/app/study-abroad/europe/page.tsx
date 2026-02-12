import contactInfo from '../../../../data/contact-info.json';
import Link from 'next/link';
import Image from 'next/image';
import CountryRibbon from '@/components/home/CountryRibbon';

export const metadata = {
  title: "Study in Europe - European Universities & Education Guide 2025 | IAEC",
  description: "Study in Europe with IAEC guidance. Explore European countries including France, Germany, Italy, Spain, Malta, Latvia. Quality education & cultural diversity.",
  keywords: "study in Europe, European universities, study abroad Europe, European education, IAEC Europe counseling, EU universities international students"
};

const StudyAbroadEuropePage = () => {
  return (
    <><main>
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
                      src="/images/countries/europe.jpg"
                      alt="Study in Europe"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="z-0"
                      priority
                    />      <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white p-4 animate-fade-in text-shadow-md">
          <h1 className="text-6xl font-extrabold !text-white">Study in Europe</h1>
          <p className="text-2xl mt-4">Discover a continent of opportunities.</p>
      </div>
    </section>
    <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-lg text-[#4a5568] max-w-4xl mx-auto">
              Europe offers a rich academic tradition and diverse cultural experiences for international students. With the Bologna Process ensuring quality and mobility across European higher education, students can access world-class education in historic cities and modern campuses.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#1a202c] mb-8 text-center">Popular European Study Destinations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              <Link href="/study-abroad/europe/germany" className="group">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all border-l-4 border-[#08bcb4] group-hover:transform group-hover:-translate-y-2 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-[#08bcb4] mb-3">Study in Germany</h3>
                  <p className="text-[#4a5568] mb-4 flex-grow">Low tuition fees, excellent engineering programs, and strong economy. Home to world-class research institutions.</p>
                  <ul className="text-sm text-[#4a5568] space-y-1">
                    <li>• No tuition fees at public universities</li>
                    <li>• 350,000+ international students</li>
                    <li>• Strong job market post-graduation</li>
                  </ul>
                </div>
              </Link>

              <Link href="/study-abroad/europe/france" className="group">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all border-l-4 border-[#08bcb4] group-hover:transform group-hover:-translate-y-2 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-[#08bcb4] mb-3">Study in France</h3>
                  <p className="text-[#4a5568] mb-4 flex-grow">Rich culture, diverse programs, and excellent research opportunities. Gateway to European business and culture.</p>
                  <ul className="text-sm text-[#4a5568] space-y-1">
                    <li>• 370,000+ international students</li>
                    <li>• Excellence in arts, business, engineering</li>
                    <li>• EU work opportunities</li>
                  </ul>
                </div>
              </Link>

              <Link href="/study-abroad/europe/italy" className="group">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all border-l-4 border-[#08bcb4] group-hover:transform group-hover:-translate-y-2 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-[#08bcb4] mb-3">Study in Italy</h3>
                  <p className="text-[#4a5568] mb-4 flex-grow">Historic universities, art and design excellence, and affordable education in beautiful Mediterranean setting.</p>
                  <ul className="text-sm text-[#4a5568] space-y-1">
                    <li>• Low tuition fees (€1,000-4,000)</li>
                    <li>• Rich cultural heritage</li>
                    <li>• Strong in arts and architecture</li>
                  </ul>
                </div>
              </Link>

              <Link href="/study-abroad/europe/spain" className="group">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all border-l-4 border-[#08bcb4] group-hover:transform group-hover:-translate-y-2 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-[#08bcb4] mb-3">Study in Spain</h3>
                  <p className="text-[#4a5568] mb-4 flex-grow">Vibrant culture, growing economy, and excellent universities with Spanish and English programs.</p>
                  <ul className="text-sm text-[#4a5568] space-y-1">
                    <li>• 76 universities across Spain</li>
                    <li>• Affordable living costs</li>
                    <li>• Strong business programs</li>
                  </ul>
                </div>
              </Link>

              <Link href="/study-abroad/europe/malta" className="group">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all border-l-4 border-[#08bcb4] group-hover:transform group-hover:-translate-y-2 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-[#08bcb4] mb-3">Study in Malta</h3>
                  <p className="text-[#4a5568] mb-4 flex-grow">English-speaking EU country, beautiful Mediterranean climate, and growing education sector.</p>
                  <ul className="text-sm text-[#4a5568] space-y-1">
                    <li>• English is official language</li>
                    <li>• EU membership benefits</li>
                    <li>• Safe island environment</li>
                  </ul>
                </div>
              </Link>

              <Link href="/study-abroad/europe/latvia" className="group">
                <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all border-l-4 border-[#08bcb4] group-hover:transform group-hover:-translate-y-2 h-full flex flex-col">
                  <h3 className="text-2xl font-bold text-[#08bcb4] mb-3">Study in Latvia</h3>
                  <p className="text-[#4a5568] mb-4 flex-grow">Affordable education, green environment, and growing reputation in business and technology programs.</p>
                  <ul className="text-sm text-[#4a5568] space-y-1">
                    <li>• Very affordable tuition</li>
                    <li>• 44% forest coverage</li>
                    <li>• Strong in IT and business</li>
                  </ul>
                </div>
              </Link>
            </div>
          </div>

          <div className="bg-[#f7fafc] p-8 rounded-lg mb-12">
            <h2 className="text-3xl font-bold text-[#1a202c] mb-6">Why Choose Europe for Higher Education?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-[#08bcb4] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">EU</span>
                </div>
                <h4 className="font-semibold text-[#1a202c] mb-2">European Union Benefits</h4>
                <p className="text-[#4a5568] text-sm">Study in one EU country, work across 27 member states</p>
              </div>
              <div className="text-center">
                <div className="bg-[#08bcb4] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">€</span>
                </div>
                <h4 className="font-semibold text-[#1a202c] mb-2">Affordable Education</h4>
                <p className="text-[#4a5568] text-sm">Lower tuition fees compared to UK, USA, Australia</p>
              </div>
              <div className="text-center">
                <div className="bg-[#08bcb4] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">🏛️</span>
                </div>
                <h4 className="font-semibold text-[#1a202c] mb-2">Rich Heritage</h4>
                <p className="text-[#4a5568] text-sm">Study in historic cities with centuries of academic tradition</p>
              </div>
              <div className="text-center">
                <div className="bg-[#08bcb4] text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">🌍</span>
                </div>
                <h4 className="font-semibold text-[#1a202c] mb-2">Cultural Diversity</h4>
                <p className="text-[#4a5568] text-sm">Experience multiple cultures within easy travel distances</p>
              </div>
            </div>
          </div>
          <CountryRibbon autoScrollSpeed={1.2} pauseOnHover={true} />
        </div>
    </section>
    <section id="apply-now"className="py-20 bg-gradient-to-r from-[#08bcb4] to-[#069aa2] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Begin Your European Education Journey?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of successful students who achieved their dreams with IAEC&apos;s expert guidance
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact"className="bg-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-white">
                Book Free Counselling
              </a>
              
            </div>
            
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2">📞 Call Us</h3>
                <p><a href={`tel:${contactInfo.primary.mobile}`} className="!text-white">{contactInfo.primary.mobile}</a></p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2">📧 Email Us</h3>
                <p><a href={`mailto:${contactInfo.primary.email}`} className="!text-white">{contactInfo.primary.email}</a></p>
              </div>
              <div className="bg-white/10 p-6 rounded-xl">
                <h3 className="text-lg font-bold mb-2">📍 Visit Us</h3>
                <p>Ahmedabad, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </>
  );
};

export default StudyAbroadEuropePage;