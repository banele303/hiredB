
import React from 'react'
import ClientHero from '../components/ClientHero'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Head from "next/head";
const clients = () => {
  return (
    <div>
       <Head>
        <title>HiredB Media</title>
        <meta name="description" content="making online presence simple" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar/>
        <ClientHero/>
        <Footer/>
    </div>

  )
}

export default clients