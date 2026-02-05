import { FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaClock } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="bg-gray-800 pt-16">
            {/* Contact Section */}
            <div className="max-w-6xl mx-auto px-4 pb-16">
                <div className="text-center mb-12">
                    <h2 className="text-5xl md:text-7xl font-bold mb-4 text-wp-red">
                        Get In Touch
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        We'd love to hear from you! Visit us or reach out today
                    </p>
                    <div className="mt-6 h-1 w-24 bg-linear-to-r from-orange-500 to-red-500 mx-auto rounded-full"></div>
                </div>

                {/* Contact Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Location */}
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-linear-to-br from-orange-500 to-red-500 rounded-full p-3 mb-4">
                                <FaMapMarkerAlt className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-5xl text-gray-900 mb-2">Location</h3>
                            <p className="text-gray-600 text-2xl">
                                1234 Potato Lane<br />
                                Spud City, ST 56789
                            </p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-linear-to-br from-orange-500 to-red-500 rounded-full p-3 mb-4">
                                <FaPhoneAlt className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-bold text-5xl text-gray-900 mb-2">Phone</h3>
                            <a 
                                href="tel:+5616648594" 
                                className="text-gray-600 text-2xl hover:text-orange-600 transition-colors"
                            >
                                (561) 664-8594
                            </a>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-linear-to-br from-orange-500 to-red-500 rounded-full p-3 mb-4">
                                <BsEnvelope className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-semibold text-5xl text-gray-900 mb-2">Email</h3>
                            <a 
                                href="mailto:walkingpotato@gmail.com" 
                                className="text-gray-600 text-2xl hover:text-orange-600 transition-colors break-all"
                            >
                                walkingpotato@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow">
                        <div className="flex flex-col items-center text-center">
                            <div className="bg-linear-to-br from-orange-500 to-red-500 rounded-full p-3 mb-4">
                                <FaClock className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="font-semibold text-5xl text-gray-900 mb-2">Hours</h3>
                            <p className="text-gray-600 text-2xl">
                                Mon - Fri: 10am - 9pm<br />
                                Sat - Sun: 11am - 10pm
                            </p>
                        </div>
                    </div>
                </div>

                {/* Social Media */}
                <div className="text-center">
                    <h3 className="text-4xl font-bold text-wp-red mb-6">Follow Us</h3>
                    <div className="flex justify-center items-center gap-6">
                        <a
                            href="https://instagram.com/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="bg-white rounded-full p-4 shadow-md hover:shadow-xl hover:scale-110 transition-all group"
                        >
                            <FaInstagram className="h-7 w-7 text-gray-700 group-hover:text-pink-600 transition-colors" />
                        </a>

                        <a
                            href="https://wa.me/15616648594"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="bg-white rounded-full p-4 shadow-md hover:shadow-xl hover:scale-110 transition-all group"
                        >
                            <FaWhatsapp className="h-7 w-7 text-gray-700 group-hover:text-green-600 transition-colors" />
                        </a>

                        <a
                            href="mailto:walkingpotato@gmail.com"
                            aria-label="Email"
                            className="bg-white rounded-full p-4 shadow-md hover:shadow-xl hover:scale-110 transition-all group"
                        >
                            <BsEnvelope className="h-7 w-7 text-gray-700 group-hover:text-orange-600 transition-colors" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-linear-to-r from-orange-600 to-red-600 py-6">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex flex-col md:flex-row justify-between items-center text-white text-sm">
                        <p className="mb-2 md:mb-0">
                            © {new Date().getFullYear()} Walking Potato. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <a href="/privacy" className="hover:underline">Privacy Policy</a>
                            <a href="/terms" className="hover:underline">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}