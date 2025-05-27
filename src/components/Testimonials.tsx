import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialProps {
  content: string;
  name: string;
  position: string;
  initials: string;
  delay: number;
  inView: boolean;
}

const Testimonial: React.FC<TestimonialProps> = ({ 
  content, 
  name, 
  position, 
  initials,
  delay,
  inView
}) => {
  return (
    <div 
      className={`bg-[color:var(--ui-primary)] p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 h-full relative transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="relative mb-6">
        <p className="italic text-[color:var(--text-secondary)] pl-6">
          "{content}"
        </p>
        <div className="absolute top-0 left-0 text-5xl text-[color:var(--ui-border)] opacity-50">
          "
        </div>
      </div>
      
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center font-bold mr-4">
          {initials}
        </div>
        <div>
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-[color:var(--text-secondary)]">{position}</div>
        </div>
      </div>
    </div>
  );
};

const MobileTestimonialSlider: React.FC<{testimonials: any[]}> = ({ testimonials }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-4">
              <Testimonial
                content={testimonial.content}
                name={testimonial.name}
                position={testimonial.position}
                initials={testimonial.initials}
                delay={0}
                inView={true}
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
      
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md"
        onClick={prevTestimonial}
        aria-label="Previous testimonial"
      >
        <ChevronLeft size={20} />
      </button>
      
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full shadow-md"
        onClick={nextTestimonial}
        aria-label="Next testimonial"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const testimonials = [
    {
      content: "Skunkworks Digital completely transformed our online presence. Their team took the time to understand our business and created a solution that not only looks great but has significantly increased our conversion rates. They continue to be a valuable partner in our digital journey.",
      name: "James Donovan",
      position: "CEO, Latitude Fashion",
      initials: "JD"
    },
    {
      content: "Working with Skunkworks Digital has been a game-changer for our business. Their CRM implementation streamlined our operations and gave us valuable insights into our customer base. The team is responsive, knowledgeable, and genuinely cares about our success.",
      name: "Maria Martinez",
      position: "Managing Partner, Rodriguez & Associates",
      initials: "MM"
    },
    {
      content: "The SEO and content marketing strategy developed by Skunkworks Digital exceeded our expectations. Within six months, we saw a significant increase in organic traffic and lead generation. Their data-driven approach and clear reporting make it easy to see the ROI on our investment.",
      name: "Alex Kim",
      position: "Founder, NexTech Solutions",
      initials: "AK"
    },
    {
      content: "I appreciate the transparency and professionalism of the Skunkworks Digital team. They set realistic expectations from the start and then consistently delivered on their promises. Our e-commerce site now runs smoothly, and our sales have increased significantly since the launch.",
      name: "Sarah Reynolds",
      position: "Operations Director, GreenLife Organics",
      initials: "SR"
    }
  ];

  return (
    <section id="testimonials" ref={ref} className="py-16 bg-[color:var(--bg-primary)]">
      <div className="container-custom">
        <div className="tile">
          <h2 className="flex items-center">
            <MessageCircle className="section-icon" size={24} />
            What Our Clients Say
          </h2>
          
          <p className="section-description">
            Don't just take our word for it. Here's what some of our clients have to say about working with Skunkworks Digital:
          </p>
          
          {/* Desktop Grid View */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                content={testimonial.content}
                name={testimonial.name}
                position={testimonial.position}
                initials={testimonial.initials}
                delay={index * 200}
                inView={inView}
              />
            ))}
          </div>
          
          {/* Mobile Slider View */}
          <div className="md:hidden">
            <MobileTestimonialSlider testimonials={testimonials} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;