'use client'
import { motion } from 'framer-motion'

const brands = [
  { name: 'Nike',           src: '/images/logo-nike.svg',       h: 'h-14' },
  { name: 'Adidas',         src: '/images/logo-adidas.png',     h: 'h-20' },
  { name: 'On',             src: '/images/logo-on.png',         h: 'h-20' },
  { name: 'Hey Dude',       src: '/images/logo-heydude.svg',    h: 'h-20' },
  { name: 'Vicis',          src: '/images/logo-vicis.png',      h: 'h-20' },
  { name: 'The North Face', src: '/images/logo-northface.png',  h: 'h-20' },
  { name: 'Arm & Hammer',   src: '/images/logo-armhammer.png',  h: 'h-20' },
]

export default function Marquee() {
  const doubled = [...brands, ...brands]

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

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {doubled.map(({ name, src, h }, i) => (
              <div
                key={i}
                className="inline-flex items-center mx-14 cursor-default select-none transition-opacity duration-300"
                style={{ opacity: 0.4 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.4')}
              >
                <img
                  src={src}
                  alt={name}
                  className={`${h} w-auto object-contain`}
                  style={{ filter: 'invert(1)' }}
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
