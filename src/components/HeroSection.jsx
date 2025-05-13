import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import StatsGrid from '../components/StatsGrid';
import ContactForm from '../components/ContactForm';
import { Grid, Column, Tile } from '@carbon/react';

export default function HeroSectionComponent({ title, subtitle }) {
  return (
    <Tile className="hero-tile text-center py-12 px-6 mb-8 rounded-xl">
      <h1 className="text-4xl font-bold text-blue-600">Skunkworks Digital</h1>
      <h2 className="text-lg text-gray-700">Empowering digital transformation across Africa and beyond.</h2>
    </Tile>
  );
}
