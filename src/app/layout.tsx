import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Providers } from '@/providers/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EkLavya',
  description: 'EkLavya Learning Platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow mt-12">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}