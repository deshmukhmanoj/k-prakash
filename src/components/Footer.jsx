import { Link, useLocation } from 'react-router-dom';
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
  FaCertificate,
  FaLeaf,
  FaArrowRight,
  FaQrcode,
  FaClock,
  FaShieldAlt,
  FaAward,
  FaCheckCircle
} from 'react-icons/fa';

const Footer = () => {
  const location = useLocation();
  const currentYear = new Date().getFullYear();

  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Categories', path: '/categories' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
    { name: 'QR Order', path: '/qr-whatsapp' },
  ];

  const services = [
    { name: 'Equipment Rental', icon: <FaTractor />, description: 'Latest machinery on rent' },
    { name: '24/7 Support', icon: <FaHeadset />, description: 'Expert farming support' },
    { name: 'Best Prices', icon: <FaAward />, description: 'Guaranteed market rates' },
    { name: 'Safe Packaging', icon: <FaShieldAlt />, description: 'Secure handling' },
  ];

  const contactServices = [
    { name: 'Free Delivery', icon: <FaShippingFast />, description: 'On orders above ₹5000' },
    { name: 'Quality Certified', icon: <FaCertificate />, description: 'ISO certified products' },
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' },
    { icon: <FaInstagram />, url: 'https://instagram.com', label: 'Instagram' },
    { icon: <FaYoutube />, url: 'https://youtube.com', label: 'YouTube' },
  ];

  const contactInfo = [
    { icon: <FaPhone />, primary: '+91 9876543210', secondary: 'Mon-Sat: 9AM-7PM' },
    { icon: <FaEnvelope />, primary: 'info@k-prakash.com', secondary: 'support@k-prakash.com' },
    { icon: <FaMapMarkerAlt />, primary: '123 Farm Street', secondary: 'Agricultural Zone, City - 123456' },
  ];

  return (
    <footer className="bg-gradient-to-b from-green-900 to-green-950 text-white relative overflow-hidden">
      {/* Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10">
          
          {/* Company Info - sm:col-span-2 lg:col-span-3 */}
          <div className="sm:col-span-2 lg:col-span-3">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-0 transition-transform flex-shrink-0">
                <FaTractor className="text-green-900 text-xl sm:text-2xl lg:text-3xl" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold leading-tight">K-Prakash</h3>
                <p className="text-green-300 text-xs sm:text-sm">Farm Equipment & Chemicals</p>
              </div>
            </div>
            
            <p className="text-green-200 text-sm sm:text-base mb-4 leading-relaxed max-w-md">
              Leading provider of agricultural equipment, fertilizers, and pesticides since 2010. 
              Serving farmers with quality products and expert support.
            </p>
            
            {/* Trust Badges - Responsive grid */}
            <div className="grid grid-cols-3 gap-1 sm:gap-2 mb-6">
              <div className="bg-green-800/40 backdrop-blur-sm text-center p-2 rounded-lg border border-green-700/50">
                <div className="font-bold text-sm sm:text-base text-yellow-400">10+</div>
                <div className="text-xs text-green-300">Years</div>
              </div>
              <div className="bg-green-800/40 backdrop-blur-sm text-center p-2 rounded-lg border border-green-700/50">
                <div className="font-bold text-sm sm:text-base text-yellow-400">5000+</div>
                <div className="text-xs text-green-300">Customers</div>
              </div>
              <div className="bg-green-800/40 backdrop-blur-sm text-center p-2 rounded-lg border border-green-700/50">
                <div className="font-bold text-sm sm:text-base text-yellow-400">1000+</div>
                <div className="text-xs text-green-300">Products</div>
              </div>
            </div>

            {/* Social Links - Responsive */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-800 hover:bg-green-700 p-2 sm:p-3 rounded-lg transition-all hover:scale-110 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <span className="text-base sm:text-lg">{social.icon}</span>
                </a>
              ))}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-500 p-2 sm:p-3 rounded-lg transition-all hover:scale-110 hover:-translate-y-1"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-base sm:text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links - sm:col-span-1 lg:col-span-2 */}
          <div className="sm:col-span-1 lg:col-span-2">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center">
              <span className="w-1 h-4 sm:h-5 bg-yellow-400 rounded-full mr-2"></span>
              Quick Links
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className={`group flex items-center space-x-2 py-1.5 px-2 rounded-lg transition-all text-sm sm:text-base ${
                      isActive(link.path)
                        ? 'text-yellow-400 bg-green-800/50' 
                        : 'text-green-200 hover:text-white hover:bg-green-800/30'
                    }`}
                  >
                    <FaArrowRight className={`text-xs transition-transform group-hover:translate-x-1 flex-shrink-0 ${
                      isActive(link.path) ? 'text-yellow-400' : 'text-green-400'
                    }`} />
                    <span className="truncate">{link.name}</span>
                    {isActive(link.path) && (
                      <span className="ml-auto w-1.5 h-1.5 bg-yellow-400 rounded-full flex-shrink-0"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* QR Quick Link - Hidden on smallest mobile */}
            <div className="mt-4 sm:mt-6 hidden sm:block">
              <Link
                to="/qr-whatsapp"
                className={`group flex items-center space-x-3 p-2 sm:p-3 rounded-xl transition-all ${
                  isActive('/qr-whatsapp')
                    ? 'bg-yellow-500/20 border border-yellow-500/50'
                    : 'bg-green-800/50 hover:bg-green-800 border border-green-700'
                }`}
              >
                <div className="bg-white p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                  <FaQrcode className="text-green-900 text-sm sm:text-base" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-medium text-sm sm:text-base truncate">Quick QR Order</p>
                  <p className="text-xs text-green-300 truncate">Scan & order via WhatsApp</p>
                </div>
                <FaArrowRight className="flex-shrink-0 ml-auto text-green-300 text-xs sm:text-sm" />
              </Link>
            </div>
          </div>

          {/* Services - sm:col-span-1 lg:col-span-3 */}
          <div className="sm:col-span-1 lg:col-span-3">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center">
              <span className="w-1 h-4 sm:h-5 bg-yellow-400 rounded-full mr-2"></span>
              Our Services
            </h4>
            <div className="grid grid-cols-1 gap-2 sm:gap-3">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="group bg-green-800/30 hover:bg-green-800/50 p-2.5 sm:p-3 rounded-xl border border-green-700/50 hover:border-green-600 transition-all hover:-translate-y-0.5"
                >
                  <div className="flex items-start space-x-2.5 sm:space-x-3">
                    <span className="text-green-300 group-hover:text-yellow-400 transition-colors text-base sm:text-lg flex-shrink-0 mt-0.5">
                      {service.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h5 className="font-medium text-sm sm:text-base">{service.name}</h5>
                      <p className="text-xs sm:text-sm text-green-300 mt-0.5 truncate">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact & Updates - sm:col-span-2 lg:col-span-4 */}
          <div className="sm:col-span-2 lg:col-span-4">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 flex items-center">
              <span className="w-1 h-4 sm:h-5 bg-yellow-400 rounded-full mr-2"></span>
              Contact Us
            </h4>
            
            {/* Contact Services - 2 column grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4">
              {contactServices.map((service) => (
                <div
                  key={service.name}
                  className="bg-green-800/30 p-2.5 sm:p-3 rounded-xl border border-green-700/50"
                >
                  <div className="flex items-center space-x-2">
                    <span className="text-green-300 text-sm sm:text-base">{service.icon}</span>
                    <div>
                      <h5 className="font-medium text-xs sm:text-sm">{service.name}</h5>
                      <p className="text-xs text-green-300">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="space-y-2.5 sm:space-y-3 mb-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-2.5 sm:space-x-3 group hover:bg-green-800/30 p-2 rounded-lg transition-all">
                  <div className="bg-green-800 group-hover:bg-green-700 p-2 sm:p-2.5 rounded-lg text-green-300 group-hover:text-yellow-400 transition-all flex-shrink-0">
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium text-sm sm:text-base truncate">{item.primary}</p>
                    <p className="text-xs sm:text-sm text-green-300 truncate">{item.secondary}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Business Hours & Newsletter - Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Business Hours */}
              <div className="bg-green-800/30 p-3 sm:p-4 rounded-xl border border-green-700/50">
                <div className="flex items-center space-x-2 mb-2">
                  <FaClock className="text-yellow-400 text-sm sm:text-base" />
                  <h5 className="font-medium text-sm sm:text-base">Business Hours</h5>
                </div>
                <div className="space-y-1.5 text-xs sm:text-sm">
                  <div className="flex justify-between">
                    <span className="text-green-300">Mon - Fri</span>
                    <span className="font-medium">9AM - 7PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-green-300">Saturday</span>
                    <span className="font-medium">9AM - 3PM</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-green-700/50 mt-1">
                    <span className="text-green-300">Sunday</span>
                    <span className="font-medium text-yellow-400">Closed</span>
                  </div>
                </div>
              </div>

              {/* Get Farming Updates */}
              <div className="bg-green-800/30 p-3 sm:p-4 rounded-xl border border-green-700/50">
                <h5 className="font-medium mb-2 flex items-center text-sm sm:text-base">
                  <FaLeaf className="mr-2 text-green-300 text-sm sm:text-base" />
                  Get Farming Updates
                </h5>
                <div className="flex flex-col space-y-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 bg-green-900/50 border border-green-700 rounded-lg focus:outline-none focus:border-yellow-500 text-sm placeholder:text-green-400/50"
                  />
                  <button className="w-full bg-yellow-500 hover:bg-yellow-600 px-3 py-2 rounded-lg transition-colors text-sm font-medium">
                    Subscribe
                  </button>
                  <p className="text-xs text-green-400 mt-1">
                    Get latest farming tips & offers
                  </p>
                </div>
              </div>
            </div>

            {/* Mobile QR Link - Show only on mobile */}
            <div className="mt-4 sm:hidden">
              <Link
                to="/qr-whatsapp"
                className={`flex items-center justify-center space-x-2 p-3 rounded-xl transition-all ${
                  isActive('/qr-whatsapp')
                    ? 'bg-yellow-500/20 border border-yellow-500/50'
                    : 'bg-green-600 hover:bg-green-500'
                }`}
              >
                <FaQrcode className="text-white text-base" />
                <span className="font-medium text-sm">Scan QR to Order</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="border-t border-green-800/50 mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-green-300 text-xs sm:text-sm text-center sm:text-left">
              &copy; {currentYear} K-Prakash Farm Equipment & Chemicals. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
              <Link to="/privacy" className="text-green-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <span className="text-green-700 hidden sm:inline">|</span>
              <Link to="/terms" className="text-green-300 hover:text-white transition-colors">
                Terms
              </Link>
              <span className="text-green-700 hidden sm:inline">|</span>
              <Link to="/returns" className="text-green-300 hover:text-white transition-colors">
                Returns
              </Link>
            </div>
          </div>
          <p className="text-center text-green-400/40 text-xs mt-3 sm:mt-4">
            Made with 🌱 for Indian Farmers
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button - Responsive */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50 group"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-xl sm:text-2xl" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with us
        </span>
      </a>
    </footer>
  );
};

export default Footer;