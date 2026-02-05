'use client'

import { useState } from 'react'
import { Award, ExternalLink } from 'lucide-react'

const certificates = [
  {
    id: 1,
    title: 'Java Development Fundamentals',
    issuer: 'Oracle University',
    date: '2023',
    credentialUrl: '#',
    skills: ['Java', 'OOP', 'Data Structures'],
  },
  {
    id: 2,
    title: 'Database Management with MongoDB',
    issuer: 'MongoDB University',
    date: '2023',
    credentialUrl: '#',
    skills: ['MongoDB', 'NoSQL', 'Database Design'],
  },
  {
    id: 3,
    title: 'Python for Data Science',
    issuer: 'DataCamp',
    date: '2022',
    credentialUrl: '#',
    skills: ['Python', 'Data Analysis', 'Pandas'],
  },
  {
    id: 4,
    title: 'iOS App Development',
    issuer: 'Apple Developer Academy',
    date: '2023',
    credentialUrl: '#',
    skills: ['Swift', 'iOS', 'UIKit'],
  },
]

export function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<(typeof certificates)[0] | null>(null)

  return (
    <section id="certificates" className="py-20 px-4 bg-black/40">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <Award className="text-orange-500" size={40} />
            Certifications & Awards
          </h2>
          <p className="text-gray-400 text-lg">Professional credentials and achievements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              onClick={() => setSelectedCert(cert)}
              className="group p-6 bg-gradient-to-br from-orange-900/20 to-orange-900/5 border border-orange-500/20 rounded-xl hover:border-orange-500/50 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20"
            >
              <div className="flex items-start justify-between mb-3">
                <Award className="text-orange-500 group-hover:scale-110 transition-transform" size={28} />
                <ExternalLink size={18} className="text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
              <p className="text-orange-400 mb-3">{cert.issuer}</p>
              <p className="text-gray-400 text-sm mb-4">{cert.date}</p>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
