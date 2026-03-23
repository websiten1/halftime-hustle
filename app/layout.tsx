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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Tomorrow:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
