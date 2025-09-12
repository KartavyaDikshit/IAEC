
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">IAEC Consultants</h3>
            <p className="text-gray-300">Your Global Study Partner</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white">Services</Link></li>
              <li><Link href="/study-abroad" className="text-gray-300 hover:text-white">Study Abroad</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white">Blog</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <p className="text-gray-300">IAEC Consultants Pvt Ltd - Ahmedabad</p>
            <p className="text-gray-300">Email: info@iaecconsultants.com</p>
            <p className="text-gray-300">Phone: +91-XXXXXXXXXX</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-gray-300 hover:text-white"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-500 pt-8 mt-8 border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} IAEC Consultants. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
