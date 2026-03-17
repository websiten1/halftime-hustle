'use client'
import { motion } from 'framer-motion'

const problems = [
  {
    icon: '⚡',
    title: 'No strategy',
    description: 'Posting randomly without a plan, hoping something sticks.',
  },
  {
    icon: '🤝',
    title: 'No brand deals',
    description: "Can't find or land sponsorships despite having real talent.",
  },
  {
    icon: '🗺️',
    title: 'No roadmap',
    description: 'No idea where to start or what steps actually move the needle.',
  },
]

const solutions = [
  {
    icon: '🎯',
    title: 'Custom NIL Roadmap',
    description: 'A personalized, step-by-step strategy built around your sport, audience, and goals.',
  },
  {
    icon: '🏷️',
    title: 'Direct Brand Connections',
    description: 'We know which brands are actively looking for athletes at your level.',
  },
  {
    icon: '🎬',
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
          <p className="font-inter text-white/40 text-sm font-medium tracking-widest uppercase mb-3">The Reality</p>
          <h2 className="font-lexend font-black text-4xl md:text-5xl text-white">
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
              className="font-inter text-white/30 text-xs tracking-widest uppercase mb-6"
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
                <span className="text-2xl flex-shrink-0">{p.icon}</span>
                <div>
                  <h3 className="font-lexend font-bold text-white text-base mb-1">{p.title}</h3>
                  <p className="font-inter text-white/50 text-sm leading-relaxed">{p.description}</p>
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
              className="font-inter text-[#1A6EFF] text-xs tracking-widest uppercase mb-6"
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
                className="flex gap-4 p-6 rounded-2xl border border-[#1A6EFF]/15 bg-[#1A6EFF]/5 group hover:border-[#1A6EFF]/30 transition-colors duration-300 will-change-transform"
              >
                <span className="text-2xl flex-shrink-0">{s.icon}</span>
                <div>
                  <h3 className="font-lexend font-bold text-white text-base mb-1">{s.title}</h3>
                  <p className="font-inter text-white/50 text-sm leading-relaxed">{s.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
