import { useState } from 'react';
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
    FaCertificate
} from 'react-icons/fa';
import { GiFarmTractor, GiChemicalDrop } from 'react-icons/gi';
import { FaQrcode } from "react-icons/fa";

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            title: 'Premium Agricultural Solutions',
            description: 'Quality equipment, fertilizers, and pesticides for modern farming',
            cta: 'Browse Products',
            link: '/products',
            color: 'from-green-800 to-green-600',
            icon: <GiFarmTractor className="text-6xl mb-4" />,
            img: 'https://www.knowledge-sourcing.com/resources/wp-content/uploads/2024/09/fertilizer-market.webp'
        },
        {
            title: 'Farm Equipment Rental',
            description: 'Latest machinery available for rent at competitive prices',
            cta: 'View Equipment',
            link: '/categories?type=tractors',
            color: 'from-blue-800 to-blue-600',
            icon: <FaTruck className="text-6xl mb-4" />,
            img: 'https://geartap.in/api/image/07831eed-355d-49dd-93d0-e45a9f39213a.webp'
        },
        {
            title: 'Chemical & Fertilizer Supply',
            description: 'Certified chemicals and organic fertilizers for optimal yield',
            cta: 'Shop Now',
            link: '/categories?type=fertilizers',
            color: 'from-amber-800 to-amber-600',
            icon: <GiChemicalDrop className="text-6xl mb-4" />,
            img: 'https://5.imimg.com/data5/SELLER/Default/2024/9/447793768/TP/WH/DU/14661396/chemical-npk-fertilizer-500x500.jpg'
        }
    ];

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
            {/* Hero Section */}
            <div className="relative h-125 rounded-2xl overflow-hidden mb-12">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        {/* Background Image with Gradient Overlay */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.img})` }}
                        >
                            <div className={`absolute inset-0 bg-linear-to-r ${slide.color} opacity-90`}></div>
                        </div>

                        <div className="relative h-full flex items-center">
                            <div className="container mx-auto px-6">
                                <div className="max-w-2xl text-white">
                                    <div className="mb-4">{slide.icon}</div>
                                    <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
                                    <p className="text-xl mb-8 opacity-90">{slide.description}</p>
                                    <div className="flex space-x-4">
                                        <Link
                                            to={slide.link}
                                            className="bg-white text-green-800 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold flex items-center"
                                        >
                                            {slide.cta}
                                            <FaArrowRight className="ml-2" />
                                        </Link>
                                        <Link
                                            to="/qr-whatsapp"
                                            className="border-2 border-white text-white hover:bg-white hover:text-green-800 px-6 py-3 rounded-lg font-semibold flex items-center"
                                        >
                                            <FaWhatsapp className="mr-2" />
                                            Order via WhatsApp
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Slider Controls */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-white w-8' : 'bg-white/50'}`}
                        />
                    ))}
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