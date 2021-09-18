import Head from 'next/head'
import Ecosystem from '../components/ecosystem'
import Hero from '../components/hero'
import Platform from '../components/platform'

export default function Home() {

  return (
    <>
      <Head>
        <title>WEquil Coin</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.5.2/animate.min.css" />
      </Head>
      <main>
        <Hero/>
        <Ecosystem />
        <Platform />
      </main>
    </>
  )
}