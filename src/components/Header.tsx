import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../../assets/celymed.jpg';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 py-3 left-0 right-0 z-50 bg-white backdrop-blur-md shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex  gap-64 items-center h-18">
          <div className="flex items-center space-x-3">
            <div className=" ">
             <img src={logo} alt="" className='w-10 h-10' />
            </div>
            <span className="text-2xl font-bold bg-[#008AD5] bg-clip-text text-transparent">
              Celymed
            </span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#home" className="text-[#008AD5]  hover:text-[#A6CE3A] transition-all duration-300 font-medium relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A6CE3A] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="text-[#008AD5]  hover:text-[#A6CE3A] transition-all duration-300 font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A6CE3A] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#services" className="text-[#008AD5]  hover:text-[#A6CE3A] transition-all duration-300 font-medium relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A6CE3A] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-[#008AD5]  hover:text-[#A6CE3A] transition-all duration-300 font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A6CE3A] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 rounded-b-xl shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <a href="#home" className="block px-4 py-3 text[#008AD5]  hover:text-#A6CE3A hover:bg-primary-50 rounded-lg transition-all duration-300">Home</a>
              <a href="#about" className="block px-4 py-3 text[#008AD5]  hover:text-#A6CE3A hover:bg-primary-50 rounded-lg transition-all duration-300">About</a>
              <a href="#services" className="block px-4 py-3 text[#008AD5]  hover:text-#A6CE3A hover:bg-primary-50 rounded-lg transition-all duration-300">Services</a>
              <a href="#contact" className="block px-4 py-3 text[#008AD5]  hover:text-#A6CE3A hover:bg-primary-50 rounded-lg transition-all duration-300">Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;