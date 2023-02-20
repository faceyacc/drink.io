import '@/styles/globals.css'
import Sidebar from '../components/sidebar'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
  <>
    {/* <Sidebar/> */}
    <Head>
      <title>Drink</title>
    </Head>
    <Component {...pageProps} />
  </> 
)
}
