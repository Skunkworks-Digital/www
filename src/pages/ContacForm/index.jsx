import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import HeroSection from '../../components/HeroSection';
import ContactFormComponent from '../../components/ContactForm';

export default function ContactFormPage() {
  return (
    <Layout>
      <Helmet>
        <title>Contact Us | Skunkworks Digital</title>
        <meta
          name="description"
          content="Get in touch with the Skunkworks team. We’re here to answer your questions and explore digital solutions together."
        />
        <meta property="og:title" content="Contact Skunkworks" />
        <meta property="og:description" content="Reach out for digital innovation, consulting, and IT solutions." />
        <meta property="og:url" content="https://www.skunkworks.africa/contact" />
      </Helmet>

      <HeroSection
        title="Let’s Connect"
        subtitle="Have questions or ready to transform your digital journey? Reach out and let’s talk."
      />

      <section className="px-6 py-10">
        <ContactFormComponent />
      </section>
    </Layout>
  );
}
