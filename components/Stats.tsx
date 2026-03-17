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
    let start = 0
    const startTime = performance.now()
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      const current = Math.floor(ease * target)
      setCount(current)
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target, duration])

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  )
}

export default function Stats() {
  const stats = statsData as StatItem[]

  return (
    <section className="py-32 bg-[#0A0A0A] relative overflow-hidden border-t border-white/5">
      {/* Background accent — stronger glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(26,110,255,0.14) 0%, transparent 70%)' }} />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[300px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,229,204,0.06) 0%, transparent 70%)' }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-inter text-[#1A6EFF] text-sm font-medium tracking-widest uppercase mb-3">By The Numbers</p>
          <h2 className="font-lexend font-black text-4xl md:text-5xl text-white">
            The results speak for themselves
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="card-dark rounded-2xl p-8 text-center relative overflow-hidden group hover:border-[#1A6EFF]/30 transition-colors duration-300"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#1A6EFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <p className="font-lexend font-black text-5xl md:text-6xl text-white mb-3 will-change-transform">
                <span className="text-gradient-blue">
                  <CountUp
                    target={stat.value}
                    prefix={stat.prefix || ''}
                    suffix={stat.suffix}
                    duration={2200}
                  />
                </span>
              </p>
              <p className="font-lexend font-bold text-xl text-white mb-2">{stat.label}</p>
              <p className="font-inter text-white/50 text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
