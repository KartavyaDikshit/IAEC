
const ContactUs = () => {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold" style={{ color: '#08bcb4' }}>Contact Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#08bcb4' }}>Get in Touch</h3>
            <p className="text-gray-800 mb-2"><strong>Address:</strong> IAEC Consultants Pvt Ltd - Ahmedabad</p>
            <p className="text-gray-800 mb-2"><strong>Email:</strong> info@iaecconsultants.com</p>
            <p className="text-gray-800 mb-2"><strong>Phone:</strong> +91-XXXXXXXXXX</p>
          </div>
          <div>
            {/* Placeholder: Google Map Embed */}
            <div className="bg-gray-300 h-64 rounded-lg flex items-center justify-center text-gray-500">Google Map Embed</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
