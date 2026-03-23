'use client'
import { motion } from 'framer-motion'

// ── Logo components ───────────────────────────────────────────────────────────
// All SVGs use fill="#FFFFFF" directly. Hover is controlled by opacity on wrapper.

// Nike — official swoosh via Simple Icons CDN (white)
const NikeLogo = () => (
  <img
    src="https://cdn.simpleicons.org/nike/ffffff"
    alt="Nike"
    className="h-8 w-auto object-contain"
    draggable={false}
  />
)

// Adidas — official logo via Simple Icons CDN (white)
const AdidasLogo = () => (
  <img
    src="https://cdn.simpleicons.org/adidas/ffffff"
    alt="Adidas"
    className="h-8 w-auto object-contain"
    draggable={false}
  />
)

// The North Face — via Simple Icons CDN (white)
const NorthFaceLogo = () => (
  <img
    src="https://cdn.simpleicons.org/thenorthface/ffffff"
    alt="The North Face"
    className="h-8 w-auto object-contain"
    draggable={false}
  />
)

// On Running — clean wordmark SVG with explicit fill
const OnLogo = () => (
  <svg viewBox="0 0 56 36" className="h-8 w-auto" xmlns="http://www.w3.org/2000/svg">
    <text
      x="2"
      y="28"
      fill="#FFFFFF"
      style={{
        fontFamily: "'Tomorrow', 'Arial Black', Arial, sans-serif",
        fontSize: '28px',
        fontWeight: 700,
        letterSpacing: '-1px',
      }}
    >
      On
    </text>
  </svg>
)

// Hey Dude — bold caps wordmark
const HeyDudeLogo = () => (
  <svg viewBox="0 0 180 36" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg">
    <text
      x="2"
      y="27"
      fill="#FFFFFF"
      style={{
        fontFamily: "'Tomorrow', 'Arial Black', Arial, sans-serif",
        fontSize: '22px',
        fontWeight: 900,
        letterSpacing: '2px',
      }}
    >
      HEY DUDE
    </text>
  </svg>
)

// Vicis — angular caps wordmark (helmet brand)
const VicisLogo = () => (
  <svg viewBox="0 0 110 36" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg">
    <text
      x="2"
      y="27"
      fill="#FFFFFF"
      style={{
        fontFamily: "'Tomorrow', 'Arial Black', Arial, sans-serif",
        fontSize: '24px',
        fontWeight: 800,
        letterSpacing: '4px',
      }}
    >
      VICIS
    </text>
  </svg>
)

// Arm & Hammer — wordmark with small hammer icon
const ArmHammerLogo = () => (
  <svg viewBox="0 0 230 36" className="h-7 w-auto" xmlns="http://www.w3.org/2000/svg">
    {/* Minimal hammer icon */}
    <rect x="2" y="9"  width="14" height="7"  rx="1.5" fill="#FFFFFF" />
    <rect x="6" y="16" width="6"  height="14" rx="1.5" fill="#FFFFFF" />
    <text
      x="24"
      y="27"
      fill="#FFFFFF"
      style={{
        fontFamily: "'Tomorrow', Arial, sans-serif",
        fontSize: '19px',
        fontWeight: 700,
        letterSpacing: '1.5px',
      }}
    >
      ARM &amp; HAMMER
    </text>
  </svg>
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
                style={{ opacity: 0.3 }}
                onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
                onMouseLeave={e => (e.currentTarget.style.opacity = '0.3')}
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
