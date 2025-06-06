import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Gusto',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>{children}</body>
    </html>
  )
}
