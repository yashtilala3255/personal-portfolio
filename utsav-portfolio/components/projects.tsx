'use client'

import { ExternalLink, Github } from 'lucide-react'

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'Full Stack Web Application',
      description: 'A comprehensive web application built with modern technologies featuring real-time data updates, user authentication, and responsive design.',
      tech: ['JavaScript', 'React', 'Node.js', 'MongoDB'],
      image: '/project-1.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Java Desktop Application',
      description: 'Enterprise-level desktop application with database management capabilities, featuring advanced data processing and reporting features.',
      tech: ['Java', 'Swing', 'SQL', 'Data Structures'],
      image: '/project-2.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Database Management System',
      description: 'MongoDB-based data management solution with advanced querying capabilities, data validation, and optimized performance.',
      tech: ['MongoDB', 'JavaScript', 'Express', 'REST API'],
      image: '/project-3.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'iOS Mobile Application',
      description: 'Feature-rich iOS app with intuitive user interface, smooth animations, and seamless user experience for daily tasks.',
      tech: ['Swift', 'UIKit', 'Core Data', 'iOS SDK'],
      image: '/project-4.jpg',
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 bg-black/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Featured <span className="text-orange-500">Projects</span>
          </h2>
          <p className="text-gray-400">Showcasing my latest work and creations</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gradient-to-br from-orange-900/20 to-orange-900/5 border border-orange-500/20 rounded-xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
            >
              <div className="relative h-48 bg-black/50 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-400 rounded-lg hover:bg-orange-500/40 transition-all text-sm"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-orange-500/20 text-orange-400 rounded-lg hover:bg-orange-500/40 transition-all text-sm"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
