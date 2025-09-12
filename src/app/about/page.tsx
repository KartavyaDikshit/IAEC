
export const metadata = {
  title: "About IAEC Consultants - Leading Overseas Education Experts Since 2000 | Study Abroad",
  description: "Learn about IAEC Consultants, India's top overseas education consultancy since 2000. 30,000+ students placed in USA, UK, Australia, Canada. Expert counselors across 8 offices.",
  keywords: "IAEC consultants about, overseas education consultancy history, study abroad experts India, education consultants Hyderabad, international education services"
};

// Page Content:
const AboutPage = () => {
  return (
<main>
  <section className="bg-gradient-to-r from-[#08bcb4] to-[#069aa2] text-white py-20">
    <div className="container mx-auto px-4">
      <h1 className="text-5xl font-bold text-center mb-6">About IAEC Consultants</h1>
      <p className="text-xl text-center text-white/90 max-w-3xl mx-auto">
        Leading overseas education consultancy since 2000 - Your trusted partner for international education dreams
      </p>
    </div>
  </section>

  <section className="py-16">
    <div className="container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1a202c] mb-6">Our Story</h2>
        <p className="text-lg text-[#4a5568] mb-6">
          IAEC (International Academic and Educational Consultants) is a leading global education consultancy established in the year 2000. Founded with a passion to build an enterprise of international quality, we have grown to become one of India&apos;s most trusted names in overseas education.
        </p>
        <p className="text-lg text-[#4a5568] mb-6">
          In overseas education, we operate across multiple verticals including USA, UK, Australia, Canada, Ireland, Germany, France, Italy, Spain, Malta, and Latvia. Our comprehensive services cover everything from university selection to visa assistance, making us a one-stop solution for international education.
        </p>
        <p className="text-lg text-[#4a5568] mb-8">
          We have 8 offices strategically located across Telangana, Andhra Pradesh, and Sri Lanka, with a dedicated team of 160+ education professionals. We take pride in having successfully placed over 30,000 students in top universities worldwide since our inception.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#e6fffe] p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Our Mission</h3>
            <p className="text-[#4a5568]">
              To empower students to achieve their global education dreams by providing expert guidance, personalized support, and ethical counseling, ensuring a seamless transition to their chosen international academic environment.
            </p>
          </div>
          <div className="bg-[#e6fffe] p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Our Vision</h3>
            <p className="text-[#4a5568]">
              To be the most trusted and recognized leader in overseas education consultancy, fostering a global community of successful and well-rounded individuals who contribute positively to society.
            </p>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-[#1a202c] mb-6">Our Core Focus Areas</h2>
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-white border-2 border-[#08bcb4] rounded-lg">
            <h4 className="text-lg font-semibold text-[#08bcb4] mb-2">Knowledge</h4>
            <p className="text-[#4a5568] text-sm">Continuous upgradation of education trends and requirements</p>
          </div>
          <div className="text-center p-6 bg-white border-2 border-[#08bcb4] rounded-lg">
            <h4 className="text-lg font-semibold text-[#08bcb4] mb-2">Care & Concern</h4>
            <p className="text-[#4a5568] text-sm">Personalized attention and support for every student</p>
          </div>
          <div className="text-center p-6 bg-white border-2 border-[#08bcb4] rounded-lg">
            <h4 className="text-lg font-semibold text-[#08bcb4] mb-2">Problem Solving</h4>
            <p className="text-[#4a5568] text-sm">Quick resolution of student challenges and queries</p>
          </div>
          <div className="text-center p-6 bg-white border-2 border-[#08bcb4] rounded-lg">
            <h4 className="text-lg font-semibold text-[#08bcb4] mb-2">Timeliness</h4>
            <p className="text-[#4a5568] text-sm">Meeting all deadlines and commitments efficiently</p>
          </div>
        </div>

        <div className="bg-[#f7fafc] p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-[#1a202c] mb-4">Ethical Recruitment Policy (ERP)</h3>
          <p className="text-[#4a5568]">
            We have resolved that recruitment into any course or university is solely based on student academic priorities and budgetary preferences, with proper explanation of career choices available. Our ethical approach ensures transparent counseling without any misleading information.
          </p>
        </div>
      </div>
    </div>
  </section>
</main>
  );
};

export default AboutPage;
