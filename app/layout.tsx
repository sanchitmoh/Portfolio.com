import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SANCHIT - Full Stack Developer Portfolio',
  description: 'Portfolio of Sanchit Mohite, a passionate full stack developer specializing in modern web applications',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}