import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages';
import AboutPage from './pages/About';
import ServicesPage from './pages/Services';
import CaseStudiesPage from './pages/Case-Studies';
import TeamPage from './pages/Team';
import FAQPage from './pages/FAQ';
import ProjectsPage from './pages/Projects';
import ContactFormPage from './pages/ContactForm'; // ✅ Make sure this path exists

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/case-studies" element={<CaseStudiesPage />} />
      <Route path="/team" element={<TeamPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactFormPage />} />
    </Routes>
  );
}
