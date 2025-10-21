import Link from 'next/link';
import { 
  FaTwitter, 
  FaGithub, 
  FaDiscord, 
  FaLinkedin, 
  FaEnvelope, 
  FaChevronDown 
} from 'react-icons/fa';
import { IoLanguage } from 'react-icons/io5'; 

const Footer = () => {
  const socialLinks = [
    { href: 'https://twitter.com', icon: FaTwitter },
    { href: 'https://github.com', icon: FaGithub },
    { href: 'https://discord.com', icon: FaDiscord },
    { href: 'https://linkedin.com', icon: FaLinkedin },
    { href: 'mailto:email@example.com', icon: FaEnvelope },
  ];
  
  return (
    <footer className="bg-gray-50 relative"> 
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-10">
          
          <div>
            <h4 className="text-gray-900 mb-3">ABOUT</h4> 
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/about" className="text-indigo-600 hover:text-indigo-700">About us</Link></li>
              <li><Link href="/contact" className="hover:text-indigo-600">Contact us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 mb-3">RESOURCES</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/blog" className="hover:text-indigo-600">Blog</Link></li>
              <li><Link href="/how-it-works" className="hover:text-indigo-600">How 3F works?</Link></li>
              <li><Link href="/help" className="hover:text-indigo-600">Help & support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 mb-3">CONTRIBUTING</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><Link href="/brand" className="hover:text-indigo-600">Brand & Organizations</Link></li>
              <li><Link href="/pricing" className="hover:text-indigo-600">Pricing</Link></li>
            </ul>
          </div>

          <div className="hidden md:block"></div>
        </div>
      </div>
        
      <div className="absolute left-0 right-0 h-px bg-indigo-500" style={{ bottom: '64px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex justify-between items-center pt-4 pb-4"> 
            
            <div className="flex items-center text-sm text-gray-600">
              <div className="flex items-center space-x-1 py-1 px-3 border border-gray-200 rounded-lg cursor-pointer transition bg-white hover:bg-gray-100">
                <IoLanguage className="w-4 h-4 text-gray-500" /> 
                <span className="text-sm font-medium">English (100%)</span>
                <FaChevronDown className="w-3 h-3 text-gray-500" /> 
              </div>
            </div>


            <div className="flex space-x-6 text-sm text-gray-500 mx-auto"> 
              <Link href="/trust" className="hover:text-gray-900">Trust & safety</Link>
              <Link href="/terms" className="hover:text-gray-900">Terms of use</Link>
              <Link href="/privacy" className="hover:text-gray-900">Privacy Policy</Link>
            </div>


            <div className="flex space-x-3 text-gray-500 mr-[200px]">
              {socialLinks.map((item, index) => (
                <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition duration-150 ease-in-out">
                  <item.icon className="w-4 h-4" /> 
                </a>
              ))}
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;