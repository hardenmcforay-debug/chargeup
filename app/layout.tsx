import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ChargeUp - Power up your phone. Power up your life.',
  description: 'High-quality phone accessories including USB-C cables, fast chargers, and iPhone Lightning cables. Free delivery available.',
  keywords: 'phone accessories, USB-C cables, fast chargers, iPhone cables, mobile accessories',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

