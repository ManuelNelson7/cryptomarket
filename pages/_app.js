import { ThemeProvider } from 'next-themes'
import Script from 'next/script'

import { Navbar, Footer } from '../components/'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider attribute="class">
    <div className='dark:bg-nft-dark bg-white min-h-screen'>
      <Navbar />
      <div className='pt-65'>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>

    <Script src="https://kit.fontawesome.com/ceabe9f5f3.js" crossOrigin="anonymous" />
  </ThemeProvider>
)

export default MyApp
