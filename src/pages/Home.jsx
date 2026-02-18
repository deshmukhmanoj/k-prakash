import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    FaArrowRight,
    FaTruck,
    FaShieldAlt,
    FaChartLine,
    FaUsers,
    FaStar,
    FaWhatsapp,
    FaShoppingCart,
    FaSeedling,
    FaWater,
    FaBox,
    FaCertificate,
    FaPause,
    FaPlay
} from 'react-icons/fa';
import { GiFarmTractor, GiChemicalDrop } from 'react-icons/gi';
import { FaQrcode } from "react-icons/fa";

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const slides = [
        {
            title: 'Premium Agricultural Solutions',
            description: 'Quality equipment, fertilizers, and pesticides for modern farming',
            cta: 'Browse Products',
            link: '/products',
            color: 'from-green-900/90 to-green-700/90',
            icon: <GiFarmTractor className="text-6xl mb-4" />,
            img: 'https://www.knowledge-sourcing.com/resources/wp-content/uploads/2024/09/fertilizer-market.webp'
        },
        {
            title: 'Farm Equipment Rental',
            description: 'Latest machinery available for rent at competitive prices',
            cta: 'View Equipment',
            link: '/categories?type=tractors',
            color: 'from-blue-900/90 to-blue-700/90',
            icon: <FaTruck className="text-6xl mb-4" />,
            img: 'https://geartap.in/api/image/07831eed-355d-49dd-93d0-e45a9f39213a.webp'
        },
        {
            title: 'Chemical & Fertilizer Supply',
            description: 'Certified chemicals and organic fertilizers for optimal yield',
            cta: 'Shop Now',
            link: '/categories?type=fertilizers',
            color: 'from-amber-900/90 to-amber-700/90',
            icon: <GiChemicalDrop className="text-6xl mb-4" />,
            img: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447793768/TP/WH/DU/14661396/chemical-npk-fertilizer-500x500.jpg'
        }

    ];

    // Auto-slider functionality
    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
            }, 5000); // Change slide every 5 seconds
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying, slides.length]);

    const handleSlideChange = (index) => {
        setCurrentSlide(index);
        // Optional: Pause auto-play when manually changing slides
        // setIsAutoPlaying(false);
    };

    const toggleAutoPlay = () => {
        setIsAutoPlaying(!isAutoPlaying);
    };

    const features = [
        {
            icon: <FaTruck className="text-3xl" />,
            title: 'Free Delivery',
            description: 'Free delivery on orders above ₹5000',
            color: 'text-green-600 bg-green-100'
        },
        {
            icon: <FaCertificate className="text-3xl" />,
            title: 'Quality Certified',
            description: 'All products quality certified',
            color: 'text-blue-600 bg-blue-100'
        },
        {
            icon: <FaChartLine className="text-3xl" />,
            title: 'Best Prices',
            description: 'Guaranteed best market prices',
            color: 'text-amber-600 bg-amber-100'
        },
        {
            icon: <FaUsers className="text-3xl" />,
            title: 'Expert Support',
            description: '24/7 farming expert support',
            color: 'text-purple-600 bg-purple-100'
        }
    ];

    const categories = [
        { name: 'Tractors', icon: <GiFarmTractor />, count: 45, color: 'bg-green-100 text-green-700' },
        { name: 'Fertilizers', icon: <FaSeedling />, count: 28, color: 'bg-amber-100 text-amber-700' },
        { name: 'Pesticides', icon: <GiChemicalDrop />, count: 56, color: 'bg-red-100 text-red-700' },
        { name: 'Irrigation', icon: <FaWater />, count: 32, color: 'bg-blue-100 text-blue-700' },
        { name: 'Seeds', icon: <FaBox />, count: 89, color: 'bg-emerald-100 text-emerald-700' },
        { name: 'Tools', icon: <FaChartLine />, count: 67, color: 'bg-gray-100 text-gray-700' },
    ];

    const products = [
        {
            id: 1,
            name: 'Tractor Model X4',
            category: 'Tractor',
            price: '₹5,49,999',
            rating: 4.8,
            reviews: 124,
            icon: <GiFarmTractor className="text-3xl" />
        },
        {
            id: 2,
            name: 'Organic Fertilizer',
            category: 'Fertilizer',
            price: '₹2,499',
            rating: 4.6,
            reviews: 89,
            icon: <FaSeedling className="text-3xl" />
        },
        {
            id: 3,
            name: 'Crop Shield Pro',
            category: 'Pesticide',
            price: '₹1,899',
            rating: 4.7,
            reviews: 156,
            icon: <GiChemicalDrop className="text-3xl" />
        },
        {
            id: 4,
            name: 'Drip Irrigation Kit',
            category: 'Irrigation',
            price: '₹8,999',
            rating: 4.9,
            reviews: 78,
            icon: <FaWater className="text-3xl" />
        }
    ];

    return (
        <div>
            {/* Hero Section with Auto-slider */}
            <div className="relative h-125 rounded-2xl overflow-hidden mb-12 group">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        {/* Background Image with improved blur effect */}
                        <div className="absolute inset-0">
                            {/* Main background image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center scale-110 filter blur-sm"
                                style={{ backgroundImage: `url(${slide.img})` }}
                            ></div>
                            {/* Gradient overlay for better text readability */}
                            <div className={`absolute inset-0 bg-linear-to-r ${slide.color}`}></div>
                        </div>

                        <div className="relative h-full flex items-center z-20">
                            <div className="container mx-auto px-6">
                                <div className="max-w-2xl text-white">
                                    <div className="mb-4 transform transition-transform duration-700 translate-y-0 opacity-100">
                                        {slide.icon}
                                    </div>
                                    <h1 className="text-5xl font-bold mb-4 transform transition-all duration-700 delay-100">
                                        {slide.title}
                                    </h1>
                                    <p className="text-xl mb-8 opacity-90 transform transition-all duration-700 delay-200">
                                        {slide.description}
                                    </p>
                                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 transform transition-all duration-700 delay-300">
  <Link
    to={slide.link}
    className="bg-white text-green-800 hover:bg-green-50 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold flex items-center justify-center transition-all hover:scale-105 text-sm sm:text-base shadow-lg hover:shadow-xl"
  >
    {slide.cta}
    <FaArrowRight className="ml-2 text-sm sm:text-base" />
  </Link>
  <Link
    to="/qr-whatsapp"
    className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold flex items-center justify-center transition-all hover:scale-105 text-sm sm:text-base backdrop-blur-sm bg-white/10"
  >
    <FaWhatsapp className="mr-2 text-sm sm:text-base" />
    Order via WhatsApp
  </Link>
</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Slider Controls with Auto-play Toggle */}
                <div className="absolute bottom-4 sm:bottom-6 mt-10 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 sm:space-x-3 z-20 bg-black/20 backdrop-blur-sm px-3 py-2 sm:px-4 sm:py-2 rounded-full">
  {/* Auto-play Toggle Button */}
  <button
    onClick={toggleAutoPlay}
    className="bg-white/20 hover:bg-white/30 text-white p-1.5 sm:p-2 rounded-full transition-all"
    title={isAutoPlaying ? 'Pause' : 'Play'}
  >
    {isAutoPlaying ? <FaPause size={10} className="sm:w-3 sm:h-3" /> : <FaPlay size={10} className="sm:w-3 sm:h-3" />}
  </button>

  {/* Slide Indicators */}
  <div className="flex space-x-1.5 sm:space-x-2">
    {slides.map((_, index) => (
      <button
        key={index}
        onClick={() => handleSlideChange(index)}
        className={`transition-all duration-300 ${
          index === currentSlide
            ? 'bg-white w-6 sm:w-8 h-2 sm:h-3'
            : 'bg-white/50 hover:bg-white/80 w-2 sm:w-3 h-2 sm:h-3'
        } rounded-full`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
</div>

                {/* Slide Counter (Optional) */}
                <div className="absolute top-6 right-6 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm z-20">
                    {currentSlide + 1} / {slides.length}
                </div>
            </div>

            {/* Features Section */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-center text-green-800 mb-8">Why Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl transition-shadow">
                            <div className={`w-16 h-16 rounded-full ${feature.color} flex items-center justify-center mb-4`}>
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Categories Section */}
            <div className="mb-12">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-green-800">Product Categories</h2>
                    <Link to="/categories" className="text-green-600 hover:text-green-800 font-semibold flex items-center">
                        View All <FaArrowRight className="ml-2" />
                    </Link>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {categories.map((category) => (
                        <Link
                            key={category.name}
                            to={`/categories?type=${category.name.toLowerCase()}`}
                            className="bg-white p-4 rounded-xl shadow border hover:shadow-lg transition-all hover:-translate-y-1 text-center"
                        >
                            <div className={`w-12 h-12 rounded-full ${category.color} flex items-center justify-center mx-auto mb-3`}>
                                <span className="text-xl">{category.icon}</span>
                            </div>
                            <h3 className="font-semibold text-gray-800">{category.name}</h3>
                            <p className="text-sm text-gray-600 mt-1">{category.count} Products</p>
                        </Link>
                    ))}
                </div>
            </div>

            {/* Popular Products */}
            <div className="mb-12">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-green-800">Popular Products</h2>
                    <Link to="/products" className="text-green-600 hover:text-green-800 font-semibold flex items-center">
                        View All Products <FaArrowRight className="ml-2" />
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-xl shadow-lg border hover:shadow-xl transition-all hover:-translate-y-1">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className={`w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center`}>
                                        {product.icon}
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <FaStar className="text-yellow-500" />
                                        <span className="font-semibold">{product.rating}</span>
                                        <span className="text-gray-500 text-sm">({product.reviews})</span>
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
                                <p className="text-gray-600 mb-4">{product.category}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-2xl font-bold text-green-700">{product.price}</span>
                                    <div className="flex space-x-2">
                                        <button className="p-2 hover:bg-green-100 rounded-lg text-green-600">
                                            <FaShoppingCart />
                                        </button>
                                        <Link
                                            to="/qr-whatsapp"
                                            className="p-2 hover:bg-green-100 rounded-lg text-green-600"
                                        >
                                            <FaWhatsapp />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* WhatsApp CTA Section */}
            <div className="bg-linear-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white mb-12">
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    <div className="mb-6 lg:mb-0 lg:mr-8">
                        <div className="flex items-center mb-4">
                            <FaWhatsapp className="text-4xl mr-3" />
                            <h3 className="text-2xl font-bold">Quick WhatsApp Orders</h3>
                        </div>
                        <p className="text-green-100 mb-4">
                            Scan QR code or click below to order directly via WhatsApp. Get instant confirmation and support.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                to="/qr-whatsapp"
                                className="bg-white text-green-700 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold flex items-center"
                            >
                                <FaQrcode className="mr-2" />
                                Open QR Scanner
                            </Link>
                            <a
                                href="https://wa.me/919876543210"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-white hover:bg-white hover:text-green-700 px-6 py-3 rounded-lg font-semibold flex items-center"
                            >
                                <FaWhatsapp className="mr-2" />
                                Message on WhatsApp
                            </a>
                        </div>
                    </div>
                    <div className="bg-white p-4 rounded-xl">
                        <div className="w-48 h-48 bg-green-50 rounded-lg flex items-center justify-center">
                            <FaQrcode className="text-6xl text-green-600" />
                        </div>
                        <p className="text-green-800 text-center mt-3 font-medium">Scan to Order</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;