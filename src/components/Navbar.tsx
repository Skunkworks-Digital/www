import React, { useState, useEffect } from 'react';
import { CircleDot, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  // Scroll event to change navbar background
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header>
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled ? 'bg-blue-700 shadow-md' : 'bg-blue-600'
        }`}
      >
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <a
            href="#top"
            className="flex items-center text-white text-xl font-bold"
            onClick={closeMobileMenu}
          >
            <CircleDot className="w-6 h-6 mr-2" />
            <span>Skunkworks Digital</span>
          </a>

          <div className="flex items-center">
            {!mobileMenuOpen && (
              <a
                href="#contact"
                className="hidden sm:inline-block mr-4 px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-blue-100 transition-colors"
              >
                Get Started
              </a>
            )}
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-white hover:text-blue-200 transition-colors"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        } bg-black bg-opacity-50 backdrop-blur-sm`}
        onClick={closeMobileMenu}
      >
        {/* Sidebar Drawer */}
        <div
          className={`fixed top-0 right-0 w-80 max-w-full h-screen overflow-y-auto bg-white text-blue-700 shadow-2xl transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <a
                href="#top"
                className="flex items-center text-blue-600 text-xl font-bold"
                onClick={closeMobileMenu}
              >
                <CircleDot className="w-6 h-6 mr-2" />
                <span>Skunkworks Digital</span>
              </a>
              <button
                onClick={closeMobileMenu}
                className="p-2 text-blue-600 hover:text-blue-800"
                aria-label="Close Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col space-y-4 text-base font-medium">
              {[
                { label: 'Services', href: '#services' },
                { label: 'About Us', href: '#about' },
                { label: 'Case Studies', href: '#case-studies' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Our Team', href: '#team' },
                { label: 'Contact', href: '#contact' },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={closeMobileMenu}
                  className="px-4 py-3 rounded-md hover:bg-blue-100 hover:text-blue-900 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* CTA at Bottom */}
            <div className="mt-auto pt-6">
              <a
                href="#contact"
                className="block w-full text-center px-4 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
                onClick={closeMobileMenu}
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
