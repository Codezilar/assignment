import { Progress } from '@/components/ui/progress'

export default function Skills() {
  const skills = [
    { name: 'HTML', level: 85 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'React', level: 70 },
    { name: 'Git & GitHub', level: 75 },
  ]

  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <div className="inline-flex w-fit mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/30">
              My Toolkit
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Skills & Technologies</h2>
          <p className="text-muted-foreground mt-2 max-w-2xl">
            Technologies and skills I&apos;ve been learning and practicing
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skills.map((skill) => (
            <div key={skill.name} className="space-y-3">
              <div className="flex justify-between items-center">
                <h3 className="font-semibold text-foreground">{skill.name}</h3>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 bg-card rounded-lg border border-border">
          <h3 className="font-semibold text-foreground mb-4">Additional Areas</h3>
          <div className="flex flex-wrap gap-2">
            {['Responsive Design', 'Web Accessibility', 'Debugging', 'Problem Solving', 'Version Control', 'Terminal Basics'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-secondary/50 text-secondary-foreground rounded-full text-sm border border-secondary"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
