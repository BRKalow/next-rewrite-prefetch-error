import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <>
  <Link href="/test"><a>Link to test</a></Link>
  <Component {...pageProps} />
  </>
}


export default MyApp
