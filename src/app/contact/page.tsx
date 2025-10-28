import Image from 'next/image';
import contactInfo from '../../../data/contact-info.json';
import ContactForm from '@/components/ContactForm';

export const metadata = {
  title: `Contact IAEC Consultants - ${contactInfo.company.tagline}`,
  description: `Contact IAEC Consultants for overseas education counseling. Contact us at ${contactInfo.primary.mobile} or ${contactInfo.primary.email} for a free consultation.`,
  keywords: "IAEC contact, overseas education consultants Hyderabad, study abroad counseling offices, education consultancy contact details, IAEC branches locations"
};

const ContactPage = () => {
  const { primary, branches } = contactInfo;

  return (
    <main>
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/all_images/shortlisting.jpeg"
            alt="Contact Us"
            layout="fill"
            objectFit="cover"
            className="z-0"
            priority />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center text-white p-4 animate-fade-in text-shadow-md">
          <h1 className="text-6xl font-extrabold !text-white mb-6 leading-tight">Contact Us</h1>
          <p className="text-2xl mb-8 text-white/90">Get in touch with our expert consultants today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#contact-form" className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-[#08bcb4] !text-white">
              Get In Touch
            </a>
            <a href="#offices" className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors !text-white">
              Find Our Offices
            </a>
          </div>
        </div>
    </section><section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">

            <div>
              <h2 className="text-3xl font-bold text-[#1a202c] mb-6">Get In Touch</h2>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#1a202c] mb-6">Our Offices</h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#08bcb4]">
                  <h3 className="text-lg font-semibold text-[#08bcb4] mb-2">{branches.ahmedabad.name}</h3>
                  <p className="text-[#4a5568] text-sm mb-1 whitespace-pre-line">
                    <a href={branches.ahmedabad.mapLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {branches.ahmedabad.address}
                    </a>
                  </p>
                  <p className="text-[#4a5568] text-sm">
                    📞 {branches.ahmedabad.mobile} | Landline: {branches.ahmedabad.landline}
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#08bcb4]">
                  <h3 className="text-lg font-semibold text-[#08bcb4] mb-2">{branches.kukatpally.name}</h3>
                  <p className="text-[#4a5568] text-sm mb-1 whitespace-pre-line">
                    <a href={branches.kukatpally.mapLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {branches.kukatpally.address}
                    </a>
                  </p>
                  <p className="text-[#4a5568] text-sm">
                    📞 {branches.kukatpally.mobile} | ✉️ {branches.kukatpally.email}
                  </p>
                </div>

                <div className="bg-[#e6fffe] p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-[#08bcb4] mb-2">{branches.headOffice.name} - {branches.headOffice.city}</h3>
                  <p className="text-[#4a5568] mb-2 whitespace-pre-line">
                    <a href={branches.headOffice.mapLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                      {branches.headOffice.address}
                    </a>
                  </p>
                  <p className="text-[#4a5568]">
                    📞 {primary.mobile} | ✉️ {primary.email}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</main>
  );
};

export default ContactPage;