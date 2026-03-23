'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import faqData from '@/data/faq.json'

interface FAQItem {
  question: string
  answer: string
}

export default function FAQ({ data }: { data?: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const faqs = data || faqData

  return (
    <section id="faq" className="py-32 bg-[#0d0d18] border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-tomorrow text-white/40 text-sm font-medium tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="font-tomorrow font-black text-4xl md:text-5xl text-white">
            Questions? We&apos;ve got answers.
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="will-change-transform"
            >
              <div
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  openIndex === i
                    ? 'border-[#FFD700]/30 bg-[#1a1500]/40'
                    : 'border-white/5 bg-[#111] hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left min-h-[64px]"
                  aria-expanded={openIndex === i}
                >
                  <span className="font-tomorrow font-semibold text-white text-base pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === i ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 w-6 h-6 rounded-full border border-white/20 flex items-center justify-center will-change-transform"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-tomorrow text-white/60 text-sm leading-relaxed px-6 pb-6">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 will-change-transform"
        >
          <p className="font-tomorrow text-white/40 text-sm mb-4">Still have questions?</p>
          <a
            href="/#lead-form"
            className="inline-flex items-center gap-2 text-[#FFD700] hover:text-white font-tomorrow font-semibold text-base transition-colors duration-200"
          >
            Get in touch
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
