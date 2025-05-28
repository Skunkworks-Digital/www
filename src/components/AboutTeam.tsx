/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import { useInView } from "react-intersection-observer";
import {
  CircleDot,
  Users,
  Linkedin,
  Twitter,
  Mail,
  Github,
  Terminal,
  Rocket,
  HeartHandshake,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";

interface SectionProps {
  id?: string;
}

const TeamMember = ({
  name,
  position,
  bio,
  social,
  image,
  delay,
}: {
  name: string;
  position: string;
  bio: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    email?: string;
  };
  image: string;
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: delay / 1000 }}
    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 w-full"
  >
    <div className="relative h-64 w-full overflow-hidden">
      <img src={image} alt={name} className="object-cover w-full h-full" />
      <div className="absolute inset-0 bg-black/30" />
    </div>

    <div className="p-6 text-center">
      <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
        {name}
      </h3>
      <p className="text-lg text-gray-500 dark:text-gray-300 mb-3">
        {position}
      </p>
      <p className="text-gray-600 dark:text-gray-300 text-lg mb-5">{bio}</p>
      <div className="flex justify-center space-x-5">
        {social.linkedin && (
          <a
            href={social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-blue-600"
          >
            <Linkedin size={20} />
          </a>
        )}
        {social.twitter && (
          <a
            href={social.twitter}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-cyan-500"
          >
            <Twitter size={20} />
          </a>
        )}
        {social.github && (
          <a
            href={social.github}
            target="_blank"
            rel="noreferrer"
            className="text-gray-500 hover:text-gray-800 dark:hover:text-white"
          >
            <Github size={20} />
          </a>
        )}
        {social.email && (
          <a
            href={`mailto:${social.email}`}
            className="text-gray-500 hover:text-blue-400"
          >
            <Mail size={20} />
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const AboutTeam: React.FC = () => {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: teamRef, inView: teamInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const teamMembers = [
    {
      name: "Raydo",
      position: "CEO & Vision Caster",
      bio: "Dreamer, doer, and digital alchemist. Raydo turns wild ideas into reality while keeping the team caffeinated and inspired.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "raydo@skunkworks.digital",
      },
      image: "https://placehold.co/400x400?text=Raydo",
    },
    {
      name: "Emmanuel",
      position: "Growth Hacker",
      bio: "Data whisperer and marketing maverick. Emmanuel finds the signal in the noise and turns clicks into customers.",
      social: {
        linkedin: "#",
        twitter: "#",
        email: "emmanuel@skunkworks.digital",
      },
      image: "https://placehold.co/400x400?text=Emmanuel",
    },
    {
      name: "Selaelo",
      position: "Code Wizard",
      bio: "Frontend sorcerer who makes pixels dance. Selaelo builds interfaces so smooth they feel like magic.",
      social: {
        linkedin: "#",
        github: "#",
        email: "selaelo@skunkworks.digital",
      },
      image: "https://placehold.co/400x400?text=Selaelo",
    },
    {
      name: "Loyiso",
      position: "Backend Ninja",
      bio: "Silent but deadly. Loyiso builds the infrastructure that keeps everything running fast and secure.",
      social: {
        linkedin: "#",
        github: "#",
        email: "loyiso@skunkworks.digital",
      },
      image: "https://placehold.co/400x400?text=Loyiso",
    },
    {
      name: "Tebogo",
      position: "Digital Padawan",
      bio: "Eager learner and professional googler. Tebogo absorbs knowledge like a sponge and isn't afraid to ask 'why?'",
      social: {
        email: "tebogo@skunkworks.digital",
      },
      image: "https://placehold.co/400x400?text=Tebogo",
    },
  ];

  const values = [
    {
      icon: <Rocket className="text-blue-500" size={28} />,
      title: "Bold Innovation",
      description:
        "We embrace the unconventional and aren't afraid to break things (then fix them better).",
    },
    {
      icon: <HeartHandshake className="text-blue-500" size={28} />,
      title: "Radical Collaboration",
      description:
        "Great ideas can come from anywhere — we listen more than we talk.",
    },
    {
      icon: <Lightbulb className="text-blue-500" size={28} />,
      title: "Continuous Learning",
      description:
        "We're always students — the tech landscape changes daily and so do we.",
    },
    {
      icon: <Terminal className="text-blue-500" size={28} />,
      title: "Build > Talk",
      description:
        "We'd rather ship something imperfect than debate perfection forever.",
    },
  ];

  return (
    <div className="bg-[color:var(--bg-primary)]">
      {/* About Section */}
      <section
        id="about"
        ref={aboutRef}
        className="py-20 px-6 max-w-7xl mx-auto"
      >
        <div
          className={`text-center mb-12 ${
            aboutInView ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <CircleDot className="text-blue-500 mx-auto mb-4" size={36} />
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 mb-6">
            The Skunkworks Story
          </h2>
        </div>

        <div
          className={`space-y-8 text-xl max-w-5xl mx-auto ${
            aboutInView ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <p className="text-gray-700 dark:text-gray-300 text-center">
            Born in a garage in 2020, Skunkworks Digital started as a rebellion
            against boring digital agencies. We're a collective of young, hungry
            creatives and technologists who believe the digital world should be
            more human, more fun, and more accessible.
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-center">
            We specialize in helping forward-thinking businesses cut through the
            noise with digital experiences that don't just work—they delight.
            From scrappy startups to established brands, we've got your back in
            this wild digital jungle.
          </p>
          <p className="font-bold text-blue-600 dark:text-blue-400 text-center text-2xl">
            Our secret? We're not just building websites and apps—we're crafting
            digital experiences that people actually want to use.
          </p>
        </div>

        {/* Values Section */}
        <div
          className={`mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${
            aboutInView ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 transition-all hover:-translate-y-2 shadow-sm hover:shadow-md text-center"
            >
              <div className="mb-5 mx-auto w-fit">{value.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" ref={teamRef} className="py-20 px-6 max-w-7xl mx-auto">
        <div
          className={`text-center mb-12 ${
            teamInView ? "animate-fadeIn" : "opacity-0"
          }`}
        >
          <Users className="text-cyan-500 mx-auto mb-4" size={36} />
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 mb-6">
            The Dream Team
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
            We're not your typical corporate drones. Meet the brilliant misfits
            who make the magic happen—each bringing unique skills, questionable
            humor, and an unhealthy obsession with digital excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              position={member.position}
              bio={member.bio}
              social={member.social}
              image={member.image}
              delay={index * 150}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutTeam;
