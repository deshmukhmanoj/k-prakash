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
        <div className="max-w-7xl mx-auto px-4">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-green-800 mb-2">Our Products</h1>
                <p className="text-green-600">Premium agricultural equipment and supplies</p>
            </div>

            {/* Search and Filter Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between space-y-4 lg:space-y-0">
                    <div className="flex-1 max-w-2xl">
                        <div className="relative">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                            <FaFilter className="text-green-600" />
                            <span className="font-medium text-gray-700">Sort by:</span>
                        </div>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                            <option value="popular">Popular</option>
                            <option value="price-low">Price: Low to High</option>
                            <option value="price-high">Price: High to Low</option>
                            <option value="rating">Highest Rated</option>
                        </select>
                    </div>
                </div>

                {/* Categories at the top */}
                <div className="mt-6 border-t pt-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-green-800 flex items-center">
                            <FaFilter className="mr-2" />
                            Categories
                        </h3>
                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors text-sm"
                        >
                            <FaWhatsapp className="mr-2" />
                            Quick WhatsApp Order
                        </a>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {categories.map(category => (
                            <button
                                key={category.id}
                                onClick={() => {
                                    setSelectedCategory(category.id);
                                    setSearchTerm(''); // Clear search when changing category
                                }}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${selectedCategory === category.id
                                    ? 'bg-green-100 text-green-800 border-2 border-green-500'
                                    : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200'
                                    }`}
                            >
                                <span className="text-lg">{category.icon}</span>
                                <span>{category.name}</span>
                                <span className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full ml-1">
                                    {category.count}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Results count */}
            <div className="mb-4 text-gray-600">
                Showing {sortedAndSearchedProducts.length} products
            </div>

            {/* Products Grid - 4 columns on large screens */}
            {sortedAndSearchedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sortedAndSearchedProducts.map(product => (
                        <div key={product.id} className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-all hover:-translate-y-1">
                            <div className="p-4">
                                {/* Product Image */}
                                <div className="relative mb-4">
                                    <div
                                        className="h-40 bg-gray-100 rounded-lg flex items-center justify-center bg-cover bg-center"
                                        style={{
                                            backgroundImage: product.image ? `url(${product.image})` : 'none',
                                            backgroundBlendMode: 'overlay',
                                            backgroundColor: product.image ? 'rgba(0,0,0,0.1)' : '#f3f4f6'
                                        }}
                                    >
                                        <div className={`${product.image ? '*:backdrop-blur-sm p-4 rounded-lg' : ''}`}>
                                            <div className="text-4xl text-green-500">
                                                {product.category === 'tractors' && <GiFarmTractor />}
                                                {product.category === 'fertilizers' && <FaLeaf />}
                                                {product.category === 'pesticides' && <GiChemicalDrop />}
                                                {product.category === 'irrigation' && <FaTruck />}
                                                {product.category === 'tools' && <FaShieldAlt />}
                                                {product.category === 'seeds' && <FaLeaf />}
                                                {product.category === 'Sprayer' && <GiSpray />}
                                            </div>
                                        </div>
                                    </div>
                                    {product.originalPrice && (
                                        <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                                            Save ₹{parseInt(product.originalPrice.replace(/[^0-9]/g, '')) - parseInt(product.price.replace(/[^0-9]/g, ''))}
                                        </span>
                                    )}
                                </div>

                                {/* Product Info */}
                                <div>
                                    <span className="inline-block px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full mb-2">
                                        {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
                                    </span>
                                    <h3 className="text-base font-semibold text-gray-800 mb-1 line-clamp-1">{product.name}</h3>
                                    <p className="text-gray-600 text-xs mb-2 line-clamp-2">{product.description}</p>

                                    {/* Rating */}
                                    <div className="flex items-center space-x-1 mb-2">
                                        <div className="flex">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className={`text-xs ${i < Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-300'
                                                    }`} />
                                            ))}
                                        </div>
                                        <span className="text-gray-600 text-xs">({product.reviews})</span>
                                    </div>

                                    {/* Features - Show max 2 features */}
                                    <div className="flex flex-wrap gap-1 mb-3">
                                        {product.features.slice(0, 2).map((feature, index) => (
                                            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                                                {feature}
                                            </span>
                                        ))}
                                        {product.features.length > 2 && (
                                            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
                                                +{product.features.length - 2}
                                            </span>
                                        )}
                                    </div>

                                    {/* Price and Actions */}
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <span className="text-lg font-bold text-green-700">{product.price}</span>
                                            {product.originalPrice && (
                                                <span className="ml-1 text-gray-500 line-through text-xs block">
                                                    {product.originalPrice}
                                                </span>
                                            )}
                                        </div>
                                        <div className="flex space-x-1">
                                            <button className="p-1.5 hover:bg-green-100 rounded-lg text-green-600">
                                                <FaShoppingCart size={16} />
                                            </button>
                                            <a
                                                href={`https://wa.me/919876543210?text=Interested in: ${encodeURIComponent(product.name)} - ${product.price}`}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-1.5 hover:bg-green-100 rounded-lg text-green-600"
                                            >
                                                <FaWhatsapp size={16} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-12 bg-white rounded-xl shadow-lg">
                    <div className="text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">No products found</h3>
                    <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
                    <button 
                        onClick={() => {
                            setSearchTerm('');
                            setSelectedCategory('all');
                        }}
                        className="mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg transition-colors"
                    >
                        Clear all filters
                    </button>
                </div>
            )}

            {/* Load More - Only show if there are products */}
            {sortedAndSearchedProducts.length > 0 && (
                <div className="text-center mt-8">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
                        Load More Products
                    </button>
                </div>
            )}
        </div>
    );
};

export default Products;