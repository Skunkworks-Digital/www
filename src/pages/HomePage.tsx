import React from "react";
import Hero from "../components/Hero";
import AboutTeam from "../components/AboutTeam";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";
import ContactAndFaq from "../components/ContactAndFaq";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <AboutTeam />
      <Services />
      <Testimonials id="testimonials" />
      <ContactAndFaq id="contact" />
    </>
  );
};

export default HomePage;
