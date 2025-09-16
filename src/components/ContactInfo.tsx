import contactInfo from '../../data/contact-info.json';

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
              <a href={`tel:${contactInfo.primary.mobile}`} className="hover:underline">
                {contactInfo.primary.mobile}
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-2">✉️ Email Us</h4>
              <a href={`mailto:${contactInfo.primary.email}`} className="hover:underline">
                {contactInfo.primary.email}
              </a>
            </div>
            <div>
              <h4 className="font-semibold mb-2">💬 WhatsApp</h4>
              <a href={`https://wa.me/${contactInfo.primary.mobile.replace(/[^0-9]/g, '')}`} className="hover:underline">
                {contactInfo.primary.mobile}
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
                {branch.mobile && (
                  <p className="flex items-center">
                    <span className="font-medium text-gray-700 mr-2">Mobile:</span>
                    <a href={`tel:${branch.mobile}`} className="text-[#08bcb4] hover:underline">
                      {branch.mobile}
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