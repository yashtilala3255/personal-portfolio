'use client'

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-br from-black via-black to-orange-900/10">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        {/* Avatar */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-orange-500/50 shadow-lg shadow-orange-500/20">
            <img
              src="/avatar.jpg"
              alt="Trada Utsav"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">Hello, I'm </span>
          <span className="text-orange-500">Trada Utsav</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-orange-400 mb-8 font-semibold">
          MCA Student | Software Developer | Tech Enthusiast
        </p>
        
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed">
          Passionate about building efficient solutions with a strong foundation in software development, 
          database management, and web technologies. Currently pursuing my Master's at LJ University.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#about"
            className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all"
          >
            Explore My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-orange-500 text-orange-400 rounded-lg font-semibold hover:bg-orange-500/10 transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce">
          <svg className="w-6 h-6 mx-auto text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
