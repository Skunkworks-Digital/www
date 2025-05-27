import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Search, 
  Palette, 
  Code, 
  Rocket, 
  TrendingUp 
} from 'lucide-react';

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  features: string[];
  isEven: boolean;
  inView: boolean;
  delay: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ 
  number, 
  title, 
  description, 
  features, 
  isEven, 
  inView,
  delay
}) => {
  return (
    <div className={`relative z-10 mb-20 last:mb-0 transition-all duration-700 transform ${
      inView 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-20'
    }`} style={{ transitionDelay: `${delay}ms` }}>
      <div className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>
        <div className="w-full md:w-1/2 p-6">
          <div className="bg-[color:var(--ui-primary)] p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-3 mt-0">{title}</h3>
            <p className="text-[color:var(--text-secondary)] mb-4">{description}</p>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full font-bold text-xl md:mx-6 my-4 md:my-0 z-20 transition-transform duration-300 hover:scale-110">
          {number}
        </div>
      </div>
    </div>
  );
};

const Process: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const steps = [
    {
      icon: <Search />,
      title: "Discovery & Strategy",
      description: "We begin by understanding your business goals, target audience, and competitive landscape. Through collaborative workshops and in-depth research, we develop a comprehensive digital strategy.",
      features: [
        "Business requirements gathering",
        "User persona development",
        "Competitive analysis",
        "Strategic roadmap creation"
      ]
    },
    {
      icon: <Palette />,
      title: "Design & Planning",
      description: "Our experienced design team creates user-centered interfaces that balance aesthetic appeal with conversion-focused functionality. We develop detailed project plans with clear milestones.",
      features: [
        "UX/UI design and wireframing",
        "Content strategy",
        "Technical architecture planning",
        "Project timeline development"
      ]
    },
    {
      icon: <Code />,
      title: "Development & Implementation",
      description: "Our development team builds your solution using industry best practices and cutting-edge technologies. We maintain regular communication throughout this phase.",
      features: [
        "Agile development methodology",
        "Regular progress updates",
        "Quality assurance testing",
        "Performance optimization"
      ]
    },
    {
      icon: <Rocket />,
      title: "Launch & Training",
      description: "We ensure a smooth deployment of your solution and provide comprehensive training to your team. Our launch process includes final quality checks and performance testing.",
      features: [
        "Deployment checklist verification",
        "Hands-on system training",
        "Documentation and resources",
        "Launch announcement support"
      ]
    },
    {
      icon: <TrendingUp />,
      title: "Ongoing Support & Optimization",
      description: "Our relationship continues after launch with ongoing support, monitoring, and continuous improvement. We analyze performance data and user feedback to identify enhancement opportunities.",
      features: [
        "Regular performance reviews",
        "Data-driven optimization",
        "Security and feature updates",
        "Strategic growth planning"
      ]
    }
  ];

  return (
    <section id="process" ref={ref} className="py-16 bg-[color:var(--bg-primary)]">
      <div className="container-custom">
        <div className="tile">
          <h2 className="flex items-center">
            <TrendingUp className="section-icon" size={24} />
            Our Proven Process
          </h2>
          
          <p className="section-description">
            We follow a structured, collaborative approach to ensure every project delivers maximum value and meets your specific business objectives. Our process is designed to be transparent, efficient, and focused on measurable results.
          </p>
          
          <div className="relative mt-16">
            {/* Process Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-[color:var(--ui-border)] transform -translate-x-1/2 hidden md:block"></div>
            
            {steps.map((step, index) => (
              <ProcessStep
                key={index}
                number={index + 1}
                title={step.title}
                description={step.description}
                features={step.features}
                isEven={index % 2 === 1}
                inView={inView}
                delay={index * 200}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;