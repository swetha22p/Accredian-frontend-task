// src/App.jsx
import React, { useState } from 'react';
import HeroSection from './components/Hero';
import ReferralModal from './components/ReferralModel';
import Navbar from './components/Navbar';
import Process from './components/Process';
import Home from './components/Home';
import Benefits from './components/Benefits';
import FAQ from './components/FAQ';
import Details from './components/Details';

const App = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleReferNowClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Navbar /> 
      <section id="home">
        <Home />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="benefits">
        <Benefits />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="details">
        <Details />
      </section>
    </div>
  );
};

export default App;
