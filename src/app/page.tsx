import CountryRibbon from '@/components/home/CountryRibbon';

export default function Home() {
  return (
    <main>
<section className="bg-gradient-to-r from-[#08bcb4] to-[#069aa2] text-white">
  <div className="container mx-auto px-4 py-20">
    <div className="text-center max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Your Global Study Partner – Explore the World with IAEC
      </h1>
      <p className="text-xl md:text-2xl mb-8 text-white/90">
        Leading overseas education consultants since 2000. Expert guidance for USA, UK, Australia, Canada. Transform your dreams into reality with 30,000+ success stories.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-white text-[#08bcb4] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-all">
          Start Your Journey
        </button>
        <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#08bcb4] transition-all">
          Book Free Counselling
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 text-center">
        <div>
          <div className="text-3xl font-bold">30,000+</div>
          <div className="text-white/80">Satisfied Students</div>
        </div>
        <div>
          <div className="text-3xl font-bold">11+</div>
          <div className="text-white/80">Countries</div>
        </div>
        <div>
          <div className="text-3xl font-bold">24+</div>
          <div className="text-white/80">Years Experience</div>
        </div>
        <div>
          <div className="text-3xl font-bold">95%</div>
          <div className="text-white/80">Visa Success Rate</div>
        </div>
      </div>
    </div>
  </div>
</section>
      <CountryRibbon />
<section className="py-16 bg-[#f7fafc]">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-[#1a202c] mb-4">About IAEC Consultants</h2>
      <div className="w-20 h-1 bg-[#08bcb4] mx-auto mb-6"></div>
    </div>
    <div className="max-w-4xl mx-auto text-center">
      <p className="text-lg text-[#4a5568] mb-6">
        IAEC is a leading overseas education consultancy established in 2000 with a passion to build an enterprise of international quality. We specialize in study abroad programs for USA, UK, Australia, Canada, Ireland, and European countries.
      </p>
      <p className="text-lg text-[#4a5568] mb-8">
        With 8 offices across Telangana, Andhra Pradesh & Sri Lanka, our dedicated team of 160+ education experts has successfully placed 30,000+ students in top universities worldwide since 2000.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-[#08bcb4] mb-3">Our Mission</h3>
          <p className="text-[#4a5568]">To empower students to achieve their global education dreams through expert guidance, personalized support, and ethical counseling.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-[#08bcb4] mb-3">Our Vision</h3>
          <p className="text-[#4a5568]">To be the most trusted leader in overseas education consultancy, fostering successful global citizens.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-[#08bcb4] mb-3">Our Values</h3>
          <p className="text-[#4a5568]">Knowledge, care for students, problem-solving skills, and timeliness in all our services.</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </main>
  );
}
