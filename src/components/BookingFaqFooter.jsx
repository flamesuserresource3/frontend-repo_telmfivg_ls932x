import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Linkedin, Instagram, Mail, Phone } from 'lucide-react';

const faqs = [
  {
    q: 'How fast can we go live?',
    a: 'Most brands launch within 2–3 weeks after the initial audit, depending on tracking readiness and creative assets.'
  },
  {
    q: 'Do you create ad creatives?',
    a: 'Yes. We produce performance-first static and motion assets, guided by offer testing and data-backed creative strategy.'
  },
  {
    q: 'Is there a minimum term?',
    a: 'Monthly and quarterly plans are flexible. We recommend 90 days to properly test, optimize, and scale.'
  },
  {
    q: 'What kind of brands do you work with?',
    a: 'VC-backed startups and D2C brands across wellness, fashion, lifestyle, SaaS, and consumer tech.'
  },
];

const AccordionItem = ({ item, isOpen, onToggle }) => (
  <div className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-[#E1E1E1]">
    <button onClick={onToggle} className="flex w-full items-center justify-between text-left">
      <span className="text-base font-semibold text-[#1C4B42]">{item.q}</span>
      <ChevronDown className={`h-5 w-5 text-[#1C4B42] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <div className="pt-3 text-sm text-[#1C4B42]/80">{item.a}</div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const BookingFaqFooter = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="bg-white text-[#1C4B42]">
      {/* Booking */}
      <section id="booking" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-6">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Book Your Free 30-Minute Growth Strategy Call</h2>
          <p className="mt-3 max-w-2xl text-[#1C4B42]/80">
            Discuss your goals, audit your funnel, and get a personalized roadmap.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-2 shadow-sm ring-1 ring-[#E1E1E1]">
          <iframe
            title="Perfotix Media Strategy Call Scheduler"
            src="https://cal.com/bailey/30min?embed=true"
            className="h-[600px] w-full rounded-xl"
          />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="mb-8 text-3xl font-extrabold tracking-tight md:text-4xl">Got Questions? We’ve Got Answers.</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              item={f}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#E1E1E1] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-[#1C4B42]" aria-hidden />
            <span className="text-lg font-extrabold">Perfotix Media</span>
          </div>
          <nav className="flex items-center gap-6 text-sm font-semibold text-[#1C4B42]/80">
            <a href="#home" className="hover:text-[#1C4B42]">Home</a>
            <a href="#services" className="hover:text-[#1C4B42]">Services</a>
            <a href="#pricing" className="hover:text-[#1C4B42]">Pricing</a>
            <a href="#booking" className="hover:text-[#1C4B42]">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <a aria-label="LinkedIn" href="#" className="rounded-full p-2 text-[#1C4B42] transition hover:bg-[#EDF9C8]"><Linkedin className="h-5 w-5" /></a>
            <a aria-label="Instagram" href="#" className="rounded-full p-2 text-[#1C4B42] transition hover:bg-[#EDF9C8]"><Instagram className="h-5 w-5" /></a>
            <a aria-label="Email" href="mailto:hello@perfotix.media" className="rounded-full p-2 text-[#1C4B42] transition hover:bg-[#EDF9C8]"><Mail className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="border-t border-[#E1E1E1] py-4 text-center text-xs text-[#1C4B42]/70">
          © 2025 Perfotix Media — Growth with Accountability.
        </div>
      </footer>

      {/* Floating CTA */}
      <a
        href="#booking"
        className="fixed bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-[#1C4B42] px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_0_3px_#B4E717]"
      >
        <Phone className="h-4 w-4" /> Book a Free Call
      </a>
    </div>
  );
};

export default BookingFaqFooter;
