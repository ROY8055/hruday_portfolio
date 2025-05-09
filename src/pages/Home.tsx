import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Process from '../components/Process';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Stats />
      <Testimonials />
      <About />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;