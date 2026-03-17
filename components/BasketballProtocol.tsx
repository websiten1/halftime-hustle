'use client'
import { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion'

function Basketball({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 80" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="ball-grad" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stopColor="#FF8C1A" />
          <stop offset="60%" stopColor="#E85D04" />
          <stop offset="100%" stopColor="#9D3B00" />
        </radialGradient>
        <radialGradient id="ball-shine" cx="28%" cy="24%" r="38%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.22)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <circle cx="40" cy="40" r="39" fill="url(#ball-grad)" />
      <circle cx="40" cy="40" r="39" fill="url(#ball-shine)" />
      <path d="M40 1 C55 15,60 28,60 40 C60 52,55 65,40 79" stroke="rgba(0,0,0,0.28)" strokeWidth="2.5" fill="none"/>
      <path d="M40 1 C25 15,20 28,20 40 C20 52,25 65,40 79" stroke="rgba(0,0,0,0.28)" strokeWidth="2.5" fill="none"/>
      <path d="M1 40 C15 25,28 20,40 20 C52 20,65 25,79 40" stroke="rgba(0,0,0,0.28)" strokeWidth="2.5" fill="none"/>
      <path d="M1 40 C15 55,28 60,40 60 C52 60,65 55,79 40" stroke="rgba(0,0,0,0.28)" strokeWidth="2.5" fill="none"/>
    </svg>
  )
}

function Net() {
  return (
    <svg viewBox="0 0 120 90" fill="none" className="w-32 md:w-40">
      <rect x="22" y="2" width="76" height="18" rx="2"
        stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" fill="rgba(255,255,255,0.02)"/>
      <ellipse cx="60" cy="28" rx="30" ry="6" stroke="#1A6EFF" strokeWidth="3" fill="none"
        style={{ filter: 'drop-shadow(0 0 8px rgba(26,110,255,0.9))' }}/>
      {[0,1,2,3,4,5,6].map(i => (
        <line key={i} x1={30 + i * 10} y1="28" x2={33 + i * 9} y2="82"
          stroke="#1A6EFF" strokeWidth="1.2" opacity="0.45"/>
      ))}
      <path d="M30 44 Q45 41 60 44 Q75 47 90 44" stroke="#1A6EFF" strokeWidth="1" fill="none" opacity="0.45"/>
      <path d="M31 58 Q46 55 60 58 Q74 61 89 58" stroke="#1A6EFF" strokeWidth="1" fill="none" opacity="0.3"/>
      <path d="M32 72 Q47 69 60 72 Q73 75 88 72" stroke="#1A6EFF" strokeWidth="1" fill="none" opacity="0.15"/>
    </svg>
  )
}

const STEPS = [
  {
    num: '01', title: 'Magnetize', color: '#1A6EFF',
    subtitle: 'Create what brands crave',
    body: 'We analyze your audience, identify your brand DNA, and build a content system that turns scrolls into sponsorships.',
  },
  {
    num: '02', title: 'Portfolio', color: '#00E5CC',
    subtitle: 'The professional pitch',
    body: 'Your NIL media kit, sponsor deck, and outreach strategy — designed to make brands say yes before you finish talking.',
  },
  {
    num: '03', title: 'Capture', color: '#1A6EFF',
    subtitle: 'Turning attention into contracts',
    body: 'We identify the right brands, warm the relationship, and help you close deals. You play. We pitch.',
  },
]

function easeInOut(t: number): number {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
}

export default function BasketballProtocol() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const BALL_SIZE = 140
  const R = BALL_SIZE / 2

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  // Imperative ball positioning — reads actual viewport on each scroll tick
  const ballX = useMotionValue(0)
  const ballY = useMotionValue(0)

  useEffect(() => {
    const setInitial = () => {
      ballX.set(window.innerWidth * 0.08 - R)
      ballY.set((window.innerHeight - 180) * 0.68 - R)
    }
    setInitial()

    const unsub = scrollYProgress.on('change', (p) => {
      const vw = window.innerWidth
      const areaH = window.innerHeight - 180

      const sx = vw * 0.08 - R
      const mx = vw * 0.50 - R
      const ex = vw * 0.85 - R
      const sy = areaH * 0.68 - R
      const py = 55 - R

      // X: ease in-out through 3 waypoints
      const nx = p < 0.5
        ? sx + (mx - sx) * easeInOut(p * 2)
        : mx + (ex - mx) * easeInOut((p - 0.5) * 2)

      // Y: sine arc — peaks at 50% scroll
      const ny = sy - Math.sin(p * Math.PI) * (sy - py)

      ballX.set(nx)
      ballY.set(ny)
    })
    return unsub
  }, [scrollYProgress, ballX, ballY, R])

  const ballRotate = useTransform(scrollYProgress, [0, 1], [0, 900])
  const ballScale  = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.25, 0.95])

  // Step crossfades
  const s1Op = useTransform(scrollYProgress, [0, 0.08, 0.38], [1, 1, 0])
  const s2Op = useTransform(scrollYProgress, [0.28, 0.42, 0.60, 0.72], [0, 1, 1, 0])
  const s3Op = useTransform(scrollYProgress, [0.62, 0.78, 1], [0, 1, 1])
  const netOp = useTransform(scrollYProgress, [0.70, 0.88], [0, 1])

  return (
    <section
      id="protocol"
      ref={sectionRef}
      style={{ height: '200vh' }}
      className="relative border-t border-white/5"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-[#0A0A0A]">

        {/* Dot grid texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.08]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(26,110,255,0.6) 1px, transparent 1px)',
            backgroundSize: '44px 44px',
          }}
        />

        {/* Header */}
        <div className="pt-16 pb-2 text-center px-6 relative z-10">
          <p className="text-xs tracking-widest uppercase mb-2"
            style={{ color: '#1A6EFF', fontFamily: 'Inter, sans-serif' }}>
            The Process
          </p>
          <h2 className="font-black text-4xl md:text-5xl text-white"
            style={{ fontFamily: 'Lexend, sans-serif' }}>
            The Halftime Protocol
          </h2>
        </div>

        {/* Animation stage */}
        <div className="absolute left-0 right-0" style={{ top: 140, bottom: 40 }}>

          {/* Glowing arc path — matches ball trajectory */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 500" preserveAspectRatio="none">
            <defs>
              <linearGradient id="arc-g" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%"   stopColor="#1A6EFF" stopOpacity="0.45"/>
                <stop offset="50%"  stopColor="#00E5CC" stopOpacity="0.9"/>
                <stop offset="100%" stopColor="#1A6EFF" stopOpacity="0.45"/>
              </linearGradient>
              <filter id="glow-f">
                <feGaussianBlur stdDeviation="5" result="b"/>
                <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
              </filter>
            </defs>
            {/* Glow */}
            <path d="M 80 420 C 200 170, 380 50, 500 50 C 620 50, 800 170, 880 420"
              stroke="#00E5CC" strokeWidth="4" fill="none" opacity="0.18" filter="url(#glow-f)"/>
            {/* Line */}
            <path d="M 80 420 C 200 170, 380 50, 500 50 C 620 50, 800 170, 880 420"
              stroke="url(#arc-g)" strokeWidth="1.5" fill="none"
              strokeDasharray="8 12" opacity="0.65"/>
          </svg>

          {/* Step 1 — bottom-left */}
          <motion.div style={{
            opacity: s1Op,
            position: 'absolute', left: '3%', bottom: '12%', maxWidth: 260,
          }}>
            <StepText step={STEPS[0]} />
          </motion.div>

          {/* Step 2 — top-center */}
          <motion.div style={{
            opacity: s2Op,
            position: 'absolute', left: '50%', top: '4%', maxWidth: 260,
            x: '-50%', textAlign: 'center',
          }}>
            <StepText step={STEPS[1]} center />
          </motion.div>

          {/* Step 3 — bottom-right */}
          <motion.div style={{
            opacity: s3Op,
            position: 'absolute', right: '3%', bottom: '12%', maxWidth: 260,
            textAlign: 'right',
          }}>
            <StepText step={STEPS[2]} />
          </motion.div>

          {/* Net — bottom-right, appears with step 3 */}
          <motion.div style={{
            opacity: netOp,
            position: 'absolute', right: '4%', bottom: '8%',
          }}>
            <Net />
          </motion.div>

          {/* ── The Basketball ── */}
          <motion.div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              x: ballX,
              y: ballY,
              rotate: ballRotate,
              scale: ballScale,
            }}
          >
            <div style={{
              width: BALL_SIZE,
              height: BALL_SIZE,
              filter: 'drop-shadow(0 16px 40px rgba(232,93,4,0.7)) drop-shadow(0 0 20px rgba(232,93,4,0.35))',
            }}>
              <Basketball className="w-full h-full" />
            </div>
          </motion.div>
        </div>

        {/* Scroll progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/5">
          <motion.div
            style={{ scaleX: scrollYProgress, background: 'linear-gradient(90deg,#1A6EFF,#00E5CC)' }}
            className="h-full origin-left"
          />
        </div>
      </div>
    </section>
  )
}

function StepText({ step, center }: { step: typeof STEPS[0]; center?: boolean }) {
  return (
    <div>
      <span style={{
        display: 'block', lineHeight: 1, marginBottom: 4,
        fontFamily: 'Lexend,sans-serif', fontWeight: 900, fontSize: 72,
        color: 'rgba(255,255,255,0.04)',
      }}>
        {step.num}
      </span>
      <h3 style={{ fontFamily: 'Lexend,sans-serif', fontWeight: 900, fontSize: 26, color: '#fff', marginBottom: 4 }}>
        {step.title}
      </h3>
      <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: step.color, marginBottom: 8 }}>
        {step.subtitle}
      </p>
      <p style={{ fontFamily: 'Inter,sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
        {step.body}
      </p>
    </div>
  )
}
