import React from "react";
import { Star } from "lucide-react";

interface SectionProps {
  id?: string;
}

const testimonials = [
  {
    name: "Zamri",
    role: "CEO, Jamtax accounting ",
    rating: 5,
    comment:
      "Skunkworks Digital transformed our online presence. Their creativity, speed, and attention to detail are unmatched. Highly recommended for serious digital growth!",
  },
  {
    name: "Ngiphiwe Kheswa",
    role: "Director, Mfumo Political Party",
    rating: 5,
    comment:
      "The team was professional, proactive, and very easy to work with. Our new platform is not only beautiful but performs incredibly well.",
  },
  {
    name: "Nicole Tennent ",
    role: "CEO, Nixon Marketing",
    rating: 4,
    comment:
      "They deliver clean code, on time, and communicate effectively. My startup now looks and feels like a world-class brand.",
  },
  {
    name: "Raydo Matthee",
    role: "CEO, Skunkworks Academy",
    rating: 5,
    comment:
      "Hands down the best digital team I've worked with. They get it, they care, and they execute fast. No fluff, just results.",
  },
];

const TestimonialsSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="w-full bg-gray-50 py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
          What Our Clients Say
        </h2>
        <p className="text-gray-600 mt-2 text-base md:text-lg max-w-xl mx-auto">
          Real stories from real partners who trusted us to build their digital
          future.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="mb-3">
              <span className="font-semibold text-gray-800 text-base">
                {testimonial.name}
              </span>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
            <div className="flex items-center mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-yellow-400 fill-yellow-400 mr-1"
                />
              ))}
              {[...Array(5 - testimonial.rating)].map((_, i) => (
                <Star key={i} size={16} className="text-gray-300 mr-1" />
              ))}
            </div>
            <p className="text-gray-600 text-sm">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
