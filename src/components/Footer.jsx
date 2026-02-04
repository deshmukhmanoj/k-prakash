import { Link } from 'react-router-dom';
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaWhatsapp,
  FaTractor,
  FaShippingFast,
  FaHeadset,
  FaCertificate
} from 'react-icons/fa';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Categories', path: '/categories' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'QR Order', path: '/qr-whatsapp' },
  ];

  const services = [
    { name: 'Equipment Rental', icon: <FaTractor /> },
    { name: 'Free Delivery', icon: <FaShippingFast /> },
    { name: '24/7 Support', icon: <FaHeadset /> },
    { name: 'Quality Certified', icon: <FaCertificate /> },
  ];

  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <FaTractor className="text-green-900 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AgriTech Solutions</h3>
                <p className="text-green-300 text-sm">Quality Farm Solutions</p>
              </div>
            </div>
            <p className="text-green-200 mb-4">
              Leading provider of agricultural equipment, fertilizers, and pesticides since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-green-300 transition-colors text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-green-300 transition-colors text-xl">
                <FaYoutube />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-green-200 hover:text-white transition-colors flex items-center space-x-2"
                  >
                    <span>→</span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name} className="flex items-center space-x-3 text-green-200">
                  <span className="text-green-300">{service.icon}</span>
                  <span>{service.name}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-green-300" />
                <div>
                  <p className="font-medium">+91 9876543210</p>
                  <p className="text-sm text-green-300">Mon-Sat: 9AM-7PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-green-300" />
                <span>info@agritech.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="text-green-300 mt-1" />
                <span>123 Farm Street, Agricultural Zone, City - 123456</span>
              </div>
            </div>

            {/* WhatsApp QR Quick Link */}
            <div className="mt-6 p-4 bg-green-800 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <FaWhatsapp className="text-green-300 text-xl" />
                <h5 className="font-semibold">WhatsApp Orders</h5>
              </div>
              <p className="text-sm text-green-200 mb-3">
                Scan QR code to order directly via WhatsApp
              </p>
              <Link
                to="/qr-whatsapp"
                className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors text-sm"
              >
                Go to QR Scanner
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-green-800 mt-8 pt-6 text-center text-green-300">
          <p>&copy; {new Date().getFullYear()} AgriTech Solutions. All rights reserved.</p>
          <p className="text-sm mt-1">Agricultural Equipment & Chemicals Supplier</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;