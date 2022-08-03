import React from 'react'

import Seo from '../components/Seo'
import Footer from './../components/Footer';
import Head from "next/head";
const servicesSeo = () => {
  return (
    <div>
       <Head>
        <title>HiredB Media</title>
        <meta name="description" content="making online presence simple" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Seo/>
        <Footer/>
    </div>
  )
}

export default servicesSeo