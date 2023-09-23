import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Open_Sans } from 'next/font/google'
import Header from '@/components/Header'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-openSans',
  weight: ['300', '400', '500', '600', '700', '800',]
  // weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Air conditioner Installation & Repairs in Gauteng - Ultratech Aircon',
  description: 'Air conditioning installation, repairs, maintenance and refrigeration services Johannesburg. Get a free estimate to day. Service guarantee.',
  alternates: {
    canonical: 'https://www.ultratechaircon.co.za',
  },

  openGraph: {
    title: 'Air conditioner Installation & Repairs in Gauteng - Ultratech Aircon',
    siteName: 'Ultra Tech Aircons',
    description:
      "Air conditioning installation, repairs, maintenance and refrigeration services Johannesburg. Get a free estimate to day. Service guarantee.",
    url: 'https://www.ultratechaircon.co.za',
    locale: 'en_US',
    type: 'website',
  },
  category: 'technology',
  twitter: {
    creator: '@jchademwiri',
    creatorId: '1467726470533754880',
    siteId: '1467726470533754880',
    card: 'summary_large_image',

  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
