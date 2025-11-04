import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Results', href: '#results' },
  { label: 'Book a Call', href: '#booking' },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-white text-[#1C4B42]">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/80 to-[#EDF9C8]" />
      </div>

      {/* Navbar */}
      <div className="relative z-10">
        <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#1C4B42]" />
            <span className="text-lg font-extrabold tracking-tight">Perfotix Media</span>
          </div>
          <ul className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-semibold text-[#1C4B42]/80 transition-colors hover:text-[#1C4B42]"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 text-4xl font-extrabold leading-tight tracking-tight text-[#1C4B42] md:text-6xl"
        >
          Premium Performance. Affordable Pricing.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mb-8 max-w-3xl text-base font-medium text-[#1C4B42]/80 md:text-lg"
        >
          We exist to elevate companies with cutting-edge, data-driven strategies that drive measured,
          profitable customer acquisition, retention, and brand amplification.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#booking"
            className="rounded-full bg-[#1C4B42] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_0_3px_#B4E717]"
          >
            Get My Free Growth Plan
          </a>
          <a
            href="#booking"
            className="rounded-full border border-[#B4E717] bg-white px-6 py-3 text-sm font-semibold text-[#1C4B42] transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_0_3px_#EDF9C8]"
          >
            Book a Strategy Call
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
