'use client'
import { motion } from 'framer-motion'

const STEPS = [
  {
    num: '01', title: 'Magnetize', color: '#1A6EFF',
    subtitle: 'Create what brands crave',
    body: 'We analyze your audience, identify your brand DNA, and build a content system that turns scrolls into sponsorships.',
  },
  {
    num: '02', title: 'Portfolio', color: '#00E5CC',
    subtitle: 'The professional pitch',
    body: 'Your NIL media kit, sponsor deck, and outreach strategy — designed to make brands say yes before you finish talking.',
  },
  {
    num: '03', title: 'Capture', color: '#1A6EFF',
    subtitle: 'Turning attention into contracts',
    body: 'We identify the right brands, warm the relationship, and help you close deals. You play. We pitch.',
  },
]

export default function BasketballProtocol() {
  return (
    <section id="protocol" className="py-32 bg-[#0d0d18] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs tracking-widest uppercase mb-3"
            style={{ color: '#1A6EFF', fontFamily: 'Inter, sans-serif' }}>
            The Process
          </p>
          <h2 className="font-black text-4xl md:text-5xl text-white"
            style={{ fontFamily: 'Lexend, sans-serif' }}>
            The Halftime Protocol
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative p-8 rounded-2xl border border-white/5 bg-[#111] group hover:border-white/10 transition-colors duration-300"
            >
              {/* Step number */}
              <span className="block font-black leading-none mb-4 select-none"
                style={{ fontSize: 72, color: 'rgba(255,255,255,0.04)', fontFamily: 'Lexend, sans-serif' }}>
                {step.num}
              </span>

              {/* Color accent line */}
              <div className="w-8 h-[3px] rounded-full mb-5" style={{ background: step.color }} />

              <h3 className="font-black text-2xl text-white mb-1"
                style={{ fontFamily: 'Lexend, sans-serif' }}>
                {step.title}
              </h3>
              <p className="text-sm mb-4" style={{ color: step.color, fontFamily: 'Inter, sans-serif' }}>
                {step.subtitle}
              </p>
              <p className="text-sm leading-relaxed text-white/50"
                style={{ fontFamily: 'Inter, sans-serif' }}>
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
