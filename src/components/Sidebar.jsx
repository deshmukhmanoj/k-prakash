import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaTractor, 
  FaWater, 
  FaSeedling, 
  FaShieldAlt, 
  FaBox, 
  FaChartLine,
  FaAward,
  FaUsers,
  FaQrcode,
  FaChevronLeft,
  FaChevronRight,
  FaPhone
} from 'react-icons/fa';
import { GiChemicalDrop } from 'react-icons/gi';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const categories = [
    { name: 'Tractors', icon: <FaTractor />, count: 45 },
    { name: 'Irrigation', icon: <FaWater />, count: 32 },
    { name: 'Fertilizers', icon: <FaSeedling />, count: 28 },
    { name: 'Pesticides', icon: <GiChemicalDrop />, count: 56 },
    { name: 'Seeds', icon: <FaBox />, count: 89 },
    { name: 'Tools', icon: <FaChartLine />, count: 67 },
  ];

  const quickLinks = [
    { name: 'Best Sellers', icon: <FaAward />, path: '/products?filter=best-sellers' },
    { name: 'Farmers Club', icon: <FaUsers />, path: '/farmers-club' },
  ];

  return (
    <div className={`sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto bg-green-50 border-r border-green-200 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-64'}`}>
      <div className="p-4">
        {/* Collapse Button */}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="w-full flex items-center justify-center p-2 mb-4 bg-green-100 hover:bg-green-200 rounded-lg"
        >
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>

        {/* Categories */}
        <div className="mb-6">
          {!isCollapsed && (
            <h3 className="text-green-800 font-semibold mb-3 px-2">Product Categories</h3>
          )}
          <div className="space-y-1">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/categories?type=${category.name.toLowerCase()}`}
                className="flex items-center justify-between p-3 hover:bg-green-100 rounded-lg transition-colors group"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-green-700 text-lg">{category.icon}</span>
                  {!isCollapsed && (
                    <span className="text-green-800">{category.name}</span>
                  )}
                </div>
                {!isCollapsed && (
                  <span className="bg-green-200 text-green-800 text-xs px-2 py-1 rounded-full">
                    {category.count}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          {!isCollapsed && (
            <h3 className="text-green-800 font-semibold mb-3 px-2">Quick Links</h3>
          )}
          <div className="space-y-1">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center p-3 hover:bg-green-100 rounded-lg transition-colors group"
              >
                <span className="text-green-700 text-lg">{link.icon}</span>
                {!isCollapsed && (
                  <span className="ml-3 text-green-800">{link.name}</span>
                )}
              </Link>
            ))}
          </div>
        </div>

        {/* QR Code Section */}
        {!isCollapsed && (
          <div className="mt-8 p-4 bg-green-100 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <FaQrcode className="text-green-700" />
              <h4 className="font-semibold text-green-800">Quick WhatsApp Order</h4>
            </div>
            <p className="text-sm text-green-700 mb-3">Scan QR to order via WhatsApp</p>
            <Link
              to="/qr-whatsapp"
              className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors"
            >
              Open QR Scanner
            </Link>
          </div>
        )}

        {/* Contact Help - Fixed at bottom */}
        <div className={`mt-8 pt-6 border-t border-green-200 ${!isCollapsed ? 'text-center' : 'flex justify-center'}`}>
          <div className={`${!isCollapsed ? '' : 'flex flex-col items-center'}`}>
            <div className="flex items-center justify-center space-x-2 mb-1">
              <FaPhone className="text-green-600" />
              {!isCollapsed && (
                <p className="text-sm text-green-600">Need Help?</p>
              )}
            </div>
            <a 
              href="tel:+919876543210" 
              className="text-green-800 font-semibold hover:text-green-600 text-sm"
            >
              {!isCollapsed ? 'Call +91 9876543210' : 'Call'}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;