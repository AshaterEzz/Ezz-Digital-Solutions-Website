import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ezz Digital Solutions - Building Smart, Scalable Ecosystems',
  description: 'From Zero to Digital Hero — Building Smart, Scalable Ecosystems. Digital transformation, AI automation, and intelligent online ecosystems.',
  keywords: 'digital transformation, AI automation, n8n, no-code, low-code, SEO, web development, digital strategy',
  authors: [{ name: 'Abdelaziz Ashater' }],
  openGraph: {
    title: 'Ezz Digital Solutions',
    description: 'Building Smart, Scalable Ecosystems',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
