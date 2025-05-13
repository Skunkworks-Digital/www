import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import HeroSection from '../../components/HeroSection';
import { Accordion, AccordionItem, Grid, Column } from '@carbon/react';

export default function FAQPage() {
  return (
    <Layout>
      <Helmet>
        <title>FAQs | Skunkworks Digital</title>
        <meta
          name="description"
          content="Get answers to frequently asked questions about our digital services, technologies, pricing, and support options."
        />
        <meta property="og:title" content="Frequently Asked Questions" />
        <meta property="og:description" content="Learn more about Skunkworks Digital's capabilities and customer support." />
      </Helmet>

      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services, pricing, support, and more."
      />

      <section className="px-6 py-10">
        <Grid>
          <Column lg={8} md={6} sm={4}>
            <Accordion align="start">
              <AccordionItem title="What industries do you specialize in?">
                We serve a wide range of industries including retail, education, healthcare, finance, logistics, and NGOs.
              </AccordionItem>

              <AccordionItem title="Do you offer hosting services?">
                Yes. We provide managed cloud hosting and infrastructure support to ensure secure, scalable digital operations.
              </AccordionItem>

              <AccordionItem title="How do I get a quote for a project?">
                You can reach out via our contact page or email <a href="mailto:support@skunkworks.digital">support@skunkworks.digital</a> with your requirements and we’ll send a proposal.
              </AccordionItem>

              <AccordionItem title="What technologies do you use?">
                We use React, Node.js, Vite, IBM Cloud, Azure, WordPress, MySQL, MongoDB, and RESTful APIs depending on project needs.
              </AccordionItem>

              <AccordionItem title="Do you provide training or documentation?">
                Yes, we offer onboarding, LMS integrations, technical training, and full documentation for every major delivery.
              </AccordionItem>
            </Accordion>
          </Column>
        </Grid>
      </section>
    </Layout>
  );
}
