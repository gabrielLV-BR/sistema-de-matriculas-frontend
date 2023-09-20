import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Sistema de Matrículas',
}

const OpenSans = Open_Sans({ subsets: ['latin'], weight: '500' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={OpenSans.className}>{children}</body>
    </html>
  )
}
