import { useState } from 'react';
import {
    FaSearch,
    FaFilter,
    FaShoppingCart,
    FaWhatsapp,
    FaStar,
    FaChevronRight,
    FaTruck,
    FaShieldAlt,
    FaLeaf,
    FaFire,
    FaSortAmountDown,
    FaSortAmountUp
} from 'react-icons/fa';
import { GiFarmTractor, GiChemicalDrop, GiSpray } from 'react-icons/gi';

const Products = () => {
    const [sortBy, setSortBy] = useState('popular');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    const categories = [
        { id: 'all', name: 'All Products', icon: <FaFire />, count: 320 },
        { id: 'tractors', name: 'Tractors', icon: <GiFarmTractor />, count: 45 },
        { id: 'fertilizers', name: 'Fertilizers', icon: <FaLeaf />, count: 28 },
        { id: 'pesticides', name: 'Pesticides', icon: <GiChemicalDrop />, count: 56 },
        { id: 'tools', name: 'Tools', icon: <FaShieldAlt />, count: 67 },
        { id: 'irrigation', name: 'Irrigation', icon: <FaTruck />, count: 32 },
        { id: 'Sprayer', name: 'Sprayer', icon: <FaTruck />, count: 4 },
    ];

    const products = [
        {
            id: 1,
            name: 'Tractor Model X4 Pro',
            category: 'tractors',
            description: 'Heavy duty tractor with advanced features',
            price: '₹5,49,999',
            originalPrice: '₹5,99,999',
            rating: 4.8,
            reviews: 124,
            features: ['150 HP', '4WD', 'Air Conditioned'],
            image: 'https://images.unsplash.com/photo-1587654780298-8dedbce6c6a4?w=400&q=80'
        },
        {
            id: 2,
            name: 'Organic Fertilizer Premium',
            category: 'fertilizers',
            description: '100% organic fertilizer for all crops',
            price: '₹2,499',
            originalPrice: '₹2,999',
            rating: 4.6,
            reviews: 89,
            features: ['Organic', '25kg Bag', 'NPK 10-10-10'],
            image: 'https://images.unsplash.com/photo-1615486511484-92e6e0c6f864?w=400&q=80'
        },
        {
            id: 3,
            name: 'Crop Shield Plus',
            category: 'pesticides',
            description: 'Advanced pesticide for pest control',
            price: '₹1,899',
            originalPrice: '₹2,199',
            rating: 4.7,
            reviews: 156,
            features: ['5 Liters', 'Systemic', 'Rainproof'],
            image: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&q=80'
        },
        {
            id: 4,
            name: 'Drip Irrigation System',
            category: 'irrigation',
            description: 'Complete drip irrigation kit',
            price: '₹8,999',
            originalPrice: '₹9,999',
            rating: 4.9,
            reviews: 78,
            features: ['1 Acre Coverage', 'Automatic Timer', 'Filters'],
            image: 'https://images.unsplash.com/photo-1573471560432-9c5c7616a35d?w=400&q=80'
        },
        {
            id: 5,
            name: 'Harvester Combine',
            category: 'tractors',
            description: 'Combine harvester for grain crops',
            price: '₹12,49,999',
            originalPrice: '₹13,99,999',
            rating: 4.9,
            reviews: 45,
            features: ['Grain Tank', 'Auto Leveling', 'GPS'],
            image: 'https://images.unsplash.com/photo-1590801077947-7c6b4e427b3c?w=400&q=80'
        },
        {
            id: 6,
            name: 'Soil Testing Kit',
            category: 'tools',
            description: 'Professional soil testing equipment',
            price: '₹6,499',
            originalPrice: '₹7,499',
            rating: 4.5,
            reviews: 67,
            features: ['Digital', 'pH Meter', 'Nutrient Test'],
            image: 'https://images.unsplash.com/photo-1585496115317-5c6aabd5d3f6?w=400&q=80'
        },
        {
            id: 7,
            name: 'Hybrid Seeds Pack',
            category: 'seeds',
            description: 'High yield hybrid seeds',
            price: '₹1,299',
            originalPrice: '₹1,599',
            rating: 4.7,
            reviews: 234,
            features: ['Hybrid', '5kg Pack', 'Germination 95%'],
            image: 'https://images.unsplash.com/photo-1590805572224-5e6b8e4c6d3b?w=400&q=80'
        },
        {
            id: 8,
            name: 'Sprayer Machine',
            category: 'tools',
            description: 'Power sprayer for pesticides',
            price: '₹4,999',
            originalPrice: '₹5,499',
            rating: 4.4,
            reviews: 89,
            features: ['20L Capacity', 'Battery', 'Adjustable Nozzle'],
            image: 'https://images.unsplash.com/photo-1590805572224-5e6b8e4c6d3b?w=400&q=80'
        },
        {
            id: 9,
            name: 'Sarpanch B/O Sprayer',
            category: 'Sprayer',
            description: 'Power sprayer for pesticides',
            price: '₹2,999',
            originalPrice: '₹3,499',
            rating: 4.4,
            reviews: 89,
            features: ['20L Capacity', 'Battery', 'Adjustable Nozzle'],
            image: 'https://gandhiagro.com/wp-content/uploads/2026/01/2-570x696.png'
        },
        {
            id: 10,
            name: 'Vikram B/O Sprayer',
            category: 'Sprayer',
            description: 'Power sprayer for pesticides',
            price: '₹1,999',
            originalPrice: '₹2,499',
            rating: 4.4,
            reviews: 89,
            features: ['20L Capacity', 'Battery', 'Adjustable Nozzle'],
            image: 'https://gandhiagro.com/wp-content/uploads/2026/01/1-570x696.png'
        },
        {
            id: 11,
            name: 'Kaypee 777 Power Sprayer',
            category: 'Sprayer',
            description: 'Power sprayer for pesticides',
            price: '₹4,252',
            originalPrice: '₹5,129',
            rating: 4.4,
            reviews: 89,
            features: ['30L Capacity', 'Battery', 'Adjustable Nozzle'],
            image: 'https://gandhiagro.com/wp-content/uploads/2026/01/4-570x696.png'
        },
        {
            id: 12,
            name: 'Hand Spray Pump',
            category: 'Sprayer',
            description: 'Power sprayer for pesticides',
            price: '₹499',
            originalPrice: '₹550',
            rating: 4.4,
            reviews: 89,
            features: ['3L Capacity', 'Adjustable Nozzle'],
            image: 'https://gandhiagro.com/wp-content/uploads/2026/01/6-570x696.png'
        },
        {
            id: 13,
            name: 'HTP SET',
            category: 'all',
            description: 'HTP (High-Pressure Triplex) sets are powerful, motorized agricultural machines',
            price: '₹1399',
            originalPrice: '₹2010',
            rating: 4.4,
            reviews: 89,
            features: ['High-Pressure Output', 'Durability and Build'],
            image: 'https://gandhiagro.com/wp-content/uploads/2026/01/5-570x696.png'
        },
        {
            id: 14,
            name: 'HTP',
            category: 'all',
            description: 'HTP (High-Pressure Triplex) sets are powerful, motorized agricultural machines',
            price: '₹1500',
            originalPrice: '₹1729',
            rating: 4.4,
            reviews: 89,
            features: ['Durability and Build'],
            image: 'https://gandhiagro.com/wp-content/uploads/2026/01/3-570x696.png'
        },
        {
            id: 15,
            name: 'Kaypee Brush Cutter',
            category: 'all',
            description: 'CUtting grass brush',
            price: '₹499',
            originalPrice: '₹550',
            rating: 4.4,
            reviews: 89,
            features: ['Durability and Build'],
            image: 'https://gandhiagro.com/wp-content/uploads/2026/01/7-570x696.png'
        },
        {
            id: 16,
            name: 'KChain Saw',
            category: 'all',
            description: 'CUtting grass brush',
            price: '₹6903',
            originalPrice: '₹7500',
            rating: 4.4,
            reviews: 89,
            features: ['Durability and Build'],
            image: 'https://gandhiagro.com/wp-content/uploads/2026/01/8-570x696.png'
        },
    ];

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(product => product.category === selectedCategory);

    const sortProducts = (products) => {
        switch (sortBy) {
            case 'price-low':
                return [...products].sort((a, b) => parseFloat(a.price.replace(/[^0-9.]/g, '')) - parseFloat(b.price.replace(/[^0-9.]/g, '')));
            case 'price-high':
                return [...products].sort((a, b) => parseFloat(b.price.replace(/[^0-9.]/g, '')) - parseFloat(a.price.replace(/[^0-9.]/g, '')));
            case 'rating':
                return [...products].sort((a, b) => b.rating - a.rating);
            default:
                return products;
        }
    };

    const sortedProducts = sortProducts(filteredProducts);
    const filteredAndSearchedProducts = products.filter(product => {
       const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
       const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
     });

    const sortedAndSearchedProducts = sortProducts(filteredAndSearchedProducts);
    return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8">
            <div className="flex items-center space-x-2 mb-2">
                <div className="w-1 h-6 sm:h-7 bg-yellow-400 rounded-full"></div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-green-800">Our Products</h1>
            </div>
            <p className="text-green-600 text-sm sm:text-base ml-3">Premium agricultural equipment and supplies</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-xl border border-green-500 mb-8 overflow-hidden">
            {/* Search Bar */}
            <div className="p-4 sm:p-6 border-b border-green-100">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                    <div className="flex-1 max-w-2xl">
                        <div className="relative group">
                            <FaSearch className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-green-600 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all outline-none bg-white/50 backdrop-blur-sm"
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-xl">
                            <FaFilter className="text-yellow-500" />
                            <span className="font-medium text-green-700 text-sm sm:text-base">Sort by:</span>
                        </div>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 sm:py-2.5 border-2 border-green-200 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all bg-white text-green-800 font-medium outline-none cursor-pointer"
                        >
                            <option value="popular">🔥 Popular</option>
                            <option value="price-low">💰 Price: Low to High</option>
                            <option value="price-high">💰 Price: High to Low</option>
                            <option value="rating">⭐ Highest Rated</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div className="p-4 sm:p-6 bg-gradient-to-r from-green-50/50 to-yellow-50/50">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold text-green-800 flex items-center">
                        <span className="w-1 h-5 bg-yellow-400 rounded-full mr-3"></span>
                        Shop by Categories
                    </h3>
                    <a
                        href="https://wa.me/917620313921"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all hover:scale-105 shadow-md hover:shadow-lg text-sm sm:text-base group"
                    >
                        <FaWhatsapp className="mr-2 group-hover:rotate-12 transition-transform" />
                        Quick WhatsApp Order
                    </a>
                </div>
                
                {/* Categories Chips */}
                <div className="flex flex-wrap gap-2 sm:gap-3">
                    {categories.map(category => (
                        <button
                            key={category.id}
                            onClick={() => {
                                setSelectedCategory(category.id);
                                setSearchTerm('');
                            }}
                            className={`flex items-center space-x-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl transition-all duration-300 text-sm sm:text-base ${
                                selectedCategory === category.id
                                    ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg scale-105 border-2 border-yellow-400'
                                    : 'bg-white hover:bg-green-50 text-gray-700 border-2 border-green-100 hover:border-green-300 hover:shadow-md'
                            }`}
                        >
                            <span className={`text-lg ${selectedCategory === category.id ? 'text-yellow-300' : 'text-green-600'}`}>
                                {category.icon}
                            </span>
                            <span>{category.name}</span>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                                selectedCategory === category.id
                                    ? 'bg-yellow-400 text-green-900'
                                    : 'bg-green-100 text-green-700'
                            }`}>
                                {category.count}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </div>

        {/* Results count with decorative element */}
        <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <div className="w-1 h-5 bg-green-500 rounded-full"></div>
                <p className="text-gray-600 text-sm sm:text-base">
                    Showing <span className="font-bold text-green-700">{sortedAndSearchedProducts.length}</span> products
                </p>
            </div>
            {selectedCategory !== 'all' && (
                <button
                    onClick={() => setSelectedCategory('all')}
                    className="text-sm text-green-600 hover:text-green-700 flex items-center space-x-1 bg-green-50 px-3 py-1 rounded-full"
                >
                    <span>Clear filter</span>
                    <span className="text-lg">×</span>
                </button>
            )}
        </div>

        {/* Products Grid */}
        {sortedAndSearchedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
                {sortedAndSearchedProducts.map(product => (
                    <div 
                        key={product.id} 
                        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-green-500 transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                    >
                        {/* Image Container with Gradient Overlay */}
                        <div className="relative h-40 sm:h-44 bg-gradient-to-br from-green-100 to-yellow-50 overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                                style={{
                                    backgroundImage: product.image ? `url(${product.image})` : 'none',
                                }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent"></div>
                            </div>
                            
                            {/* Icon Overlay */}
                            {!product.image && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-5xl sm:text-6xl text-green-600/30">
                                        {product.category === 'tractors' && <GiFarmTractor />}
                                        {product.category === 'fertilizers' && <FaLeaf />}
                                        {product.category === 'pesticides' && <GiChemicalDrop />}
                                        {product.category === 'irrigation' && <FaTruck />}
                                        {product.category === 'tools' && <FaShieldAlt />}
                                        {product.category === 'seeds' && <FaLeaf />}
                                        {product.category === 'Sprayer' && <GiSpray />}
                                    </div>
                                </div>
                            )}
                            
                            {/* Save Badge */}
                            {product.originalPrice && (
                                <span className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-green-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-10">
                                    Save ₹{parseInt(product.originalPrice.replace(/[^0-9]/g, '')) - parseInt(product.price.replace(/[^0-9]/g, ''))}
                                </span>
                            )}
                            
                            {/* Category Tag */}
                            <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-green-800 text-xs font-semibold px-3 py-1.5 rounded-full shadow-md z-10">
                                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                            </span>
                        </div>

                        {/* Content */}
                        <div className="p-4 sm:p-5">
                            {/* Title & Description */}
                            <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-1 line-clamp-1 group-hover:text-green-700 transition-colors">
                                {product.name}
                            </h3>
                            <p className="text-gray-600 text-xs sm:text-sm mb-3 line-clamp-2">
                                {product.description}
                            </p>

                            {/* Rating */}
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-1">
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar 
                                                key={i} 
                                                className={`text-xs sm:text-sm ${
                                                    i < Math.floor(product.rating) 
                                                        ? 'text-yellow-400' 
                                                        : 'text-gray-200'
                                                }`} 
                                            />
                                        ))}
                                    </div>
                                    <span className="text-gray-500 text-xs font-medium">
                                        ({product.reviews})
                                    </span>
                                </div>
                                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">
                                    ⭐ {product.rating}
                                </span>
                            </div>

                            {/* Features */}
                            <div className="flex flex-wrap gap-1 mb-4">
                                {product.features.slice(0, 2).map((feature, index) => (
                                    <span 
                                        key={index} 
                                        className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg border border-gray-200"
                                    >
                                        {feature}
                                    </span>
                                ))}
                                {product.features.length > 2 && (
                                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-lg border border-gray-200">
                                        +{product.features.length - 2}
                                    </span>
                                )}
                            </div>

                            {/* Price and Actions */}
                            <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                                <div>
                                    <span className="text-xl sm:text-2xl font-bold text-green-700">
                                        {product.price}
                                    </span>
                                    {product.originalPrice && (
                                        <span className="ml-2 text-gray-400 line-through text-xs sm:text-sm block sm:inline">
                                            {product.originalPrice}
                                        </span>
                                    )}
                                </div>
                                
                                <div className="flex space-x-1">
                                    <button className="p-2 hover:bg-green-100 rounded-xl text-green-600 transition-all hover:scale-110">
                                        <FaShoppingCart size={16} className="sm:w-[18px] sm:h-[18px]" />
                                    </button>
                                    <a
                                        href={`https://wa.me/919876543210?text=Interested in: ${encodeURIComponent(product.name)} - ${product.price}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 hover:bg-green-100 rounded-xl text-green-600 transition-all hover:scale-110"
                                    >
                                        <FaWhatsapp size={16} className="sm:w-[18px] sm:h-[18px]" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        ) : (
            <div className="text-center py-16 sm:py-20 bg-gradient-to-br from-green-50 to-yellow-50 rounded-3xl shadow-xl border border-green-100">
                <div className="text-7xl sm:text-8xl mb-4 animate-bounce">🔍</div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">No products found</h3>
                <p className="text-gray-600 mb-6 max-w-md mx-auto px-4">
                    Try adjusting your search or filter to find what you're looking for.
                </p>
                <button 
                    onClick={() => {
                        setSearchTerm('');
                        setSelectedCategory('all');
                    }}
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-xl"
                >
                    Clear all filters
                </button>
            </div>
        )}

        {/* Load More Button */}
        {sortedAndSearchedProducts.length > 0 && (
            <div className="text-center mt-10 sm:mt-12">
                <button className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-semibold transition-all hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center space-x-2">
                    <span>Load More Products</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
            </div>
        )}

        {/* Floating WhatsApp Button */}
        <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 z-50 group"
        >
            <FaWhatsapp className="text-xl sm:text-2xl" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                Need help? Chat with us
            </span>
        </a>
    </div>
);};

export default Products;