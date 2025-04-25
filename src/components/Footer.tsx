import React from 'react';
import { Microscope } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a237e] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Microscope className="h-8 w-8 text-white" />
              <span className="ml-2 text-2xl font-bold text-white">BioLens</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Advancing clinical research through AI-powered collaboration and 
              community-driven innovation.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#technology" className="text-gray-300 hover:text-white transition-colors">Technology</a></li>
              <li><a href="#community" className="text-gray-300 hover:text-white transition-colors">Community</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} BioLens Community. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;