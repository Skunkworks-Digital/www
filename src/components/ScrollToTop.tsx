import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <button
      className={`fixed bottom-8 right-8 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-md hover:bg-blue-700 transition-all duration-300 z-40 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-5 pointer-events-none'
      }`}
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default ScrollToTop;