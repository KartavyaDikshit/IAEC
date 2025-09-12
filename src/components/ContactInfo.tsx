export const contactInfo = {
  main: {
    mobile: "+91 863 970 6102",
    landline: "+91(0)79 4938 6834",
    email: "ravinder@iaecconsultants.com",
    whatsapp: "+91 863 970 6102"
  },
  branches: {
    headOffice: {
      name: "HEAD OFFICE",
      city: "Hyderabad",
      address: "#402, 4th Floor, Gurupartha Estates, Opp. Indian Oil Petrol Pump, Beside YMCA & Andhra Bank, Narayanguda, Hyderabad – 500 029",
      phone: "+91-9966435511",
      email: "contact@iaecconsultants.com"
    },
    ahmedabad: {
      name: "Ahmedabad Branch",
      city: "Ahmedabad",
      address: "IAEC Consultants Pvt. Ltd.\nA-202, 2nd Floor, Karmayog Heights,\nHL College Road, Above Kotak Mahindra Bank,\nSardar Patel Nagar, Navrangpura,\nAhmedabad -380009, Gujarat, INDIA.",
      landline: "+91(0)79 4938 6834",
      mobile: "+91 863 970 6102",
      email: "ravinder@iaecconsultants.com"
    },
    kukatpally: {
      name: "Kukatpally Branch", 
      city: "Kukatpally",
      address: "K P H B Phase 1, Kukatpally,\nHyderabad, Telangana 500072",
      mobile: "+91 7729997891",
      email: "kripal@iaecconsultants.com"
    }
  }
};

export default function ContactInfo() {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-gray-800">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Ready to start your study abroad journey? Connect with our expert counselors at any of our locations.
        </p>

        {/* Quick Contact Bar */}
        <div className="bg-[#08bcb4] text-white rounded-lg p-6 mb-12">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold mb-2">📞 Call Us</h4>
              <a href={`tel:${contactInfo.main.mobile}`} className="hover:underline">
                {contactInfo.main.mobile}
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-2">✉️ Email Us</h4>
              <a href={`mailto:${contactInfo.main.email}`} className="hover:underline">
                {contactInfo.main.email}
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-2">💬 WhatsApp</h4>
              <a href={`https://wa.me/${contactInfo.main.whatsapp.replace(/[^0-9]/g, '')}`} className="hover:underline">
                {contactInfo.main.whatsapp}
              </a>
            </div>
          </div>
        </div>

        {/* Branch Locations */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.values(contactInfo.branches).map((branch, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                {branch.name.includes('HEAD') ? (
                  <div className="bg-[#08bcb4] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    HEAD OFFICE
                  </div>
                ) : (
                  <div className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold">
                    BRANCH OFFICE
                  </div>
                )}
              </div>

              <h3 className="text-xl font-semibold text-[#08bcb4] mb-2">
                {branch.city}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed whitespace-pre-line">
                {branch.address}
              </p>

              <div className="space-y-2 text-sm">
                {branch.phone && (
                  <p className="flex items-center">
                    <span className="font-medium text-gray-700 mr-2">Phone:</span>
                    <a href={`tel:${branch.phone}`} className="text-[#08bcb4] hover:underline">
                      {branch.phone}
                    </a>
                  </p>
                )}
                {branch.landline && (
                  <p className="flex items-center">
                    <span className="font-medium text-gray-700 mr-2">Landline:</span>
                    <a href={`tel:${branch.landline}`} className="text-[#08bcb4] hover:underline">
                      {branch.landline}
                    </a>
                  </p>
                )}
                {branch.mobile && (
                  <p className="flex items-center">
                    <span className="font-medium text-gray-700 mr-2">Mobile:</span>
                    <a href={`tel:${branch.mobile}`} className="text-[#08bcb4] hover:underline">
                      {branch.mobile}
                    </a>
                  </p>
                )}
                {branch.email && (
                  <p className="flex items-center">
                    <span className="font-medium text-gray-700 mr-2">Email:</span>
                    <a href={`mailto:${branch.email}`} className="text-[#08bcb4] hover:underline">
                      {branch.email}
                    </a>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
