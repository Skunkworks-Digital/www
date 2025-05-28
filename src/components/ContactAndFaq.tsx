import React from "react";
import { HelpCircle, Mail } from "lucide-react";
import Contact from "./Contact";
import Faq from "./Faq";

interface SectionProps {
  id?: string;
}

const ContactAndFaq: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-20 bg-[color:var(--bg-primary)]">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-blue-600 mb-3">
            Questions & Contact
          </h2>
          <div className="w-16 h-1.5 bg-blue-600 mx-auto mb-4 rounded-full" />
          <p className="text-lg text-[color:var(--text-secondary)] max-w-xl mx-auto">
            Need assistance? Browse our frequently asked questions or reach out
            to us directly.
          </p>
        </div>

        {/* FAQ and Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* FAQ Card */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="text-blue-600" size={28} />
              <h3 className="text-2xl font-semibold text-gray-800 m-0">
                Frequently Asked Questions
              </h3>
            </div>
            <Faq />
          </div>

          {/* Contact Card */}
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <Mail className="text-blue-600" size={28} />
              <h3 className="text-2xl font-semibold text-gray-800 m-0">
                Get in Touch
              </h3>
            </div>
            <Contact />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAndFaq;
