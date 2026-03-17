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
      <Footer />
      <MobileCTA />
    </main>
  )
}
