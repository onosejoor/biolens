import React, { useState, useEffect } from 'react';
import { Menu, X, Search, MapPin, Globe } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white text-gray-800 shadow-md py-3'
          : 'bg-transparent text-white py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Globe className="w-8 h-8 text-teal-600" />
          <span className="ml-2 text-xl font-bold">TravelEase</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a
            href="#destinations"
            className="font-medium hover:text-teal-500 transition-colors"
          >
            Destinations
          </a>
          <a
            href="#experiences"
            className="font-medium hover:text-teal-500 transition-colors"
          >
            Experiences
          </a>
          <a
            href="#about"
            className="font-medium hover:text-teal-500 transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="font-medium hover:text-teal-500 transition-colors"
          >
            Contact
          </a>
        </nav>

        <div className="hidden md:flex space-x-4 items-center">
          <button className="text-sm font-medium hover:text-teal-500 transition-colors">
            Sign In
          </button>
          <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Sign Up
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white text-gray-800 shadow-lg absolute top-full left-0 right-0 py-4">
          <div className="container mx-auto px-4 flex flex-col space-y-4">
            <a
              href="#destinations"
              className="font-medium py-2 hover:text-teal-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </a>
            <a
              href="#experiences"
              className="font-medium py-2 hover:text-teal-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Experiences
            </a>
            <a
              href="#about"
              className="font-medium py-2 hover:text-teal-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="font-medium py-2 hover:text-teal-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <div className="flex space-x-4 pt-2">
              <button className="text-sm font-medium hover:text-teal-500 transition-colors">
                Sign In
              </button>
              <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;