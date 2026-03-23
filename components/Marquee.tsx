'use client'
import { motion } from 'framer-motion'

// All logos are rendered white on the dark background.
// For PNGs/SVGs with white backgrounds and dark artwork:
//   filter: invert(1) turns dark→white and white→black
//   mix-blend-mode: screen makes the black areas invisible against the dark page
// For Nike SVG (transparent bg, dark path):
//   filter: brightness(0) invert(1) makes the path white

const WHITE_FILTER = 'invert(1)'
const WHITE_FILTER_BLEND: React.CSSProperties = {
  filter: WHITE_FILTER,
  mixBlendMode: 'screen',
}

const NikeLogo = () => (
  <img
    src="/images/logo-nike.svg"
    alt="Nike"
    className="h-7 w-auto object-contain"
    style={{ filter: 'brightness(0) invert(1)' }}
    draggable={false}
  />
)

const AdidasLogo = () => (
  <img
    src="/images/logo-adidas.png"
    alt="Adidas"
    className="h-10 w-auto object-contain"
    style={WHITE_FILTER_BLEND}
    draggable={false}
  />
)

const NorthFaceLogo = () => (
  <img
    src="/images/logo-northface.png"
    alt="The North Face"
    className="h-10 w-auto object-contain"
    style={WHITE_FILTER_BLEND}
    draggable={false}
  />
)

const OnLogo = () => (
  <img
    src="/images/logo-on.png"
    alt="On"
    className="h-10 w-auto object-contain"
    style={WHITE_FILTER_BLEND}
    draggable={false}
  />
)

const HeyDudeLogo = () => (
  <img
    src="/images/logo-heydude.svg"
    alt="Hey Dude"
    className="h-10 w-auto object-contain"
    style={WHITE_FILTER_BLEND}
    draggable={false}
  />
)

const VicisLogo = () => (
  <img
    src="/images/logo-vicis.png"
    alt="Vicis"
    className="h-10 w-auto object-contain"
    style={WHITE_FILTER_BLEND}
    draggable={false}
  />
)

const ArmHammerLogo = () => (
  <img
    src="/images/logo-armhammer.png"
    alt="Arm & Hammer"
    className="h-10 w-auto object-contain"
    style={WHITE_FILTER_BLEND}
    draggable={false}
  />
)

// ── Brand list ────────────────────────────────────────────────────────────────

const brands = [
  { name: 'Nike',           Logo: NikeLogo },
  { name: 'Adidas',         Logo: AdidasLogo },
  { name: 'On',             Logo: OnLogo },
  { name: 'Hey Dude',       Logo: HeyDudeLogo },
  { name: 'Vicis',          Logo: VicisLogo },
  { name: 'The North Face', Logo: NorthFaceLogo },
  { name: 'Arm & Hammer',   Logo: ArmHammerLogo },
]

// ── Component ────────────────────────────────────────────────────────────────

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
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

        <div className="flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap items-center">
            {doubled.map(({ name, Logo }, i) => (
              <div
                key={i}
                className="inline-flex items-center mx-12 cursor-default select-none transition-opacity duration-300"
                style={{ opacity: 0.35 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.35')}
                aria-label={name}
              >
                <Logo />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
