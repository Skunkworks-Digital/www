import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import HeroSection from '../../components/HeroSection';
import StatsGrid from '../../components/StatsGrid';

export default function AboutPage() {
  return (
    <Layout>
      <Helmet>
        <title>About Us | Skunkworks Digital</title>
        <meta
          name="description"
          content="Learn how Skunkworks empowers businesses through innovative tech solutions, training, and cloud services."
        />
        <meta property="og:title" content="About Skunkworks" />
        <meta property="og:description" content="Digital innovation for businesses in Africa and beyond." />
        <meta property="og:image" content="https://www.skunkworks.africa/images/about-banner.jpg" />
        <meta property="og:url" content="https://www.skunkworks.africa/about" />
      </Helmet>

      <HeroSection
        title="Transforming Businesses Through Digital Innovation"
        subtitle="Empowering businesses of all sizes to establish, expand, and optimize their digital presence in today's competitive marketplace"
      />

      <StatsGrid />
    </Layout>
  );
}
