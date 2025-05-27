import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Hero: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section 
      ref={ref}
      className="pt-24 pb-16 px-4 md:pt-32 md:pb-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-blue-600/0"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="w-full max-w-lg mx-auto mb-8">
              <svg viewBox="0 0 600 200" className="w-full h-auto">
                <defs>
                  <linearGradient id="gradientBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="1"/>
                    <stop offset="100%" stopColor="#e0e7ff" stopOpacity="1"/>
                  </linearGradient>
                  
                  <pattern id="circuitPattern" patternUnits="userSpaceOnUse" width="60" height="60" patternTransform="scale(0.5) rotate(0)">
                    <rect width="60" height="60" fill="none"/>
                    <path d="M10,10 h30 v10 h10 v30" stroke="#ffffff" strokeWidth="1.5" fill="none" strokeOpacity="0.2"/>
                    <path d="M40,10 v30 h-30" stroke="#ffffff" strokeWidth="1.5" fill="none" strokeOpacity="0.2"/>
                    <circle cx="10" cy="10" r="3" fill="#ffffff" fillOpacity="0.3"/>
                    <circle cx="40" cy="10" r="3" fill="#ffffff" fillOpacity="0.3"/>
                    <circle cx="10" cy="40" r="3" fill="#ffffff" fillOpacity="0.3"/>
                    <circle cx="40" cy="40" r="3" fill="#ffffff" fillOpacity="0.3"/>
                  </pattern>
                  
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feComposite in="SourceGraphic" in2="blur" operator="over"/>
                  </filter>
                </defs>
                
                <rect width="600" height="200" fill="url(#circuitPattern)" opacity="0.3"/>
                
                <circle cx="100" cy="100" r="80" fill="none" stroke="url(#gradientBlue)" strokeWidth="2" opacity="0.7"/>
                <circle cx="500" cy="100" r="80" fill="none" stroke="url(#gradientBlue)" strokeWidth="2" opacity="0.7"/>
                
                <path d="M50,50 L150,50 L150,150 L50,150 Z" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="5,5" opacity="0.6"/>
                <path d="M450,50 L550,50 L550,150 L450,150 Z" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="5,5" opacity="0.6"/>
                
                <line x1="150" y1="100" x2="450" y2="100" stroke="#ffffff" strokeWidth="2" strokeDasharray="10,5" opacity="0.8"/>
                <circle cx="150" cy="100" r="5" fill="#ffffff"/>
                <circle cx="450" cy="100" r="5" fill="#ffffff"/>
                <circle cx="300" cy="100" r="8" fill="#ffffff" filter="url(#glow)"/>
                
                <g filter="url(#glow)">
                  <text x="303" y="103" fontFamily="'IBM Plex Sans', sans-serif" fontWeight="700" fontSize="60" textAnchor="middle" fill="#ffffff" opacity="0.3">SKUNKWORKS</text>
                  <text x="303" y="153" fontFamily="'IBM Plex Sans', sans-serif" fontWeight="300" fontSize="40" textAnchor="middle" fill="#ffffff" opacity="0.3">DIGITAL</text>
                  
                  <text x="300" y="100" fontFamily="'IBM Plex Sans', sans-serif" fontWeight="700" fontSize="60" textAnchor="middle" fill="#ffffff">SKUNKWORKS</text>
                  <text x="300" y="150" fontFamily="'IBM Plex Sans', sans-serif" fontWeight="300" fontSize="40" textAnchor="middle" fill="#ffffff">DIGITAL</text>
                </g>
                
                <path d="M240,40 L260,40 L260,45 L240,45 Z" fill="#ffffff" opacity="0.8"/>
                <path d="M270,40 L290,40 L290,45 L270,45 Z" fill="#ffffff" opacity="0.8"/>
                <path d="M300,40 L320,40 L320,45 L300,45 Z" fill="#ffffff" opacity="0.8"/>
                <path d="M330,40 L350,40 L350,45 L330,45 Z" fill="#ffffff" opacity="0.8"/>
                
                <path d="M50,180 C100,160 150,190 200,170 C250,150 300,190 350,170 C400,150 450,190 500,170 L500,200 L50,200 Z" fill="url(#gradientBlue)" opacity="0.1"/>
              </svg>
            </div>
          </div>
          
          <h1 className={`font-light mb-4 transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Transforming Businesses Through Digital Innovation
          </h1>
          
          <h2 className={`text-xl md:text-2xl font-normal mb-10 transition-all duration-700 delay-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Empowering businesses of all sizes to establish, expand, and optimize their digital presence in today's competitive marketplace
          </h2>
          
          <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 transition-all duration-700 delay-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <a 
              href="#services" 
              className="btn bg-white text-blue-600 hover:bg-blue-50 hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto animation-pulse"
            >
              Explore Our Services
            </a>
            <a 
              href="#contact" 
              className="btn border-2 border-white text-white hover:bg-white/10 hover:-translate-y-1 hover:shadow-lg w-full sm:w-auto"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;