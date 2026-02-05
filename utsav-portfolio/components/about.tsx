'use client'

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-foreground leading-relaxed">
              I am a BCA graduate currently pursuing my MCA at LJ University, with a strong interest in 
              software development, database management, and web technologies. My academic journey has 
              provided me with a solid foundation in programming, problem-solving, and system design.
            </p>
            
            <p className="text-foreground leading-relaxed">
              I'm passionate about exploring innovative technologies and applying them to create efficient 
              and user-friendly solutions. With hands-on experience in various programming languages and 
              frameworks, I strive to build scalable applications that make a real impact.
            </p>

            <div className="pt-4">
              <p className="text-sm text-muted-foreground mb-2">Location</p>
              <p className="text-foreground font-semibold">Rajkot, India</p>
            </div>
          </div>

          <div className="glass rounded-lg p-8 space-y-6">
            <div className="flex items-start gap-4">
              <span className="text-2xl text-primary font-bold">01</span>
              <div>
                <h3 className="text-foreground font-semibold mb-2">Problem Solving</h3>
                <p className="text-muted-foreground text-sm">Strong analytical skills with a focus on creating efficient algorithms and solutions</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl text-primary font-bold">02</span>
              <div>
                <h3 className="text-foreground font-semibold mb-2">Full Stack Development</h3>
                <p className="text-muted-foreground text-sm">Experience across frontend, backend, and database technologies</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-2xl text-primary font-bold">03</span>
              <div>
                <h3 className="text-foreground font-semibold mb-2">Continuous Learning</h3>
                <p className="text-muted-foreground text-sm">Always exploring new technologies and best practices in software development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
