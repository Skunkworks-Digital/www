import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import {
  FileText,
  ChevronRight,
  ArrowUpRight,
  X,
  LineChart,
  Clock,
  Zap,
  DollarSign,
  UserCheck,
} from "lucide-react";

interface CaseStudyCardProps {
  color: string;
  title: string;
  description: string;
  fullStory: string;
  stats: {
    value: string;
    label: string;
  }[];
  delay: number;
  inView: boolean;
  onLearnMore: () => void;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  color,
  title,
  description,
  stats,
  delay,
  inView,
  onLearnMore,
}) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 h-full transform border border-gray-200 dark:border-gray-700 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={
        {
          transitionDelay: `${delay}ms`,
          "--card-accent": color,
        } as React.CSSProperties
      }
    >
      <div className={`h-3 ${color}`}></div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>

        <div className="grid grid-cols-2 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg"
            >
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onLearnMore}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
        >
          Read Full Case Study <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

interface FullCaseStudyModalProps {
  study: {
    title: string;
    description: string;
    fullStory: string;
    stats: {
      value: string;
      label: string;
      icon?: React.ReactNode;
    }[];
    color: string;
    location: string;
    industry: string;
  };
  onClose: () => void;
}

const StatIcon = ({ icon }: { icon?: string }) => {
  switch (icon) {
    case "growth":
      return <LineChart size={18} className="text-blue-500" />;
    case "time":
      return <Clock size={18} className="text-green-500" />;
    case "efficiency":
      return <Zap size={18} className="text-yellow-500" />;
    case "revenue":
      return <DollarSign size={18} className="text-purple-500" />;
    case "satisfaction":
      return <UserCheck size={18} className="text-pink-500" />;
    default:
      return <LineChart size={18} className="text-blue-500" />;
  }
};

