import React from 'react';
import Layout from '../../components/Layout';
import HeroSection from '../../components/HeroSection';
import { Grid, Tile } from '@carbon/react';

const team = [
  {
    name: 'Raydo Matthee',
    role: 'Founder & CTO',
    location: 'Johannesburg',
    email: 'raydo@skunkworks.africa',
  },
  {
    name: 'Emmanuel',
    role: 'Digital Marketer',
    location: 'Johannesburg',
    email: 'emmanuel@skunkworks.africa',
  },
  {
    name: 'Loyiso Ndlovu',
    role: 'Lead Technical Resource',
    location: 'Johannesburg',
    email: 'loyiso@skunkworks.africa',
  },
  {
    name: 'Selaelo Langa',
    role: 'Frontend Developer',
    location: 'South Africa',
    email: 'selaelo@skunkworks.africa',
  },
  {
    name: 'Joleane Marais',
    role: 'Accountant & Labour Practitioner',
    location: 'Mpumalanga',
    email: 'joleane@jamtax.co.za',
  },
  {
    name: 'Zamri Marais',
    role: 'Executive Assistant',
    location: 'Mpumalanga',
    email: 'zamri@skunkworks.africa',
  },
];

export default function TeamPage() {
  return (
    <Layout>
      <HeroSection
        title="Meet the Team"
        subtitle="Get to know the diverse talent driving innovation and growth at Skunkworks Digital."
      />

      <section className="my-10">
        <Grid className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {team.map((member, idx) => (
            <Tile key={idx} className="p-4 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-gray-700 mb-1">{member.role}</p>
              <p className="text-sm text-gray-500 mb-1">📍 {member.location}</p>
              <p className="text-sm text-blue-600">📧 {member.email}</p>
            </Tile>
          ))}
        </Grid>
      </section>
    </Layout>
  );
}
