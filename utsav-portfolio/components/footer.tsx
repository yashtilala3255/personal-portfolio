'use client'

import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-orange-500/20 bg-black/60 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Trada Utsav</h3>
            <p className="text-gray-400">MCA Student | Software Developer | Tech Enthusiast</p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#about" className="hover:text-orange-400 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-orange-400 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-orange-400 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-orange-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/utsav-trada-4795b327b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-orange-500/20 text-orange-400 rounded-lg hover:bg-orange-500/40 transition-all hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:utsavtrada390@gmail.com"
                className="p-3 bg-orange-500/20 text-orange-400 rounded-lg hover:bg-orange-500/40 transition-all hover:scale-110"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="p-3 bg-orange-500/20 text-orange-400 rounded-lg hover:bg-orange-500/40 transition-all hover:scale-110"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-500/20 pt-8 text-center text-gray-500">
          <p>
            © {currentYear} Trada Utsav. All rights reserved. | Made with React & Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}
