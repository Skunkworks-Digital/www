import React from "react";
import {
  Mail,
  Twitter,
  Linkedin,
  Instagram,
  Facebook,
  MapPin,
  Phone,
  Clock,
  AtSign,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const handleAnchorLink = (hash: string) => {
    if (location.pathname !== "/") {
      return `/#${hash}`;
    }
    return `#${hash}`;
  };

  return (
    <footer className="bg-gray-900 text-white w-full mt-20">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="flex flex-col items-start">
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              Innovating the digital future — building cutting-edge solutions
              that empower businesses to thrive in a tech-first world.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/skunkworksacademy/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to={handleAnchorLink("services")}
                  className="hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/process"
                  className="hover:text-white transition-colors"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  to="/go-to-market"
                  className="hover:text-white transition-colors"
                >
                  Go to Market Strategy
                </Link>
              </li>
              <li>
                <Link
                  to={handleAnchorLink("contact")}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-start">
            <h3 className="font-semibold text-lg mb-6">
              Let's Transform Your Digital Presence
            </h3>
            <p className="text-gray-400 mb-4 text-sm">
              Ready to take your business to the next level? Contact us today to
              discuss your project.
            </p>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start">
                <MapPin size={16} className="mt-1 mr-2" />
                26 Second Ave,
                <br /> Germistion, Gauteng 1410
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                +27 (83) 380 7950
              </li>
              <li className="flex items-center">
                <AtSign size={16} className="mr-2" />
                info@skunkworksdigital.co.za
              </li>
              <li className="flex items-center">
                <Clock size={16} className="mr-2" />
                Mon–Fri: 9:00 AM - 6:00 PM SAST
                <br />
                Sat–Sun: Closed
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="hidden sm:block flex-col items-start">
            <h3 className="font-semibold text-lg mb-6">Stay in the Loop</h3>
            <p className="text-gray-400 mb-4 text-sm">
              Sign up for updates on new solutions, case studies, and industry
              insights.
            </p>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow bg-gray-800 border border-gray-700 rounded-l-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg text-sm font-medium transition-colors">
                <Mail size={18} />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Skunkworks Digital. All rights
            reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              Cookie Policy
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              GDPR
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
