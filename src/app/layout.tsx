import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FloatingCTA } from '@/components/ui/CTAButton'
import { MedicalBusinessSchema, PhysicianSchema } from '@/components/seo/JsonLd'
import { SITE_CONFIG } from '@/lib/constants'

const GA_MEASUREMENT_ID = 'G-BX6WXEPZEP'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'Cirugía SMILE en CDMX | Dr. César Sánchez Galeana | Optall Vision',
    template: '%s | SMILE Optall Vision',
  },
  description: SITE_CONFIG.description,
  robots: 'index, follow',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: '0rduqZFwjLYuYLCfkFEDvuZzITVj3iWMxWWe0F6YYPU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-MX">
      <head>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <MedicalBusinessSchema />
        <PhysicianSchema />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  )
}
