import React from "react";
import { useInView } from "react-intersection-observer";

const Hero: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center px-4 py-12 md:py-16 bg-gradient-to-r from-blue-700 to-indigo-900 text-white overflow-hidden"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 z-0 animate-backgroundMove">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-blue-700 to-indigo-900 opacity-30 blur-xl"></div>
      </div>

      {/* Static pattern + overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <div
          className={`transition-all duration-1000 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <svg viewBox="0 0 600 200" className="w-full h-40 md:h-52 mb-6">
            <defs>
              <linearGradient
                id="gradientBlue"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                <stop offset="100%" stopColor="#e0e7ff" stopOpacity="1" />
              </linearGradient>
              <pattern
                id="circuitPattern"
                patternUnits="userSpaceOnUse"
                width="60"
                height="60"
                patternTransform="scale(0.5)"
              >
                <path
                  d="M10,10 h30 v10 h10 v30"
                  stroke="#fff"
                  strokeWidth="1.5"
                  fill="none"
                  strokeOpacity="0.2"
                />
                <path
                  d="M40,10 v30 h-30"
                  stroke="#fff"
                  strokeWidth="1.5"
                  fill="none"
                  strokeOpacity="0.2"
                />
                <circle cx="10" cy="10" r="3" fill="#fff" fillOpacity="0.3" />
                <circle cx="40" cy="10" r="3" fill="#fff" fillOpacity="0.3" />
                <circle cx="10" cy="40" r="3" fill="#fff" fillOpacity="0.3" />
                <circle cx="40" cy="40" r="3" fill="#fff" fillOpacity="0.3" />
              </pattern>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            <rect
              width="600"
              height="200"
              fill="url(#circuitPattern)"
              opacity="0.3"
            />
            <circle
              cx="100"
              cy="100"
              r="80"
              stroke="url(#gradientBlue)"
              strokeWidth="2"
              fill="none"
              opacity="0.5"
            />
            <circle
              cx="500"
              cy="100"
              r="80"
              stroke="url(#gradientBlue)"
              strokeWidth="2"
              fill="none"
              opacity="0.5"
            />
            <line
              x1="150"
              y1="100"
              x2="450"
              y2="100"
              stroke="#fff"
              strokeWidth="2"
              strokeDasharray="10,5"
              opacity="0.7"
            />
            <circle
              cx="300"
              cy="100"
              r="8"
              fill="#ffffff"
              filter="url(#glow)"
            />
            <g filter="url(#glow)">
              <text
                x="300"
                y="95"
                textAnchor="middle"
                fontFamily="'IBM Plex Sans', sans-serif"
                fontWeight="700"
                fontSize="48"
                fill="#fff"
              >
                SKUNKWORKS
              </text>
              <text
                x="300"
                y="140"
                textAnchor="middle"
                fontFamily="'IBM Plex Sans', sans-serif"
                fontWeight="300"
                fontSize="28"
                fill="#fff"
              >
                DIGITAL
              </text>
            </g>
          </svg>
        </div>

        <h1
          className={`text-3xl md:text-5xl font-semibold leading-snug mb-4 transition-all duration-1000 delay-200 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Transforming Businesses Through Digital Innovation
        </h1>

        <p
          className={`text-base md:text-lg font-light max-w-2xl mx-auto mb-6 transition-all duration-1000 delay-400 text-white-500 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Empowering organizations to scale, adapt, and thrive with intelligent
          digital experiences, powerful tools, and forward-thinking strategy.
        </p>

        <div
          className={`flex flex-col sm:flex-row justify-center items-center gap-3 transition-all duration-1000 delay-600 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#services"
            className="px-5 py-2.5 rounded-full bg-white text-blue-700 font-semibold shadow-md hover:bg-blue-50 hover:-translate-y-1 transform transition-all duration-300 text-sm"
          >
            Explore Our Services
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full border-2 border-white text-white font-semibold hover:bg-white/10 hover:-translate-y-1 transform transition-all duration-300 text-sm"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
