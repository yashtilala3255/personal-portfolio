'use client'

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Let's <span className="text-primary">Connect</span>
        </h2>
        
        <p className="text-muted-foreground max-w-2xl mx-auto mb-12 text-lg">
          I'm always interested in hearing about new projects and opportunities. 
          Feel free to reach out if you'd like to collaborate!
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="glass rounded-lg p-6">
            <div className="text-3xl text-primary mb-4">✉️</div>
            <h3 className="text-foreground font-semibold mb-2">Email</h3>
            <a href="mailto:utsavtrada390@gmail.com" className="text-primary hover:underline">
              utsavtrada390@gmail.com
            </a>
          </div>

          <div className="glass rounded-lg p-6">
            <div className="text-3xl text-primary mb-4">🔗</div>
            <h3 className="text-foreground font-semibold mb-2">LinkedIn</h3>
            <a 
              href="https://www.linkedin.com/in/utsav-trada-4795b327b/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Trada Utsav
            </a>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="mailto:utsavtrada390@gmail.com"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Send Email
          </a>
          <a
            href="https://www.linkedin.com/in/utsav-trada-4795b327b/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors"
          >
            Visit LinkedIn
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-muted-foreground text-sm">
          <p>© 2024 Trada Utsav. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