const FullCaseStudyModal: React.FC<FullCaseStudyModalProps> = ({
  study,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 p-1"
          aria-label="Close modal"
        >
          <X size={24} />
        </button>

        <div className={`h-2 ${study.color}`}></div>

        <div className="p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {study.title}
              </h2>
              <div className="flex gap-4 mt-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {study.industry}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  •
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {study.location}
                </span>
              </div>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium">
              Case Study
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Overview
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {study.description}
              </p>

              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                Our Approach
              </h3>
              <p className="text-gray-600 dark:text-gray-300 whitespace-pre-line">
                {study.fullStory}
              </p>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <FileText size={20} /> Key Results
                </h3>
                <div className="space-y-4">
                  {study.stats.map((stat, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="mt-1">
                        <StatIcon icon={stat.icon} />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                          {stat.value}
                        </div>
                        <div className="text-gray-600 dark:text-gray-300">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Client Details
                </h3>
                <div className="space-y-2 text-gray-600 dark:text-gray-300">
                  <div>
                    <strong>Industry:</strong> {study.industry}
                  </div>
                  <div>
                    <strong>Location:</strong> {study.location}
                  </div>
                  <div>
                    <strong>Challenge:</strong>{" "}
                    {study.description.split(".")[0]}.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2"
            >
              Close Case Study <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const CaseStudiesPage: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const [selectedStudy, setSelectedStudy] = useState<number | null>(null);

  const caseStudies = [
    {
      color: "bg-blue-600",
      title: "JAMTax Accounting: Digital Transformation",
      description:
        "Helped a Johannesburg-based accounting firm automate 85% of their compliance processes.",
      fullStory: `JAMTax Accounting, a mid-sized firm in Johannesburg, was struggling with manual tax compliance processes that consumed 60% of their staff time. Their outdated systems couldn't keep up with SARS regulatory changes, leading to compliance risks and client dissatisfaction.

Our 6-month engagement delivered:
- Custom tax automation platform integrated with SARS eFiling
- AI-powered document processing for client submissions
- Real-time compliance dashboard with alerts
- Staff training on digital workflows
- Client portal for document sharing

The results transformed their business:
- Reduced compliance processing time from 12 hours to 90 minutes per client
- Increased capacity to handle 3x more clients without additional staff
- Achieved 100% SARS compliance for all submissions
- Improved client retention by 45% through faster turnaround
- Enabled expansion to Botswana and Namibia markets

"Before this transformation, we were constantly firefighting compliance issues. Now we're ahead of deadlines and can focus on strategic advisory services," said James M., Managing Partner at JAMTax.`,
      stats: [
        { value: "85%", label: "Process Automation", icon: "efficiency" },
        { value: "3x", label: "Client Capacity", icon: "growth" },
        { value: "100%", label: "SARS Compliance", icon: "satisfaction" },
        { value: "45%", label: "Retention Increase", icon: "revenue" },
      ],
      location: "Johannesburg, South Africa",
      industry: "Professional Services",
    },
    {
      color: "bg-green-500",
      title: "Cape Town Tourism: Digital Marketing Overhaul",
      description:
        "Revamped digital presence for Western Cape tourism board, increasing international bookings by 220%.",
      fullStory: `Cape Town Tourism faced declining international visitor numbers despite South Africa's post-pandemic reopening. Their digital marketing was fragmented across 5 different agencies with no unified strategy.

We implemented:
- Consolidated digital marketing strategy
- Geo-targeted campaign for key markets (UK, Germany, USA)
- Influencer partnership program
- Virtual tour experience platform
- Data-driven booking conversion optimization

Key outcomes:
- 220% increase in international bookings
- 40% reduction in customer acquisition cost
- 15,000+ user-generated content pieces
- 300% growth in social media engagement
- Won 2023 African Tourism Innovation Award

The campaign successfully repositioned Cape Town as a must-visit destination, with particular success in the German market where bookings increased by 310%.`,
      stats: [
        { value: "220%", label: "Booking Increase", icon: "revenue" },
        { value: "310%", label: "Germany Market Growth", icon: "growth" },
        { value: "40%", label: "Lower CAC", icon: "efficiency" },
        { value: "15k", label: "UGC Pieces", icon: "satisfaction" },
      ],
      location: "Western Cape, South Africa",
      industry: "Tourism & Hospitality",
    },
    {
      color: "bg-purple-600",
      title: "Durban Logistics: Supply Chain Optimization",
      description:
        "Implemented AI-powered routing system reducing delivery times by 35% during KZN floods recovery.",
      fullStory: `During the 2022 KZN floods, Durban Logistics faced unprecedented supply chain disruptions. With major routes damaged and port operations limited, their delivery times ballooned to 5+ days for critical shipments.

Our emergency response included:
- AI-powered dynamic routing system
- Alternative supplier network mapping
- Mobile command center setup
- Driver communication platform
- Fuel efficiency monitoring

The solution delivered despite challenging conditions:
- 35% reduction in average delivery time
- 28% decrease in fuel costs
- 100% on-time delivery for medical supplies
- R12 million saved in potential penalties
- System now adopted as standard operation

"The ability to reroute trucks in real-time during road closures was game-changing for our operations," noted Nomsa D., Operations Director. The system proved particularly valuable during subsequent strike actions in 2023.`,
      stats: [
        { value: "35%", label: "Faster Deliveries", icon: "time" },
        { value: "R12m", label: "Cost Savings", icon: "revenue" },
        {
          value: "100%",
          label: "Medical Supply Reliability",
          icon: "satisfaction",
        },
        { value: "28%", label: "Fuel Reduction", icon: "efficiency" },
      ],
      location: "Durban, South Africa",
      industry: "Logistics & Transport",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div ref={ref} className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-blue-100 dark:bg-blue-900/50 mb-4">
            <FileText className="text-blue-600 dark:text-blue-400" size={24} />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            South African Success Stories
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            How we've helped businesses across South Africa overcome challenges
            and achieve remarkable growth
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              color={study.color}
              title={study.title}
              description={study.description}
              stats={study.stats}
              delay={index * 200}
              inView={inView}
              onLearnMore={() => setSelectedStudy(index)}
              fullStory={study.fullStory}
            />
          ))}
        </div>
      </div>

      {selectedStudy !== null && (
        <FullCaseStudyModal
          study={caseStudies[selectedStudy]}
          onClose={() => setSelectedStudy(null)}
        />
      )}
    </div>
  );
};

export default CaseStudiesPage;
