import { Separator } from '@/components/ui/separator'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-sm">
                YN
              </div>
              <span className="font-semibold text-foreground">Your Name</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Aspiring web developer passionate about learning and creating.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-accent transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-accent transition-colors">
                  Experience
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm">Social</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors">
                  Twitter
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground text-sm">Contact</h4>
            <p className="text-sm text-muted-foreground">
              <a href="mailto:your.email@example.com" className="hover:text-accent transition-colors">
                your.email@example.com
              </a>
            </p>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Your Name. All rights reserved.</p>
          <p>Built with passion and modern web technologies</p>
        </div>
      </div>
    </footer>
  )
}
