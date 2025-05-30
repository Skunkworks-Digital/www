import React, { useState, useEffect } from "react";

type CookiePreferences = {
  essential: boolean;
  performance: boolean;
  functional: boolean;
  marketing: boolean;
};

type ModalView = "policy" | "preferences";

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalView, setModalView] = useState<ModalView>("policy");
  const [showModal, setShowModal] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true, // Essential cookies cannot be disabled
    performance: true,
    functional: true,
    marketing: true,
  });

  useEffect(() => {
    setIsMounted(true);
    const cookiesAccepted = localStorage.getItem("cookies-accepted");
    if (!cookiesAccepted) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookies-accepted", JSON.stringify(preferences));
    setIsVisible(false);
    setShowModal(false);
  };

  const openModal = (view: ModalView) => {
    setModalView(view);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const togglePreference = (category: keyof CookiePreferences) => {
    if (category === "essential") return; // Essential cookies cannot be disabled
    setPreferences((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const allAccepted = Object.entries(preferences)
    .filter(([key]) => key !== "essential") // Essential cookies are always on
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    .every(([_, value]) => value);

  if (!isMounted) return null;

  return (
    <>
      {isVisible && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-consent-heading"
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-1 rounded-xl shadow-lg z-50"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
            <div className="flex-1">
              <h3
                id="cookie-consent-heading"
                className="text-base font-semibold text-gray-900 dark:text-white mb-1"
              >
                We value your privacy
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                We use cookies to enhance your browsing experience, serve
                personalized content, and analyze our traffic. By clicking
                "Accept All", you consent to our use of cookies. Learn more in
                our{" "}
                <button
                  onClick={() => openModal("policy")}
                  className="text-blue-600 dark:text-blue-400 hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
                >
                  Cookie Policy
                </button>
                .
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <button
                onClick={() => openModal("preferences")}
                className="px-4 py-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Manage Preferences
              </button>
              <button
                onClick={acceptCookies}
                className="px-4 py-1.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                {allAccepted ? "Accept All" : "Accept Selected"}
              </button>
            </div>
          </div>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  {modalView === "policy"
                    ? "Cookie Policy"
                    : "Cookie Preferences"}
                </h2>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
                  aria-label="Close modal"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {modalView === "policy" ? (
                <div className="prose dark:prose-invert text-sm text-gray-600 dark:text-gray-300">
                  <h3 className="text-lg font-semibold mt-4">
                    What are cookies?
                  </h3>
                  <p>
                    Cookies are small text files stored on your device when you
                    visit our website. They help us remember your preferences
                    and understand how you interact with our site.
                  </p>

                  <h3 className="text-lg font-semibold mt-4">
                    Types of cookies we use
                  </h3>
                  <ul className="list-disc pl-5">
                    <li className="mt-1">
                      <strong>Essential cookies:</strong> Necessary for the
                      website to function properly
                    </li>
                    <li className="mt-1">
                      <strong>Performance cookies:</strong> Help us understand
                      how visitors use our site
                    </li>
                    <li className="mt-1">
                      <strong>Functional cookies:</strong> Remember your
                      preferences and settings
                    </li>
                    <li className="mt-1">
                      <strong>Marketing cookies:</strong> Used to track visitors
                      across websites
                    </li>
                  </ul>

                  <h3 className="text-lg font-semibold mt-4">
                    Managing your preferences
                  </h3>
                  <p>
                    You can change your cookie preferences at any time through
                    the "Manage Preferences" button. Essential cookies cannot be
                    disabled as they are necessary for the website to function.
                  </p>

                  <div className="mt-6 flex justify-between">
                    <button
                      onClick={() => setModalView("preferences")}
                      className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      Manage Preferences
                    </button>
                    <button
                      onClick={acceptCookies}
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      Accept All Cookies
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  <h3 className="text-lg font-semibold mt-4">
                    Manage Cookie Preferences
                  </h3>
                  <p className="mb-4">
                    Select the types of cookies you want to allow:
                  </p>

                  <div className="space-y-4">
                    {/* Essential Cookies (always on) */}
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div>
                        <h4 className="font-medium">Essential Cookies</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Necessary for the website to function
                        </p>
                      </div>
                      <div className="relative inline-block w-10 mr-2 align-middle select-none">
                        <input
                          type="checkbox"
                          id="essential-toggle"
                          checked={preferences.essential}
                          onChange={() => {}}
                          className="sr-only"
                          disabled
                        />
                        <label
                          htmlFor="essential-toggle"
                          className="block overflow-hidden h-6 rounded-full bg-blue-600 cursor-not-allowed"
                        >
                          <span className="block h-6 w-6 rounded-full bg-white transform translate-x-4"></span>
                        </label>
                      </div>
                    </div>

                    {/* Performance Cookies */}
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div>
                        <h4 className="font-medium">Performance Cookies</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Help us understand how visitors use our site
                        </p>
                      </div>
                      <div className="relative inline-block w-10 mr-2 align-middle select-none">
                        <input
                          type="checkbox"
                          id="performance-toggle"
                          checked={preferences.performance}
                          onChange={() => togglePreference("performance")}
                          className="sr-only"
                        />
                        <label
                          htmlFor="performance-toggle"
                          className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
                            preferences.performance
                              ? "bg-blue-600"
                              : "bg-gray-300 dark:bg-gray-500"
                          }`}
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform ${
                              preferences.performance
                                ? "translate-x-4"
                                : "translate-x-0"
                            }`}
                          ></span>
                        </label>
                      </div>
                    </div>

                    {/* Functional Cookies */}
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div>
                        <h4 className="font-medium">Functional Cookies</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Remember your preferences and settings
                        </p>
                      </div>
                      <div className="relative inline-block w-10 mr-2 align-middle select-none">
                        <input
                          type="checkbox"
                          id="functional-toggle"
                          checked={preferences.functional}
                          onChange={() => togglePreference("functional")}
                          className="sr-only"
                        />
                        <label
                          htmlFor="functional-toggle"
                          className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
                            preferences.functional
                              ? "bg-blue-600"
                              : "bg-gray-300 dark:bg-gray-500"
                          }`}
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform ${
                              preferences.functional
                                ? "translate-x-4"
                                : "translate-x-0"
                            }`}
                          ></span>
                        </label>
                      </div>
                    </div>

                    {/* Marketing Cookies */}
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <div>
                        <h4 className="font-medium">Marketing Cookies</h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Used to track visitors across websites
                        </p>
                      </div>
                      <div className="relative inline-block w-10 mr-2 align-middle select-none">
                        <input
                          type="checkbox"
                          id="marketing-toggle"
                          checked={preferences.marketing}
                          onChange={() => togglePreference("marketing")}
                          className="sr-only"
                        />
                        <label
                          htmlFor="marketing-toggle"
                          className={`block overflow-hidden h-6 rounded-full cursor-pointer ${
                            preferences.marketing
                              ? "bg-blue-600"
                              : "bg-gray-300 dark:bg-gray-500"
                          }`}
                        >
                          <span
                            className={`block h-6 w-6 rounded-full bg-white transform ${
                              preferences.marketing
                                ? "translate-x-4"
                                : "translate-x-0"
                            }`}
                          ></span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between">
                    <button
                      onClick={() => setModalView("policy")}
                      className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      View Cookie Policy
                    </button>
                    <button
                      onClick={acceptCookies}
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                      {allAccepted
                        ? "Accept All Cookies"
                        : "Accept Selected Cookies"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
