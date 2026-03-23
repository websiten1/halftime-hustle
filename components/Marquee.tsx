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
    <section id="marquee" className="py-16 border-y border-white/5 overflow-hidden bg-[#0A0A0A]">
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

        {/* Scrolling row — fixed 80px tall */}
        <div style={{ height: 80, overflow: 'hidden' }}>
          <div
            className="animate-marquee"
            style={{
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              whiteSpace: 'nowrap',
            }}
          >
            {doubled.map(({ name, src }, i) => (
              <LogoItem key={i} name={name} src={src} />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .marquee-logo {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin: 0 40px;
          cursor: default;
          user-select: none;
          flex-shrink: 0;
        }
        .marquee-logo img {
          height: 32px;
          width: auto !important;
          object-fit: contain;
          display: block;
          filter: brightness(0) invert(1);
          opacity: 0.6;
          transition: opacity 0.3s ease, filter 0.3s ease;
        }
        @media (min-width: 768px) {
          .marquee-logo img {
            height: 40px;
          }
          .marquee-logo {
            margin: 0 64px;
          }
        }
        .marquee-logo:hover img {
          opacity: 1;
          filter: none;
        }
      `}</style>
    </section>
  )
}

function LogoItem({ name, src }: { name: string; src: string }) {
  return (
    <span className="marquee-logo" aria-label={name}>
      <img src={src} alt={name} draggable={false} />
    </span>
  )
}
