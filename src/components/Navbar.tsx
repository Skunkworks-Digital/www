import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CircleDot, Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  const scrollToSection = (id: string) => {
    closeMobileMenu();
    if (location.pathname !== "/") {
      // If not on homepage, navigate to homepage with hash
      window.location.href = `/#${id}`;
    } else {
      // If on homepage, scroll to section
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header>
      {/* Navbar */}
      <nav
        className={`fixed top-0 w-full z-40 transition-all duration-300 ${
          scrolled ? "bg-blue-700 shadow-md" : "bg-blue-600"
        }`}
      >
        <div className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link
            to="/"
            className="flex items-center text-white text-xl font-bold"
            onClick={closeMobileMenu}
          >
            <CircleDot className="w-6 h-6 mr-2" />
            <span>Skunkworks Digital</span>
          </Link>

          <div className="flex items-center">
            {!mobileMenuOpen && (
              <Link
                to="/#contact"
                className="hidden sm:inline-block mr-4 px-4 py-2 bg-white text-blue-600 rounded-md hover:bg-blue-100 transition-colors"
                onClick={() => scrollToSection("contact")}
              >
                Get Started
              </Link>
            )}
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-white hover:text-blue-200 transition-colors"
              aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } bg-black bg-opacity-50 backdrop-blur-sm`}
        onClick={closeMobileMenu}
      >
        {/* Sidebar Drawer */}
        <div
          className={`fixed top-0 right-0 w-80 max-w-full h-screen overflow-y-auto bg-white text-blue-700 shadow-2xl transform transition-transform duration-300 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
              <Link
                to="/"
                className="flex items-center text-blue-600 text-xl font-bold"
                onClick={closeMobileMenu}
              >
                <CircleDot className="w-6 h-6 mr-2" />
                <span>Skunkworks Digital</span>
              </Link>
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
              <button
                onClick={() => scrollToSection("services")}
                className="text-left px-4 py-3 rounded-md hover:bg-blue-100 hover:text-blue-900 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left px-4 py-3 rounded-md hover:bg-blue-100 hover:text-blue-900 transition-colors"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left px-4 py-3 rounded-md hover:bg-blue-100 hover:text-blue-900 transition-colors"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-left px-4 py-3 rounded-md hover:bg-blue-100 hover:text-blue-900 transition-colors"
              >
                Our Team
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left px-4 py-3 rounded-md hover:bg-blue-100 hover:text-blue-900 transition-colors"
              >
                Contact
              </button>

              {/* Growth Solutions Dropdown */}
              <div className="pl-4">
                <span className="text-blue-700 font-semibold">
                  Growth Solutions
                </span>
                <div className="ml-2 mt-2 flex flex-col space-y-2">
                  <Link
                    to="/case-studies"
                    onClick={closeMobileMenu}
                    className="text-sm px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-900 transition-colors"
                  >
                    Case Studies
                  </Link>
                  <Link
                    to="/process"
                    onClick={closeMobileMenu}
                    className="text-sm px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-900 transition-colors"
                  >
                    Proven Process
                  </Link>
                  <Link
                    to="/go-to-market"
                    onClick={closeMobileMenu}
                    className="text-sm px-3 py-2 rounded-md hover:bg-blue-50 hover:text-blue-900 transition-colors"
                  >
                    Go to Market Strategy
                  </Link>
                </div>
              </div>
            </div>

            {/* CTA at Bottom */}
            <div className="mt-auto pt-6">
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-center px-4 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
