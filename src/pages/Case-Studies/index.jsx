import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import HeroSection from '../../components/HeroSection';
import { Grid, Column, Tile } from '@carbon/react';

export default function CaseStudiesPage() {
  const studies = [
    {
      title: 'eCommerce Turnaround',
      description:
        'Increased an online retailer’s conversion rate by 42% through UX improvements and performance optimization.',
    },
    {
      title: 'Cloud Migration for NGO',
      description:
        'Migrated a nonprofit’s legacy system to the cloud, improving security and reducing costs by 30%.',
    },
    {
      title: 'Custom CRM for Insurance',
      description:
        'Built a custom CRM that streamlined lead tracking and automated reporting for a regional insurer.',
    },
    {
      title: 'AI-Driven Lead Scoring',
      description:
        'Implemented an AI model that scored leads and improved close rates by 19%.',
    },
  ];

  return (
    <Layout>
      <Helmet>
        <title>Case Studies | Skunkworks Digital</title>
        <meta
          name="description"
          content="Explore real-world client success stories driven by Skunkworks' digital solutions."
        />
        <meta property="og:title" content="Case Studies - Skunkworks Digital" />
        <meta
          property="og:description"
          content="Discover how we’ve helped our clients across industries with digital strategy, AI, cloud, and integration services."
        />
      </Helmet>

      <HeroSection
        title="Case Studies"
        subtitle="See how we’ve helped clients across industries achieve real-world results with our digital expertise."
      />

      <section className="my-10 px-6">
        <h2 className="text-2xl font-bold mb-6">Real Impact, Real Results</h2>
        <Grid className="gap-y-6">
          {studies.map((item, idx) => (
            <Column key={idx} sm={4} md={4} lg={4}>
              <Tile className="h-full p-6 hover:shadow-md transition-shadow">
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700">{item.description}</p>
              </Tile>
            </Column>
          ))}
        </Grid>
      </section>
    </Layout>
  );
}
