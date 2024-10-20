import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';

const Home = (): JSX.Element => {
  return (
    <main id="home">
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  );
};

export default Home;
