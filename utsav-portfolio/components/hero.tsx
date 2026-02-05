'use client'

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-foreground">Hello, I'm </span>
          <span className="text-primary">Trada Utsav</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          MCA Student | Software Developer | Tech Enthusiast
        </p>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Passionate about building efficient solutions with a strong foundation in software development, 
          database management, and web technologies. Currently pursuing my Master's at LJ University.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
