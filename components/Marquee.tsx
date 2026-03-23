'use client'
import { motion } from 'framer-motion'

// filter: 'invert' → dark logo on white bg becomes white on dark bg
// filter: 'none'   → show original brand colors as-is
const brands = [
  { name: 'Nike',           src: '/images/logo-nike.svg',       filter: 'brightness(0) invert(1)' },
  { name: 'Adidas',         src: '/images/logo-adidas.png',     filter: 'brightness(0) invert(1)' },
  { name: 'On',             src: '/images/logo-on.png',         filter: 'brightness(0) invert(1)' },
  { name: 'Hey Dude',       src: '/images/logo-heydude.svg',    filter: 'none'                    },
  { name: 'Vicis',          src: '/images/logo-vicis.png',      filter: 'brightness(0) invert(1)' },
  { name: 'The North Face', src: '/images/logo-northface.png',  filter: 'brightness(0) invert(1)' },
  { name: 'Arm & Hammer',   src: '/images/logo-armhammer.png',  filter: 'none'                    },
]

export default function Marquee() {
  const doubled = [...brands, ...brands]

  return (
    <section id="marquee" className="py-16 border-y border-white/5 bg-[#0A0A0A]" style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="font-tomorrow text-white/30 text-xs tracking-widest uppercase">
          Athletes we&apos;ve worked with have landed deals with
        </p>
      </motion.div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        <div style={{ height: 80, overflow: 'visible', display: 'flex', alignItems: 'center' }}>
          <div
            className="animate-marquee"
            style={{ display: 'flex', alignItems: 'center', height: '100%', whiteSpace: 'nowrap', overflow: 'visible' }}
          >
            {doubled.map(({ name, src, filter }, i) => (
              <span
                key={i}
                aria-label={name}
                className="marquee-item"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, cursor: 'default', userSelect: 'none' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={name}
                  draggable={false}
                  className="marquee-logo-img"
                  style={{ objectFit: 'contain', display: 'block', filter, opacity: 1 }}
                />
              </span>
            ))}
          </div>
        </div>
        <style>{`
          .marquee-item { margin: 0 24px; }
          .marquee-logo-img { height: 36px; width: 90px; }
          @media (min-width: 768px) {
            .marquee-item { margin: 0 48px; }
            .marquee-logo-img { height: 80px; width: 160px; }
          }
        `}</style>
      </div>
    </section>
  )
}
