import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingCart, FaPhone, FaWhatsapp, FaUser } from 'react-icons/fa';
import { GiFarmTractor } from "react-icons/gi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'Categories', path: '/categories' },
    { name: 'QR Scan', path: '/qr-whatsapp' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="bg-green-800 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-1  py-1">
        <div className="flex items-center justify-between">
          {/* Logo */}
          {/* <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <GiFarmTractor className="text-green-800 text-2xl" />
            </div>
            <div>
              <h1 className="text-xl font-bold">K-Prakash</h1>
              <p className="text-green-200 text-sm">Farm Equipment & Chemicals</p>
            </div>
          </Link> */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center overflow-hidden">

              {/* ICON (commented for now) */}
              {/*
    <GiFarmTractor className="text-green-800 text-2xl" />
    */}

              {/* IMAGE */}
              <img
                src="https://gandhiagro.com/wp-content/uploads/2022/07/GAGRO-removebg-preview.png"   // put your image in public folder
                alt="K-Prakash Logo"
                className="w-10 h-10 object-contain"
              />

            </div>

            <div>
              <h1 className="text-xl font-bold">K-Prakash</h1>
              <p className="text-green-200 text-sm">Farm Equipment & Chemicals</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="hover:text-green-300 transition-colors font-medium hover:bg-green-700 px-3 py-2 rounded-lg"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
            >
              <FaWhatsapp />
              <span>WhatsApp</span>
            </a>

            <button className="hidden md:flex items-center space-x-2 bg-white text-green-800 hover:bg-green-100 px-4 py-2 rounded-lg transition-colors">
              <FaPhone />
              <span>+91 9876543210</span>
            </button>

            <button className="relative p-2 hover:bg-green-700 rounded-lg">
              <FaShoppingCart className="text-xl" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            <button className="p-2 hover:bg-green-700 rounded-lg">
              <FaUser className="text-xl" />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 hover:bg-green-700 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className="py-2 px-4 hover:bg-green-700 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex space-x-3 pt-2">
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors"
                >
                  <FaWhatsapp />
                  <span>WhatsApp</span>
                </a>
                <button className="flex-1 flex items-center justify-center space-x-2 bg-white text-green-800 hover:bg-green-100 px-4 py-2 rounded-lg transition-colors">
                  <FaPhone />
                  <span>Call</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;