'use client'

export function ProjectsSection() {
  const projects = [
    {
      title: 'Project Name',
      description: 'Your project description goes here. Highlight the key features and technologies used.',
      tech: ['Java', 'Database'],
      link: '#',
    },
    {
      title: 'Project Name',
      description: 'Your project description goes here. Highlight the key features and technologies used.',
      tech: ['Python', 'MongoDB'],
      link: '#',
    },
    {
      title: 'Project Name',
      description: 'Your project description goes here. Highlight the key features and technologies used.',
      tech: ['React', 'Node.js'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:glow"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all"
                >
                  View Project
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
