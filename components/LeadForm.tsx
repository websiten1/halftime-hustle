'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function LeadForm() {
  const router = useRouter()
  const [form, setForm] = useState({ name: '', sport: '', followers: '' })
  const [focused, setFocused] = useState<string | null>(null)
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!form.name || !form.sport || !form.followers) return
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 800))
    router.push('/thank-you')
  }

  const inputClass = (field: string) =>
    `w-full bg-[#111] border rounded-xl px-4 py-4 font-tomorrow text-white placeholder-white/25 text-sm transition-all duration-200 outline-none min-h-[52px] ${
      focused === field
        ? 'border-[#FFD700] shadow-[0_0_0_2px_rgba(255,215,0,0.15)]'
        : 'border-white/10 hover:border-white/20'
    }`

  return (
    <section id="lead-form" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1500]/30 to-[#0A0A0A]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#FFD700]/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="will-change-transform"
        >
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#FFD700]/10 border border-[#FFD700]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD700] animate-pulse" />
              <span className="text-[#FFD700] font-tomorrow text-xs font-medium tracking-wide uppercase">
                Limited Spots Available
              </span>
            </div>
            <h2 className="font-tomorrow font-black text-4xl md:text-5xl text-white mb-4">
              Get Your Free<br />
              <span className="text-gradient-blue">NIL Strategy Map</span>
            </h2>
            <p className="font-tomorrow text-white/50 text-base">
              Tell us about yourself. We&apos;ll send your personalized roadmap within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="font-tomorrow text-white/40 text-xs uppercase tracking-wider block mb-2">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
                className={inputClass('name')}
                required
              />
            </div>

            <div>
              <label className="font-tomorrow text-white/40 text-xs uppercase tracking-wider block mb-2">
                Your Sport
              </label>
              <input
                type="text"
                placeholder="e.g. Basketball, Football, Track..."
                value={form.sport}
                onChange={e => setForm(f => ({ ...f, sport: e.target.value }))}
                onFocus={() => setFocused('sport')}
                onBlur={() => setFocused(null)}
                className={inputClass('sport')}
                required
              />
            </div>

            <div>
              <label className="font-tomorrow text-white/40 text-xs uppercase tracking-wider block mb-2">
                Follower Count
              </label>
              <select
                value={form.followers}
                onChange={e => setForm(f => ({ ...f, followers: e.target.value }))}
                onFocus={() => setFocused('followers')}
                onBlur={() => setFocused(null)}
                className={`${inputClass('followers')} appearance-none cursor-pointer`}
                required
              >
                <option value="" disabled className="bg-[#111]">Select your range</option>
                <option value="under-1k" className="bg-[#111]">Under 1,000</option>
                <option value="1k-10k" className="bg-[#111]">1,000 – 10,000</option>
                <option value="10k-50k" className="bg-[#111]">10,000 – 50,000</option>
                <option value="50k+" className="bg-[#111]">50,000+</option>
              </select>
            </div>

            <motion.button
              type="submit"
              disabled={submitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 disabled:opacity-50 text-[#0A0A0A] font-tomorrow font-bold text-base px-6 py-4 rounded-xl transition-colors duration-200 min-h-[56px] mt-2"
            >
              <AnimatePresence mode="wait">
                {submitting ? (
                  <motion.span
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-center gap-2"
                  >
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2"/>
                      <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Sending...
                  </motion.span>
                ) : (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-center gap-2"
                  >
                    Get My Free NIL Strategy Map
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10M8 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <p className="text-center font-tomorrow text-white/25 text-xs pt-2">
              No spam. No credit card. Just your roadmap.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
