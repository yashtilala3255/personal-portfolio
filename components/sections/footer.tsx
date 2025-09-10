"use client"

import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react"

const footerLinks = [
  {
    title: "Navigation",
    links: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "GitHub", href: "https://github.com/yashtilala3255" },
      { name: "LinkedIn", href: "https://linkedin.com/in/yash-tilala-127b512b4/" },
      { name: "Email", href: "mailto:tilalayash6@gmail.com" },
    ],
  },
]

const socialLinks = [
  { name: "GitHub", href: "https://github.com/yashtilala3255", icon: Github },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/yash-tilala-127b512b4/", icon: Linkedin },
  { name: "Email", href: "mailto:tilalayash6@gmail.com", icon: Mail },
]

export function Footer() {
  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1))
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.open(href, "_blank", "noopener noreferrer")
    }
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-bold text-primary mb-4">Yash Tilala</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Full-Stack Developer passionate about creating beautiful, functional, and user-centered digital
                experiences.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <button
                      key={social.name}
                      onClick={() => scrollToSection(social.href)}
                      className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="sr-only">{social.name}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Footer Links */}
            {footerLinks.map((section) => (
              <div key={section.title}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} Yash tilala. All rights reserved.</span>
            </div>

            <div className="flex items-center text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
              <span>using Next.js & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
