'use client'

export function EducationSection() {
  const education = [
    {
      degree: 'Master of Computer Applications (MCA)',
      institution: 'LJ University',
      status: 'Currently Pursuing',
      period: '2023 - Present',
    },
    {
      degree: 'Bachelor of Computer Applications (BCA)',
      institution: 'RK University',
      status: 'Completed',
      period: '2020 - 2023',
      cgpa: 'CGPA: 8.15',
    },
  ]

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Education &amp; <span className="text-primary">Qualifications</span>
        </h2>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="glass rounded-lg p-6 hover:border-primary/50 transition-colors">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="text-xl font-bold text-primary mb-2">{edu.degree}</h3>
                  <p className="text-foreground font-semibold">{edu.institution}</p>
                </div>
                <span className="text-sm text-muted-foreground">{edu.period}</span>
              </div>
              
              <div className="flex gap-4 text-sm text-muted-foreground">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">{edu.status}</span>
                {edu.cgpa && <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">{edu.cgpa}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
