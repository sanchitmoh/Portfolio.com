import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sanchit Mohite - Full Stack Developer',
  description: 'Portfolio of Sanchit Mohite, a passionate full stack developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}