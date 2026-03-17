'use client'
import { motion } from 'framer-motion'

export default function MobileCTA() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-4 will-change-transform"
      style={{
        background: 'linear-gradient(to top, rgba(10,10,10,1) 0%, rgba(10,10,10,0.95) 60%, rgba(10,10,10,0) 100%)',
        paddingBottom: 'calc(env(safe-area-inset-bottom, 0px) + 16px)',
      }}
    >
      <a
        href="#lead-form"
        className="w-full flex items-center justify-center gap-2 bg-[#1A6EFF] text-white font-lexend font-bold text-base px-6 py-4 rounded-2xl min-h-[56px] shadow-lg shadow-[#1A6EFF]/30"
      >
        Get My NIL Strategy
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>
    </motion.div>
  )
}
