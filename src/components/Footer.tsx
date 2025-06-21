import React from 'react';
import { Truck, Facebook, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import logo from '../../assets/celymed.png';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary-100/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary-100/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className=" p-3 rounded-xl ">
                  <img src={logo} alt="" className='w-10 h-10' />
                </div>
                <span className="text-3xl font-bold text-secondary-600">
                  Celymed
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Your trusted partner for comprehensive logistics management, transportation, 
                and haulage services. We ensure your operations run smoothly and efficiently 
                with cutting-edge solutions and professional expertise.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-secondary-400 hover:text-white hover:bg-secondary-300 transition-all duration-300 transform hover:scale-110"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-primary-400 hover:text-white hover:bg-primary-300 transition-all duration-300 transform hover:scale-110"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-secondary-400 hover:text-white hover:bg-secondary-300 transition-all duration-300 transform hover:scale-110"
                >
                  <Phone className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="#home" 
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Home
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#services" 
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Services
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-primary-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-white">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-primary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                    <p className="text-xs text-primary-400">24/7 Support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-secondary-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">info@celymed.com</p>
                    <p className="text-xs text-secondary-400">Quick Response</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-secondary-300 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-400">123 Logistics Avenue</p>
                    <p className="text-gray-400">Transport City, TC 12345</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2025 Celymed. All rights reserved. Professional logistics and transportation services.
              </p>
              
              {/* Back to top button */}
              <button
                onClick={scrollToTop}
                className="mt-4 md:mt-0 group bg-secondary-600 hover:primary-500  text-white p-3 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
              >
                <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;