import { useState } from 'react';
import {
    FaQrcode,
    FaWhatsapp,
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPaperPlane,
    FaArrowRight,
    FaCheckCircle,
    FaSearch,
    FaStar,
    FaShippingFast,
    FaHeadset,
    FaMoneyBillWave,
    FaShieldAlt
} from 'react-icons/fa';

const QRWhatsApp = () => {
    const [productInfo, setProductInfo] = useState({
        name: 'Organic Fertilizer Pro',
        category: 'Fertilizers',
        price: '₹2,499',
        quantity: '25kg Bag',
    });

    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        quantity: 1,
        address: '',
        notes: '',
    });

    const [scannedCode, setScannedCode] = useState('');
    const [isScanning, setIsScanning] = useState(false);

    const whatsappNumber = '919876543210';
    const message = `Hello, I'm interested in ordering:
Product: ${productInfo.name}
Category: ${productInfo.category}
Price: ${productInfo.price}
Quantity: ${productInfo.quantity}
Customer: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}
Notes: ${formData.notes}`;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    const handleScan = () => {
        setIsScanning(true);
        setTimeout(() => {
            setScannedCode('PROD-FERT-001');
            setIsScanning(false);
            setProductInfo({
                name: 'Premium Pesticide Shield',
                category: 'Pesticides',
                price: '₹1,899',
                quantity: '5 Liters',
            });
        }, 2000);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const products = [
        { id: 1, name: 'Tractor Model X', category: 'Tractor', price: '₹5,49,999', rating: 4.8 },
        { id: 2, name: 'Organic Fertilizer', category: 'Fertilizer', price: '₹2,499', rating: 4.6 },
        { id: 3, name: 'Crop Shield', category: 'Pesticide', price: '₹1,899', rating: 4.7 },
        { id: 4, name: 'Drip Irrigation Kit', category: 'Irrigation', price: '₹8,999', rating: 4.9 },
    ];

    const benefits = [
        { icon: <FaShippingFast />, text: 'Free Delivery above ₹5000' },
        { icon: <FaHeadset />, text: '24/7 Customer Support' },
        { icon: <FaMoneyBillWave />, text: 'Easy Payment Options' },
        { icon: <FaShieldAlt />, text: 'Quality Guarantee' },
    ];

    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-green-800 mb-2">QR Code WhatsApp Order</h1>
                <p className="text-green-600">Scan product QR code to order directly via WhatsApp</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - QR Scanner and Product Info */}
                <div className="space-y-6">
                    {/* QR Scanner Simulation */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-semibold text-green-800 flex items-center">
                                <FaQrcode className="mr-2" />
                                Product QR Scanner
                            </h2>
                            <button
                                onClick={handleScan}
                                disabled={isScanning}
                                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors disabled:opacity-50 flex items-center"
                            >
                                {isScanning ? (
                                    <>
                                        <FaSearch className="mr-2 animate-pulse" />
                                        Scanning...
                                    </>
                                ) : (
                                    <>
                                        <FaQrcode className="mr-2" />
                                        Simulate Scan
                                    </>
                                )}
                            </button>
                        </div>

                        <div className="flex flex-col items-center space-y-4">
                            <div className="relative">
                                <div className="w-64 h-64 bg-gray-100 border-4 border-dashed border-green-300 rounded-lg flex items-center justify-center">
                                    {isScanning ? (
                                        <div className="text-center">
                                            <FaSearch className="text-4xl text-green-600 animate-pulse mb-2 mx-auto" />
                                            <p className="text-green-700 font-medium">Scanning QR Code...</p>
                                        </div>
                                    ) : scannedCode ? (
                                        <div className="text-center">
                                            <FaCheckCircle className="text-4xl text-green-600 mb-2 mx-auto" />
                                            <p className="text-green-700 font-medium">Scanned Successfully!</p>
                                            <p className="text-sm text-gray-600">Product: {scannedCode}</p>
                                        </div>
                                    ) : (
                                        <div className="text-center">
                                            <FaQrcode className="text-6xl text-green-400 mx-auto mb-3" />
                                            <p className="text-green-700 font-medium">Ready to Scan</p>
                                            <p className="text-sm text-gray-600">Click "Simulate Scan"</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {scannedCode && (
                                <div className="bg-green-50 p-4 rounded-lg w-full">
                                    <h3 className="font-semibold text-green-800 mb-2 flex items-center">
                                        <FaCheckCircle className="mr-2 text-green-600" />
                                        Scanned Product Details
                                    </h3>
                                    <div className="space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Product:</span>
                                            <span className="font-medium">{productInfo.name}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Category:</span>
                                            <span className="font-medium">{productInfo.category}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Price:</span>
                                            <span className="font-medium text-green-700">{productInfo.price}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">Package:</span>
                                            <span className="font-medium">{productInfo.quantity}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Popular Products */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h3 className="text-lg font-semibold text-green-800 mb-4">Popular Products</h3>
                        <div className="space-y-3">
                            {products.map(product => (
                                <div key={product.id} className="flex items-center justify-between p-3 hover:bg-green-50 rounded-lg border">
                                    <div>
                                        <p className="font-medium">{product.name}</p>
                                        <p className="text-sm text-gray-600">{product.category}</p>
                                    </div>
                                    <div className="text-right">
                                        <div className="flex items-center space-x-1 mb-1">
                                            <FaStar className="text-yellow-500" />
                                            <span className="font-semibold">{product.rating}</span>
                                        </div>
                                        <p className="font-semibold text-green-700">{product.price}</p>
                                        <button
                                            onClick={() => {
                                                setProductInfo({
                                                    name: product.name,
                                                    category: product.category,
                                                    price: product.price,
                                                    quantity: '1 Unit'
                                                });
                                            }}
                                            className="text-sm text-green-600 hover:text-green-800 flex items-center"
                                        >
                                            Select <FaArrowRight className="ml-1" />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column - Order Form and WhatsApp Integration */}
                <div className="space-y-6">
                    {/* Order Form */}
                    <div className="bg-white rounded-xl shadow-lg p-6">
                        <h2 className="text-xl font-semibold text-green-800 mb-6">Order Information</h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number (WhatsApp) *
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="Enter your WhatsApp number"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Delivery Address *
                                </label>
                                <textarea
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    rows="3"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="Enter complete delivery address"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Order Notes
                                </label>
                                <textarea
                                    name="notes"
                                    value={formData.notes}
                                    onChange={handleInputChange}
                                    rows="2"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                    placeholder="Any special instructions or requirements"
                                />
                            </div>
                        </div>

                        {/* Order Summary */}
                        <div className="mt-6 p-4 bg-green-50 rounded-lg">
                            <h3 className="font-semibold text-green-800 mb-3">Order Summary</h3>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span>Product:</span>
                                    <span className="font-medium">{productInfo.name}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Quantity:</span>
                                    <span className="font-medium">{productInfo.quantity}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Price:</span>
                                    <span className="font-medium text-green-700">{productInfo.price}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* WhatsApp Integration */}
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                    <FaWhatsapp className="text-green-600 text-2xl" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-green-800">Direct WhatsApp Order</h3>
                                    <p className="text-sm text-green-600">Send order directly to our sales team</p>
                                </div>
                            </div>
                            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                                Instant Response
                            </span>
                        </div>

                        <p className="text-gray-700 mb-6">
                            Click the button below to open WhatsApp with all your order details pre-filled.
                            Our sales team will contact you within minutes to confirm your order.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                            >
                                <FaWhatsapp />
                                <span>Open WhatsApp & Send Order</span>
                                <FaPaperPlane />
                            </a>

                            <button
                                onClick={() => {
                                    setFormData({
                                        name: '',
                                        phone: '',
                                        quantity: 1,
                                        address: '',
                                        notes: '',
                                    });
                                    setScannedCode('');
                                }}
                                className="px-6 py-3 border border-green-600 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                            >
                                Clear Form
                            </button>
                        </div>

                        {/* Benefits */}
                        <div className="mt-6 pt-6 border-t border-green-200">
                            <h4 className="font-medium text-green-800 mb-3">WhatsApp Order Benefits:</h4>
                            <div className="grid grid-cols-2 gap-3">
                                {benefits.map((benefit, index) => (
                                    <div key={index} className="flex items-center space-x-2">
                                        <span className="text-green-600">{benefit.icon}</span>
                                        <span className="text-sm text-gray-700">{benefit.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow border text-center">
                            <FaPhone className="text-green-600 mx-auto mb-2 text-xl" />
                            <p className="font-medium">Call Us</p>
                            <p className="text-sm text-gray-600">+91 9876543210</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow border text-center">
                            <FaEnvelope className="text-green-600 mx-auto mb-2 text-xl" />
                            <p className="font-medium">Email</p>
                            <p className="text-sm text-gray-600">orders@agritech.com</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow border text-center">
                            <FaMapMarkerAlt className="text-green-600 mx-auto mb-2 text-xl" />
                            <p className="font-medium">Address</p>
                            <p className="text-sm text-gray-600">Farm Zone, City</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QRWhatsApp;