import {
    FaUsers,
    FaAward,
    FaTractor,
    FaLeaf,
    FaHandsHelping,
    FaCheckCircle,
    FaStar,
    FaGlobe,
    FaCalendarAlt,
    FaTrophy
} from 'react-icons/fa';
import { GiFarmer, GiWheat } from 'react-icons/gi';
import { FaWhatsapp, FaPhone } from "react-icons/fa";

const About = () => {
    const stats = [
        { number: '5000+', label: 'Happy Farmers', icon: <GiFarmer /> },
        { number: '12+', label: 'Years Experience', icon: <FaCalendarAlt /> },
        { number: '320+', label: 'Products', icon: <FaTractor /> },
        { number: '24/7', label: 'Support', icon: <FaHandsHelping /> },
    ];

    const values = [
        {
            icon: <FaLeaf />,
            title: 'Sustainable Farming',
            description: 'Promoting eco-friendly agricultural practices'
        },
        {
            icon: <FaCheckCircle />,
            title: 'Quality Assurance',
            description: 'All products certified for quality and safety'
        },
        {
            icon: <FaUsers />,
            title: 'Farmer Support',
            description: 'Dedicated support for farmer success'
        },
        {
            icon: <FaGlobe />,
            title: 'Wide Reach',
            description: 'Serving farmers across multiple regions'
        }
    ];

    const team = [
        { name: 'Imran Inamdar', role: 'Agricultural Expert', experience: '15 Years' },
        // { name: 'Priya Sharma', role: 'Product Specialist', experience: '10 Years' },
        // { name: 'Amit Singh', role: 'Technical Support', experience: '8 Years' },
        // { name: 'Sneha Patel', role: 'Customer Relations', experience: '12 Years' },
    ];

    return (
        <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="mb-12">
                <div className="bg-linear-to-r from-green-600 to-green-800 rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12 text-white">
                    {/* Header Section */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6 md:mb-8">
                        <div className="shrink-0 mb-3 sm:mb-0 sm:mr-6">
                            <GiWheat className="text-3xl sm:text-4xl md:text-5xl" />
                        </div>
                        <div className="flex-1">
                            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
                                About K PRAKASH AND COMPANY
                            </h1>
                            <p className="text-green-100 text-xs sm:text-sm md:text-base">
                                Leading agricultural fertilizers and pesticides provider since 1926
                            </p>
                        </div>
                    </div>

                    {/* Content Section with decorative divider on larger screens */}
                    <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 md:gap-8">
                        {/* Left Column */}
                        <div className="flex-1">
                            <div className="space-y-3 md:space-y-4">
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-green-100 leading-relaxed">
                                    K PRAKASH AND COMPANY (Gandhi Biwale) is a four-generation agri enterprise founded in{" "}
                                    <span className="font-bold text-white">1926 in Ahmednagar, Maharashtra.</span> For nearly a century,
                                    we have been dedicated to one mission:{" "}
                                    <span className="font-bold text-white">empowering farmers with the right science, technology, and guidance.</span>
                                </p>

                                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-green-100 leading-relaxed">
                                    Today, we are{" "}
                                    <span className="font-bold text-white">Maharashtra's leading agri-tech platform,</span> supporting farmers from{" "}
                                    <span className="font-bold text-white">pre-sowing to post-harvest</span> through high-quality inputs,
                                    expert crop guidance, and complete farm solutions.
                                </p>
                            </div>
                        </div>

                        {/* Vertical Divider - Only on large screens */}
                        <div className="hidden lg:block">
                            <div className="w-px h-full bg-green-500/30 mx-4"></div>
                        </div>

                        {/* Horizontal Divider - Only on small/medium screens */}
                        <div className="lg:hidden w-full h-px bg-green-500/30 my-4"></div>

                        {/* Right Column */}
                        <div className="flex-1">
                            <div className="space-y-3 md:space-y-4">
                                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-green-100 leading-relaxed">
                                    Our approach combines{" "}
                                    <span className="font-bold text-white">field-tested experience with modern agricultural technology,</span> helping farmers grow better, reduce risk, and improve profitability.
                                </p>

                                <p className="text-xs sm:text-sm md:text-base lg:text-lg text-green-100 leading-relaxed">
                                    With{" "}
                                    <span className="font-bold text-white">certified, cost-effective products and strong after-sales support,</span> K Prakash & Co. has become the{" "}
                                    <span className="font-bold text-white">first choice for thousands of farmers across Maharashtra.</span>
                                    We introduce innovative solutions that{" "}
                                    <span className="font-bold text-white">save time, reduce labour, and increase farm efficiency</span> — making farming more sustainable and rewarding.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Optional: Decorative bottom border */}
                    <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-green-500/20">
                        <p className="text-xs sm:text-sm text-green-200 text-center italic">
                            Serving farmers with excellence since 1926
                        </p>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                        <div className="text-4xl text-green-600 mb-2">{stat.icon}</div>
                        <div className="text-3xl font-bold text-green-800 mb-1">{stat.number}</div>
                        <div className="text-gray-600">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Our Story */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-green-800 mb-6">Our Story</h2>
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">From Humble Beginnings</h3>
                            <p className="text-gray-600 mb-4">
                                Started in 2010 by a group of agricultural engineers, AgriTech Solutions began
                                with a simple mission: to provide farmers with access to quality equipment and
                                supplies at affordable prices.
                            </p>
                            <p className="text-gray-600">
                                Today, we serve thousands of farmers across multiple states, offering everything
                                from basic tools to advanced machinery and certified agricultural chemicals.
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
                            <p className="text-gray-600 mb-4">
                                To revolutionize Indian agriculture by providing innovative, sustainable, and
                                affordable solutions that increase productivity while preserving our environment.
                            </p>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <p className="text-green-800 font-semibold italic">
                                    "Empowering farmers with technology for a prosperous tomorrow."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Values */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-green-800 mb-6">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((value, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                                <span className="text-green-600 text-2xl">{value.icon}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                            <p className="text-gray-600">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Our Team */}
            <div className="mb-12">
                <h2 className="text-3xl font-bold text-green-800 mb-6">Meet Our Experts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {team.map((member, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <FaUsers className="text-green-600 text-2xl" />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h3>
                            <p className="text-green-600 font-medium mb-2">{member.role}</p>
                            <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                                <FaStar className="text-yellow-500" />
                                <span>{member.experience} Experience</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Awards & Recognition */}
            <div className="bg-linear-to-r from-amber-50 to-amber-100 rounded-2xl p-8 mb-12">
                <div className="flex items-center mb-6">
                    <FaTrophy className="text-4xl text-amber-600 mr-4" />
                    <h2 className="text-3xl font-bold text-amber-800">Awards & Recognition</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl p-6">
                        <div className="flex items-center mb-3">
                            <FaAward className="text-2xl text-amber-600 mr-2" />
                            <h3 className="font-semibold text-gray-800">Best Agri Business 2023</h3>
                        </div>
                        <p className="text-gray-600">National Agriculture Awards</p>
                    </div>
                    <div className="bg-white rounded-xl p-6">
                        <div className="flex items-center mb-3">
                            <FaAward className="text-2xl text-amber-600 mr-2" />
                            <h3 className="font-semibold text-gray-800">Quality Excellence Award</h3>
                        </div>
                        <p className="text-gray-600">Indian Chamber of Commerce</p>
                    </div>
                    <div className="bg-white rounded-xl p-6">
                        <div className="flex items-center mb-3">
                            <FaAward className="text-2xl text-amber-600 mr-2" />
                            <h3 className="font-semibold text-gray-800">Innovation in Agriculture</h3>
                        </div>
                        <p className="text-gray-600">Ministry of Agriculture</p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-linear-to-r from-green-600 to-green-700 rounded-2xl p-8 text-white">
                <div className="text-center max-w-3xl mx-auto">
                    <FaHandsHelping className="text-5xl mx-auto mb-4" />
                    <h2 className="text-3xl font-bold mb-4">Ready to Grow with Us?</h2>
                    <p className="text-green-100 mb-6">
                        Join thousands of successful farmers who trust AgriTech Solutions for their
                        agricultural needs. Contact us today to start your journey towards better farming.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/919876543210"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-green-700 hover:bg-green-50 px-6 py-3 rounded-lg font-semibold flex items-center justify-center"
                        >
                            <FaWhatsapp className="mr-2" />
                            Contact on WhatsApp
                        </a>
                        <a
                            href="tel:+919876543210"
                            className="border-2 border-white hover:bg-white hover:text-green-700 px-6 py-3 rounded-lg font-semibold flex items-center justify-center"
                        >
                            <FaPhone className="mr-2" />
                            Call Us Now
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;