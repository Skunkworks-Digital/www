import React from 'react';
import { Grid, Column } from '@carbon/react';

export default function Footer() {
  return (
    <footer className="bg-gray-90 text-white py-8 mt-12">
      <Grid className="px-8">
        <Column lg={8} md={4} sm={2}>
          <h4 className="text-lg font-semibold mb-2">Skunkworks Digital</h4>
          <p className="text-sm">
            Innovating the future of technology through education, development, and cloud-first solutions.
          </p>
        </Column>

        <Column lg={4} md={4} sm={2}>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </Column>

        <Column lg={4} md={4} sm={2}>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <p className="text-sm">📍 Johannesburg, South Africa</p>
          <p className="text-sm">📧 support@skunkworks.digital</p>
          <p className="text-sm">📞 +27 800 00 7277</p>
        </Column>
      </Grid>
      <div className="text-center text-xs text-white mt-6">
        &copy; {new Date().getFullYear()} Skunkworks Digital. All rights reserved.
      </div>
    </footer>
  );
}
