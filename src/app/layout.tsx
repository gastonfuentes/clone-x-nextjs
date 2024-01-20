import type { Metadata } from 'next'

import './globals.css'

export const metadata: Metadata = {
  title: 'Clon X',
  description: 'clon de x creado con Next.js'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
