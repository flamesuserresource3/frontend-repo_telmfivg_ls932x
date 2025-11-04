import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Calendar } from 'lucide-react';

const plans = [
  {
    name: 'Launch',
    monthly: 1500,
    quarterly: 1350,
    desc: 'Ideal for startups. 2 channels, landing page setup, weekly reporting.',
  },
  {
    name: 'Scale',
    monthly: 3000,
    quarterly: 2700,
    desc: 'Best value. 3–4 channels, CRO sprints, automation workflows, weekly growth ops.',
    featured: true,
  },
  {
    name: 'Custom Enterprise',
    monthly: null,
    quarterly: null,
    desc: 'ABM + LinkedIn campaigns, advanced reporting, and creative studio add-ons.',
  },
];

const steps = [
  { title: 'Audit & Plan (Week 1)', desc: 'Tracking, analysis, quick wins.' },
  { title: 'Build & Launch (Weeks 2–3)', desc: 'Offers, ads, and landing pages.' },
  { title: 'Optimize & Scale (Ongoing)', desc: 'Weekly experiments and reporting.' },
];

const PricingAndProcess = () => {
  const [billing, setBilling] = useState<'monthly' | 'quarterly'>('monthly');

  return (
    <div className="bg-white text-[#1C4B42]">
      {/* Pricing */}
      <section id="pricing" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Transparent Plans. Real Performance.</h2>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#E1E1E1] bg-[#F8F8F8] p-1">
            <button
              onClick={() => setBilling('monthly')}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                billing === 'monthly' ? 'bg-white text-[#1C4B42] shadow-sm' : 'text-[#1C4B42]/70'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling('quarterly')}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                billing === 'quarterly' ? 'bg-white text-[#1C4B42] shadow-sm' : 'text-[#1C4B42]/70'
              }`}
            >
              Quarterly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {plans.map((plan) => {
            const price = plan[ billing ];
            return (
              <motion.div
                key={plan.name}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className={`rounded-2xl p-6 shadow-sm ring-1 ${
                  plan.featured ? 'bg-[#EDF9C8] ring-[#B4E717]' : 'bg-white ring-[#E1E1E1]'
                }`}
              >
                <div className="mb-2 text-sm font-bold uppercase tracking-wide text-[#1C4B42]/70">{plan.name}</div>
                <div className="mb-4 flex items-end gap-1">
                  {price !== null ? (
                    <>
                      <span className="text-3xl font-extrabold text-[#1C4B42]">${price.toLocaleString()}</span>
                      <span className="pb-1 text-sm text-[#1C4B42]/70">/mo</span>
                    </>
                  ) : (
                    <span className="text-2xl font-extrabold text-[#1C4B42]">Contact Us</span>
                  )}
                </div>
                <p className="mb-6 text-sm text-[#1C4B42]/80">{plan.desc}</p>
                <ul className="mb-6 space-y-2 text-sm">
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#B4E717]" /> No long-term lock-in</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#B4E717]" /> Weekly growth ops</li>
                  <li className="flex items-center gap-2"><Check className="h-4 w-4 text-[#B4E717]" /> Slack/Email support</li>
                </ul>
                <a
                  href="#booking"
                  className="inline-flex items-center justify-center rounded-full bg-[#1C4B42] px-5 py-2 text-sm font-semibold text-white shadow-sm transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_0_3px_#B4E717]"
                >
                  Get Started
                </a>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section id="process" className="mx-auto max-w-6xl px-6 pb-24">
        <h2 className="mb-10 text-3xl font-extrabold tracking-tight md:text-4xl">Our Process for Scalable Growth</h2>
        <div className="relative">
          <div className="absolute left-0 right-0 top-5 hidden h-[2px] bg-gradient-to-r from-transparent via-[#E1E1E1] to-transparent md:block" />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {steps.map((step, idx) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="relative rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#E1E1E1]"
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#EDF9C8] px-3 py-1 text-xs font-semibold text-[#1C4B42]">
                  <Calendar className="h-3.5 w-3.5" /> Step {idx + 1}
                </div>
                <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
                <p className="text-sm text-[#1C4B42]/80">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PricingAndProcess;
