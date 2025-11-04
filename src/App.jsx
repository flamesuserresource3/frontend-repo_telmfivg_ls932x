import React, { useEffect } from 'react';
import Hero from './components/Hero.jsx';
import GrowthSections from './components/GrowthSections.jsx';
import PricingAndProcess from './components/PricingAndProcess.jsx';
import BookingFaqFooter from './components/BookingFaqFooter.jsx';

const App = () => {
  // Smooth scroll for in-page anchors
  useEffect(() => {
    const handler = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      const id = target.getAttribute('href')?.slice(1);
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  return (
    <main className="min-h-screen bg-white antialiased">
      <Hero />
      <GrowthSections />
      <PricingAndProcess />
      <BookingFaqFooter />
    </main>
  );
};

export default App;
