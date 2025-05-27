import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Clock 
} from 'lucide-react';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
    
    // Clear error when field is modified
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: undefined
      });
    }
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    
    if (!formValues.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formValues.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) {
      errors.email = 'Email is invalid';
    }
    
    if (!formValues.company.trim()) {
      errors.company = 'Company is required';
    }
    
    if (!formValues.message.trim()) {
      errors.message = 'Message is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form
        setFormValues({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-16 bg-[color:var(--bg-primary)]">
      <div className="container-custom">
        <div className="tile">
          <h2 className="flex items-center">
            <Mail className="section-icon" size={24} />
            Let's Transform Your Digital Presence
          </h2>
          
          <p className="section-description">
            Ready to take your business to the next level? Contact us today to discuss your project and discover how Skunkworks Digital can help you achieve your digital goals.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 text-blue-600">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Office Location</h4>
                    <p className="text-[color:var(--text-secondary)]">
                      123 Innovation Drive, Suite 500<br />
                      San Francisco, CA 94103
                    </p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 text-blue-600">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-[color:var(--text-secondary)]">(415) 555-0123</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 text-blue-600">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-[color:var(--text-secondary)]">hello@skunkworksdigital.com</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="mr-4 text-blue-600">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Business Hours</h4>
                    <p className="text-[color:var(--text-secondary)]">
                      Monday-Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday-Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
              
              {submitSuccess && (
                <div className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 p-4 rounded-lg mb-6 animate-fade-in">
                  <p className="font-semibold">Thank you for your message!</p>
                  <p className="mb-0">We've received your inquiry and will get back to you shortly.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.name 
                        ? 'border-red-500 focus:border-red-500 focus:ring focus:ring-red-200' 
                        : 'border-[color:var(--ui-border)] focus:border-blue-500 focus:ring focus:ring-blue-200'
                    } bg-[color:var(--ui-primary)] text-[color:var(--text-primary)] transition-colors`}
                  />
                  {formErrors.name && (
                    <p className="mt-1 text-red-500 text-sm">{formErrors.name}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.email 
                        ? 'border-red-500 focus:border-red-500 focus:ring focus:ring-red-200' 
                        : 'border-[color:var(--ui-border)] focus:border-blue-500 focus:ring focus:ring-blue-200'
                    } bg-[color:var(--ui-primary)] text-[color:var(--text-primary)] transition-colors`}
                  />
                  {formErrors.email && (
                    <p className="mt-1 text-red-500 text-sm">{formErrors.email}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium">Phone (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[color:var(--ui-border)] focus:border-blue-500 focus:ring focus:ring-blue-200 bg-[color:var(--ui-primary)] text-[color:var(--text-primary)] transition-colors"
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block mb-2 font-medium">Company</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formValues.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.company 
                        ? 'border-red-500 focus:border-red-500 focus:ring focus:ring-red-200' 
                        : 'border-[color:var(--ui-border)] focus:border-blue-500 focus:ring focus:ring-blue-200'
                    } bg-[color:var(--ui-primary)] text-[color:var(--text-primary)] transition-colors`}
                  />
                  {formErrors.company && (
                    <p className="mt-1 text-red-500 text-sm">{formErrors.company}</p>
                  )}
                </div>
                
                <div>
                  <label htmlFor="service" className="block mb-2 font-medium">Service of Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formValues.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[color:var(--ui-border)] focus:border-blue-500 focus:ring focus:ring-blue-200 bg-[color:var(--ui-primary)] text-[color:var(--text-primary)] transition-colors"
                  >
                    <option value="">Please select...</option>
                    <option value="e-commerce">E-commerce Development</option>
                    <option value="web-development">Website Design & Development</option>
                    <option value="seo">SEO & Content Marketing</option>
                    <option value="crm">CRM & Business Automation</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="email">Email Marketing</option>
                    <option value="other">Other/Not Sure</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formValues.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      formErrors.message 
                        ? 'border-red-500 focus:border-red-500 focus:ring focus:ring-red-200' 
                        : 'border-[color:var(--ui-border)] focus:border-blue-500 focus:ring focus:ring-blue-200'
                    } bg-[color:var(--ui-primary)] text-[color:var(--text-primary)] transition-colors`}
                  ></textarea>
                  {formErrors.message && (
                    <p className="mt-1 text-red-500 text-sm">{formErrors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  className="btn btn-primary px-8 py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;