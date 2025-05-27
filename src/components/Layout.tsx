import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen font-sans transition-colors duration-300">
      <a
        href="#main-content"
        className="absolute top-[-40px] left-0 bg-blue-600 text-white p-2 z-[9999] focus:top-0 transition-all duration-300"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
