import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { HelpCircle, ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  toggleAccordion: () => void;
  delay: number;
  inView: boolean;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ 
  title, 
  content, 
  isOpen, 
  toggleAccordion,
  delay,
  inView
}) => {
  return (
    <div 
      className={`border border-[color:var(--ui-border)] rounded-lg mb-4 overflow-hidden transition-all duration-500 transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <button
        className="w-full flex justify-between items-center p-4 text-left bg-[color:var(--ui-primary)] hover:bg-blue-50/10 transition-colors"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-lg">{title}</span>
        <ChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <div 
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ 
          maxHeight: isOpen ? '500px' : '0',
          opacity: isOpen ? 1 : 0,
          padding: isOpen ? '1rem 1.5rem' : '0 1.5rem',
        }}
      >
        <p className="text-[color:var(--text-secondary)]">{content}</p>
      </div>
    </div>
  );
};

const Faq: React.FC = () => {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(0);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const toggleAccordion = (index: number) => {
    setOpenItemIndex(openItemIndex === index ? null : index);
  };

  const faqItems = [
    {
      title: "What types of businesses do you work with?",
      content: "We work with businesses of all sizes across various industries, from startups and small businesses to established enterprises. Our primary focus is on SMEs & startups, e-commerce businesses, and enterprises needing CRM & automation solutions. We bring the same level of dedication and expertise to every project, regardless of its size or complexity."
    },
    {
      title: "How long does a typical project take to complete?",
      content: "Project timelines vary depending on scope, complexity, and specific requirements. A basic website might take 4-6 weeks, while a comprehensive e-commerce platform or CRM implementation could take 2-4 months. During our initial consultation, we'll provide a detailed timeline based on your specific needs and work with you to establish realistic milestones and deadlines."
    },
    {
      title: "What is your pricing structure?",
      content: "We offer flexible pricing options including project-based quotes, monthly retainers, and growth-based partnerships. Our pricing is transparent, with no hidden fees or surprise costs. We'll work with you to find a pricing structure that suits your budget and business needs. During our initial consultation, we'll discuss your requirements in detail and provide a customized quote based on the scope of work."
    },
    {
      title: "Do you provide ongoing support after project completion?",
      content: "Yes, we offer various support and maintenance packages to ensure your digital assets continue to perform optimally. These include technical support, content updates, security monitoring, performance optimization, and strategic guidance. We believe in building long-term relationships with our clients and providing continuous value beyond the initial project implementation."
    },
    {
      title: "What platforms and technologies do you work with?",
      content: "We are platform-agnostic and work with a wide range of technologies based on what best suits your specific needs. For e-commerce, we work with platforms like Shopify, WooCommerce, and Magento. For websites, we use WordPress, Webflow, and custom solutions. For CRM and automation, we implement HubSpot, Salesforce, and custom-built systems. Our focus is on selecting the right technology for your business rather than forcing a one-size-fits-all approach."
    }
  ];

  return (
    <section id="faq" ref={ref} className="py-16 bg-[color:var(--bg-primary)]">
      <div className="container-custom">
        <div className="tile">
          <h2 className="flex items-center">
            <HelpCircle className="section-icon" size={24} />
            Frequently Asked Questions
          </h2>
          
          <p className="section-description">
            Have questions about working with Skunkworks Digital? Find answers to common inquiries below.
          </p>
          
          <div className="mt-8">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.title}
                content={item.content}
                isOpen={openItemIndex === index}
                toggleAccordion={() => toggleAccordion(index)}
                delay={index * 100}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;