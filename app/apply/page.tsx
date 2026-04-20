'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ApplicationForm from '@/components/ApplicationForm'

const EASE = [0.22, 1, 0.36, 1] as const

export default function ApplyPage() {
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

        <div className="relative max-w-xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
          >
            {/* Header */}
            <div className="mb-10">
              <h1 className="font-tomorrow font-black text-4xl md:text-5xl text-white leading-tight mb-4">
                Apply for Full Representation
              </h1>
              <p className="font-tomorrow text-white/50 text-base leading-relaxed">
                We only accept a small number of athletes each month. If accepted, you&apos;ll be invited to a strategy call where we map out your first (or next) brand deal.
              </p>
            </div>

            <ApplicationForm />

            {/* Back link */}
            <div className="mt-8 text-center">
              <Link
                href="/work-with-us"
                className="font-tomorrow text-white/30 hover:text-white/60 text-sm transition-colors duration-200"
              >
                Back to pricing
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
