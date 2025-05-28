import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";

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
  inView,
}) => {
  return (
    <div
      className={`border border-[color:var(--ui-border)] rounded-lg mb-4 overflow-hidden transition-all duration-500 transform ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <button
        className="w-full flex justify-between items-center p-4 text-left bg-[color:var(--ui-primary)] hover:bg-blue-50/10 transition-colors"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-lg text-blue-600">{title}</span>
        <ChevronDown
          className={`transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? "500px" : "0",
          opacity: isOpen ? 1 : 0,
          padding: isOpen ? "1rem 1.5rem" : "0 1.5rem",
        }}
      >
        <p className="text-gray-500">{content}</p>
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
      content:
        "We work with startups, small businesses, and large enterprises alike. No matter your size or industry, we deliver fast, high-quality solutions tailored to your goals.",
    },
    {
      title: "How long does a project take?",
      content:
        "We move fast. Most projects take 4–6 weeks, and more complex systems up to a few months. You’ll get a clear timeline upfront, and we always stick to it.",
    },
    {
      title: "How do you price your services?",
      content:
        "We offer flexible pricing—fixed, retainer, or performance-based. Our proposals are clear, fair, and aligned with your business goals.",
    },
    {
      title: "Do you support projects after launch?",
      content:
        "Absolutely. We offer ongoing support, optimization, updates, and strategic guidance to keep everything running smoothly long after launch.",
    },
    {
      title: "Which platforms and tech do you use?",
      content:
        "We’re tech-agnostic. From React to PHP, Shopify to HubSpot—whatever suits your project best, we work with it. Our stack adapts to you, not the other way around.",
    },
    {
      title: "Is my data safe with you?",
      content:
        "Yes. We follow strict security practices and can implement custom protocols if needed. Your privacy and protection are non-negotiable.",
    },
    {
      title: "How do you handle design changes?",
      content:
        "You get 2–3 rounds of revisions included. We stay collaborative throughout, so the end result looks and works exactly how you want.",
    },
    {
      title: "Can you help with content?",
      content:
        "Yes. Our team creates SEO-ready copy, product content, and more. If needed, we bring in expert writers and media pros too.",
    },
    {
      title: "How do you measure success?",
      content:
        "With clear KPIs from the start—like conversions, speed, or sales. We track progress and give you regular updates and insights.",
    },
    {
      title: "How are you different from other agencies?",
      content:
        "We’re fast, strategic, and results-driven. We don’t just deliver what you ask—we help you build what your business really needs.",
    },
    {
      title: "Do you partner with other companies?",
      content:
        "Yes! We collaborate with agencies, platforms, and service providers. Whether it's joint delivery or referrals, we’re open to strategic partnerships.",
    },
  ];

  return (
    <div ref={ref} className="mt-8">
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
  );
};

export default Faq;
