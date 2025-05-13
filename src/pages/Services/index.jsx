import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import HeroSection from '../../components/HeroSection';
import ServiceTile from '../../components/ServiceTile';
import { Grid, Column } from '@carbon/react';

export default function ServicesPage() {
  const services = [
    {
      title: 'Website & Platform Development',
      description: 'Responsive design, secure platforms, user-friendly UX/UI built with performance in mind.',
    },
    {
      title: 'eCommerce Setup',
      description: 'Customized eCommerce stores and payment gateway integration to drive online revenue.',
    },
    {
      title: 'Cloud Hosting & Management',
      description: 'Secure, scalable, and reliable managed cloud infrastructure tailored to your needs.',
    },
    {
      title: 'Systems Integration',
      description: 'API integrations, ERP connections, and digital workflow automation.',
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Services | Skunkworks Digital</title>
        <meta
          name="description"
          content="Explore Skunkworks' professional digital services — from full-stack web development to secure cloud hosting and systems integration."
        />
      </Helmet>

      <HeroSection
        title="Our Digital Services"
        subtitle="From eCommerce integrations to secure hosting and enterprise-level implementations, we deliver future-ready digital solutions."
      />

      <section className="px-6 py-10">
        <h2 className="text-2xl font-bold mb-6">What We Offer</h2>
        <Grid>
          {services.map((item, idx) => (
            <Column key={idx} sm={4} md={2} lg={4}>
              <ServiceTile title={item.title} description={item.description} />
            </Column>
          ))}
        </Grid>
      </section>
    </Layout>
  );
}
