import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  title: {
    default: "Yash Tilala - Full-Stack Developer & UI/UX Designer",
    template: "%s | Yash Portfolio",
  },
  description:
    "Experienced full-stack developer and UI/UX designer creating beautiful, functional, and user-centered digital experiences. Specializing in React, Next.js, Node.js, and modern web technologies.",
  keywords: [
    "full-stack developer",
    "UI/UX designer",
    "React developer",
    "Next.js",
    "Node.js",
    "TypeScript",
    "web development",
    "portfolio",
    "San Francisco developer",
  ],
  authors: [{ name: "Your Name", url: "https://yourname.com" }],
  creator: "Yash tilala",
  publisher: "Yash",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourname.com",
    title: "Yash - Full-Stack Developer & UI/UX Designer",
    description:
      "Experienced full-stack developer creating beautiful, functional digital experiences with modern web technologies.",
    siteName: "Your Name Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yash - Full-Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash - Full-Stack Developer & UI/UX Designer",
    description: "Experienced full-stack developer creating beautiful, functional digital experiences.",
    creator: "@username",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://yourname.com",
  },
    generator: 'Sacle X'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.jpg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#164e63" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Your Name",
              jobTitle: "Full-Stack Developer & UI/UX Designer",
              description: "Experienced full-stack developer creating beautiful, functional digital experiences",
              url: "https://yourname.com",
              sameAs: [
                "https://github.com/username",
                "https://linkedin.com/in/username",
                "https://twitter.com/username",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Francisco",
                addressRegion: "CA",
                addressCountry: "US",
              },
              email: "hello@yourname.com",
              knowsAbout: [
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Node.js",
                "UI/UX Design",
                "Web Development",
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans ${dmSans.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange={false}>
            {children}
            <Toaster />
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
