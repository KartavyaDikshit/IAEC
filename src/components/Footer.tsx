import Link from 'next/link';
import contactInfo from '../../data/contact-info.json';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src="/images/footer-logo.png" alt="IAEC Consultants" width="150" height="50" className="mb-4" />
            <p className="text-white mb-4">
              {contactInfo.company.tagline} - Leading overseas education consultancy since {contactInfo.company.established}.
            </p>
            <div className="space-y-2 text-sm">
              <p>📞 {contactInfo.primary.mobile}</p>
              <p>📠 {contactInfo.primary.landline}</p>  
              <p>✉️ {contactInfo.primary.email}</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 !text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-white hover:text-gray-300">About Us</Link></li>
              <li><Link href="/services" className="text-white hover:text-gray-300">Services</Link></li>
              <li><Link href="/study-abroad" className="text-white hover:text-gray-300">Study Abroad</Link></li>
              <li><Link href="/blog" className="text-white hover:text-gray-300">Blog</Link></li>
              <li><Link href="/terms-conditions" className="text-white hover:text-gray-300">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy" className="text-white hover:text-gray-300">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 !text-white">{contactInfo.branches.headOffice.name} - {contactInfo.branches.headOffice.city}</h4>
            <div className="text-white text-sm whitespace-pre-line">
              <p>{contactInfo.branches.headOffice.address}</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/IAEC.Consultants.Pvt.Ltd" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300"><i className="fab fa-facebook-f"></i></a>
              <a href="https://x.com/iaec_india" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com/iaecconsultantspvtltd" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300"><i className="fab fa-instagram"></i></a>
              <a href="https://www.linkedin.com/company/iaec-consultants-pvt-ltd" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="text-center text-white pt-8 mt-8 border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} {contactInfo.company.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;