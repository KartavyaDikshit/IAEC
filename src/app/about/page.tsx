'use client';

import Image from 'next/image';
import Link from 'next/link';
import AccreditationRibbon from '@/components/home/AccreditationRibbon';
import TestimonialsCarousel from '@/components/home/TestimonialsCarousel';
import { useEffect, useRef } from 'react';

// Page Content:
const AboutPage = () => {
  const ourStoryRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const handleScroll = (e: MouseEvent) => {
      e.preventDefault();
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
      const element = document.getElementById(targetId || '');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    const currentOurStoryRef = ourStoryRef.current;
    if (currentOurStoryRef) {
      currentOurStoryRef.addEventListener('click', handleScroll);
    }

    return () => {
      if (currentOurStoryRef) {
        currentOurStoryRef.removeEventListener('click', handleScroll);
      }
    };
  }, []);

  return (
<main>
  <section className="relative h-screen flex items-center justify-center">
    <div className="absolute inset-0">
      <Image
        src="/images/all_images/us.jpg"
        alt="About IAEC Consultants"
        fill
        className="z-0 object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    <div className="relative z-10 text-center text-white p-4 animate-fade-in text-shadow-md">
      <h1 className="text-6xl font-extrabold !text-white mb-6 leading-tight">About IAEC Consultants</h1>
      <p className="text-2xl mb-8 text-white/90">
        Leading overseas education consultancy since 2000 - Your trusted partner for international education dreams
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a href="#our-story" ref={ourStoryRef} className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 bg-[#08bcb4] !text-white">
          Learn More About Us
        </a>
        <Link href="/contact" className="border border-white/30 hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-colors !text-white">
          Contact Our Experts
        </Link>
      </div>
    </div>
  </section>
    
  <section className="py-16">
    <div className="container mx-auto px-4">
      <div id="our-story" className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1a202c] mb-6">Our Story</h2>
        <p className="text-lg text-[#4a5568] mb-6">
          IAEC (International Academic and Educational Consultants) is one of India’s leading overseas education consultancies, established in 2000 with a vision to deliver world-class guidance for students aspiring to study abroad. With a strong reputation built on trust, transparency, and success, IAEC has become a preferred choice for students seeking international education opportunities.
        </p>
        <p className="text-lg text-[#4a5568] mb-6">
          At IAEC, we provide end-to-end study abroad solutions from career counselling and university selection to application processing, visa guidance, and pre-departure support. Our expert team ensures a smooth and successful journey for every student.
        </p>
        <p className="text-lg text-[#4a5568] mb-8">
          We represent top universities and colleges across major global destinations, including the USA, UK, Australia, Canada, Ireland, Germany, France, Italy, Spain, Malta, and Latvia. Whether you’re planning to pursue undergraduate, postgraduate, or research programs, IAEC offers personalized guidance to help you make the right academic and career choices.
        </p>
        <p className="text-lg text-[#4a5568] mb-8">
          With 8 strategically located offices across Telangana, Andhra Pradesh, Ahmedabad, and Sri Lanka, and a team of 160+ experienced education professionals, IAEC has successfully assisted over 30,000 students in achieving their dreams of studying at prestigious universities worldwide.
        </p>

        {/* Statistics Section */}
        <div className="mt-12 mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-primary mb-2">30,000+</div>
              <div className="text-gray-600 font-medium">Satisfied Students</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600 font-medium">Countries</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-primary mb-2">25+</div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl font-bold text-primary mb-2">95%</div>
              <div className="text-gray-600 font-medium">Visa Success Rate</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-[#e6fffe] p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Our Mission</h3>
            <p className="text-[#4a5568]">
              To empower students to fulfill their global education aspirations by offering <strong>expert guidance, personalized support, and ethical counseling</strong>. We are committed to ensuring a <strong>smooth and successful transition</strong> into their chosen international academic environment.
            </p>
          </div>
          <div className="bg-[#e6fffe] p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#08bcb4] mb-4">Our Vision</h3>
            <p className="text-[#4a5568]">
              To inspire success and global citizenship through <strong>trustworthy guidance and world-class overseas education consulting</strong>.
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
            We prioritize every student’s <strong>academic interests, budget, and career goals</strong>. Our <strong>ethical counseling practices</strong> ensure complete transparency and honesty no misleading information, only genuine guidance.
          </p>
        </div>


      </div>
    </div>
  </section>
  <TestimonialsCarousel />
  <AccreditationRibbon autoScrollSpeed={0.8} pauseOnHover={true} />
</main>
  );
};

export default AboutPage;