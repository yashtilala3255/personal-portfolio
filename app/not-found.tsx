import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, ArrowLeft, Search } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="max-w-md w-full border-0 shadow-lg bg-card/50 backdrop-blur-sm">
        <CardContent className="p-8 text-center">
          {/* 404 Animation */}
          <div className="mb-8">
            <div className="text-8xl font-bold text-primary/20 mb-4 animate-pulse">404</div>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>

          <h1 className="text-2xl font-bold mb-4 text-balance">Oops! Page Not Found</h1>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>

          <div className="space-y-4">
            <Button asChild size="lg" className="w-full">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Go Home
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg" className="w-full bg-transparent">
              <Link href="/#projects">
                <Search className="mr-2 h-4 w-4" />
                View Projects
              </Link>
            </Button>

            <Button asChild variant="ghost" size="lg" className="w-full">
              <Link href="/#contact">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className="mt-8 flex justify-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-accent rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-secondary rounded-full animate-bounce delay-200"></div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
