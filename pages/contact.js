import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import SmContact from "../components/SmContact";

const contact = () => {
  <Head>
  <title>HiredB Media</title>
  <meta name="description" content="making online presence simple" />
  <link rel="icon" href="/favicon.ico" />
</Head>
  return (
    <div className="relative flex flex-col">
      <Navbar />
      <div className="bg-contact w-full h-[500px]">
        <h1 className="text-white font-Poppins text-[19px] md:text-[30px] font-semibold pt-[12rem] pl-[3rem]">
          Contact Us
        </h1>
      </div>

      <div className=" -mt-[16rem] md:-mt-[22rem] md:ml-[19rem] pb-[3rem]">
        <SmContact />
      </div>

      <Footer />
    </div>
  );
};

export default contact;
