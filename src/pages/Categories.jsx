import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FaTractor, 
  FaLeaf, 
  FaShieldAlt, 
  FaTruck, 
  FaBox, 
  FaChartLine,
  FaWhatsapp,
  FaShoppingCart,
  FaStar,
  FaSeedling,
  FaWater,
  FaFire
} from 'react-icons/fa';
import { GiChemicalDrop, GiWheat } from 'react-icons/gi';

const Categories = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    {
      id: 'tractors',
      name: 'Tractors & Machinery',
      icon: <FaTractor className="text-4xl" />,
      description: 'Heavy machinery for farming operations',
      productCount: 45,
      color: 'from-green-600 to-green-800',
      popular: true
    },
    {
      id: 'fertilizers',
      name: 'Fertilizers',
      icon: <FaLeaf className="text-4xl" />,
      description: 'Organic and chemical fertilizers',
      productCount: 28,
      color: 'from-amber-600 to-amber-800',
      popular: true
    },
    {
      id: 'pesticides',
      name: 'Pesticides',
      icon: <GiChemicalDrop className="text-4xl" />,
      description: 'Crop protection chemicals',
      productCount: 56,
      color: 'from-red-600 to-red-800',
      popular: true
    },
    {
      id: 'irrigation',
      name: 'Irrigation',
      icon: <FaWater className="text-4xl" />,
      description: 'Water management systems',
      productCount: 32,
      color: 'from-blue-600 to-blue-800',
      popular: false
    },
    {
      id: 'seeds',
      name: 'Seeds',
      icon: <FaSeedling className="text-4xl" />,
      description: 'High quality seeds',
      productCount: 89,
      color: 'from-emerald-600 to-emerald-800',
      popular: true
    },
    {
      id: 'tools',
      name: 'Tools & Equipment',
      icon: <FaChartLine className="text-4xl" />,
      description: 'Farming tools and accessories',
      productCount: 67,
      color: 'from-gray-600 to-gray-800',
      popular: false
    },
    {
      id: 'storage',
      name: 'Storage',
      icon: <FaBox className="text-4xl" />,
      description: 'Grain storage solutions',
      productCount: 23,
      color: 'from-yellow-600 to-yellow-800',
      popular: false
    },
    {
      id: 'transport',
      name: 'Transport',
      icon: <FaTruck className="text-4xl" />,
      description: 'Farm transport vehicles',
      productCount: 18,
      color: 'from-purple-600 to-purple-800',
      popular: false
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Tractor Model X4 Pro',
      category: 'tractors',
      price: '₹5,49,999',
      rating: 4.8,
      icon: <FaTractor />
    },
    {
      id: 2,
      name: 'Organic Fertilizer',
      category: 'fertilizers',
      price: '₹2,499',
      rating: 4.6,
      icon: <FaLeaf />
    },
    {
      id: 3,
      name: 'Crop Shield Plus',
      category: 'pesticides',
      price: '₹1,899',
      rating: 4.7,
      icon: <GiChemicalDrop />
    },
    {
      id: 4,
      name: 'Drip Irrigation Kit',
      category: 'irrigation',
      price: '₹8,999',
      rating: 4.9,
      icon: <FaWater />
    }
  ];

  const filteredCategories = activeCategory === 'all' 
    ? categories 
    : activeCategory === 'popular' 
    ? categories.filter(cat => cat.popular)
    : categories.filter(cat => cat.id === activeCategory);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-green-800 mb-2">Product Categories</h1>
        <p className="text-green-600">Browse our wide range of agricultural products</p>
      </div>

      {/* Category Filters */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeCategory === 'all' 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            All Categories
          </button>
          <button
            onClick={() => setActiveCategory('popular')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeCategory === 'popular' 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <FaFire className="inline mr-2" />
            Popular
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                activeCategory === category.id 
                ? 'bg-green-600 text-white' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {filteredCategories.map(category => (
          <Link
            key={category.id}
            to={`/products?category=${category.id}`}
            className="group"
          >
            <div className={`bg-linear-to-br ${category.color} rounded-xl shadow-lg overflow-hidden transition-transform group-hover:-translate-y-2`}>
              <div className="p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-white/20 w-16 h-16 rounded-lg flex items-center justify-center">
                    {category.icon}
                  </div>
                  {category.popular && (
                    <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full flex items-center">
                      <FaFire className="mr-1" /> Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                <p className="text-white/80 mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm">{category.productCount} Products</span>
                  <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                    View All →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Featured Products */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg border p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 text-xl">{product.icon}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <FaStar className="text-yellow-500" />
                  <span className="font-semibold">{product.rating}</span>
                </div>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">{product.name}</h4>
              <p className="text-gray-600 text-sm mb-4">Starting from</p>
              <div className="flex items-center justify-between">
                <span className="text-xl font-bold text-green-700">{product.price}</span>
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-green-100 rounded-lg text-green-600">
                    <FaShoppingCart />
                  </button>
                  <a
                    href={`https://wa.me/919876543210?text=Interested in: ${encodeURIComponent(product.name)} - ${product.price}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-green-100 rounded-lg text-green-600"
                  >
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WhatsApp CTA */}
      <div className="bg-linear-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-6 lg:mb-0 lg:mr-8">
            <div className="flex items-center mb-4">
              <FaWhatsapp className="text-4xl mr-3" />
              <div>
                <h3 className="text-2xl font-bold">Need Help Choosing?</h3>
                <p className="text-green-100">Our experts can help you select the right products</p>
              </div>
            </div>
            <p className="text-green-100 mb-4">
              Chat with our agricultural experts on WhatsApp for personalized product recommendations.
            </p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-green-700 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold"
            >
              <FaWhatsapp className="mr-2" />
              Chat with Expert
            </a>
          </div>
          <div className="bg-white p-4 rounded-xl">
            <div className="w-48 h-48 bg-green-50 rounded-lg flex items-center justify-center">
              <GiWheat className="text-6xl text-green-600" />
            </div>
            <p className="text-green-800 text-center mt-3 font-medium">Expert Advice Available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;