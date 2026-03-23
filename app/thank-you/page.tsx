'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function ThankYou() {
  return (
    <main className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-xl w-full"
      >
        {/* Logo */}
        <div className="flex justify-center mb-10">
          <Link href="/">
            <Image
              src="/images/halftime_hustle_logo_1.jpg"
              alt="Halftime Hustle"
              width={200}
              height={50}
              className="object-contain"
              style={{ mixBlendMode: 'lighten' }}
              priority
            />
          </Link>
        </div>

        {/* Check icon */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          className="w-20 h-20 rounded-full bg-[#FFD700]/20 border border-[#FFD700]/40 flex items-center justify-center mx-auto mb-8"
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M7 18l7 7L29 10" stroke="#FFD700" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.div>

        <h1 className="font-tomorrow text-4xl md:text-5xl font-bold text-white mb-4">
          Your strategy call is{' '}
          <span className="text-gradient-blue">one step away</span>
        </h1>
        <p className="text-white/60 text-lg mb-10 font-tomorrow">
          We received your NIL Strategy Map request. Book your free strategy call below — spots fill up fast.
        </p>

        {/* Calendly Placeholder */}
        <div className="w-full rounded-2xl border border-white/10 bg-[#111] p-10 mb-8">
          <p className="text-white/40 text-sm font-tomorrow mb-2">CALENDLY BOOKING</p>
          <p className="text-white font-tomorrow text-xl font-semibold mb-4">Schedule Your Free NIL Strategy Call</p>
          <p className="text-white/50 text-sm font-tomorrow mb-6">30 minutes · Free · Video call</p>
          <div className="w-full h-[300px] bg-[#0A0A0A] rounded-xl border border-white/5 flex items-center justify-center">
            <p className="text-white/30 text-sm font-tomorrow">[ Calendly embed will go here ]</p>
          </div>
        </div>

        <Link
          href="/"
          className="text-white/40 hover:text-white transition-colors font-tomorrow text-sm"
        >
          ← Back to home
        </Link>
      </motion.div>
    </main>
  )
}
