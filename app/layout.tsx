import './globals.css'
import { Inter } from 'next/font/google'
import { SiteHeader, Footer } from '@/components/site'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Mahifxcapital — Learn Trading the Smart Way',
  description: 'Professional Forex & Financial Markets education for the next generation of traders.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={inter.className}><SiteHeader />{children}<Footer /></body></html>
}
