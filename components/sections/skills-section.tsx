"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Palette, Server, Database, Globe, Users, Lightbulb, MessageSquare } from "lucide-react"

const technicalSkills = [
  { name: "PHP/Laravel", level: 95, icon: Code },
  { name: "React/Next.js", level: 90, icon: Globe },
  { name: "HTML/CSS/JS", level: 85, icon: Server },
  { name: "Python", level: 60, icon: Code },
  { name: "MySQL/MongoDB ", level: 85, icon: Database },
]

const softSkills = [
  { name: "Team Leadership", level: 90, icon: Users },
  { name: "Problem Solving", level: 95, icon: Lightbulb },
  { name: "Communication", level: 70, icon: MessageSquare },
  { name: "Project Management", level: 95, icon: Users },
]

const skillTags = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "MySQL",
  "MongoDB",
  "Git",
  "Figma",
  "Tailwind CSS",
]

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({})
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate progress bars
          setTimeout(() => {
            const skillsToAnimate: Record<string, number> = {}
            technicalSkills.forEach((skill) => {
              skillsToAnimate[skill.name] = skill.level
            })
            softSkills.forEach((skill) => {
              skillsToAnimate[skill.name] = skill.level
            })
            setAnimatedSkills(skillsToAnimate)
          }, 500)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-balance mb-4">Skills & Expertise</h2>
          <p className="text-lg text-muted-foreground text-center text-balance mb-16 max-w-2xl mx-auto">
            A comprehensive overview of my technical abilities and professional competencies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Technical Skills */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <Card className="h-full border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Code className="mr-3 h-6 w-6 text-primary" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {technicalSkills.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={skill.name}
                      className={`transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${500 + index * 100}ms` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Icon className="h-4 w-4 mr-2 text-primary" />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{animatedSkills[skill.name] || 0}%</span>
                      </div>
                      <Progress value={animatedSkills[skill.name] || 0} className="h-2" />
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </div>

          {/* Soft Skills */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <Card className="h-full border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Users className="mr-3 h-6 w-6 text-primary" />
                  Soft Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {softSkills.map((skill, index) => {
                  const Icon = skill.icon
                  return (
                    <div
                      key={skill.name}
                      className={`transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      style={{ transitionDelay: `${700 + index * 100}ms` }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Icon className="h-4 w-4 mr-2 text-primary" />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{animatedSkills[skill.name] || 0}%</span>
                      </div>
                      <Progress value={animatedSkills[skill.name] || 0} className="h-2" />
                    </div>
                  )
                })}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Skill Tags */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Card className="border-0 shadow-lg bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-center text-xl">Technologies & Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3 justify-center">
                {skillTags.map((tag, index) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className={`px-4 py-2 text-sm font-medium transition-all duration-500 hover:scale-105 hover:bg-primary hover:text-primary-foreground cursor-default ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                    style={{ transitionDelay: `${900 + index * 50}ms` }}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
