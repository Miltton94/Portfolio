import { Inter, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'
import Header from '@/components/Header'
import ContactForm from '@/components/Contact-form'
import Footer from '@/components/Footer'
import BackToTop from '@/components/Back-to-top'
import Toaster from '@/components/Toaster'
import Script from 'next/script'

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
    default: 'Desenvolvedor Milton',
    template: '%s | Dev Milton',
  },
  icons: {
    icon: '/favicon.png',
  },
  metadataBase: new URL('https://devmilton.com'),
  description:
    'Desenvolvedor e Programador Front-end especializado em criação de sites, com foco em oferecer soluções inovadoras e experiências digitais incríveis.',
  keywords: [
    'Site',
    'Front-end',
    'Desenvolvedor',
    'Programador',
    'Novo itacolomi',
    'Apucarana',
  ],
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${plexMono.variable}`}>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WF46WGNX');
        `}
      </Script>

      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WF46WGNX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>

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
