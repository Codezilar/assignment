export default function Experience() {
  const milestones = [
    {
      year: '2022',
      title: 'Started Learning Web Development',
      description: 'Began my journey with HTML, CSS, and JavaScript basics through online resources and tutorials.',
      icon: '🚀',
    },
    {
      year: '2023',
      title: 'Built First Website',
      description: 'Created my first responsive website project, diving into real-world web development challenges.',
      icon: '🎯',
    },
    {
      year: '2024',
      title: 'Expanded Technical Skills',
      description: 'Learned React, explored API integration, and improved CSS techniques with projects like todo apps and weather dashboards.',
      icon: '⚡',
    },
    {
      year: '2024-Present',
      title: 'Continuous Growth',
      description: 'Building more complex projects, improving code quality, and preparing for professional development opportunities.',
      icon: '📈',
    },
  ]

  return (
    <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex w-fit mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/30">
              Timeline
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Learning Journey</h2>
          <p className="text-muted-foreground mt-2">
            Key milestones and achievements in my web development journey
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative flex gap-6 sm:gap-8">
              {/* Timeline Line */}
              {index !== milestones.length - 1 && (
                <div className="absolute left-6 sm:left-8 top-16 bottom-0 w-0.5 bg-border" />
              )}

              {/* Icon */}
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-accent/20 flex items-center justify-center text-2xl border border-accent/50 relative z-10">
                {milestone.icon}
              </div>

              {/* Content */}
              <div className="flex-1 pt-1 sm:pt-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-3 mb-2">
                  <span className="text-sm font-semibold text-accent bg-accent/10 w-fit px-3 py-1 rounded-full">
                    {milestone.year}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground">
                    {milestone.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
