'use client'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-32 bg-[#0A0A0A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex gap-4 will-change-transform"
          >
            {/* Then */}
            <div className="flex-1">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] border border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <circle cx="14" cy="10" r="5" stroke="white" strokeOpacity="0.3" strokeWidth="1.5"/>
                      <path d="M4 26c0-5.52 4.48-10 10-10s10 4.48 10 10" stroke="white" strokeOpacity="0.3" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="text-white/20 font-inter text-xs">Photo placeholder</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <p className="font-inter text-white/40 text-xs uppercase tracking-wider">Then</p>
                  <p className="font-lexend font-bold text-white text-sm">NAIA Athlete</p>
                </div>
              </div>
            </div>

            {/* Now */}
            <div className="flex-1 mt-8">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-b from-[#0d1a33] to-[#0a0a1a] border border-[#1A6EFF]/15 relative overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <div className="w-16 h-16 rounded-full bg-[#1A6EFF]/20 border border-[#1A6EFF]/30 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <circle cx="14" cy="10" r="5" stroke="#1A6EFF" strokeOpacity="0.6" strokeWidth="1.5"/>
                      <path d="M4 26c0-5.52 4.48-10 10-10s10 4.48 10 10" stroke="#1A6EFF" strokeOpacity="0.6" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="text-white/20 font-inter text-xs">Photo placeholder</p>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <p className="font-inter text-[#1A6EFF]/60 text-xs uppercase tracking-wider">Now</p>
                  <p className="font-lexend font-bold text-white text-sm">Brand Strategist</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Copy */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="will-change-transform"
          >
            <p className="font-inter text-[#1A6EFF] text-sm font-medium tracking-widest uppercase mb-4">Meet Your Coach</p>
            <h2 className="font-lexend font-black text-4xl md:text-5xl text-white mb-6 leading-tight">
              The Coach Cris<br />
              <span className="text-gradient-blue">Factor</span>
            </h2>

            <div className="space-y-4 font-inter text-white/60 text-base leading-relaxed">
              <p>
                I didn&apos;t have a D1 spotlight. I had to build my own from scratch.
              </p>
              <p>
                At the NAIA level, with no recruiting hype and no big-school platform, I figured out how to land brand deals, grow an engaged audience, and build something real — without waiting for someone to hand me an opportunity.
              </p>
              <p>
                That experience became the foundation of <span className="text-white font-medium">Halftime Hustle</span>. Every system, every strategy, every deal framework was tested in the real world before it was ever put in front of an athlete.
              </p>
              <p className="text-white/80">
                Now I help athletes do it faster, smarter, and bigger than I did.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://instagram.com/halftime_hustle"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white hover:text-[#1A6EFF] transition-colors font-inter font-medium"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
                @halftime_hustle
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
