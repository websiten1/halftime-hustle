'use client'
import { motion } from 'framer-motion'

const theyHandle = [
  'Finding brand deals yourself',
  'Writing your own contracts',
  'Figuring out content strategy',
  'Cold DMing sponsors',
  'Building your media kit',
  'Managing brand relationships',
]

const weHandle = [
  'We identify the right brands',
  'We negotiate and structure deals',
  'We build your content playbook',
  'We make them come to you',
  'We create your pro media kit',
  'We manage brand relationships',
]

export default function Comparison() {
  return (
    <section className="py-32 bg-[#0d0d18] border-t border-white/5">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-tomorrow font-black text-4xl md:text-5xl text-white">
            You focus on the game.<br />
            <span className="text-gradient-blue">We handle the business.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Without Us */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl p-8 bg-[#111] border border-white/5 will-change-transform"
          >
            <p className="font-tomorrow text-white/30 text-xs tracking-widest uppercase mb-6">Without Us</p>
            <div className="space-y-4">
              {theyHandle.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.2, duration: 0.4 }}
                  className="flex items-center gap-3 will-change-transform"
                >
                  <div className="w-5 h-5 rounded-full border border-red-500/30 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 2l6 6M8 2l-6 6" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="font-tomorrow text-white/40 text-sm line-through decoration-red-500/30">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* With Halftime Hustle */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl p-8 bg-[#1a1500] border border-[#FFD700]/20 will-change-transform"
          >
            <p className="font-tomorrow text-[#FFD700] text-xs tracking-widest uppercase mb-6">With Halftime Hustle</p>
            <div className="space-y-4">
              {weHandle.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 + 0.2, duration: 0.4 }}
                  className="flex items-center gap-3 will-change-transform"
                >
                  <div className="w-5 h-5 rounded-full bg-[#FFD700]/20 border border-[#FFD700]/40 flex items-center justify-center flex-shrink-0">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M2 5l2.5 2.5L8 2" stroke="#FFD700" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="font-tomorrow text-white text-sm font-medium">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
