'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

const navLinks = [
  { label: 'Athletes', href: '/#about' },
  { label: 'Brands', href: '/#marquee' },
  { label: 'Process', href: '/#protocol' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Pricing', href: '/pricing' },
]

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left: Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[#1A6EFF] flex items-center justify-center">
                <span className="text-white font-lexend font-black text-sm">HH</span>
              </div>
              <span className="font-lexend font-bold text-white text-lg tracking-tight">
                Halftime Hustle
              </span>
            </Link>
            <p className="font-inter text-white/40 text-sm leading-relaxed max-w-xs">
              Building athlete brands that outlast the game.
            </p>
          </div>

          {/* Center: Nav */}
          <div>
            <p className="font-inter text-white/30 text-xs tracking-widest uppercase mb-4">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-inter text-white/50 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact */}
          <div>
            <p className="font-inter text-white/30 text-xs tracking-widest uppercase mb-4">Connect</p>
            <div className="space-y-3">
              <a
                href="https://instagram.com/halftime_hustle"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-inter text-white/50 hover:text-white text-sm transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
                @halftime_hustle
              </a>
              <a
                href="mailto:hello@halftimehustle.com"
                className="flex items-center gap-2 font-inter text-white/50 hover:text-white text-sm transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M2 8l10 6 10-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                hello@halftimehustle.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-white/25 text-xs">
            © {new Date().getFullYear()} Halftime Hustle. All rights reserved.
          </p>
          <p className="font-inter text-white/15 text-xs">
            Built for athletes who bet on themselves.
          </p>
        </div>
      </div>
    </footer>
  )
}
