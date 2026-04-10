import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features smooth scrolling, animations, and a contact form.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Todo Application',
      description: 'A fully functional todo app with add, edit, delete, and mark-complete features. Demonstrates DOM manipulation and local storage usage.',
      technologies: ['JavaScript', 'CSS', 'LocalStorage'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that fetches real-time data from an API. Features search functionality, current weather display, and forecast information.',
      technologies: ['JavaScript', 'API Integration', 'CSS Grid'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'E-commerce Product Page',
      description: 'A product showcase page with image gallery, product details, and add-to-cart functionality. Built with HTML, CSS, and vanilla JavaScript.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex w-fit mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/30">
              My Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Featured Projects</h2>
          <p className="text-muted-foreground mt-2">
            Showcase of projects I&apos;ve built to practice and demonstrate my web development skills
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-background rounded-lg border border-border overflow-hidden hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center border-b border-border group-hover:from-primary/20 group-hover:to-accent/20 transition-all">
                <div className="text-center text-muted-foreground">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg mx-auto mb-2" />
                  <p className="text-sm">Project Screenshot</p>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 sm:p-8 space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-secondary/30 text-secondary-foreground rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 flex-1 group/btn"
                    asChild
                  >
                    <a href={project.liveUrl}>
                      <ExternalLink size={16} />
                      <span className="hidden sm:inline">Live Demo</span>
                      <span className="sm:hidden">Demo</span>
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 flex-1 group/btn"
                    asChild
                  >
                    <a href={project.githubUrl}>
                      <Github size={16} />
                      <span className="hidden sm:inline">GitHub</span>
                      <span className="sm:hidden">Code</span>
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
