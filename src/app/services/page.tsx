import Image from 'next/image';

export const metadata = {
  title: "Overseas Education Services - University Selection, Visa Assistance | IAEC Consultants",
  description: "Complete overseas education services: university selection, visa assistance, test preparation, scholarship guidance. 95% visa success rate. Expert counselors for USA, UK, Australia, Canada.",
  keywords: "overseas education services, university selection guidance, student visa assistance, scholarship counseling, test preparation IELTS TOEFL, study abroad consulting"
};

// Services content:
const ServicesPage = () => {
  return (
<main>
  <section className="relative h-screen flex items-center justify-center">
    <div className="absolute inset-0">
      <Image
        src="/images/all_images/contactus.png"
        alt="Our Services"
        fill
        className="z-0 object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <div className="relative z-10 text-center text-white p-4 animate-fade-in text-shadow-md">
      <h1 className="text-6xl font-extrabold !text-white mb-6 leading-tight">Our Services</h1>
      <p className="text-2xl mb-8 text-white/90">Comprehensive overseas education services with 95% visa success rate and expert guidance</p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#apply-now" className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-[#08bcb4] !text-white">
          Start Your Journey
        </a>
        <a href="#services" className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors !text-white">
          View All Services
        </a>
      </div>
    </div>
  </section>

  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#08bcb4]">
          <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">University Selection Guidance</h3>
          <p className="text-[#4a5568] mb-4">
            Expert counselors help identify universities matching your academic profile, career goals, and budget for studying in USA, UK, Australia, Canada, and European countries.
          </p>
          <ul className="text-[#4a5568] space-y-2">
            <li>• Academic profile assessment and counseling</li>
            <li>• University shortlisting based on preferences</li>
            <li>• Program comparison and ranking analysis</li>
            <li>• Application timeline and deadline planning</li>
            <li>• Admission requirements guidance</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#08bcb4]">
          <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Student Visa Assistance</h3>
          <p className="text-[#4a5568] mb-4">
            Professional visa guidance with 95% success rate for F1, Tier 4, student visa applications for all major study destinations.
          </p>
          <ul className="text-[#4a5568] space-y-2">
            <li>• Visa category selection and guidance</li>
            <li>• Document preparation and verification</li>
            <li>• Visa application form assistance</li>
            <li>• Interview preparation and mock sessions</li>
            <li>• Pre-departure briefing and orientation</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#08bcb4]">
          <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Test Preparation</h3>
          <p className="text-[#4a5568] mb-4">
            Comprehensive coaching for IELTS, TOEFL, PTE, GRE, GMAT, and other standardized tests required for overseas education.
          </p>
          <ul className="text-[#4a5568] space-y-2">
            <li>• IELTS preparation and training</li>
            <li>• TOEFL coaching with practice tests</li>
            <li>• GRE and GMAT preparation courses</li>
            <li>• PTE training and practice sessions</li>
            <li>• Mock tests and performance analysis</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#08bcb4]">
          <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Scholarship Guidance</h3>
          <p className="text-[#4a5568] mb-4">
            Expert assistance in identifying and applying for merit-based scholarships, grants, and financial aid opportunities.
          </p>
          <ul className="text-[#4a5568] space-y-2">
            <li>• Scholarship opportunity identification</li>
            <li>• Application essay and document preparation</li>
            <li>• Merit assessment and eligibility check</li>
            <li>• Financial planning and education loans</li>
            <li>• Scholarship application tracking</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#08bcb4]">
          <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Application Processing</h3>
          <p className="text-[#4a5568] mb-4">
            End-to-end application support ensuring all documents are properly prepared and submitted on time to top universities.
          </p>
          <ul className="text-[#4a5568] space-y-2">
            <li>• Document preparation and verification</li>
            <li>• University application form filling</li>
            <li>• Statement of Purpose (SOP) guidance</li>
            <li>• Letter of Recommendation assistance</li>
            <li>• Application tracking and follow-up</li>
          </ul>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#08bcb4]">
          <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Pre-departure Support</h3>
          <p className="text-[#4a5568] mb-4">
            Complete orientation and support for smooth transition to international academic environment and new country.
          </p>
          <ul className="text-[#4a5568] space-y-2">
            <li>• Pre-departure orientation sessions</li>
            <li>• Travel arrangement assistance</li>
            <li>• Accommodation and housing guidance</li>
            <li>• Banking and insurance support</li>
            <li>• Cultural orientation and tips</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</main>
  );
};

export default ServicesPage;
