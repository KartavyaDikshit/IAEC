
const Credentials = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold" style={{ color: '#08bcb4' }}>Our Credentials</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            {/* Placeholder: Image for Certified Education Consultants */}
            <div className="w-24 h-24 bg-gray-200 mx-auto mb-4 flex items-center justify-center text-gray-500">Icon</div>
            <h3 className="text-xl font-bold">Certified Education Consultants</h3>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            {/* Placeholder: Image for Member of International Student Recruitment Bodies */}
            <div className="w-24 h-24 bg-gray-200 mx-auto mb-4 flex items-center justify-center text-gray-500">Icon</div>
            <h3 className="text-xl font-bold">Member of International Student Recruitment Bodies</h3>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            {/* Placeholder: Image for Partnerships with Top Universities Worldwide */}
            <div className="w-24 h-24 bg-gray-200 mx-auto mb-4 flex items-center justify-center text-gray-500">Icon</div>
            <h3 className="text-xl font-bold">Partnerships with Top Universities Worldwide</h3>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            {/* Placeholder: Image for ISO Certified Processes */}
            <div className="w-24 h-24 bg-gray-200 mx-auto mb-4 flex items-center justify-center text-gray-500">Icon</div>
            <h3 className="text-xl font-bold">ISO Certified Processes</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Credentials;
