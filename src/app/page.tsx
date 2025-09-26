import CountryRibbon from '@/components/home/CountryRibbon';
import AccreditationRibbon from '@/components/home/AccreditationRibbon';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'IAEC Consultants - Your Global Study Partner',
  description: 'Leading overseas education consultants since 2000. Expert guidance for USA, UK, Australia, Canada. Transform your dreams into reality with 30,000+ success stories.',
  openGraph: {
    title: 'IAEC Consultants - Your Global Study Partner',
    description: 'Leading overseas education consultants since 2000. Expert guidance for USA, UK, Australia, Canada.',
    images: ['/images/home-og.jpg'],
  },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-light via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Your Global Study Partner –{' '}
              <span className="text-primary">Explore the World</span>{' '}
              with IAEC
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Leading overseas education consultants since 2000. Expert guidance for USA, UK, 
              Australia, Canada. Transform your dreams into reality with 30,000+ success stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 text-white">
                Start Your Journey
              </Link>
              <Link href="/contact" className="btn-secondary text-lg px-8 py-4 rounded-lg hover:shadow-lg transition-all duration-300 text-white">
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="text-4xl font-bold text-primary mb-2">24+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-gray-600 font-medium">Visa Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Country Ribbon */}
      <CountryRibbon autoScrollSpeed={1.2} pauseOnHover={true} />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About IAEC Consultants
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                IAEC is a leading overseas education consultancy established in 2000 with a passion 
                to build an enterprise of international quality. We specialize in study abroad programs 
                for USA, UK, Australia, Canada, Ireland, and European countries.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With 8 offices across Telangana, Andhra Pradesh & Sri Lanka, our dedicated team of 
                160+ education experts has successfully placed 30,000+ students in top universities 
                worldwide since 2000.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To empower students to achieve their global education dreams through expert guidance, 
                    personalized support, and ethical counseling.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
                  <p className="text-gray-600 leading-relaxed">
                    To be the most trusted leader in overseas education consultancy, fostering 
                    successful global citizens.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Values</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Knowledge, care for students, problem-solving skills, and timeliness in all our services.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src="/images/all_images/Admissions.jpeg"
                  alt="IAEC Consultants office and team"
                  className="rounded-2xl shadow-2xl object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Ribbon */}
      <AccreditationRibbon autoScrollSpeed={0.8} pauseOnHover={true} />
    </>
  );
}