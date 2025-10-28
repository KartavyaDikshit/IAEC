import Link from 'next/link';
import Image from 'next/image';
import contactInfo from '../../data/contact-info.json';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image src="/images/footer-logo.png" alt="IAEC Consultants" width="150" height="50" className="mb-4" />
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
            <h4 className="text-lg font-semibold mb-4 !text-white">Our Offices</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-medium !text-white">{contactInfo.branches.ahmedabad.name}</h5>
                <p className="text-white text-sm whitespace-pre-line">
                  <a href={contactInfo.branches.ahmedabad.mapLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {contactInfo.branches.ahmedabad.address}
                  </a>
                </p>
                <p className="text-white text-sm">📞 {contactInfo.branches.ahmedabad.mobile}</p>
              </div>
              <div>
                <h5 className="font-medium !text-white">{contactInfo.branches.kukatpally.name}</h5>
                <p className="text-white text-sm whitespace-pre-line">
                  <a href={contactInfo.branches.kukatpally.mapLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {contactInfo.branches.kukatpally.address}
                  </a>
                </p>
                <p className="text-white text-sm">📞 {contactInfo.branches.kukatpally.mobile}</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4 !text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/IAECconsultantspvtltd.Ahmedabad/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/links/facebook.jpeg" alt="Facebook" width={24} height={24} className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/iaec_consultants/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/links/instagram.jpeg" alt="Instagram" width={24} height={24} className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/iaecconsultantspvtltd/" target="_blank" rel="noopener noreferrer">
                <Image src="/images/links/linkedin.jpeg" alt="LinkedIn" width={24} height={24} className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@IAEC_Consultants" target="_blank" rel="noopener noreferrer">
                <Image src="/images/links/youtube.jpeg" alt="YouTube" width={24} height={24} className="w-6 h-6" />
              </a>
              <a href="mailto:ravinder@iaecconsultants.com">
                <Image src="/images/links/email.jpeg" alt="Email" width={24} height={24} className="w-6 h-6" />
              </a>
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