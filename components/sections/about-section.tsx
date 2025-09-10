"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, MapPin, Calendar, GraduationCap } from "lucide-react"

const educationData = [
  {
    degree: "Bachelor of Computer Science (D2D)",
    school: "JG University",
    year: "2025 - 2027",
    description: "Currently pursuing Bachelor’s degree through Diploma-to-Degree program.",
  },
  {
    degree: "Diploma in Computer Engineering",
    school: "RK University",
    year: "2022 - 2024",
    description: "Completed diploma with strong foundation in programming and web development.",
  },
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
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

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-balance mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground text-center text-balance mb-16 max-w-2xl mx-auto">
            Get to know more about my background, skills, and journey in technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Profile Section */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <Card className="overflow-hidden border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex flex-col items-center text-center mb-8">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mb-6 flex items-center justify-center text-4xl font-bold text-primary-foreground">
                    YT
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Youssef Tilala</h3>
                  <p className="text-lg text-muted-foreground mb-4">Full-Stack Developer</p>
                  <div className="flex items-center text-muted-foreground mb-6">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>Rajkot, India</span>
                  </div>
                </div>

                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    I'm a passionate full-stack developer, currently pursuing my Bachelor's degree through the
                    Diploma-to-Degree program at JG University.
                  </p>
                  <p>
                    I completed my diploma at RK University, where I built a strong foundation in computer engineering
                    and web development.
                  </p>
                  <p>
                    I love exploring new technologies, contributing to open-source projects, and continuously improving
                    my skills in both front-end and back-end development.
                  </p>
                </div>

                
              </CardContent>
            </Card>
          </div>

          {/* Education Timeline */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <GraduationCap className="mr-3 h-6 w-6 text-primary" />
              Education
            </h3>

            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className={`transition-all duration-700 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${700 + index * 200}ms` }}
                >
                  <Card className="border-l-4 border-l-primary bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-lg font-semibold text-card-foreground">{edu.degree}</h4>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4 mr-1" />
                          {edu.year}
                        </div>
                      </div>
                      <p className="text-primary font-medium mb-2">{edu.school}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{edu.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
