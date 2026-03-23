'use client'
import { motion } from 'framer-motion'

const words = ['The', 'NAIA', 'Playbook', 'for', 'Nike-Level', 'Brands']

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.15 },
  },
}

const wordVariant = {
  hidden: { y: 48, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.65, ease: EASE },
  },
}

const fadeUp = {
  hidden: { y: 24, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.65, delay: 0.75 + i * 0.13, ease: EASE },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #1a1a00 0%, #0a0a0a 65%)',
      }} />

      {/* Dot grid texture */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,215,0,0.5) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
      />

      {/* Gold glow blobs */}
      <div className="absolute top-0 left-1/4 w-[700px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.08) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,229,204,0.07) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 w-full py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 border"
            style={{ background: 'rgba(255,215,0,0.08)', borderColor: 'rgba(255,215,0,0.25)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5CC] animate-pulse" />
            <span className="text-[#00E5CC] font-tomorrow text-xs font-medium tracking-wide uppercase">
              NIL Coaching for College Athletes
            </span>
          </motion.div>

          {/* Headline — word-by-word */}
          <motion.h1
            variants={container}
            initial="hidden"
            animate="visible"
            className="font-tomorrow font-black text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-white mb-6"
          >
            {words.map((w, i) => (
              <motion.span
                key={i}
                variants={wordVariant}
                className="inline-block mr-[0.22em]"
                style={w === 'Nike-Level' ? {
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                } : undefined}
              >
                {w}
              </motion.span>
            ))}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-lg text-white/60 leading-relaxed mb-10 max-w-md font-tomorrow"
          >
            I give every athlete — D1 or NAIA — the same playbook and resources the top agencies keep to themselves. No spotlight required.
          </motion.p>

          {/* Buttons */}
          <motion.div
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="/#lead-form"
              className="inline-flex items-center justify-center gap-2 text-[#0A0A0A] font-tomorrow font-bold text-base px-7 py-4 rounded-xl transition-all duration-200 hover:scale-105 min-h-[52px]"
              style={{
                background: '#FFD700',
                boxShadow: '0 0 0 0 rgba(255,215,0,0.4)',
                animation: 'pulse_blue 2.5s ease-in-out infinite',
              }}
            >
              Get My NIL Strategy Map
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="/#protocol"
              className="inline-flex items-center justify-center gap-2 text-white font-tomorrow font-semibold text-base px-7 py-4 rounded-xl transition-all duration-200 min-h-[52px]"
              style={{ border: '1px solid rgba(255,255,255,0.2)' }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)')}
            >
              See How It Works
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="mt-10 flex items-center gap-3"
          >
            <div className="flex -space-x-2">
              {[0, 1, 2, 3].map(i => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full border-2"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,215,0,0.5), rgba(0,229,204,0.5))',
                    borderColor: '#0A0A0A',
                  }}
                />
              ))}
            </div>
            <p className="text-sm text-white/50 font-tomorrow">
              <span className="text-white font-medium">20+ athletes</span> already growing
            </p>
          </motion.div>
        </div>

        {/* Right — Video placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: EASE }}
          className="relative flex items-center justify-center"
        >
          <div style={{ animation: 'float 4s ease-in-out infinite' }}>
            {/* 9:16 video container */}
            <div
              className="relative mx-auto rounded-3xl overflow-hidden"
              style={{
                width: 'clamp(240px, 28vw, 320px)',
                aspectRatio: '9/16',
                border: '1px solid rgba(255,255,255,0.12)',
                boxShadow: '0 0 40px rgba(255,215,0,0.15), 0 24px 60px rgba(0,0,0,0.6)',
              }}
            >
              {/* Gradient bg */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(160deg, #111827 0%, #1a1500 50%, #0a0a0a 100%)' }}
              />
              {/* Grid lines */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: 'linear-gradient(rgba(255,215,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,215,0,0.1) 1px, transparent 1px)',
                  backgroundSize: '40px 40px',
                  opacity: 0.5,
                }}
              />

              {/* Play button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center cursor-pointer transition-transform hover:scale-110"
                  style={{ background: '#FFD700', boxShadow: '0 8px 32px rgba(255,215,0,0.4)' }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 3l13 7-13 7V3z" fill="#0A0A0A"/>
                  </svg>
                </div>
                <p className="text-white/40 text-xs font-tomorrow">
                  Client video goes here
                </p>
              </div>

              {/* Bottom label */}
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85), transparent)' }}
              >
                <p className="font-tomorrow font-bold text-white text-sm">@halftime_hustle</p>
                <p className="text-white/50 text-xs font-tomorrow">2M+ views generated</p>
              </div>
            </div>

            {/* Floating badge — views */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
              className="absolute rounded-2xl p-3 shadow-xl"
              style={{
                right: '-16px',
                top: '25%',
                background: '#111',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <p className="font-tomorrow font-black text-[#00E5CC] text-lg">2M+</p>
              <p className="text-white/50 text-xs font-tomorrow">Views</p>
            </motion.div>

            {/* Floating badge — deals */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute rounded-2xl p-3 shadow-xl"
              style={{
                left: '-16px',
                bottom: '25%',
                background: '#111',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <p className="font-tomorrow font-black text-[#FFD700] text-lg">$30k+</p>
              <p className="text-white/50 text-xs font-tomorrow">In deals</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase font-tomorrow">Scroll</span>
        <div style={{ animation: 'scroll_arrow 1.8s ease-in-out infinite' }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 4v12M4 10l6 6 6-6" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </motion.div>
    </section>
  )
}
