import React from 'react';
import { 
  CircleDot, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Skunkworks Digital</h3>
            <p className="text-gray-400 mb-6">
              Empowering businesses to scale digitally through comprehensive solutions and strategies since 2020.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-blue-400 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-blue-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-pink-600 w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">E-commerce Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Website Design & Development</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">SEO & Content Marketing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">CRM & Business Automation</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Social Media Marketing</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">Email Marketing</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">About Us</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-white transition-colors duration-300">Our Team</a></li>
              <li><a href="#case-studies" className="text-gray-400 hover:text-white transition-colors duration-300">Case Studies</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors duration-300">Testimonials</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">E-books & Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Webinars</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Industry Reports</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Partners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Support</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 mb-4 md:mb-0">
            © 2025 Skunkworks Digital. All Rights Reserved.
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;