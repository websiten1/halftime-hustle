'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaqabbze'
const EASE = [0.22, 1, 0.36, 1] as const

type FormState = 'idle' | 'submitting' | 'success' | 'error'

type FormData = {
  fullName: string
  instagram: string
  sportLevel: string
  followers: string
  currentSituation: string
  goalsChallenge: string
  urgency: string
  readyToInvest: string
  budgetRange: string
  startWhen: string
  whyChooseYou: string
}

const initialForm: FormData = {
  fullName: '',
  instagram: '',
  sportLevel: '',
  followers: '',
  currentSituation: '',
  goalsChallenge: '',
  urgency: '',
  readyToInvest: '',
  budgetRange: '',
  startWhen: '',
  whyChooseYou: '',
}

export default function ApplicationForm() {
  const [form, setForm] = useState<FormData>(initialForm)
  const [focused, setFocused] = useState<string | null>(null)
  const [formState, setFormState] = useState<FormState>('idle')

  const inputClass = (field: string) =>
    `w-full bg-[#1A1A1A] border rounded-xl px-4 font-tomorrow text-white placeholder-white/25 text-sm transition-all duration-200 outline-none min-h-[52px] ${
      focused === field
        ? 'border-[#FFD700] shadow-[0_0_0_2px_rgba(255,215,0,0.15)]'
        : 'border-white/10 hover:border-white/20'
    }`

  const textareaClass = (field: string) =>
    `w-full bg-[#1A1A1A] border rounded-xl px-4 py-4 font-tomorrow text-white placeholder-white/25 text-sm transition-all duration-200 outline-none resize-none ${
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
          'Full Name': form.fullName,
          'Instagram Handle': form.instagram,
          'Sport + Level': form.sportLevel,
          'Current Follower Count': form.followers,
          'Current Situation': form.currentSituation,
          'Goals + Challenges': form.goalsChallenge,
          'Urgency': form.urgency,
          'Ready to Invest': form.readyToInvest,
          'Budget Range': form.budgetRange,
          'Ready to Start': form.startWhen,
          'Why Choose You': form.whyChooseYou,
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

  const sectionDivider = (
    <div className="border-t border-white/10 my-8" />
  )

  if (formState === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: EASE }}
        className="rounded-2xl border border-[#FFD700]/30 bg-[#1a1500]/40 p-8"
      >
        <p className="font-tomorrow text-white text-base leading-relaxed mb-8">
          Your application is in. I&apos;ll review it personally and get back to you within 48 hours. In the meantime, you can reserve your spot below.
        </p>
        <a
          href="https://whop.com/joined/halftime-hustle-nil/products/elite-e1/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-[#000000] font-tomorrow font-bold text-base px-6 py-4 rounded-xl transition-all duration-200 min-h-[52px]"
        >
          Reserve My Spot on Whop
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-0">
      {/* Error message */}
      {formState === 'error' && (
        <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 mb-6">
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

      {/* SECTION 1 — Basic Information */}
      <div>
        <p className="font-tomorrow text-[#FFD700] text-xs font-semibold uppercase tracking-widest mb-6">
          Basic Information
        </p>

        <div className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="font-tomorrow text-white/40 text-xs uppercase tracking-wider block mb-2">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              value={form.fullName}
              onChange={e => setForm(f => ({ ...f, fullName: e.target.value }))}
              onFocus={() => setFocused('fullName')}
              onBlur={() => setFocused(null)}
              className={`${inputClass('fullName')} py-4`}
              required
            />
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

          {/* Sport + Level */}
          <div>
            <label className="font-tomorrow text-white/40 text-xs uppercase tracking-wider block mb-2">
              Sport + Level
            </label>
            <input
              type="text"
              placeholder="e.g. Basketball — College"
              value={form.sportLevel}
              onChange={e => setForm(f => ({ ...f, sportLevel: e.target.value }))}
              onFocus={() => setFocused('sportLevel')}
              onBlur={() => setFocused(null)}
              className={`${inputClass('sportLevel')} py-4`}
              required
            />
          </div>

          {/* Follower Count */}
          <div>
            <label className="font-tomorrow text-white/40 text-xs uppercase tracking-wider block mb-2">
              Current Follower Count
            </label>
            <input
              type="text"
              placeholder="e.g. 5,200"
              value={form.followers}
              onChange={e => setForm(f => ({ ...f, followers: e.target.value }))}
              onFocus={() => setFocused('followers')}
              onBlur={() => setFocused(null)}
              className={`${inputClass('followers')} py-4`}
              required
            />
          </div>
        </div>
      </div>

      {sectionDivider}

      {/* SECTION 2 — Current Situation */}
      <div>
        <p className="font-tomorrow text-[#FFD700] text-xs font-semibold uppercase tracking-widest mb-6">
          Current Situation
        </p>
        <div>
          <label className="font-tomorrow text-white text-sm font-medium block mb-1">
            Where are you at right now with content and brand deals?
          </label>
          <p className="font-tomorrow text-white/40 text-xs mb-3">
            Include how often you post, if you&apos;ve worked with brands before, and what&apos;s not working.
          </p>
          <textarea
            rows={4}
            value={form.currentSituation}
            onChange={e => setForm(f => ({ ...f, currentSituation: e.target.value }))}
            onFocus={() => setFocused('currentSituation')}
            onBlur={() => setFocused(null)}
            className={textareaClass('currentSituation')}
            required
          />
        </div>
      </div>

      {sectionDivider}

      {/* SECTION 3 — Goals + Challenges */}
      <div>
        <p className="font-tomorrow text-[#FFD700] text-xs font-semibold uppercase tracking-widest mb-6">
          Goals + Challenges
        </p>
        <div>
          <label className="font-tomorrow text-white text-sm font-medium block mb-3">
            What&apos;s your biggest goal with your brand, and what&apos;s been stopping you from reaching it?
          </label>
          <textarea
            rows={4}
            value={form.goalsChallenge}
            onChange={e => setForm(f => ({ ...f, goalsChallenge: e.target.value }))}
            onFocus={() => setFocused('goalsChallenge')}
            onBlur={() => setFocused(null)}
            className={textareaClass('goalsChallenge')}
            required
          />
        </div>
      </div>

      {sectionDivider}

      {/* SECTION 4 — Urgency */}
      <div>
        <p className="font-tomorrow text-[#FFD700] text-xs font-semibold uppercase tracking-widest mb-6">
          Urgency
        </p>
        <div>
          <label className="font-tomorrow text-white text-sm font-medium block mb-3">
            Why is now the time for you to figure this out?
          </label>
          <textarea
            rows={3}
            value={form.urgency}
            onChange={e => setForm(f => ({ ...f, urgency: e.target.value }))}
            onFocus={() => setFocused('urgency')}
            onBlur={() => setFocused(null)}
            className={textareaClass('urgency')}
            required
          />
        </div>
      </div>

      {sectionDivider}

      {/* SECTION 5 — Investment + Budget */}
      <div>
        <p className="font-tomorrow text-[#FFD700] text-xs font-semibold uppercase tracking-widest mb-6">
          Investment + Budget
        </p>

        <div className="space-y-6">
          <div>
            <label className="font-tomorrow text-white text-sm font-medium block mb-3">
              If accepted, are you ready to invest in mentorship to land brand deals faster?
            </label>
            <div className="space-y-3">
              {['Yes', 'No'].map(option => (
                <label
                  key={option}
                  className="flex items-center gap-3 cursor-pointer min-h-[48px] group"
                >
                  <input
                    type="radio"
                    name="readyToInvest"
                    value={option}
                    checked={form.readyToInvest === option}
                    onChange={e => setForm(f => ({ ...f, readyToInvest: e.target.value }))}
                    className="sr-only"
                    required
                  />
                  <span
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                      form.readyToInvest === option
                        ? 'border-[#FFD700] bg-[#FFD700]'
                        : 'border-white/20 bg-transparent group-hover:border-white/40'
                    }`}
                  >
                    {form.readyToInvest === option && (
                      <span className="w-2 h-2 rounded-full bg-[#0A0A0A]" />
                    )}
                  </span>
                  <span className="font-tomorrow text-white/80 text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="font-tomorrow text-white text-sm font-medium block mb-3">
              What budget range makes sense for you right now?
            </label>
            <div className="space-y-3">
              {['$0–100', '$100–300', '$300–500', '$500+'].map(option => (
                <label
                  key={option}
                  className="flex items-center gap-3 cursor-pointer min-h-[48px] group"
                >
                  <input
                    type="radio"
                    name="budgetRange"
                    value={option}
                    checked={form.budgetRange === option}
                    onChange={e => setForm(f => ({ ...f, budgetRange: e.target.value }))}
                    className="sr-only"
                    required
                  />
                  <span
                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                      form.budgetRange === option
                        ? 'border-[#FFD700] bg-[#FFD700]'
                        : 'border-white/20 bg-transparent group-hover:border-white/40'
                    }`}
                  >
                    {form.budgetRange === option && (
                      <span className="w-2 h-2 rounded-full bg-[#0A0A0A]" />
                    )}
                  </span>
                  <span className="font-tomorrow text-white/80 text-sm">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {sectionDivider}

      {/* SECTION 6 — Readiness */}
      <div>
        <p className="font-tomorrow text-[#FFD700] text-xs font-semibold uppercase tracking-widest mb-6">
          Readiness
        </p>
        <div>
          <label className="font-tomorrow text-white text-sm font-medium block mb-3">
            If accepted, when would you be ready to start?
          </label>
          <div className="space-y-3">
            {['Immediately', 'Within 1–2 weeks', 'Just exploring'].map(option => (
              <label
                key={option}
                className="flex items-center gap-3 cursor-pointer min-h-[48px] group"
              >
                <input
                  type="radio"
                  name="startWhen"
                  value={option}
                  checked={form.startWhen === option}
                  onChange={e => setForm(f => ({ ...f, startWhen: e.target.value }))}
                  className="sr-only"
                  required
                />
                <span
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0 ${
                    form.startWhen === option
                      ? 'border-[#FFD700] bg-[#FFD700]'
                      : 'border-white/20 bg-transparent group-hover:border-white/40'
                  }`}
                >
                  {form.startWhen === option && (
                    <span className="w-2 h-2 rounded-full bg-[#0A0A0A]" />
                  )}
                </span>
                <span className="font-tomorrow text-white/80 text-sm">{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {sectionDivider}

      {/* SECTION 7 — Final Question */}
      <div>
        <p className="font-tomorrow text-[#FFD700] text-xs font-semibold uppercase tracking-widest mb-6">
          Final Question
        </p>
        <div>
          <label className="font-tomorrow text-white text-sm font-medium block mb-3">
            Why should we choose you to work with?
          </label>
          <textarea
            rows={4}
            value={form.whyChooseYou}
            onChange={e => setForm(f => ({ ...f, whyChooseYou: e.target.value }))}
            onFocus={() => setFocused('whyChooseYou')}
            onBlur={() => setFocused(null)}
            className={textareaClass('whyChooseYou')}
            required
          />
        </div>
      </div>

      {/* Submit */}
      <div className="pt-8">
        <motion.button
          type="submit"
          disabled={formState === 'submitting'}
          whileHover={{ scale: formState === 'submitting' ? 1 : 1.02 }}
          whileTap={{ scale: formState === 'submitting' ? 1 : 0.98 }}
          className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 disabled:opacity-60 text-[#000000] font-tomorrow font-bold text-base px-6 py-4 rounded-xl transition-colors duration-200 min-h-[56px] flex items-center justify-center gap-2"
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
      </div>
    </form>
  )
}
