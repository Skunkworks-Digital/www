import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookies-accepted');
    if (!cookiesAccepted) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookies-accepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-1 rounded-xl shadow-lg z-50">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div className="flex-1">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">We value your privacy</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
            By clicking "Accept All", you consent to our use of cookies. Learn more in our{' '}
            <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
              Cookie Policy
            </a>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
          <button
            className="px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
          >
            Manage Preferences
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
