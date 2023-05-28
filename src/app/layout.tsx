import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import ContactForm from '@/components/Contact-form'
import Footer from '@/components/Footer'
import BackToTop from '@/components/Back-to-top'
import Toaster from '@/components/Toaster'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata = {
  title: {
    default: 'Home',
    template: '%s | M Dev',
  },
  icons: {
    url: '/favicon.png',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster />
        <BackToTop />

        <Header />

        {children}

        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}
