'use client'
import { motion } from 'framer-motion'

const brands = [
  { name: 'Nike',           src: '/images/logo-nike.svg'      },
  { name: 'Adidas',         src: '/images/logo-adidas.png'    },
  { name: 'On',             src: '/images/logo-on.png'        },
  { name: 'Hey Dude',       src: '/images/logo-heydude.svg'   },
  { name: 'Vicis',          src: '/images/logo-vicis.png'     },
  { name: 'The North Face', src: '/images/logo-northface.png' },
  { name: 'Arm & Hammer',   src: '/images/logo-armhammer.png' },
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
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        {/* Track */}
        <div style={{ height: 100, overflow: 'visible', display: 'flex', alignItems: 'center' }}>
          <div
            className="animate-marquee"
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              whiteSpace: 'nowrap',
              overflow: 'visible',
            }}
          >
            {doubled.map(({ name, src }, i) => (
              <span
                key={i}
                aria-label={name}
                className="marquee-logo-item"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  margin: '0 48px',
                  cursor: 'default',
                  userSelect: 'none',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={name}
                  draggable={false}
                  className="marquee-logo-img"
                  style={{
                    height: '80px',
                    width: '160px',
                    objectFit: 'contain',
                    display: 'block',
                    filter: 'brightness(0) invert(1)',
                    opacity: 1,
                    transition: 'filter 0.3s ease',
                    flexShrink: 0,
                  }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLImageElement).style.filter = 'none'
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLImageElement).style.filter = 'brightness(0) invert(1)'
                  }}
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
