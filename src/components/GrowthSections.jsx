import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Rocket, BarChart3, Zap, LineChart } from 'lucide-react';

const cardData = [
  {
    icon: <Rocket className="h-6 w-6 text-[#1C4B42]" />,
    title: 'Paid Growth',
    desc: 'Meta, Google, TikTok, LinkedIn.',
  },
  {
    icon: <Zap className="h-6 w-6 text-[#1C4B42]" />,
    title: 'Landing Page Optimization',
    desc: 'Offer testing, CRO, UX rebuilds.',
  },
  {
    icon: <LineChart className="h-6 w-6 text-[#1C4B42]" />,
    title: 'Retention & Lifecycle',
    desc: 'Email/SMS automation, re-engagement flows.',
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-[#1C4B42]" />,
    title: 'Analytics',
    desc: 'Source-of-truth dashboards with GA4, Looker, or TripleWhale.',
  },
];

const MetricCounter = ({ from = 0, to = 0, duration = 1500, prefix = '', suffix = '' }) => {
  const [value, setValue] = useState(from);
  const start = useRef<number | null>(null);

  useEffect(() => {
    let rafId: number;

    const step = (ts: number) => {
      if (!start.current) start.current = ts;
      const progress = Math.min((ts - start.current) / duration, 1);
      const current = from + (to - from) * progress;
      setValue(current);
      if (progress < 1) rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [from, to, duration]);

  return (
    <span>
      {prefix}
      {to % 1 === 0 ? Math.round(value).toLocaleString() : value.toFixed(1)}
      {suffix}
    </span>
  );
};

const Marquee = () => {
  const logos = ['Atlas Labs', 'Nova Commerce', 'Aurora D2C', 'Peak Nutrition', 'Lumen Wear', 'Quantum Co.'];
  return (
    <div className="relative overflow-hidden border-t border-b border-[#E1E1E1]/70 bg-[#F8F8F8] py-6">
      <div className="animate-[marquee_25s_linear_infinite] whitespace-nowrap" aria-label="Client logo marquee">
        {logos.concat(logos).map((name, idx) => (
          <span
            key={idx}
            className="mx-8 inline-block select-none text-sm font-semibold tracking-wide text-[#1C4B42]/50 grayscale"
          >
            {name}
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
    </div>
  );
};

const GrowthSections = () => {
  return (
    <div className="bg-white text-[#1C4B42]">
      {/* Services Snapshot */}
      <section id="services" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">What We Do Best</h2>
          <p className="mt-3 max-w-2xl text-[#1C4B42]/80">
            We build full-funnel growth engines—from ads to analytics.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cardData.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#E1E1E1] transition-shadow hover:ring-[#B4E717]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EDF9C8]">
                {card.icon}
              </div>
              <h3 className="mb-2 text-lg font-bold">{card.title}</h3>
              <p className="text-sm text-[#1C4B42]/80">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="relative mx-auto max-w-6xl px-6 py-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[#EDF9C8]/40 to-transparent" />
        <div className="relative">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Results That Speak for Themselves</h2>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#E1E1E1]">
              <div className="text-3xl font-extrabold text-[#1C4B42]">
                <MetricCounter from={0} to={212} duration={1600} prefix="+" suffix="%" />
              </div>
              <p className="mt-1 text-sm text-[#1C4B42]/80">ROAS</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#E1E1E1]">
              <div className="text-3xl font-extrabold text-[#1C4B42]">
                <MetricCounter from={0} to={34} duration={1600} prefix="–" suffix="%" />
              </div>
              <p className="mt-1 text-sm text-[#1C4B42]/80">CAC</p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-[#E1E1E1]">
              <div className="text-3xl font-extrabold text-[#1C4B42]">
                <MetricCounter from={0} to={3.2} duration={1600} prefix="+" suffix="%" />
              </div>
              <p className="mt-1 text-sm text-[#1C4B42]/80">Conversion Rate</p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <Marquee />
        </div>
      </section>
    </div>
  );
};

export default GrowthSections;
