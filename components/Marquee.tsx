'use client'
import { motion } from 'framer-motion'

// ── Logo components ───────────────────────────────────────────────────────────
// All logos use fill="currentColor" so a single CSS color controls them.
// Wrapper handles opacity fade-in/out on hover.

// Nike swoosh (Simple Icons path, viewBox 0 0 24 24)
const NikeSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-auto" aria-label="Nike">
    <path d="M24 7.8L6.44 15.28a7.64 7.64 0 01-3.67.92C1.32 16.2.36 15.58 0 14.5c-.31-.92.15-2 1.3-2.93.93-.77 2.18-1.39 3.46-1.85L24 3.92V7.8z"/>
  </svg>
)

// Adidas 3-bar performance mark (mountain shape)
const AdidasSVG = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-auto" aria-label="Adidas">
    <path d="M13.92 0L7.85 10.77H0l3.08 5.31h6.15l-3.08 5.31h6.15L24 0z"/>
  </svg>
)

// On Running wordmark — the brand's distinctive "On" logotype
const OnSVG = () => (
  <svg viewBox="0 0 64 30" fill="currentColor" className="h-7 w-auto" aria-label="On">
    <text
      x="0" y="24"
      fontFamily="'Tomorrow', Arial, sans-serif"
      fontSize="26"
      fontWeight="700"
      letterSpacing="-1"
    >
      On
    </text>
  </svg>
)

// Hey Dude wordmark
const HeyDudeSVG = () => (
  <svg viewBox="0 0 140 30" fill="currentColor" className="h-6 w-auto" aria-label="Hey Dude">
    <text
      x="0" y="23"
      fontFamily="'Tomorrow', Arial Black, sans-serif"
      fontSize="20"
      fontWeight="900"
      letterSpacing="2"
    >
      HEY DUDE
    </text>
  </svg>
)

// Vicis wordmark (helmet / safety brand — clean bold caps)
const VicisSVG = () => (
  <svg viewBox="0 0 90 30" fill="currentColor" className="h-6 w-auto" aria-label="Vicis">
    <text
      x="0" y="23"
      fontFamily="'Tomorrow', Arial Black, sans-serif"
      fontSize="22"
      fontWeight="800"
      letterSpacing="4"
    >
      VICIS
    </text>
  </svg>
)

// The North Face — stacked semicircle + wordmark (simplified to wordmark for marquee)
const NorthFaceSVG = () => (
  <svg viewBox="0 0 200 30" fill="currentColor" className="h-5 w-auto" aria-label="The North Face">
    {/* Simplified half-dome icon */}
    <path d="M12 4 A8 8 0 0 1 28 4 L28 8 L20 2 L12 8 Z"/>
    <text
      x="34" y="22"
      fontFamily="'Tomorrow', Arial, sans-serif"
      fontSize="17"
      fontWeight="700"
      letterSpacing="2"
    >
      THE NORTH FACE
    </text>
  </svg>
)

// Arm & Hammer — wordmark + minimal hammer icon
const ArmHammerSVG = () => (
  <svg viewBox="0 0 190 30" fill="currentColor" className="h-6 w-auto" aria-label="Arm & Hammer">
    {/* Tiny hammer silhouette */}
    <rect x="0" y="8" width="12" height="6" rx="1"/>
    <rect x="4" y="14" width="4" height="12" rx="1"/>
    <text
      x="18" y="23"
      fontFamily="'Tomorrow', Arial, sans-serif"
      fontSize="16"
      fontWeight="700"
      letterSpacing="1.5"
    >
      ARM &amp; HAMMER
    </text>
  </svg>
)

// ── Brand list ────────────────────────────────────────────────────────────────

const brands = [
  { name: 'Nike',          Logo: NikeSVG },
  { name: 'Adidas',        Logo: AdidasSVG },
  { name: 'On',            Logo: OnSVG },
  { name: 'Hey Dude',      Logo: HeyDudeSVG },
  { name: 'Vicis',         Logo: VicisSVG },
  { name: 'The North Face', Logo: NorthFaceSVG },
  { name: 'Arm & Hammer',  Logo: ArmHammerSVG },
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
                className="inline-flex items-center mx-12 cursor-default select-none transition-all duration-300"
                style={{ color: 'rgba(255,255,255,0.25)' }}
                onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,1)')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}
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
