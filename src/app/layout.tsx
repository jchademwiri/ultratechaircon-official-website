import Footer from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins, Open_Sans } from 'next/font/google'
import Header from '@/components/Header'

const poppins = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700', '800',]
  // weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: 'Air conditioner Installation & Repairs in Gauteng - Ultratech Aircon',
  description: 'Air conditioning installation, repairs, maintenance and refrigeration services Johannesburg. Get a free estimate to day. Service guarantee.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
