'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const EASE = [0.22, 1, 0.36, 1] as const

// TODO: Replace REPLACE_WITH_YOUR_FORMSPREE_ID with your actual Formspree form ID
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_YOUR_FORMSPREE_ID'

type FormState = 'idle' | 'submitting' | 'success' | 'error'

export default function ApplyPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    sport: '',
    followers: '',
    instagram: '',
    reason: '',
  })
  const [focused, setFocused] = useState<string | null>(null)
  const [formState, setFormState] = useState<FormState>('idle')

  const inputClass = (field: string) =>
    `w-full bg-[#111] border rounded-xl px-4 font-tomorrow text-white placeholder-white/25 text-sm transition-all duration-200 outline-none min-h-[52px] ${
      focused === field
        ? 'border-[#FFD700] shadow-[0_0_0_2px_rgba(255,215,0,0.15)]'
        : 'border-white/10 hover:border-white/20'
    }`

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState('submitting')

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          sport: form.sport,
          followers: form.followers,
          instagram: form.instagram,
          reason: form.reason,
        }),
      })

      if (res.ok) {
        setFormState('success')
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

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
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="font-tomorrow text-[#FFD700] text-sm font-medium tracking-widest uppercase mb-4"
              >
                Elite Tier
              </motion.p>
              <h1 className="font-tomorrow font-black text-4xl md:text-5xl text-white leading-tight mb-4">
                Apply for Full Representation
              </h1>
              <p className="font-tomorrow text-white/50 text-base leading-relaxed">
                I only take on athletes I know I can get results for. Tell me about yourself.
              </p>
            </div>

            {/* Success State */}
            {formState === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="rounded-2xl border border-[#FFD700]/30 bg-[#1a1500]/40 p-8"
              >
                <p className="font-tomorrow text-white text-base leading-relaxed mb-8">
                  Your application is in. I&apos;ll review it personally and get back to you
                  within 48 hours. In the meantime, you can reserve your spot below.
                </p>
                <a
                  href="https://whop.com/joined/halftime-hustle-nil/products/elite-e1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#0A0A0A] font-tomorrow font-bold text-base px-6 py-4 rounded-xl transition-all duration-200 min-h-[52px]"
                >
                  Reserve My Spot on Whop
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </motion.div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Error message */}
                {formState === 'error' && (
                  <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3">
                    <p className="font-tomorrow text-red-400 text-sm">
                      Something went wrong. Email me directly at{' '}
                      <a
                        href="mailto:cristianxbaul19@gmail.com"
                        className="underline hover:text-red-300 transition-colors"
                      >
                        cristianxbaul19@gmail.com
                      </a>
                    </p>
                  </div>
                )}

                {/* Full Name */}
                <div>
                  <label className="font-tomorrow text-white/40 text-xs uppercase tracking-wider block mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    className={`${inputClass('name')} py-4`}
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="font-tomorrow text-white/40 text-xs uppercase tracking-wider block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    className={`${inputClass('email')} py-4`}
                    required
                  />
                </div>

                {/* Sport */}
                <div>
                  <label className="font-tomorrow text-white/40 text-xs uppercase tracking-wider block mb-2">
                    Sport
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Basketball, Football, Track..."
                    value={form.sport}
                    onChange={e => setForm(f => ({ ...f, sport: e.target.value }))}
                    onFocus={() => setFocused('sport')}
                    onBlur={() => setFocused(null)}
                    className={`${inputClass('sport')} py-4`}
                    required
                  />
                </div>

                {/* Follower Count */}
                <div>
                  <label className="font-tomorrow text-white/40 text-xs uppercase tracking-wider block mb-2">
                    Follower Count
                  </label>
                  <select
                    value={form.followers}
                    onChange={e => setForm(f => ({ ...f, followers: e.target.value }))}
                    onFocus={() => setFocused('followers')}
                    onBlur={() => setFocused(null)}
                    className={`${inputClass('followers')} py-4 appearance-none cursor-pointer`}
                    required
                  >
                    <option value="" disabled className="bg-[#111]">Select your range</option>
                    <option value="Under 1K" className="bg-[#111]">Under 1K</option>
                    <option value="1K–5K" className="bg-[#111]">1K–5K</option>
                    <option value="5K–10K" className="bg-[#111]">5K–10K</option>
                    <option value="10K–50K" className="bg-[#111]">10K–50K</option>
                    <option value="50K+" className="bg-[#111]">50K+</option>
                  </select>
                </div>

                {/* Instagram Handle */}
                <div>
                  <label className="font-tomorrow text-white/40 text-xs uppercase tracking-wider block mb-2">
                    Instagram Handle
                  </label>
                  <input
                    type="text"
                    placeholder="@yourhandle"
                    value={form.instagram}
                    onChange={e => setForm(f => ({ ...f, instagram: e.target.value }))}
                    onFocus={() => setFocused('instagram')}
                    onBlur={() => setFocused(null)}
                    className={`${inputClass('instagram')} py-4`}
                    required
                  />
                </div>

                {/* Why full representation */}
                <div>
                  <label className="font-tomorrow text-white/40 text-xs uppercase tracking-wider block mb-2">
                    Why do you want full representation?
                  </label>
                  <textarea
                    placeholder="Tell me where you're at and where you want to go..."
                    value={form.reason}
                    onChange={e => setForm(f => ({ ...f, reason: e.target.value }))}
                    onFocus={() => setFocused('reason')}
                    onBlur={() => setFocused(null)}
                    rows={4}
                    className={`${inputClass('reason')} py-4 resize-none min-h-[120px]`}
                    required
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  disabled={formState === 'submitting'}
                  whileHover={{ scale: formState === 'submitting' ? 1 : 1.02 }}
                  whileTap={{ scale: formState === 'submitting' ? 1 : 0.98 }}
                  className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 disabled:opacity-60 text-[#0A0A0A] font-tomorrow font-bold text-base px-6 py-4 rounded-xl transition-colors duration-200 min-h-[56px] mt-2 flex items-center justify-center gap-2"
                >
                  {formState === 'submitting' ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.3" strokeWidth="2" />
                        <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit My Application'
                  )}
                </motion.button>
              </form>
            )}

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
