import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-2">
          <div>
            <Link href="/" className="inline-block">
              <Image src="/images/IAEC Logo.png" alt="IAEC Consultants" width="100" height="33" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-gray-800 hover:text-gray-900 text-lg">Home</Link>
            <Link href="/about" className="text-gray-800 hover:text-gray-900 text-lg">About Us</Link>
            <div className="relative group">
              <button className="text-[#08bcb4] hover:text-[#069aa2] flex items-center font-medium transition-colors text-lg">
    Study Abroad <span className="ml-1">▾</span>
  </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg">
                <Link href="/study-abroad/uk" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100">Study in UK</Link>
                <Link href="/study-abroad/usa" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100">Study in USA</Link>
                <Link href="/study-abroad/australia" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100">Study in Australia</Link>
                <Link href="/study-abroad/canada" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100">Study in Canada</Link>
                <Link href="/study-abroad/ireland" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100">Study in Ireland</Link>
                <Link href="/study-abroad/new-zealand" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100">Study in New Zealand</Link>
                <Link href="/study-abroad/europe" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100">Study in Europe</Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-[#08bcb4] hover:text-[#069aa2] flex items-center font-medium transition-colors text-lg">
    Services <span className="ml-1">▾</span>
  </button>
              <div className="absolute hidden group-hover:block bg-white shadow-lg">
                <Link href="/services/coaching" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100">Coaching Services</Link>
                <Link href="/services/visa" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100">Visa Services</Link>
                <Link href="/services/travel-forex" className="block px-4 py-2 text-base text-gray-800 hover:bg-gray-100">Travel & Forex</Link>
              </div>
            </div>
            <Link href="/blog" className="text-gray-800 hover:text-gray-900 text-lg">Blog</Link>
            <Link href="/testimonials" className="text-gray-800 hover:text-gray-900 text-lg">Testimonials</Link>
            <Link href="/contact" className="text-gray-800 hover:text-gray-900 text-lg">Contact Us</Link>
          </nav>
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/booking" className="px-3 py-1 rounded-md text-base border border-white" style={{ backgroundColor: '#08bcb4', color: 'white' }}>Book Free Counselling</Link>
            <Link href="/mock-test" className="px-3 py-1 rounded-md text-base border border-white" style={{ backgroundColor: '#08bcb4', color: 'white' }}>Free Mock Test</Link>
            
          </div>
          <div className="md:hidden">
            <button>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
