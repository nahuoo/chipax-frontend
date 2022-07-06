import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer } from '../components/Footer'
import Cursor from '../components/customCursor/index'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Cursor />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
