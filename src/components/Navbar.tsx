import  { useState } from 'react';
import { Menu, X, Microscope } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <Microscope className="h-8 w-8 text-[#1a237e]" />
                <span className="ml-2 text-2xl font-bold text-[#1a237e]">BioLens</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-800 hover:text-[#1a237e] transition-colors px-3 py-2">Home</a>
              <a href="#features" className="text-gray-800 hover:text-[#1a237e] transition-colors px-3 py-2">Features</a>
              <a href="#technology" className="text-gray-800 hover:text-[#1a237e] transition-colors px-3 py-2">Technology</a>
              <a href="#community" className="text-gray-800 hover:text-[#1a237e] transition-colors px-3 py-2">Community</a>
              <a href="#contact" className="text-gray-800 hover:text-[#1a237e] transition-colors px-3 py-2">Contact</a>
              <button className="bg-[#1a237e] text-white px-4 py-2 rounded-md font-medium hover:bg-[#283593] transition-colors">
                Join Community
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-[#1a237e] transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a
              href="#home"
              className="text-gray-800 hover:text-[#1a237e] block px-3 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </a>
            <a
              href="#features"
              className="text-gray-800 hover:text-[#1a237e] block px-3 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
            <a
              href="#technology"
              className="text-gray-800 hover:text-[#1a237e] block px-3 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Technology
            </a>
            <a
              href="#community"
              className="text-gray-800 hover:text-[#1a237e] block px-3 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Community
            </a>
            <a
              href="#contact"
              className="text-gray-800 hover:text-[#1a237e] block px-3 py-2 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
            <button className="w-full text-center bg-[#1a237e] text-white px-4 py-2 rounded-md font-medium hover:bg-[#283593] transition-colors">
              Join Community
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;