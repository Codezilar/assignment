export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {/* Sidebar */}
          <div className="md:col-span-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">About Me</h2>
            <div className="space-y-2 text-muted-foreground text-sm">
              <p className="text-accent font-medium">Student Developer</p>
              <p className="text-xs">Based in your location</p>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-2 space-y-6">
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                I&apos;m a student passionate about web development and learning the fundamentals of modern web technologies. My journey started with curiosity about how websites work, and it has evolved into a commitment to becoming a skilled developer.
              </p>
              <p className="text-base sm:text-lg text-foreground leading-relaxed">
                I believe in continuous learning and solving problems creatively. Through hands-on projects and self-guided learning, I&apos;ve developed a strong foundation in HTML, CSS, and JavaScript. My approach combines consistency, curiosity, and problem-solving to tackle every challenge.
              </p>
            </div>

            <div className="pt-4 border-t border-border">
              <h3 className="font-semibold text-foreground mb-3">What drives me:</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Building beautiful and functional user interfaces</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Understanding how technology solves real-world problems</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-accent font-bold">✓</span>
                  <span>Continuous growth and mastering new technologies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
