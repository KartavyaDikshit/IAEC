
export const metadata = {
  title: "Contact IAEC Consultants - Overseas Education Counseling | 8+ Offices India & Sri Lanka",
  description: "Contact IAEC Consultants for overseas education counseling. 8+ offices in Hyderabad, Warangal, Vijayawada, Sri Lanka. Call +91-9966435511 for free consultation.",
  keywords: "IAEC contact, overseas education consultants Hyderabad, study abroad counseling offices, education consultancy contact details, IAEC branches locations"
};

const ContactPage = () => {
  return (
<main>
  <section className="bg-gradient-to-r from-[#08bcb4] to-[#069aa2] text-white py-20">
    <div className="container mx-auto px-4">
      <h1 className="text-5xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
        Get expert overseas education counseling from our experienced consultants across 8+ offices
      </p>
    </div>
  </section>

  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-12">
        
        <div>
          <h2 className="text-3xl font-bold text-[#1a202c] mb-6">Get In Touch</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Full Name*" 
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-[#08bcb4] focus:outline-none"
                required
              />
              <input 
                type="email" 
                placeholder="Email Address*" 
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-[#08bcb4] focus:outline-none"
                required
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="tel" 
                placeholder="Phone Number*" 
                className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-[#08bcb4] focus:outline-none"
                required
              />
              <select className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-[#08bcb4] focus:outline-none">
                <option>Preferred Destination*</option>
                <option>USA</option>
                <option>UK</option>
                <option>Australia</option>
                <option>Canada</option>
                <option>Ireland</option>
                <option>Germany</option>
              </select>
            </div>
            <textarea 
              placeholder="Your Message..."
              rows={5}
              className="w-full p-4 border-2 border-gray-300 rounded-lg focus:border-[#08bcb4] focus:outline-none"
            ></textarea>
            <button 
              type="submit"
              className="bg-[#08bcb4] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#069aa2] transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-[#1a202c] mb-6">Our Offices</h2>
          
          <div className="space-y-6">
            <div className="bg-[#e6fffe] p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-[#08bcb4] mb-2">Head Office - Narayanguda</h3>
              <p className="text-[#4a5568] mb-2">
                #402, 4th Floor, Gurupartha Estates, Opp. Indian Oil Petrol Pump, 
                Beside YMCA, Narayanguda, Hyderabad – 500 029
              </p>
              <p className="text-[#4a5568]">
                📞 +91-9966435511 | ✉️ contact@iaecconsultants.com
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#08bcb4]">
              <h3 className="text-lg font-semibold text-[#08bcb4] mb-2">Dilsukhnagar Branch</h3>
              <p className="text-[#4a5568] text-sm mb-1">
                2nd floor, Konark Plaza, Beside Rajadhani Theatre, Durganagar, Dilsukhnagar, Hyderabad
              </p>
              <p className="text-[#4a5568] text-sm">📞 +91-40-2404-3444</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#08bcb4]">
              <h3 className="text-lg font-semibold text-[#08bcb4] mb-2">Kukatpally Branch</h3>
              <p className="text-[#4a5568] text-sm mb-1">
                3rd Floor, Near KPHB Kamaan, Road No.1, Kukatpally, Hyderabad
              </p>
              <p className="text-[#4a5568] text-sm">📞 +91-40-2315-7773</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-[#08bcb4]">
              <h3 className="text-lg font-semibold text-[#08bcb4] mb-2">International Offices</h3>
              <p className="text-[#4a5568] text-sm">
                <strong>Sri Lanka:</strong> Colombo<br/>
                <strong>Gujarat:</strong> Ahmedabad<br/>
                <strong>Karnataka:</strong> Bangalore (Virtual)
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
