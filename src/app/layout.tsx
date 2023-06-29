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
    default: 'Dev Milton',
    template: '%s | Dev Milton',
  },
  icons: {
    icon: '/favicon.png',
  },
  description:
    'Desenvolvedor web com paixão e criatividade, oferecendo soluções inovadoras para criar experiências digitais incríveis.',
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'TypeScript',
    'dev',
    'milton',
    'devmilton',
    'Site',
    'Web',
    'Design',
    'Internet',
    'Front-end',
    'Desenvolvedor',
    'Programador',
    'Programação',
    'Código',
    'Software',
    'Tecnologia',
  ],
  colorSheme: 'dark',
  generator: 'Next.js',
  applicationName: 'Desenvolvedor Milton',
  creator: 'Milton Silva',
  publisher: 'Milton Silva',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    minimumScale: 1,
  },
  category: ['Web', 'Desenvolvimento', 'Programação', 'Tecnologia'],
  robots: {
    index: true,
    follow: true,
    nocache: true,
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
