import Hero from '@/components/sections/hero'
import About from '@/components/sections/about'
import Skills from '@/components/sections/skills'
import Projects from '@/components/sections/projects'
import Experience from '@/components/sections/experience'
import Contact from '@/components/sections/contact'
import Footer from '@/components/sections/footer'
import Navigation from '@/components/navigation'

export default function Home() {
  return (
    <div className="bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
