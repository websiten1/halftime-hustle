'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Athletes', href: '/#about' },
    { label: 'Brands', href: '/#marquee' },
    { label: 'Process', href: '/#protocol' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Work With Us', href: '/pricing' },
  ]

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'frosted-glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-16 md:h-20 flex items-center justify-between relative">
        {/* Logo — centered on mobile, left-aligned on desktop */}
        <Link href="/" className="flex items-center md:static absolute left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:relative">
          <Image
            src="/images/halftime_hustle_logo.png"
            alt="Halftime Hustle"
            width={160}
            height={40}
            className="object-contain w-24 md:w-40"
            priority
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/60 hover:text-white transition-colors font-tomorrow text-sm font-medium"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="/#lead-form"
            className="hidden md:inline-flex items-center gap-2 bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A0A0A] font-tomorrow font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 hover:scale-105 animate-pulse_blue min-h-[44px]"
          >
            Get My NIL Strategy
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-white"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
              <span className={`h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`}/>
              <span className={`h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden frosted-glass border-t border-white/5 px-6 py-4"
        >
          <div className="flex justify-end mb-2">
            <button
              onClick={() => setMenuOpen(false)}
              className="text-white/60 hover:text-white p-2 text-xl leading-none"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center py-3 text-white/70 hover:text-white font-tomorrow text-base border-b border-white/5 min-h-[48px]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="/#lead-form"
            onClick={() => setMenuOpen(false)}
            className="mt-4 w-full flex items-center justify-center bg-[#FFD700] text-[#0A0A0A] font-tomorrow font-semibold text-sm px-5 py-3 rounded-xl min-h-[48px]"
          >
            Get My NIL Strategy
          </a>
        </motion.div>
      )}
    </motion.nav>
  )
}
