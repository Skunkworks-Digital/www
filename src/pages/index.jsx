import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import StatsGrid from '../components/StatsGrid';
import ContactForm from '../components/ContactForm';
import { Grid, Column, Tile } from '@carbon/react';

export default function HomePage() {
  return (
    <Layout>
      <HeroSection
        title="Skunkworks Digital"
        subtitle="Transforming businesses through digital innovation and cloud-native technology."
      />

      <StatsGrid />

      <section className="my-12">
        <h2 className="text-2xl font-bold mb-4">Our Core Services</h2>
        <Grid className="gap-4">
          <Tile className="p-4">
            <h3 className="text-lg font-semibold">Web Development</h3>
            <p>Modern, scalable, and responsive websites powered by IBM Carbon and Vite.</p>
          </Tile>
          <Tile className="p-4">
            <h3 className="text-lg font-semibold">Cloud Hosting</h3>
            <p>Secure and scalable hosting infrastructure for applications and content delivery.</p>
          </Tile>
          <Tile className="p-4">
            <h3 className="text-lg font-semibold">Digital Marketing</h3>
            <p>Performance-driven campaigns with measurable growth across SEO, Meta, and Google Ads.</p>
          </Tile>
          <Tile className="p-4">
            <h3 className="text-lg font-semibold">Consulting & Integration</h3>
            <p>Enterprise-grade systems integration, API orchestration, and IBM consulting.</p>
          </Tile>
        </Grid>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold mb-4">Contact Our Team</h2>
        <p className="mb-4">Let us know how we can help you build, scale, or optimize your digital presence:</p>
        <ContactForm />
      </section>
    </Layout>
  );
}