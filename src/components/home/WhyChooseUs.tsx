
const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold" style={{ color: '#08bcb4' }}>Why Choose IAEC Consultants?</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            {/* Placeholder: Icon/Image for 24+ Years of Experience */}
            <div className="w-16 h-16 bg-gray-200 mx-auto mb-4 flex items-center justify-center rounded-full"></div>
            <h3 className="text-xl font-bold mb-2">24+ Years of Experience</h3>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            {/* Placeholder: Icon/Image for 1000+ Students Successfully Placed Abroad */}
            <div className="w-16 h-16 bg-gray-200 mx-auto mb-4 flex items-center justify-center rounded-full"></div>
            <h3 className="text-xl font-bold mb-2">1000+ Students Successfully Placed Abroad</h3>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            {/* Placeholder: Icon/Image for Partnerships with Top Global Universities */}
            <div className="w-16 h-16 bg-gray-200 mx-auto mb-4 flex items-center justify-center rounded-full"></div>
            <h3 className="text-xl font-bold mb-2">Partnerships with Top Global Universities</h3>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            {/* Placeholder: Icon/Image for Personalized Counselling & End-to-End Support */}
            <div className="w-16 h-16 bg-gray-200 mx-auto mb-4 flex items-center justify-center rounded-full"></div>
            <h3 className="text-xl font-bold mb-2">Personalized Counselling & End-to-End Support</h3>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            {/* Placeholder: Icon/Image for High Visa Success Rate */}
            <div className="w-16 h-16 bg-gray-200 mx-auto mb-4 flex items-center justify-center rounded-full"></div>
            <h3 className="text-xl font-bold mb-2">High Visa Success Rate</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
