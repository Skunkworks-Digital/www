import React from 'react';
import { Grid, Column, Tile } from '@carbon/react';

const stats = [
  { label: 'Successful Projects', value: '250+' },
  { label: 'Global Clients', value: '40+' },
  { label: 'Uptime Guarantee', value: '99.9%' },
];

export default function StatsGrid() {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold mb-4">Our Impact At A Glance</h2>
      <Grid>
        {stats.map((stat, index) => (
          <Column key={index} sm={4} md={4} lg={4}>
            <Tile>
              <div className="text-center">
                <p className="text-3xl font-semibold">{stat.value}</p>
                <p className="text-sm">{stat.label}</p>
              </div>
            </Tile>
          </Column>
        ))}
      </Grid>
    </section>
  );
}
