import Head from "next/head";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Owners from "../components/Owners";
import WeDo from "../components/WeDo";
import Whatmakes from "../components/Whatmakes";


export default function Home() {
 

  return (
    <div>
      
      <Head>
        <title>HiredB Media</title>
        <meta name="description" content="making online presence simple" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar  />
      <Hero />
      <Owners />
      <WeDo />
      <Whatmakes />

      <Footer />
    </div>
  );
}
