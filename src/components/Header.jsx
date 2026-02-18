import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart, FaPhone, FaWhatsapp, FaUser } from 'react-icons/fa';
import { GiFarmTractor } from "react-icons/gi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get current location

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Categories', path: '/categories' },
    { name: 'QR Scan', path: '/qr-whatsapp' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  // Function to check if a nav item is active
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="bg-green-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">
              <img
                src="https://gandhiagro.com/wp-content/uploads/2022/07/GAGRO-removebg-preview.png"
                alt="K-Prakash Logo"
                className="w-10 h-10 object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold leading-tight">K-Prakash</h1>
              <p className="text-green-200 text-xs">Farm Equipment & Chemicals</p>
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`transition-colors font-medium px-3 py-2 rounded-lg text-sm whitespace-nowrap ${
                  isActive(item.path)
                    ? 'bg-green-900 text-white border-b-2 border-yellow-400' // Active styles
                    : 'hover:text-green-300 hover:bg-green-700' // Inactive styles
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 md:space-x-3 flex-shrink-0">
            <a
              href="https://wa.me/917620313921"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-3 py-2 rounded-lg transition-colors text-sm whitespace-nowrap"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>

            <a
              href="tel:+917620313921"
              className="hidden md:flex items-center space-x-2 bg-white text-green-800 hover:bg-green-100 px-3 py-2 rounded-lg transition-colors text-sm whitespace-nowrap"
            >
              <FaPhone className="text-xs" />
              <span>+91 7620313921</span>
            </a>

            <Link to="/cart" className="relative p-2 hover:bg-green-700 rounded-lg">
              <FaShoppingCart className="text-lg md:text-xl" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center">
                3
              </span>
            </Link>

            <Link to="/profile" className="p-2 hover:bg-green-700 rounded-lg">
              <FaUser className="text-lg md:text-xl" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-green-700 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes className="text-lg md:text-xl" /> : <FaBars className="text-lg md:text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-2 border-t border-green-700 pt-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`py-2 px-4 rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-green-900 text-white border-l-4 border-yellow-400' // Active styles for mobile
                      : 'hover:bg-green-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col sm:flex-row gap-2 pt-2">
                <a
                  href="https://wa.me/917620313921"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="tel:+919876543210"
                  className="flex items-center justify-center space-x-2 bg-white text-green-800 hover:bg-green-100 px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  <FaPhone />
                  <span>Call Now</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;