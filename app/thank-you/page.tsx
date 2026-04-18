'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const EASE = [0.22, 1, 0.36, 1] as const

export default function ThankYou() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 relative pt-40 pb-24 overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% 0%, #1a1a00 0%, #0a0a0a 70%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,215,0,0.5) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />

        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {/* Check icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 rounded-full bg-[#FFD700]/20 border border-[#FFD700]/40 flex items-center justify-center mx-auto mb-10"
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <path d="M7 18l7 7L29 10" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
              className="font-tomorrow font-black text-5xl md:text-6xl text-white mb-5"
            >
              You&apos;re in.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: EASE }}
              className="font-tomorrow text-white/60 text-lg md:text-xl leading-relaxed mb-14 max-w-lg mx-auto"
            >
              I&apos;ll personally reach out within 24 hours to get you started. Keep an eye on
              your inbox.
            </motion.p>

            {/* Video placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
              className="w-full mb-14"
            >
              {/* TODO: Replace this div with your video embed (YouTube, Vimeo, or Loom) */}
              <div
                className="w-full rounded-2xl flex items-center justify-center"
                style={{
                  aspectRatio: '16/9',
                  border: '2px dashed #FFD700',
                  background: 'rgba(255,215,0,0.04)',
                }}
              >
                <p className="font-tomorrow text-[#FFD700]/50 text-sm tracking-wide">
                  [ Coach Cris video coming soon ]
                </p>
              </div>
            </motion.div>

            {/* Social follow section */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease: EASE }}
              className="space-y-4"
            >
              <p className="font-tomorrow text-white/50 text-base">
                While you wait, follow along:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                {/* TODO: Replace the href below with your actual Instagram URL */}
                <a
                  href="https://instagram.com/halftime_hustle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-tomorrow font-medium text-sm text-white/60 hover:text-white transition-colors duration-200 min-h-[48px] px-4"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                  @halftime_hustle
                </a>

                {/* TODO: Replace the href below with your actual TikTok / YouTube / Twitter URL */}
                <a
                  href="https://instagram.com/halftime_hustle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-tomorrow font-medium text-sm text-white/60 hover:text-white transition-colors duration-200 min-h-[48px] px-4"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.67.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" fill="currentColor" />
                  </svg>
                  Follow on X
                </a>
              </div>
            </motion.div>

            {/* Back link */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.55, ease: EASE }}
              className="mt-12"
            >
              <Link
                href="/"
                className="font-tomorrow text-white/25 hover:text-white/50 text-sm transition-colors duration-200"
              >
                Back to home
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
