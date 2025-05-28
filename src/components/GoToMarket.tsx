import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  FileText,
  CreditCard,
  Globe,
  Lock,
  PieChart,
  Smartphone,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react";

interface StrategyItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StrategyItem: React.FC<StrategyItemProps> = ({
  icon,
  title,
  description,
}) => (
  <div className="relative flex flex-col md:flex-row items-start gap-5 mb-10 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
    {/* Mobile Icon - Top Center */}
    <div className="md:hidden flex justify-center w-full mb-3">
      <div className="bg-blue-100 p-2 rounded-full text-blue-600 inline-flex items-center justify-center shadow-sm">
        {React.cloneElement(icon as React.ReactElement, { size: 20 })}
      </div>
    </div>

    {/* Desktop Icon - Left Side */}
    <div className="hidden md:flex flex-shrink-0 relative">
      <div className="bg-blue-100 p-3 rounded-full text-blue-600 inline-flex items-center justify-center shadow-sm">
        {React.cloneElement(icon as React.ReactElement, { size: 28 })}
      </div>
    </div>

    <div className="text-center md:text-left w-full">
      <h3 className="text-lg font-semibold text-blue-600 mb-2">{title}</h3>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  </div>
);

const AnimatedNumber: React.FC<{ target: number }> = ({ target }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  useEffect(() => {
    if (inView && !hasAnimated) {
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps

      let currentCount = 0;
      const timer = setInterval(() => {
        currentCount += increment;
        if (currentCount >= target) {
          currentCount = target;
          clearInterval(timer);
          setHasAnimated(true);
        }
        setCount(Math.floor(currentCount));
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, target, hasAnimated]);

  return (
    <div
      ref={ref}
      className={`text-4xl md:text-6xl font-bold text-blue-600 transition-transform duration-500 ${
        count === target ? "scale-110" : "scale-100"
      }`}
    >
      {count}%
    </div>
  );
};

const GoToMarket: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const targetMarkets = [
    {
      icon: <FileText />,
      title: "SMEs & Startups",
      description:
        "Businesses with 10–250 employees seeking fast, cost-effective digital solutions. They often need strategic planning, scalable implementation, and trusted partners. Skunkworks Digital works closely with startups to identify key needs, create lean MVPs, and deliver fast ROI with agile development.",
    },
    {
      icon: <CreditCard />,
      title: "E-commerce Businesses",
      description:
        "Retailers looking to optimize user experience, drive conversions, and scale across platforms. We help improve UX/UI, integrate multi-channel inventory, and boost search visibility, while streamlining payment and checkout flows.",
    },
    {
      icon: <PieChart />,
      title: "Enterprises Needing CRM & Automation",
      description:
        "Larger organizations with complex workflows benefit from CRM systems, automated pipelines, and custom dashboards. Skunkworks Digital builds tailored integrations between systems to improve internal efficiency and customer lifecycle management.",
    },
  ];

  const channels = [
    {
      icon: <Globe />,
      title: "Website & SEO Optimization",
      description:
        "We drive traffic with organic SEO through optimized landing pages, technical performance improvements, and targeted content marketing. Our own website ranks across multiple industry-specific keywords, showcasing proven execution.",
    },
    {
      icon: <Smartphone />,
      title: "Social Media & Paid Ads",
      description:
        "Multi-channel campaigns on LinkedIn, Facebook, and Instagram target segmented audiences. We pair retargeting with educational content to drive qualified leads, building awareness and trust through strategic content pipelines.",
    },
    {
      icon: <Lock />,
      title: "Tech Provider Partnerships",
      description:
        "We collaborate with platforms like Shopify, HubSpot, and WordPress to co-market solutions. Our certifications and joint content build credibility, while our network drives referrals from trusted vendors.",
    },
  ];

  return (
    <section
      id="go-to-market"
      ref={ref}
      className="w-full py-12 md:py-20 px-4 md:px-12 bg-gradient-to-br from-gray-50 to-gray-100 scroll-smooth"
    >
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 px-4 mt-6">
        <h2 className="text-2xl md:text-4xl font-extrabold text-blue-600 flex flex-col md:flex-row justify-center items-center gap-3">
          <span className="inline-flex items-center">
            <PieChart className="hidden md:block mr-2" size={28} />
            Go-To-Market Strategy
          </span>
        </h2>
        <div className="w-24 h-1 bg-blue-600 mx-auto mt-3 rounded-full"></div>
        <p className="mt-4 md:mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
          Skunkworks Digital's approach is focused, measurable, and designed to
          grow your brand across digital channels. Here's how we go to market.
        </p>
      </div>

      {/* Strategy Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-6xl mx-auto px-4">
        <div>
          <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-6 md:mb-8 border-b-4 border-blue-200 pb-2">
            Target Market
          </h3>
          <p className="mb-6 md:mb-8 text-gray-700 text-sm md:text-base">
            We focus on specific client segments where our team's experience
            creates significant business impact:
          </p>
          {targetMarkets.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <StrategyItem {...item} />
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-lg md:text-xl font-semibold text-blue-600 mb-6 md:mb-8 border-b-4 border-blue-200 pb-2">
            Key Channels & Approach
          </h3>
          <p className="mb-6 md:mb-8 text-gray-700 text-sm md:text-base">
            We meet prospects where they already engage with us. Each channel
            below is optimized for visibility, lead quality, and conversion:
          </p>
          {channels.map((item, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                inView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <StrategyItem {...item} />
            </div>
          ))}
        </div>
      </div>

      {/* Highlight */}
      <div className="text-center mt-12 md:mt-20 max-w-3xl mx-auto px-4">
        <AnimatedNumber target={68} />
        <p className="mt-3 text-gray-700 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
          Of new clients come from referrals and strategic partnerships — proof
          of the trust and value we bring through long-term relationships.
        </p>
      </div>

      {/* CTA */}
      <div className="mt-12 md:mt-20 text-center max-w-3xl mx-auto px-4">
        <h3 className="text-xl md:text-3xl font-bold mb-4 md:mb-5 text-blue-600">
          Ready to Elevate Your Digital Strategy?
        </h3>
        <p className="mb-6 md:mb-8 text-gray-700 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
          Let's talk about how Skunkworks Digital can help you dominate your
          market. Reach out today — we'd love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-5">
          <a
            href="mailto:info@skunkworksdigital.co.za "
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2 md:px-7 md:py-3 rounded-lg shadow-md hover:shadow-xl hover:bg-blue-700 transition duration-300 text-sm md:text-base"
          >
            <Mail size={16} /> Email Us
          </a>
          <a
            href="https://wa.me/+27833807950?text=Hi%20Skunkworks%20Digital%2C%20I'm%20interested%20in%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2 md:px-7 md:py-3 rounded-lg shadow-md hover:shadow-xl hover:bg-green-700 transition duration-300 text-sm md:text-base"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
          <a
            href="tel:+27833807950"
            className="inline-flex items-center gap-2 bg-gray-800 text-white px-5 py-2 md:px-7 md:py-3 rounded-lg shadow-md hover:shadow-xl hover:bg-gray-900 transition duration-300 text-sm md:text-base"
          >
            <Phone size={16} /> Call Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default GoToMarket;
