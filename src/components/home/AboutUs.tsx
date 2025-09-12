
const AboutUs = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold" style={{ color: '#08bcb4' }}>About IAEC Consultants</h2>
          <p className="text-lg text-gray-800">We are IAEC consultants. Your dream, Our responsibility. IAEC is a leading global education consultants, started in the year 2000. It has been started with a passion to build an enterprise of international quality.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#08bcb4' }}>Our Mission</h3>
            <p className="text-gray-800">To empower students to achieve their global education dreams by providing expert guidance, personalized support, and ethical counseling, ensuring a seamless transition to their chosen international academic environment.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ color: '#08bcb4' }}>Our Vision</h3>
            <p className="text-gray-800">To be the most trusted and recognized leader in overseas education consultancy, fostering a global community of successful and well-rounded individuals who contribute positively to society.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
