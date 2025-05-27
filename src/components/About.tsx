import React from 'react';
import { useInView } from 'react-intersection-observer';
import { CircleDot, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="about" ref={ref} className="py-16 bg-[color:var(--bg-primary)]">
      <div className="container-custom">
        <div className="tile">
          <h2 className="flex items-center">
            <CircleDot className="section-icon" size={24} />
            Company Profile
          </h2>
          
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="section-description">
              Founded in 2020, Skunkworks Digital has rapidly established itself as a premier digital solutions provider. We specialize in creating comprehensive online services that help businesses of all sizes establish, expand, and optimize their digital presence in an increasingly competitive marketplace.
            </p>
            
            <p className="mb-6">
              At Skunkworks Digital, we believe that every business deserves access to cutting-edge digital tools and strategies regardless of their size or industry. Our team of experts combines deep technical knowledge with business acumen to deliver solutions that not only look great but drive measurable results.
            </p>
            
            <p className="mb-8">
              What sets us apart is our commitment to understanding your unique business challenges and goals. We don't offer one-size-fits-all solutions – instead, we take the time to learn about your business, your customers, and your market before crafting a tailored digital strategy that positions you for success.
            </p>
          </div>
          
          <div className={`mb-12 transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h3 className="text-xl font-semibold mb-6">Our Core Services</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="service-item">
                <div className="icon">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">E-commerce Growth & Payment Integration</h4>
                  <p className="text-[color:var(--text-secondary)] mb-0">
                    Comprehensive e-commerce solutions including platform setup, product catalog management, and secure payment gateway integration across multiple currencies and payment methods.
                  </p>
                </div>
              </div>
              
              <div className="service-item">
                <div className="icon">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Web Development & Hosting</h4>
                  <p className="text-[color:var(--text-secondary)] mb-0">
                    Custom website design and development with responsive layouts, performance optimization, and reliable hosting solutions with 99.9% uptime guarantee and 24/7 monitoring.
                  </p>
                </div>
              </div>
              
              <div className="service-item">
                <div className="icon">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">SEO, Social Media & Email Marketing</h4>
                  <p className="text-[color:var(--text-secondary)] mb-0">
                    Data-driven marketing strategies including search engine optimization, targeted social media campaigns, and personalized email marketing to increase traffic, engagement, and conversion rates.
                  </p>
                </div>
              </div>
              
              <div className="service-item">
                <div className="icon">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">CRM Setup & Business Process Automation</h4>
                  <p className="text-[color:var(--text-secondary)] mb-0">
                    Implementation and customization of customer relationship management systems and workflow automation to streamline operations, reduce manual tasks, and improve customer experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={`stat-highlight transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="stat-number">250+</div>
            <div className="stat-description">
              Successful client projects delivered across 12 industries since our founding, with a client retention rate of 92%.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;