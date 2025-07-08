import React, { useState } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/celymed.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="fixed top-0 py-3 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex-shrink-0">
             <img src={logo} alt="Celymed Logo" className='w-8 h-8 sm:w-10 sm:h-10' />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-[#008AD5] bg-clip-text text-transparent">
              Celymed
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex flex-1 justify-center space-x-6 lg:space-x-8">
            <Link to="/" className={`transition-all duration-300 font-medium relative group ${
              location.pathname === '/' ? 'text-[#A6CE3A]' : 'text-[#008AD5] hover:text-[#A6CE3A]'
            }`}>
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A6CE3A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <a href="/#about" className="text-[#008AD5] hover:text-[#A6CE3A] transition-all duration-300 font-medium relative group">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A6CE3A] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/#services" className="text-[#008AD5] hover:text-[#A6CE3A] transition-all duration-300 font-medium relative group">
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A6CE3A] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="/#team" className="text-[#008AD5] hover:text-[#A6CE3A] transition-all duration-300 font-medium relative group">
              Team
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A6CE3A] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Link to="/gallery" className={`transition-all duration-300 font-medium relative group ${
              location.pathname === '/gallery' ? 'text-[#A6CE3A]' : 'text-[#008AD5] hover:text-[#A6CE3A]'
            }`}>
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A6CE3A] transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <a href="/#contact" className="text-[#008AD5] hover:text-[#A6CE3A] transition-all duration-300 font-medium relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#A6CE3A] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Contact & Location Info - Desktop Only */}
          <div className="hidden md:flex flex-col items-end text-right text-xs lg:text-sm space-y-1 ml-6">
            <span className="flex items-center space-x-1 text-[#008AD5] font-semibold">
              <Phone className="w-4 h-4 mr-1" />
              <span>+2348034417785</span>
            </span>
            <span className="flex items-center space-x-1 text-gray-500">
              <MapPin className="w-4 h-4 mr-1" />
              <span title="2, odeyemi Street, satellite town, lagos">Satellite Town, Lagos</span>
            </span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6 text-[#008AD5]" /> : <Menu className="h-6 w-6 text-[#008AD5]" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 rounded-b-xl shadow-lg mt-2">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <Link 
                to="/" 
                onClick={closeMenu}
                className={`block px-4 py-3 transition-all duration-300 font-medium rounded-lg ${
                  location.pathname === '/' 
                    ? 'text-[#A6CE3A] bg-[#A6CE3A]/10' 
                    : 'text-[#008AD5] hover:text-[#A6CE3A] hover:bg-[#A6CE3A]/10'
                }`}
              >
                Home
              </Link>
              <a 
                href="/#about" 
                onClick={closeMenu}
                className="block px-4 py-3 text-[#008AD5] hover:text-[#A6CE3A] hover:bg-[#A6CE3A]/10 rounded-lg transition-all duration-300 font-medium"
              >
                About
              </a>
              <a 
                href="/#services" 
                onClick={closeMenu}
                className="block px-4 py-3 text-[#008AD5] hover:text-[#A6CE3A] hover:bg-[#A6CE3A]/10 rounded-lg transition-all duration-300 font-medium"
              >
                Services
              </a>
              <a 
                href="/#team" 
                onClick={closeMenu}
                className="block px-4 py-3 text-[#008AD5] hover:text-[#A6CE3A] hover:bg-[#A6CE3A]/10 rounded-lg transition-all duration-300 font-medium"
              >
                Team
              </a>
              <Link 
                to="/gallery" 
                onClick={closeMenu}
                className={`block px-4 py-3 transition-all duration-300 font-medium rounded-lg ${
                  location.pathname === '/gallery' 
                    ? 'text-[#A6CE3A] bg-[#A6CE3A]/10' 
                    : 'text-[#008AD5] hover:text-[#A6CE3A] hover:bg-[#A6CE3A]/10'
                }`}
              >
                Gallery
              </Link>
              <a 
                href="/#contact" 
                onClick={closeMenu}
                className="block px-4 py-3 text-[#008AD5] hover:text-[#A6CE3A] hover:bg-[#A6CE3A]/10 rounded-lg transition-all duration-300 font-medium"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;