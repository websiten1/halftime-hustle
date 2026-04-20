import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Marquee from '@/components/Marquee'
import Stats from '@/components/Stats'
import ProblemSolution from '@/components/ProblemSolution'
import BasketballProtocol from '@/components/BasketballProtocol'
import CaseStudies from '@/components/CaseStudies'
import Comparison from '@/components/Comparison'
import About from '@/components/About'
import LeadForm from '@/components/LeadForm'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import MobileCTA from '@/components/MobileCTA'
import ApplicationForm from '@/components/ApplicationForm'

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] overflow-x-hidden">
      <Navbar />
      <Hero />
      <Marquee />
      <Stats />
      <ProblemSolution />
      <BasketballProtocol />
      <CaseStudies />
      <Comparison />
      <About />
      <LeadForm />
      <FAQ />

      {/* Application Form Section */}
      <section className="relative py-24 overflow-hidden bg-[#0A0A0A]">
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,215,0,0.5) 1px, transparent 1px)',
            backgroundSize: '36px 36px',
          }}
        />
        <div className="relative max-w-xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="font-tomorrow font-black text-4xl md:text-5xl text-white leading-tight mb-4">
              Apply for Full Representation
            </h2>
            <p className="font-tomorrow text-white/50 text-base leading-relaxed">
              We only accept a small number of athletes each month. If accepted, you&apos;ll be invited to a strategy call where we map out your first (or next) brand deal.
            </p>
          </div>
          <ApplicationForm />
        </div>
      </section>

      <Footer />
      <MobileCTA />
    </main>
  )
}
