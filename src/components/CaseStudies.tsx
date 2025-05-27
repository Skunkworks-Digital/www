import React from 'react';
import { useInView } from 'react-intersection-observer';
import { FileText } from 'lucide-react';

interface CaseStudyCardProps {
  color: string;
  title: string;
  description: string;
  stats: {
    value: string;
    label: string;
  }[];
  delay: number;
  inView: boolean;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ 
  color, 
  title, 
  description, 
  stats,
  delay,
  inView
}) => {
  return (
    <div 
      className={`bg-[color:var(--ui-primary)] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 h-full transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className={`h-48 ${color}`}></div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{title}</h3>
        <p className="text-[color:var(--text-secondary)] mb-6">{description}</p>
        
        <div className="flex justify-between mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-sm text-[color:var(--text-secondary)]">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <button className="btn btn-tertiary w-full">
          Read Full Case Study
        </button>
      </div>
    </div>
  );
};

const CaseStudies: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const caseStudies = [
    {
      color: "bg-blue-600",
      title: "E-commerce Transformation for Fashion Retailer",
      description: "We helped a struggling fashion retailer transition from a brick-and-mortar focus to a thriving online business model.",
      stats: [
        { value: "312%", label: "Revenue Growth" },
        { value: "4.2x", label: "Conversion Rate" }
      ]
    },
    {
      color: "bg-green-500",
      title: "CRM Implementation for Professional Services Firm",
      description: "We designed and implemented a custom CRM solution for a growing accounting firm, streamlining their client management.",
      stats: [
        { value: "40%", label: "Time Saved" },
        { value: "28%", label: "Revenue Increase" }
      ]
    },
    {
      color: "bg-purple-600",
      title: "SEO & Content Marketing for SaaS Startup",
      description: "We developed a comprehensive SEO and content strategy for a SaaS startup, helping them establish thought leadership.",
      stats: [
        { value: "186%", label: "Organic Traffic" },
        { value: "43%", label: "Lead Generation" }
      ]
    }
  ];

  return (
    <section id="case-studies" ref={ref} className="py-16 bg-[color:var(--bg-primary)]">
      <div className="container-custom">
        <div className="tile">
          <h2 className="flex items-center">
            <FileText className="section-icon" size={24} />
            Client Success Stories
          </h2>
          
          <p className="section-description">
            Discover how we've helped businesses across various industries achieve remarkable results through strategic digital solutions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                color={study.color}
                title={study.title}
                description={study.description}
                stats={study.stats}
                delay={index * 200}
                inView={inView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;