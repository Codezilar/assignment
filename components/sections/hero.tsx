import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12 sm:py-20 bg-gradient-to-b from-background via-background to-muted/20">
      <div className="max-w-4xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-left-4 duration-700">
            <div className="inline-flex w-fit">
              <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/30">
                Welcome to my portfolio
              </span>
            </div>

            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground text-pretty leading-tight">
                John Faith
              </h1>
              <p className="text-lg sm:text-xl text-accent font-medium">
                Aspiring Web Developer | Learning HTML, CSS, JavaScript
              </p>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md">
              I&apos;m passionate about learning web development and creating beautiful, functional digital experiences. Every project is an opportunity to grow and master new skills.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#projects" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-accent text-primary-foreground gap-2 group">
                  View Projects
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Contact Me
                </Button>
              </a>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative h-96 md:h-full min-h-96 animate-in fade-in slide-in-from-right-4 duration-700 delay-100">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border flex items-center justify-center overflow-hidden">
              <div className="flex flex-col items-center justify-center gap-4 text-muted-foreground">
                <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center">
                  <Image src="/bal.jpeg" alt="Profile Image" width={80} height={80} className="rounded-full object-cover" />
                  {/* <div className="w-20 h-20 bg-primary/40 rounded-full" /> */}
                </div>
                <p className="text-sm text-center">Profile Image</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2 text-muted-foreground text-sm">
            <p>Scroll to explore</p>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
