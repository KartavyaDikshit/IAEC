import Image from 'next/image';
import Link from 'next/link';
import { studyAbroadCountries } from '@/lib/countries';
import ContactInfo from '@/components/ContactInfo';

export const metadata = {
  title: 'Study Abroad Destinations | IAEC Consultants',
  description: 'Explore top study abroad destinations including USA, UK, Australia, Canada, and Europe. Get expert guidance for your overseas education journey.',
};

export default function StudyAbroadPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/placeholders/default-country.png"
            alt="Study Abroad Destinations"
            fill
            style={{ objectFit: 'cover' }}
            className="z-0"
            priority
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Choose Your Destination
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            Explore world-class education opportunities in top global destinations
          </p>
        </div>
      </section>

      {/* Countries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {studyAbroadCountries.map((country) => (
              <Link 
                href={country.path} 
                key={country.name}
                className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={country.heroImage || country.image || '/images/placeholders/default-country.png'}
                    alt={`Study in ${country.name}`}
                    fill
                    style={{ objectFit: 'cover' }}
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-70 transition-opacity" />
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <div className="text-4xl mb-2">{country.flag}</div>
                    <h3 className="text-2xl font-bold mb-1">{country.name}</h3>
                    <div className="w-12 h-1 bg-[#08bcb4] rounded-full transform origin-left group-hover:scale-x-150 transition-transform" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {country.description}
                  </p>
                  <span className="inline-block text-[#08bcb4] font-semibold group-hover:translate-x-2 transition-transform">
                    Explore Opportunities →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-[#08bcb4] rounded-2xl p-12 md:p-16 text-center text-white relative overflow-hidden shadow-xl">
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Not Sure Which Country is Right for You?
              </h2>
              <p className="text-xl mb-8 text-blue-50">
                Our expert counselors can help match your profile and career goals with the perfect destination.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  href="/contact" 
                  className="bg-white text-[#08bcb4] px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-md"
                >
                  Get Free Counseling
                </Link>
                <Link 
                  href="/services" 
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <div className="bg-gray-50">
        <ContactInfo />
      </div>
    </div>
  );
}
