'use client'
import { motion } from 'framer-motion'

const STEPS = [
  {
    num: '01', title: 'Magnetize', color: '#FFD700',
    subtitle: 'Create what brands crave',
    body: 'We analyze your audience, identify your brand DNA, and build a content system that turns scrolls into sponsorships.',
    video: 'https://cdn.coverr.co/videos/coverr-athlete-running-on-track-1080p-3736/1080p.mp4',
  },
  {
    num: '02', title: 'Portfolio', color: '#00E5CC',
    subtitle: 'The professional pitch',
    body: 'Your NIL media kit, sponsor deck, and outreach strategy — designed to make brands say yes before you finish talking.',
    video: 'https://cdn.coverr.co/videos/coverr-basketball-player-dribbling-5411/1080p.mp4',
  },
  {
    num: '03', title: 'Capture', color: '#FFD700',
    subtitle: 'Turning attention into contracts',
    body: 'We identify the right brands, warm the relationship, and help you close deals. You play. We pitch.',
    video: 'https://cdn.coverr.co/videos/coverr-two-people-shaking-hands-4791/1080p.mp4',
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
          <p className="font-tomorrow text-xs tracking-widest uppercase mb-3" style={{ color: '#FFD700' }}>
            The Process
          </p>
          <h2 className="font-tomorrow font-black text-4xl md:text-5xl text-white">
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
              className="relative rounded-2xl overflow-hidden group min-h-[320px]"
            >
              {/* Mobile: gradient fallback background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a00] to-[#0d0d0d]" />

              {/* Video background — hidden on mobile for performance */}
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                className="absolute inset-0 w-full h-full object-cover hidden sm:block"
                onError={e => { (e.currentTarget as HTMLVideoElement).style.display = 'none' }}
              >
                <source src={step.video} type="video/mp4" />
              </video>

              {/* Dark overlay — always present so text is readable */}
              <div className="absolute inset-0 bg-black/65" />

              {/* Card border */}
              <div
                className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-white/20 transition-colors duration-300"
                style={{ pointerEvents: 'none' }}
              />

              {/* Content */}
              <div className="relative z-10 p-8">
                {/* Step number */}
                <span className="block font-tomorrow font-black leading-none mb-4 select-none"
                  style={{ fontSize: 72, color: 'rgba(255,255,255,0.06)' }}>
                  {step.num}
                </span>

                {/* Color accent line */}
                <div className="w-8 h-[3px] rounded-full mb-5" style={{ background: step.color }} />

                <h3 className="font-tomorrow font-black text-2xl text-white mb-1">
                  {step.title}
                </h3>
                <p className="font-tomorrow text-sm mb-4" style={{ color: step.color }}>
                  {step.subtitle}
                </p>
                <p className="font-tomorrow text-sm leading-relaxed text-white/70">
                  {step.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
