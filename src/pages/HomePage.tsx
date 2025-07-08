import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import WhyChooseUs from '../components/WhyChooseUs';
import Team from '../components/Team';
import Partners from '../components/Partners';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <Team />
      <Partners />
      <Contact />
    </div>
  );
};

export default HomePage; 