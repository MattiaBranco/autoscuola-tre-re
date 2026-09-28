import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ChiSiamo from '../components/ChiSiamo';
import Servizi from '../components/Servizi';
import Orari from '../components/Orari';
import FAQ from '../components/FAQ';
import Contatti from '../components/Contatti';
import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ChiSiamo />
      <Servizi />
      <Orari />
      <FAQ />
      <Contatti />
      <Footer />
    </>
  );
}

export default Home;