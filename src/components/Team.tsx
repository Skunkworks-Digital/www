import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Users, 
  Linkedin, 
  Twitter, 
  Mail, 
  Github,
  Dribbble 
} from 'lucide-react';

interface TeamMemberProps {
  name: string;
  position: string;
  bio: string;
  social: {
    linkedin?: boolean;
    twitter?: boolean;
    github?: boolean;
    dribbble?: boolean;
    email?: boolean;
  };
  delay: number;
  inView: boolean;
}

const TeamMember: React.FC<TeamMemberProps> = ({ 
  name, 
  position, 
  bio, 
  social,
  delay,
  inView
}) => {
  return (
    <div 
      className={`bg-[color:var(--ui-primary)] rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="h-64 bg-gray-200 flex items-center justify-center">
        <div className="text-6xl text-gray-400">
          {name.split(' ').map(n => n[0]).join('')}
        </div>
      </div>
      
      <div className="p-6 text-center">
        <h3 className="text-xl font-semibold mb-1 mt-0">{name}</h3>
        <div className="text-[color:var(--text-secondary)] mb-4">{position}</div>
        <p className="text-[color:var(--text-secondary)] mb-6">{bio}</p>
        
        <div className="flex justify-center space-x-4">
          {social.linkedin && (
            <a href="#" className="text-[color:var(--text-secondary)] hover:text-blue-600 transition-colors">
              <Linkedin size={18} />
            </a>
          )}
          
          {social.twitter && (
            <a href="#" className="text-[color:var(--text-secondary)] hover:text-blue-400 transition-colors">
              <Twitter size={18} />
            </a>
          )}
          
          {social.github && (
            <a href="#" className="text-[color:var(--text-secondary)] hover:text-gray-900 dark:hover:text-white transition-colors">
              <Github size={18} />
            </a>
          )}
          
          {social.dribbble && (
            <a href="#" className="text-[color:var(--text-secondary)] hover:text-pink-600 transition-colors">
              <Dribbble size={18} />
            </a>
          )}
          
          {social.email && (
            <a href="#" className="text-[color:var(--text-secondary)] hover:text-green-500 transition-colors">
              <Mail size={18} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Team: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const teamMembers = [
    {
      name: "Jennifer Chen",
      position: "Founder & CEO",
      bio: "With over 15 years of experience in digital transformation, Jennifer leads Skunkworks Digital with a passion for helping businesses succeed in the digital landscape.",
      social: {
        linkedin: true,
        twitter: true,
        email: true
      }
    },
    {
      name: "Michael Rodriguez",
      position: "CTO & Lead Developer",
      bio: "Michael oversees all technical aspects of our projects, ensuring they're built with scalability, security, and performance in mind.",
      social: {
        linkedin: true,
        github: true,
        email: true
      }
    },
    {
      name: "Sophia Williams",
      position: "Creative Director",
      bio: "Sophia leads our design team, creating stunning visuals and user experiences that balance aesthetic appeal with conversion-focused functionality.",
      social: {
        linkedin: true,
        dribbble: true,
        email: true
      }
    },
    {
      name: "David Thompson",
      position: "Marketing Strategist",
      bio: "David specializes in developing data-driven marketing strategies that deliver measurable results across SEO, content marketing, and social media campaigns.",
      social: {
        linkedin: true,
        twitter: true,
        email: true
      }
    }
  ];

  return (
    <section id="team" ref={ref} className="py-16 bg-[color:var(--bg-primary)]">
      <div className="container-custom">
        <div className="tile">
          <h2 className="flex items-center">
            <Users className="section-icon" size={24} />
            Meet Our Team
          </h2>
          
          <p className="section-description">
            Our diverse team of digital experts brings together a wealth of experience and specialized knowledge to deliver exceptional results for our clients.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                position={member.position}
                bio={member.bio}
                social={member.social}
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

export default Team;