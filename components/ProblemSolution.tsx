'use client'
import { motion } from 'framer-motion'

const problems = [
  {
    title: 'No strategy',
    description: 'Posting randomly without a plan, hoping something sticks.',
  },
  {
    title: 'No brand deals',
    description: "Can't find or land sponsorships despite having real talent.",
  },
  {
    title: 'No roadmap',
    description: 'No idea where to start or what steps actually move the needle.',
  },
]

const solutions = [
  {
    title: 'Custom NIL Roadmap',
    description: 'A personalized, step-by-step strategy built around your sport, audience, and goals.',
  },
  {
    title: 'Direct Brand Connections',
    description: 'We know which brands are actively looking for athletes at your level.',
  },
  {
    title: 'Done-For-You Content System',
    description: 'Templates, scripts, and posting schedules — plug in and post.',
  },
]

export default function ProblemSolution() {
  return (
    <section className="py-32 bg-[#0d0d18] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-tomorrow text-white/40 text-sm font-medium tracking-widest uppercase mb-3">The Reality</p>
          <h2 className="font-tomorrow font-black text-4xl md:text-5xl text-white">
            Most Athletes Leave NIL Money<br className="hidden md:block" /> on the Table
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Problems */}
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-tomorrow text-white/30 text-xs tracking-widest uppercase mb-6"
            >
              The Problem
            </motion.p>
            {problems.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-4 p-6 rounded-2xl border border-red-500/10 bg-red-500/5 group hover:border-red-500/20 transition-colors duration-300 will-change-transform"
              >
                <div className="w-8 h-8 rounded-lg border border-red-500/20 bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 2l8 8M10 2l-8 8" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-tomorrow font-bold text-white text-base mb-1">{p.title}</h3>
                  <p className="font-tomorrow text-white/50 text-sm leading-relaxed">{p.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-tomorrow text-[#FFD700] text-xs tracking-widest uppercase mb-6"
            >
              Our Solution
            </motion.p>
            {solutions.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="flex gap-4 p-6 rounded-2xl border border-[#FFD700]/15 bg-[#FFD700]/5 group hover:border-[#FFD700]/30 transition-colors duration-300 will-change-transform"
              >
                <div className="w-8 h-8 rounded-lg border border-[#FFD700]/20 bg-[#FFD700]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-6" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-tomorrow font-bold text-white text-base mb-1">{s.title}</h3>
                  <p className="font-tomorrow text-white/50 text-sm leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
