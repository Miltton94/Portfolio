'use client'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode, useState } from 'react'
import Header from '@/components/Header'
import ContactForm from '@/components/Contact-form'
import Footer from '@/components/Footer'
import BackToTop from '@/components/Back-to-top'
import Toaster from '@/components/Toaster'
import MenuMobile from '@/components/Header/MenuMobile'
import { icons } from 'react-icons'

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
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <body>
        <Toaster />
        <BackToTop />

        <Header setMenuIsVisible={setMenuIsVisible} />
        <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}
        />

        {children}

        <ContactForm />
        <Footer />
      </body>
    </html>
  )
}
