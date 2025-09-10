"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Filter } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    longDescription:
      "Built a comprehensive e-commerce platform from scratch using Next.js and Node.js. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and an admin dashboard for inventory control.",
    image: "/ecommerce-platform-screenshot.jpg",
    category: "Web",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    liveUrl: "https://ecommerce-demo.vercel.app",
    githubUrl: "https://github.com/username/ecommerce-platform",
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, team workspaces, and project tracking.",
    longDescription:
      "Developed a modern task management solution similar to Trello/Asana. Features drag-and-drop functionality, real-time collaboration, team management, project timelines, and detailed analytics dashboard.",
    image: "/task-management-app-screenshot.jpg",
    category: "Web",
    technologies: ["React", "Firebase", "Material-UI", "Socket.io", "Chart.js"],
    liveUrl: "https://taskmanager-demo.vercel.app",
    githubUrl: "https://github.com/username/task-manager",
    featured: true,
  },
  {
    id: 3,
    title: "Weather Mobile App",
    description:
      "Cross-platform mobile app providing detailed weather forecasts with location-based services and notifications.",
    longDescription:
      "Created a feature-rich weather application using React Native. Includes current weather, 7-day forecasts, weather maps, severe weather alerts, and location-based recommendations.",
    image: "/weather-mobile-app-screenshot.jpg",
    category: "Mobile",
    technologies: ["React Native", "Expo", "TypeScript", "Weather API", "Maps API"],
    liveUrl: "https://expo.dev/@username/weather-app",
    githubUrl: "https://github.com/username/weather-app",
    featured: false,
  },
  {
    id: 4,
    title: "Portfolio Website Design",
    description: "Modern portfolio website design system with dark/light themes and smooth animations.",
    longDescription:
      "Designed and developed a comprehensive portfolio website with focus on user experience, accessibility, and performance. Features include theme switching, smooth animations, and responsive design.",
    image: "/portfolio-design-screenshot.jpg",
    category: "Design",
    technologies: ["Figma", "Next.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "https://portfolio-design-demo.vercel.app",
    githubUrl: "https://github.com/username/portfolio-design",
    featured: false,
  },
  {
    id: 5,
    title: "AI Chat Application",
    description: "Real-time chat application powered by AI with smart responses and conversation management.",
    longDescription:
      "Built an intelligent chat application integrating OpenAI's GPT models. Features include real-time messaging, AI-powered responses, conversation history, and user management system.",
    image: "/ai-chat-app-screenshot.jpg",
    category: "Web",
    technologies: ["Next.js", "OpenAI API", "Socket.io", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://ai-chat-demo.vercel.app",
    githubUrl: "https://github.com/username/ai-chat-app",
    featured: true,
  },
  {
    id: 6,
    title: "Fitness Tracker App",
    description: "Mobile fitness tracking application with workout plans, progress monitoring, and social features.",
    longDescription:
      "Developed a comprehensive fitness tracking app with workout logging, progress visualization, social sharing, and personalized workout recommendations based on user goals.",
    image: "/fitness-tracker-screenshot.jpg",
    category: "Mobile",
    technologies: ["React Native", "Firebase", "Chart.js", "Health API"],
    liveUrl: "https://expo.dev/@username/fitness-tracker",
    githubUrl: "https://github.com/username/fitness-tracker",
    featured: false,
  },
]

const categories = ["All", "Web", "Mobile", "Design"]

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(projects.filter((project) => project.category === selectedCategory))
    }
  }, [selectedCategory])

  return (
    <section id="projects" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-balance mb-4">Projects & Portfolio</h2>
          <p className="text-lg text-muted-foreground text-center text-balance mb-12 max-w-2xl mx-auto">
            A showcase of my recent work, featuring web applications, mobile apps, and design projects
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2 sm:mb-0">
              <Filter className="h-4 w-4" />
              <span>Filter by:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300 hover:scale-105"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${500 + index * 150}ms` }}
            >
              <Card className="group h-full border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105 overflow-hidden">
                <CardContent className="p-0">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg?height=200&width=400"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Featured Badge */}
                    {project.featured && (
                      <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">Featured</Badge>
                    )}

                    {/* Category Badge */}
                    <Badge variant="secondary" className="absolute top-3 right-3 bg-background/80 text-foreground">
                      {project.category}
                    </Badge>

                    {/* Overlay Buttons */}
                    <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        size="sm"
                        className="bg-background/90 text-foreground hover:bg-background"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="bg-background/90 text-foreground border-foreground/20 hover:bg-background"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="p-6">
                    <h3 className="font-bold text-xl mb-3 text-balance leading-tight">{project.title}</h3>

                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technology Stack */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs px-2 py-1">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 4 && (
                          <Badge variant="outline" className="text-xs px-2 py-1">
                            +{project.technologies.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1" onClick={() => window.open(project.liveUrl, "_blank")}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View Live
                      </Button>
                      <Button size="sm" variant="outline" onClick={() => window.open(project.githubUrl, "_blank")}>
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* No Projects Message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No projects found in the "{selectedCategory}" category.</p>
          </div>
        )}

        {/* Call to Action */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground mb-6">Interested in working together or want to see more projects?</p>
          <Button
            size="lg"
            onClick={() => {
              const contactSection = document.getElementById("contact")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
            className="transition-all duration-300 hover:scale-105"
          >
            Let's Connect
          </Button>
        </div>
      </div>
    </section>
  )
}
