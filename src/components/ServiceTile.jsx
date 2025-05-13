import React from 'react';
import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import StatsGrid from '../components/StatsGrid';
import ContactForm from '../components/ContactForm';
import { Grid, Column, Tile } from '@carbon/react';

export default function ServiceTile({ title, description }) {
  return (
    <Tile className="service-item p-4 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-700">{description}</p>
    </Tile>
  );
}
