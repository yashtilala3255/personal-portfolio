"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Award, ExternalLink, Calendar, Building } from "lucide-react"

const certificates = [
  {
  id: 1,
  title: "Python (Basic) Certificate",
  issuer: "HackerRank",
  year: "2025",
  category: "Programming",
  description:
    "Covers core Python concepts such as scalar types, operators, control flow, strings, collections, iteration, modularity, objects, types, and classes.",
  verificationLink: "https://www.hackerrank.com/certificates/d6f17a16090a",
  image: "/python.png",
  skills: ["Python", "Problem Solving", "OOP", "Control Flow", "Data Structures"],
},

  {
  id: 2,
  title: "React (Basic) Certificate",
  issuer: "HackerRank",
  year: "2025",
  category: "Web Development",
  description:
    "Covers fundamental React concepts including basic routing, rendering elements, state management with internal component state, handling events, ES6+ JavaScript features, and form validation.",
  verificationLink: "https://www.hackerrank.com/certificates/072f589f5f94",
  image: "/react.png",
  skills: ["React", "JavaScript (ES6+)", "State Management", "Routing", "Form Handling"],
},

  {
    id: 3,
    title: "Meta Front-End Developer Certificate",
    issuer: "Meta",
    year: "2025",
    category: "Development",
    description:
      "Comprehensive program covering modern front-end development with React, JavaScript, and responsive design.",
    verificationLink: "https://www.coursera.org/account/accomplishments/verify/IBZPOSWJD4E1",
    image: "/meta.png",
    skills: ["React", "JavaScript", "HTML/CSS", "Responsive Design"],
  },
  {
    id: 4,
    title: "Live Project: Build a Real-Time Search Filter App",
    issuer: "SkillEcted",
    year: "2025",
    category: "Development",
    description: "Live Project: Build a Real-Time Search Filter App.",
    verificationLink: "https://www.skillected.com/share-certificate?serialno=ZO98VUYV",
    image: "/react-cer.png",
    skills: [
  "React.js",
  "JavaScript (ES6+)",
  "JSX",
  "React Router",
  "State Management (useState, useReducer, Context API)",
  "Component Lifecycle",
  "API Integration (Fetch / Axios)",
  "Tailwind CSS / Styling",
  "Performance Optimization",
  "Responsive Design"
]
  },
  
  
]

export function CertificatesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCertificate, setSelectedCertificate] = useState<(typeof certificates)[0] | null>(null)
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
    <section id="certificates" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-balance mb-4">Certificates & Achievements</h2>
          <p className="text-lg text-muted-foreground text-center text-balance mb-16 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise and commitment to continuous
            learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <Card className="group cursor-pointer border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg" onClick={() => setSelectedCertificate(cert)}>
                    <img
                      src={cert.image || "/placeholder.svg"}
                      alt={cert.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">{cert.category}</Badge>
                  </div>

                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-balance leading-tight">{cert.title}</h3>

                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Building className="h-4 w-4 mr-2" />
                      <span>{cert.issuer}</span>
                    </div>

                    <div className="flex items-center text-sm text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{cert.year}</span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{cert.description}</p>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent"
                      onClick={() => setSelectedCertificate(cert)}
                    >
                      <Award className="mr-2 h-4 w-4" />
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Certificate Detail Modal */}
      <Dialog open={!!selectedCertificate} onOpenChange={() => setSelectedCertificate(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedCertificate && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-balance">{selectedCertificate.title}</DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                <img
                  src={selectedCertificate.image || "/placeholder.svg"}
                  alt={selectedCertificate.title}
                  className="w-full h-64 object-cover rounded-lg"
                />

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Building className="h-4 w-4 mr-2 text-primary" />
                      Issuer
                    </h4>
                    <p className="text-muted-foreground">{selectedCertificate.issuer}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-primary" />
                      Year Obtained
                    </h4>
                    <p className="text-muted-foreground">{selectedCertificate.year}</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Description</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedCertificate.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Skills Covered</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCertificate.skills.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button className="w-full" onClick={() => window.open(selectedCertificate.verificationLink, "_blank")}>
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Verify Certificate
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
