'use client'

export function SkillsSection() {
  const skills = [
    { category: 'Programming Languages', items: ['Java', 'Python', 'JavaScript', 'C++'] },
    { category: 'Databases', items: ['MongoDB', 'MySQL', 'PostgreSQL'] },
    { category: 'Web Technologies', items: ['HTML5', 'CSS3', 'React', 'Node.js'] },
    { category: 'Mobile Development', items: ['iOS', 'Swift', 'React Native'] },
    { category: 'Tools & Frameworks', items: ['Git', 'REST APIs', 'Data Structures'] },
    { category: 'Core Concepts', items: ['DBMS', 'OOP', 'System Design', 'Algorithms'] },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          Skills & <span className="text-primary">Expertise</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div key={index} className="glass rounded-lg p-6 hover:border-primary/50 transition-colors">
              <h3 className="text-primary font-bold mb-4 text-lg">{skill.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    {item}
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
