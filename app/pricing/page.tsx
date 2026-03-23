'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Stats from '@/components/Stats'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import pricingFaqData from '@/data/faq-pricing.json'

const EASE = [0.22, 1, 0.36, 1] as const
const CALENDLY = '/#lead-form'

// ─── Data ────────────────────────────────────────────────────────────────────

const tiers = [
  {
    id: 'starter',
    name: 'NIL Audit',
    price: '$50',
    subtext: 'One-time · No commitment',
    description:
      "A full breakdown of where your brand stands right now — what's working, what's missing, and exactly what to do next.",
    includes: [
      '45-minute 1-on-1 strategy call',
      'Personal brand audit report',
      'Custom content recommendations',
      'NIL readiness score',
    ],
    cta: 'Book My Audit',
    popular: false,
  },
  {
    id: 'builder',
    name: 'Brand Builder',
    price: '$297/mo',
    subtext: 'Month to month · Cancel anytime',
    description:
      'Everything you need to grow your audience, land your first brand deals, and build the portfolio that gets you taken seriously.',
    includes: [
      'Everything in NIL Audit',
      'Weekly strategy sessions',
      'Content calendar + posting system',
      'Brand deal outreach templates',
      'Direct access to Coach Cris via DM',
      'Brand deal negotiation support',
    ],
    cta: 'Start Building',
    popular: true,
  },
  {
    id: 'elite',
    name: 'Full Representation',
    price: 'Custom',
    subtext: 'For athletes ready to go all in',
    description:
      'Done-for-you brand management. We handle the strategy, outreach, negotiation, and content direction so you can focus on your sport.',
    includes: [
      'Everything in Brand Builder',
      'Full brand deal sourcing and closing',
      'Professional media kit creation',
      'Long-term brand partnership strategy',
      'Priority response within 2 hours',
      'Monthly performance reports',
    ],
    cta: 'Apply Now',
    popular: false,
  },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function Check() {
  return (
    <svg
      className="flex-shrink-0 w-4 h-4 text-[#FFD700]"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8l3.5 3.5L13 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function PricingCard({
  tier,
  index,
}: {
  tier: (typeof tiers)[number]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: EASE }}
      className={`relative flex flex-col rounded-2xl border transition-all duration-300 ${
        tier.popular
          ? 'border-[#FFD700] bg-[#1a1500]/60 shadow-[0_0_40px_rgba(255,215,0,0.2)] lg:-mt-6 lg:mb-0'
          : 'border-white/7 bg-[#111] hover:border-white/15'
      }`}
    >
      {/* Most Popular badge */}
      {tier.popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#FFD700] text-[#0A0A0A] font-tomorrow font-bold text-xs tracking-widest uppercase">
            Most Popular
          </span>
        </div>
      )}

      <div className={`flex flex-col flex-1 p-8 ${tier.popular ? 'pt-10' : ''}`}>
        {/* Header */}
        <div className="mb-6">
          <p
            className={`font-tomorrow text-xs font-medium tracking-widest uppercase mb-3 ${
              tier.popular ? 'text-[#FFD700]' : 'text-white/40'
            }`}
          >
            {tier.name}
          </p>
          <p className="font-tomorrow font-black text-4xl text-white leading-none mb-1">
            {tier.price}
          </p>
          <p className="font-tomorrow text-white/40 text-sm mt-2">{tier.subtext}</p>
        </div>

        {/* Divider */}
        <div
          className={`h-px w-full mb-6 ${
            tier.popular ? 'bg-[#FFD700]/20' : 'bg-white/7'
          }`}
        />

        {/* Description */}
        <p className="font-tomorrow text-white/60 text-sm leading-relaxed mb-8">
          {tier.description}
        </p>

        {/* Includes list */}
        <ul className="space-y-3 mb-10 flex-1">
          {tier.includes.map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <Check />
              <span className="font-tomorrow text-white/70 text-sm leading-snug">{item}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <motion.a
          href={CALENDLY}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full flex items-center justify-center gap-2 font-tomorrow font-semibold text-sm px-6 py-3.5 rounded-xl transition-all duration-200 min-h-[48px] ${
            tier.popular
              ? 'bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A0A0A] animate-pulse_blue'
              : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20'
          }`}
        >
          {tier.cta}
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path
              d="M2 7h10M7 2l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.a>
      </div>
    </motion.div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PricingPage() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <Navbar />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% 0%, #1a1a00 0%, #0a0a0a 70%)',
          }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,215,0,0.5) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        {/* Glow blob */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(255,215,0,0.07) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="font-tomorrow text-[#FFD700] text-sm font-medium tracking-widest uppercase mb-4"
          >
            Work With Us
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="font-tomorrow font-black text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6"
          >
            Let&apos;s Build{' '}
            <span
              style={{
                backgroundImage: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Your Brand.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18, ease: EASE }}
            className="font-tomorrow text-white/60 text-lg md:text-xl leading-relaxed max-w-xl mx-auto"
          >
            Pick how you want to work together. Every option includes direct access to me.
          </motion.p>
        </div>
      </section>

      {/* ── Pricing Cards ────────────────────────────────────────────────── */}
      <section className="pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:items-start">
            {tiers.map((tier, i) => (
              <PricingCard key={tier.id} tier={tier} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust Line ───────────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: EASE }}
        className="text-center py-12 px-6"
      >
        <p className="font-tomorrow text-white/30 text-sm tracking-wide">
          No long-term contracts. No agency fluff. Just results.
        </p>
      </motion.div>

      {/* ── Stats ────────────────────────────────────────────────────────── */}
      <Stats />

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <FAQ data={pricingFaqData} />

      {/* ── Final CTA ────────────────────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden bg-[#0d0d18] border-t border-white/5">
        {/* Background glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 50% 100%, rgba(255,215,0,0.08) 0%, transparent 70%)',
          }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,215,0,0.5) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-tomorrow font-black text-4xl md:text-5xl lg:text-6xl text-white leading-[1.08] mb-6"
          >
            Ready to build something real?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
            className="font-tomorrow text-white/50 text-lg leading-relaxed mb-10 max-w-xl mx-auto"
          >
            Most athletes wait. The ones who don&apos;t are the ones you&apos;ll be watching on
            brand deals.
          </motion.p>

          <motion.a
            href={CALENDLY}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A0A0A] font-tomorrow font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 animate-pulse_blue min-h-[52px]"
          >
            Get My NIL Strategy Map
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path
                d="M3 8h10M8 3l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
