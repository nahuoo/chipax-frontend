import type { NextPage } from 'next'
import Head from 'next/head'
import { Hero } from '../components/Hero'
import { Intro } from '../components/Intro'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chipax Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Intro />
        <Hero />
      </main>
    </>
  )
}

export default Home
