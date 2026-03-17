'use client'
import { motion } from 'framer-motion'
import caseStudiesData from '@/data/caseStudies.json'

// Mini growth graph SVG
function GrowthGraph() {
  const points: [number, number][] = [
    [0, 80], [15, 75], [30, 65], [40, 55], [50, 42], [60, 38], [70, 25], [80, 15], [90, 8], [100, 2]
  ]
  const path = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p[0]} ${p[1]}`).join(' ')
  const area = path + ` L 100 100 L 0 100 Z`

  return (
    <svg viewBox="0 0 100 100" className="w-full h-16 mt-4" preserveAspectRatio="none">
      <defs>
        <linearGradient id="graph-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1A6EFF" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#1A6EFF" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <path d={area} fill="url(#graph-fill)"/>
      <path d={path} stroke="#1A6EFF" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      {/* End dot */}
      <circle cx="100" cy="2" r="3" fill="#1A6EFF"/>
    </svg>
  )
}

type CaseStudy = typeof caseStudiesData[0]

function CaseStudyContent({ study, index }: {
  study: CaseStudy
  index: number
}) {
  return (
    <>
      {/* Gradient overlay */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ background: `radial-gradient(circle at top right, ${study.color}, transparent 60%)` }}
      />

      <div className="relative">
        {/* Sport badge */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-inter font-medium"
              style={{ backgroundColor: `${study.color}20`, color: study.color }}
            >
              {study.sport}
            </span>
            <span className="text-white/30 font-inter text-xs">{study.position}</span>
          </div>
          <div className="flex gap-1">
            {study.tags.map(tag => (
              <span key={tag} className="text-white/20 font-inter text-xs">#{tag}</span>
            ))}
          </div>
        </div>

        {/* Athlete name */}
        <h3 className="font-lexend font-black text-2xl text-white mb-1">{study.name}</h3>

        {/* Big metric */}
        <p className="font-lexend font-black text-5xl mb-1" style={{ color: study.color }}>
          {study.metric}
        </p>
        <p className="font-inter text-white/40 text-sm mb-4">{study.metricLabel}</p>

        {/* Graph for first card */}
        {index === 0 && <GrowthGraph />}

        {/* Placeholder image for card 2 */}
        {index === 1 && (
          <div className="w-full h-24 rounded-xl bg-gradient-to-r from-[#111] to-[#1a1a2e] border border-white/5 mb-4 flex items-center justify-center">
            <span className="text-white/20 font-inter text-xs">Athletic photo placeholder</span>
          </div>
        )}

        <p className="font-inter text-white/50 text-sm leading-relaxed mt-4">
          {study.description}
        </p>
      </div>
    </>
  )
}

export default function CaseStudies() {
  const studies = caseStudiesData

  return (
    <section className="py-32 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-inter text-[#00E5CC] text-sm font-medium tracking-widest uppercase mb-3">Elite Roster</p>
          <h2 className="font-lexend font-black text-4xl md:text-5xl text-white">
            Real Athletes. Real Results.
          </h2>
        </motion.div>

        {/* Desktop: bento grid. Mobile: horizontal scroll */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
          {studies.map((study, i) => (
            <div
              key={study.id}
              className="flex-none w-[85vw] snap-start card-dark rounded-2xl p-6 border relative overflow-hidden"
              style={{ borderColor: `${study.color}20` }}
            >
              <CaseStudyContent study={study} index={i} />
            </div>
          ))}
        </div>

        <div className="hidden md:grid grid-cols-2 gap-6">
          {studies.map((study, i) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="card-dark rounded-2xl p-8 relative overflow-hidden group hover:scale-[1.01] transition-transform duration-300 will-change-transform"
              style={{ borderColor: `${study.color}20` }}
            >
              <CaseStudyContent study={study} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
