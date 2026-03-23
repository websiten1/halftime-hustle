'use client'
import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import statsData from '@/data/stats.json'

interface StatItem {
  value: number
  suffix: string
  label: string
  description: string
  prefix?: string
}

function CountUp({ target, prefix = '', suffix = '', duration = 2000 }: {
  target: number
  prefix?: string
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  useEffect(() => {
    if (!inView) return
    const startTime = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(ease * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target, duration])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

export default function Stats() {
  const stats = statsData as StatItem[]

  return (
    <section className="py-24 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(255,215,0,0.08) 0%, transparent 70%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-tomorrow text-[#FFD700] text-sm font-medium tracking-widest uppercase mb-3">By The Numbers</p>
          <h2 className="font-tomorrow font-black text-4xl md:text-5xl text-white">
            The results speak for themselves
          </h2>
        </motion.div>

        {/* Stack on mobile, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="card-dark rounded-2xl p-8 text-center relative overflow-hidden group hover:border-[#FFD700]/30 transition-colors duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <p className="font-tomorrow font-black text-5xl md:text-7xl text-white mb-3 will-change-transform">
                <span style={{
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  <CountUp
                    target={stat.value}
                    prefix={stat.prefix || ''}
                    suffix={stat.suffix}
                    duration={2200}
                  />
                </span>
              </p>
              <p className="font-tomorrow font-bold text-xl text-white mb-2">{stat.label}</p>
              <p className="font-tomorrow text-white/50 text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
