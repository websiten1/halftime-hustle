import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Halftime Hustle — NIL Coaching for College Athletes',
  description: 'We\'ve generated 2M+ views and $30k+ in deals for athletes. Build your brand so you can play the game.',
  openGraph: {
    title: 'Halftime Hustle — NIL Coaching for College Athletes',
    description: 'We\'ve generated 2M+ views and $30k+ in deals for athletes.',
    type: 'website',
  },
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
