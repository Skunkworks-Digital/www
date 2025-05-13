// src/pages/ContactForm/index.jsx
import React from 'react';
import Layout from '../../components/Layout';
import HeroSection from '../../components/HeroSection';
import ContactFormComponent from '../../components/ContactForm';

export default function ContactFormPage() {
  return (
    <Layout>
      <HeroSection
        title="Contact Us"
        subtitle="Let’s talk about your goals, ideas, or any questions you may have."
      />
      <ContactFormComponent />
    </Layout>
  );
}
