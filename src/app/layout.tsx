import localFont from 'next/font/local'
import '../styles/globals.css'
import '../styles/typography.css'
import './globals.css'
import PageTransition from '../components/animation/PageTransition'

const bebasNeue = localFont({ src: './fonts/bebas-neue.woff2', weight: '400', variable: '--font-heading-family', display: 'swap' })
const openSans = localFont({ src: './fonts/open-sans.woff2', weight: '300 800', variable: '--font-body-family', display: 'swap' })
const plusJakartaSans = localFont({ src: './fonts/plus-jakarta-sans.woff2', weight: '400 800', variable: '--font-satoshi-fallback', display: 'swap' })
const archivoNarrow = localFont({ src: './fonts/archivo-narrow.woff2', weight: '400 700', variable: '--font-archivo-narrow', display: 'swap' })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${openSans.variable} ${plusJakartaSans.variable} ${archivoNarrow.variable}`}>
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,700,500,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  )
}
