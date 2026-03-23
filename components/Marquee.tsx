'use client'
import { motion } from 'framer-motion'

const brandLogos = [
  { name: 'Nike', src: 'https://logo.clearbit.com/nike.com' },
  { name: 'Adidas', src: 'https://logo.clearbit.com/adidas.com' },
  { name: 'On Cloud', src: 'https://logo.clearbit.com/on-running.com' },
  { name: 'Hey Dude', src: 'https://logo.clearbit.com/heydude.com' },
  { name: 'Vicis', src: 'https://logo.clearbit.com/vicis.com' },
  { name: 'The North Face', src: 'https://logo.clearbit.com/thenorthface.com' },
  { name: 'Arm & Hammer', src: 'https://logo.clearbit.com/churchdwight.com' },
]

export default function Marquee() {
  return (
    <section id="marquee" className="py-16 border-y border-white/5 overflow-hidden bg-[#0A0A0A]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-8"
      >
        <p className="font-tomorrow text-white/30 text-xs tracking-widest uppercase">
          Athletes we&apos;ve worked with have landed deals with
        </p>
      </motion.div>

      {/* Marquee wrapper */}
      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          {/* Two copies for seamless loop */}
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {[...brandLogos, ...brandLogos].map((logo, i) => (
              <div
                key={i}
                className="group inline-flex items-center mx-12 cursor-default"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-8 w-auto object-contain transition-all duration-300 select-none"
                  style={{ filter: 'brightness(0) invert(1)', opacity: 0.25 }}
                  onMouseEnter={e => {
                    e.currentTarget.style.filter = 'brightness(0) invert(1)'
                    e.currentTarget.style.opacity = '1'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.filter = 'brightness(0) invert(1)'
                    e.currentTarget.style.opacity = '0.25'
                  }}
                  onError={e => {
                    // Fallback to styled text if image fails to load
                    const parent = e.currentTarget.parentElement
                    if (parent) {
                      e.currentTarget.style.display = 'none'
                      const span = document.createElement('span')
                      span.textContent = logo.name
                      span.className = 'font-tomorrow font-bold text-xl text-white/20'
                      parent.appendChild(span)
                    }
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
