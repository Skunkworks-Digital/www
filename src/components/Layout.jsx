import React from 'react';
import HeroSection from './HeroSection';
import StatsGrid from './StatsGrid';
import ContactForm from './ContactForm';
import NavBar from './NavBar';
import Footer from './Footer';
import { Grid, Column } from '@carbon/react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Grid className="px-6 py-8">
          <Column lg={16} md={8} sm={4}>{children}</Column>
        </Grid>
      </main>
      <Footer />
    </div>
  );
}
