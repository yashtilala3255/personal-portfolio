import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/geist'
import '../styles/globals.css'
import { RootLayoutClient } from './layout-client'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Trada Utsav - MCA Student & Developer',
  description: 'Portfolio of Trada Utsav, MCA graduate pursuing Master\'s in Computer Applications. Software developer specializing in Java, Python, MongoDB, and iOS development.',
  openGraph: {
    title: 'Trada Utsav - Developer Portfolio',
    description: 'Discover my projects, skills, and experience in software development',
    url: 'https://trada-utsav-portfolio.vercel.app',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${geistMono.variable}`}>
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  )
}
