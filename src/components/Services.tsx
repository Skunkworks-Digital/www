import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import {
  ShoppingCart,
  Code,
  Search,
  Notebook as Robot,
  Hash,
  Mail,
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  shortDescription: string;
}

const Services: React.FC = () => {
  const { ref } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedService, setSelectedService] = useState<number>(0);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const services: Service[] = [
    {
      icon: <ShoppingCart size={24} />,
      title: "E-commerce Development",
      shortDescription: "Custom online stores with seamless checkout",
      description:
        "We build custom e-commerce platforms tailored to your brand and customers. From product management to secure payments and order tracking, we ensure a seamless, scalable, and secure shopping experience for your users.",
    },
    {
      icon: <Code size={24} />,
      title: "Website Design & Development",
      shortDescription: "Responsive, performance-optimized websites",
      description:
        "Our websites are designed to perform. We create visually appealing, mobile-responsive sites that load fast, convert visitors, and are easy to manage. Using the latest technologies and design principles, we ensure every website delivers exceptional user experience and functionality.",
    },
    {
      icon: <Search size={24} />,
      title: "SEO & Content Marketing",
      shortDescription: "Increase your visibility with our SEO-first approach",
      description:
        "From on-page optimization to keyword-rich content and backlink strategies, we help you rank higher on search engines and attract quality organic traffic that converts into loyal customers.",
    },
    {
      icon: <Robot size={24} />,
      title: "CRM & Business Automation",
      shortDescription: "Automate workflows and improve lead tracking",
      description:
        "Automate your workflows, improve lead tracking, and personalize customer journeys with custom CRM systems. Our business automation services reduce manual tasks, improve response times, and help you gain valuable insights.",
    },
    {
      icon: <Hash size={24} />,
      title: "Social Media Marketing",
      shortDescription: "Build your online presence across platforms",
      description:
        "We build your online presence across social platforms with tailored content, ad campaigns, and engagement strategies. Our goal is to turn your followers into a community and your social channels into revenue-generating tools.",
    },
    {
      icon: <Mail size={24} />,
      title: "Email Marketing",
      shortDescription: "Nurture leads with targeted email campaigns",
      description:
        "Nurture leads and keep your audience engaged with beautifully designed, targeted email campaigns. We help you segment your audience, create compelling copy, and automate campaigns that drive clicks and conversions.",
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      className="py-16 bg-[color:var(--bg-primary)]"
    >
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-600 mb-2">
            Our Comprehensive Services
          </h2>
          <div className="w-16 h-1 mx-auto bg-blue-600 rounded mb-4" />
          <p className="max-w-3xl mx-auto text-[color:var(--text-secondary)] text-lg">
            We offer tailored digital services to help your business thrive in
            the digital world.
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* Services Row */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center cursor-pointer group relative"
                onClick={() => setSelectedService(index)}
              >
                {/* Mobile Description Above Circle */}
                {isMobile && selectedService === index && (
                  <div className="text-center mb-2 px-2">
                    <p className="text-sm text-[color:var(--text-secondary)]">
                      {service.description}
                    </p>
                  </div>
                )}

                {/* Service Circle */}
                <div
                  className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
                    selectedService === index
                      ? "bg-blue-600 text-white"
                      : "bg-white text-blue-600 border border-gray-200"
                  }`}
                >
                  <div className="z-10 transform group-hover:scale-110 transition-transform">
                    {React.cloneElement(service.icon as React.ReactElement, {
                      className:
                        selectedService === index
                          ? "text-white"
                          : "text-blue-600",
                    })}
                  </div>
                </div>

                {/* Service Title */}
                <span className="mt-3 text-sm font-medium">
                  {service.title}
                </span>
              </div>
            ))}
          </div>

          {/* Desktop Selection Indicator Line */}
          {!isMobile && (
            <div className="relative w-full max-w-4xl h-1.5 bg-gray-200 mb-8 rounded-full">
              <div
                className="absolute top-0 left-0 h-full bg-blue-600 transition-all duration-300 rounded-full"
                style={{
                  width: `${100 / services.length}%`,
                  transform: `translateX(${selectedService * 100}%)`,
                }}
              />
            </div>
          )}

          {/* Selected Service Description for Desktop */}
          {!isMobile && (
            <div className="max-w-3xl text-center px-4">
              <p className="text-[color:var(--text-secondary)] text-lg">
                {services[selectedService].description}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
