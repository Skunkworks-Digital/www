import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  FileText, 
  CreditCard, 
  Globe, 
  Lock, 
  PieChart, 
  Smartphone
} from 'lucide-react';

interface StrategyItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const StrategyItem: React.FC<StrategyItemProps> = ({ icon, title, description }) => {
  return (
    <div className="service-item">
      <div className="icon">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-2 mt-0">{title}</h3>
        <p className="text-[color:var(--text-secondary)] mb-0">{description}</p>
      </div>
    </div>
  );
};

const GoToMarket: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const targetMarkets = [
    {
      icon: <FileText size={20} />,
      title: "SMEs & Startups",
      description: "Businesses with 10-250 employees seeking cost-effective digital solutions with rapid implementation and clear ROI. Typically have limited in-house technical expertise and need strategic guidance alongside implementation."
    },
    {
      icon: <CreditCard size={20} />,
      title: "E-commerce Businesses",
      description: "Online retailers across various product categories looking to optimize their shopping experience, increase conversion rates, and expand market reach. These businesses need solutions for inventory management, payment processing, and multichannel selling."
    },
    {
      icon: <PieChart size={20} />,
      title: "Enterprises needing CRM & Automation",
      description: "Larger organizations seeking to modernize their customer relationship management and implement business process automation to increase efficiency. These clients typically have complex workflows and need custom integrations between multiple systems."
    }
  ];

  const channels = [
    {
      icon: <Globe size={20} />,
      title: "Website & SEO Optimization",
      description: "Our own website serves as our primary showcase, optimized for organic search traffic with industry-specific landing pages. We employ localized SEO strategies targeting key business regions and specific industry verticals."
    },
    {
      icon: <Smartphone size={20} />,
      title: "Social Media & Paid Ads",
      description: "Targeted campaigns on LinkedIn, Facebook, and industry-specific platforms with custom audience segments. We implement retargeting strategies and create industry-specific content that demonstrates our expertise."
    },
    {
      icon: <Lock size={20} />,
      title: "Partnerships with Tech Providers",
      description: "Strategic alliances with platform providers like Shopify, HubSpot, and WordPress agencies to enable co-marketing and referral opportunities. We participate in partner certification programs and joint webinars."
    }
  ];

  return (
    <section id="go-to-market" ref={ref} className="py-16 bg-[color:var(--bg-primary)]">
      <div className="container-custom">
        <div className="tile">
          <h2 className="flex items-center">
            <PieChart className="section-icon" size={24} />
            Go-To-Market Strategy
          </h2>
          
          <p className="section-description">
            Our comprehensive go-to-market strategy is designed to position Skunkworks Digital as the preferred digital transformation partner for businesses looking to enhance their online presence. We've identified specific market segments and developed tailored approaches for each.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3>Target Market:</h3>
              <p>We focus on three primary market segments with distinct needs and opportunities:</p>
              
              {targetMarkets.map((item, index) => (
                <StrategyItem
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
            
            <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3>Key Channels & Approach:</h3>
              <p>Our multi-channel strategy ensures we connect with potential clients across various touchpoints:</p>
              
              {channels.map((item, index) => (
                <StrategyItem
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
          
          <div className="stat-highlight mt-12">
            <div className="stat-number">68%</div>
            <div className="stat-description">
              Of our new business comes from strategic partnerships and referrals, demonstrating the strength of our relationship-focused approach and client satisfaction.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoToMarket;