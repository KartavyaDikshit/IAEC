import Link from 'next/link';

export const metadata = {
  title: "Study in Europe - European Universities & Education Guide 2025 | IAEC",
  description: "Study in Europe with IAEC guidance. Explore European countries including France, Germany, Italy, Spain, Malta, Latvia. Quality education & cultural diversity.",
  keywords: "study in Europe, European universities, study abroad Europe, European education, IAEC Europe counseling, EU universities international students"
};

const StudyAbroadEuropePage = () => {
  return (
<main>
  <section className="bg-gradient-to-r from-[#08bcb4] to-[#069aa2] text-white py-20">
    <div className="container mx-auto px-4">
      <h1 className="text-5xl font-bold text-center mb-6">Study in Europe</h1>
      <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
        Rich academic tradition, cultural diversity, and world-class universities across the European continent
      </p>
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
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all border-l-4 border-[#08bcb4] group-hover:transform group-hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-[#08bcb4] mb-3">Study in Germany</h3>
              <p className="text-[#4a5568] mb-4">Low tuition fees, excellent engineering programs, and strong economy. Home to world-class research institutions.</p>
              <ul className="text-sm text-[#4a5568] space-y-1">
                <li>• No tuition fees at public universities</li>
                <li>• 350,000+ international students</li>
                <li>• Strong job market post-graduation</li>
              </ul>
            </div>
          </Link>

          <Link href="/study-abroad/europe/france" className="group">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all border-l-4 border-[#08bcb4] group-hover:transform group-hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-[#08bcb4] mb-3">Study in France</h3>
              <p className="text-[#4a5568] mb-4">Rich culture, diverse programs, and excellent research opportunities. Gateway to European business and culture.</p>
              <ul className="text-sm text-[#4a5568] space-y-1">
                <li>• 370,000+ international students</li>
                <li>• Excellence in arts, business, engineering</li>
                <li>• EU work opportunities</li>
              </ul>
            </div>
          </Link>

          <Link href="/study-abroad/europe/italy" className="group">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all border-l-4 border-[#08bcb4] group-hover:transform group-hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-[#08bcb4] mb-3">Study in Italy</h3>
              <p className="text-[#4a5568] mb-4">Historic universities, art and design excellence, and affordable education in beautiful Mediterranean setting.</p>
              <ul className="text-sm text-[#4a5568] space-y-1">
                <li>• Low tuition fees (€1,000-4,000)</li>
                <li>• Rich cultural heritage</li>
                <li>• Strong in arts and architecture</li>
              </ul>
            </div>
          </Link>

          <Link href="/study-abroad/europe/spain" className="group">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all border-l-4 border-[#08bcb4] group-hover:transform group-hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-[#08bcb4] mb-3">Study in Spain</h3>
              <p className="text-[#4a5568] mb-4">Vibrant culture, growing economy, and excellent universities with Spanish and English programs.</p>
              <ul className="text-sm text-[#4a5568] space-y-1">
                <li>• 76 universities across Spain</li>
                <li>• Affordable living costs</li>
                <li>• Strong business programs</li>
              </ul>
            </div>
          </Link>

          <Link href="/study-abroad/europe/malta" className="group">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all border-l-4 border-[#08bcb4] group-hover:transform group-hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-[#08bcb4] mb-3">Study in Malta</h3>
              <p className="text-[#4a5568] mb-4">English-speaking EU country, beautiful Mediterranean climate, and growing education sector.</p>
              <ul className="text-sm text-[#4a5568] space-y-1">
                <li>• English is official language</li>
                <li>• EU membership benefits</li>
                <li>• Safe island environment</li>
              </ul>
            </div>
          </Link>

          <Link href="/study-abroad/europe/latvia" className="group">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all border-l-4 border-[#08bcb4] group-hover:transform group-hover:-translate-y-2">
              <h3 className="text-2xl font-bold text-[#08bcb4] mb-3">Study in Latvia</h3>
              <p className="text-[#4a5568] mb-4">Affordable education, green environment, and growing reputation in business and technology programs.</p>
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

      <div className="text-center">
        <h2 className="text-3xl font-bold text-[#1a202c] mb-4">Ready to Explore Europe?</h2>
        <p className="text-lg text-[#4a5568] mb-8">Contact IAEC consultants for personalized guidance on European education opportunities</p>
        <Link href="/contact" className="bg-[#08bcb4] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#069aa2] transition-all inline-block">
          Get Expert Counseling
        </Link>
      </div>
    </div>
  </section>
</main>
  );
};

export default StudyAbroadEuropePage;
