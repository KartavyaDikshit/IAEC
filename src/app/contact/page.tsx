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
  <section className="bg-gradient-to-r from-[#08bcb4] to-[#069aa2] text-white py-20">
    <div className="container mx-auto px-4">
      <h1 className="text-5xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
        Get expert overseas education counseling from our experienced consultants.
      </p>
    </div>
  </section>

  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12">
        
        <div>
          <h2 className="text-3xl font-bold text-[#1a202c] mb-6">Get In Touch</h2>
          <ContactForm />
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#1a202c] mb-6">Our Offices</h2>
          
          <div className="space-y-6">
            <div className="bg-[#e6fffe] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#08bcb4] mb-2">{branches.headOffice.name} - {branches.headOffice.city}</h3>
              <p className="text-[#4a5568] mb-2 whitespace-pre-line">
                {branches.headOffice.address}
              </p>
              <p className="text-[#4a5568]">
                📞 {primary.mobile} | ✉️ {primary.email}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#08bcb4]">
              <h3 className="text-lg font-semibold text-[#08bcb4] mb-2">{branches.ahmedabad.name}</h3>
              <p className="text-[#4a5568] text-sm mb-1 whitespace-pre-line">
                {branches.ahmedabad.address}
              </p>
              <p className="text-[#4a5568] text-sm">
                📞 {branches.ahmedabad.mobile} | Landline: {branches.ahmedabad.landline}
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#08bcb4]">
              <h3 className="text-lg font-semibold text-[#08bcb4] mb-2">{branches.kukatpally.name}</h3>
              <p className="text-[#4a5568] text-sm mb-1 whitespace-pre-line">
                {branches.kukatpally.address}
              </p>
              <p className="text-[#4a5568] text-sm">
                📞 {branches.kukatpally.mobile} | ✉️ {branches.kukatpally.email}
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