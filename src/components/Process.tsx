import React from "react";
import { useInView } from "react-intersection-observer";
import {
  Search,
  Palette,
  Code,
  Rocket,
  TrendingUp,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

interface ProcessStepProps {
  number: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  isEven: boolean;
  inView: boolean;
  delay: number;
}

const ProcessStep: React.FC<ProcessStepProps> = ({
  number,
  icon,
  title,
  description,
  features,
  isEven,
  inView,
  delay,
}) => {
  return (
    <div
      className={`relative z-10 mb-16 last:mb-0 transform transition-all duration-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className={`flex flex-col-reverse ${
          isEven ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-6 md:gap-10`}
      >
        {/* Text Content */}
        <div className="w-full md:w-1/2 px-4">
          <div className="border border-blue-600 bg-[color:var(--ui-primary)] p-6 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 hover:-translate-y-1">
            <div className="flex justify-center mb-4 text-blue-600">{icon}</div>
            <h3 className="text-2xl font-bold mb-3 text-blue-600">{title}</h3>
            <p className="text-[color:var(--text-secondary)] mb-4">
              {description}
            </p>
            <ul className="space-y-2 text-sm text-[color:var(--text-secondary)]">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Step Number */}
        <div className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full font-semibold text-lg shadow-md">
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
      icon: <Search size={32} />,
      title: "Discovery & Strategy",
      description:
        "We begin by understanding your business goals and audience. Workshops and research help shape a focused strategy.",
      features: [
        "Business requirements",
        "User personas",
        "Competitive analysis",
        "Strategic roadmap",
      ],
    },
    {
      icon: <Palette size={32} />,
      title: "Design & Planning",
      description:
        "We design intuitive, aesthetic interfaces and craft a detailed project plan with clear milestones.",
      features: [
        "UX/UI wireframing",
        "Content strategy",
        "Architecture planning",
        "Timeline development",
      ],
    },
    {
      icon: <Code size={32} />,
      title: "Development & Implementation",
      description:
        "Our engineers code with best practices and cutting-edge tech. Transparency and collaboration are key.",
      features: [
        "Agile methodology",
        "Weekly updates",
        "QA testing",
        "Performance optimization",
      ],
    },
    {
      icon: <Rocket size={32} />,
      title: "Launch & Training",
      description:
        "A seamless deployment with training and final testing ensures your team is ready for takeoff.",
      features: [
        "Launch checklist",
        "Team training",
        "Documentation",
        "Marketing support",
      ],
    },
    {
      icon: <TrendingUp size={32} />,
      title: "Ongoing Support & Optimization",
      description:
        "Post-launch, we provide continuous support, monitor performance, and evolve based on real data.",
      features: [
        "Performance reviews",
        "Security updates",
        "New features",
        "Growth strategies",
      ],
    },
  ];

  return (
    <section
      id="process"
      ref={ref}
      className="w-full py-20 px-4 bg-[color:var(--bg-primary)]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-3xl md:text-4xl font-extrabold flex items-center justify-center gap-2 text-blue-600">
            {/* Icon only visible on medium screens and up */}
            <TrendingUp size={28} className="hidden md:inline-block" />
            Our Proven Process
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-[color:var(--text-secondary)] text-base md:text-lg">
            We follow a clear, collaborative process that ensures every project
            meets your goals with real results and high value.
          </p>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[color:var(--ui-border)] transform -translate-x-1/2 hidden md:block"></div>

        {steps.map((step, index) => (
          <ProcessStep
            key={index}
            number={index + 1}
            icon={step.icon}
            title={step.title}
            description={step.description}
            features={step.features}
            isEven={index % 2 === 1}
            inView={inView}
            delay={index * 150}
          />
        ))}
      </div>

      {/* Conclusion & CTA */}
      <div className="mt-24 text-center px-4">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-600">
          Let’s Bring Your Vision to Life
        </h3>
        <p className="max-w-xl mx-auto text-[color:var(--text-secondary)] text-base md:text-lg mb-6">
          At Skunkworks Digital, our process is built on strategy, creativity,
          and continuous collaboration. From idea to execution and beyond, we’re
          your partner in digital success.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
        <a
          href="mailto:  info@skunkworksdigital.co.za ?subject=Project Inquiry&body=Hi Skunkworks Digital, I'm interested in starting a project."
          className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          <Mail size={18} /> Email Us
        </a>
        <a
          href="https://wa.me/+27833807950?text=Hi%20Skunkworks%20Digital%2C%20I'm%20interested%20in%20starting%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
        >
          <MessageCircle size={18} /> WhatsApp Us
        </a>
        <a
          href="tel:++27833807950"
          className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
        >
          <Phone size={18} /> Call Us
        </a>
      </div>
    </section>
  );
};

export default Process;
