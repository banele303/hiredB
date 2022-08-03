import React from "react";
import bgImg from "../public/img3.jpg";
import aboutImg from "../public/digital2.jpg";
import abouImag from "../public/about.jpg";
import seo from "../public/img4.jpg";
import Image from "next/image";
import Navbar from "../components/Navbar";
import classes from "../styles/about.module.css";
import Footer from "../components/Footer";
import Head from "next/head";
import Link from "next/link";


const about = () => {
  return (
    <div>
       <Head>
        <title>HiredB Media</title>
        <meta name="description" content="making online presence simple" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className={classes.image_container}>
        <Image src={bgImg} layout="fill" className={classes.image} alt="img" />
        <div className="p-[3rem]  md:w-[480px] bg-gradient-to-r sm:mt-[3rem]  from-violet-800 to-fuchsia-900 flex flex-col justify-end  absolute top-[6rem] md:top-[10rem] md:right-[5rem] ">
          <h1 className="font-Poppins text-2xl md:text-3xl text-white font-bold opacity-70">
            “My Company Has a Website... It simply does nothing for us...”
          </h1>
          <p1 className="font-Poppins text-l md:text-l text-white py-10 md:pt-[3rem] opacity-70">
            These days, taking someone who has never heard of your business has
            become more difficult. and convert them into a client
          </p1>
          <p1 className="font-Poppins text-l md:text-l text-white py-10 md:py-[.2rem] opacity-70 ">
            But it`&apos;`s much simpler if they TRUST you, if you HELP them, and if
            you STAND OUT from the crowd. The simplest way to do so is to put up
            a website that handles all of your company`&apos;`s `&quot;`selling`&quot;` so you can
            concentrate on serving customers.
          </p1>
        </div>
      </div>

      <section className="content-center pt-[12rem] md:px-13">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-[rem] w-full md:px-5rem">
          <div className="max-w-[600px] max-h-[600px] flex justify-end py-[3rem] px-[3rem]">
            <Image src={aboutImg} alt="about" />
          </div>
          <div className="px-[2rem] md:px-0">
            <h3 className="text-rose-600 font-Poppins font-semibold opacity-70 pt-[3rem]">
              WEB DEVELOPER STRATEGY
            </h3>
            <h1 className=" text-2xl font-Poppins md:text-4xl font-bold opacity-90 pt-[2rem]">
              We Create Marketing Strategies That Are Results-Driven.
            </h1>
            <h1 className="leading-6 font-Poppins md:text-1xl font-semibold opacity-70 pt-[1rem] md:pr-[3rem]">
              Increasing website traffic and receiving likes on social media
              posts are only a small part of marketing. Building relationships
              with potential consumers and earning their trust by demonstrating
              your competence are key components of marketing. assisting
              potential clients in contacting you and encouraging them to use
              your services or purchase your goods when necessary. With this in
              mind, we carefully craft our plans.
            </h1>
          </div>
        </div>
      </section>
      <div className="marketing_services">
        <h3 className="text-rose-600 font-Poppins font-semibold opacity-70 pt-[3rem] flex justify-center">
          WEB DEVELOPER STRATEGY
        </h3>
        <h1 className=" text-2xl font-Poppins md:text-4xl font-bold opacity-90 pt-[2rem] flex justify-center text-center">
          We Draw Traffic To Your Websites & Funnels With Paid & <br />
          Organic Methods
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-3 mx-1 md:mx-[4rem]">
          <div className="max-w-[400px] md:max-w-[400px] py-[3rem] px-3 md:px-[3rem]">
            <Image src={seo} alt="about" />
            <h1 className=" text-xl font-Poppins md:text-2xl font-bold opacity-90 pt-[1.4rem]  ">
              SEO Marketing
            </h1>
            <h1 className="leading-6 font-Poppins md:text-1xl font-semibold opacity-70 pt-[1rem] ">
              Since more than half of online searches still favor organic
              results over paid ads, ranking organically on search engines
              should be your primary aim. When properly implemented, SEO is a
              long-term marketing strategy that will provide high-quality leads
              that are simple to convert.
            </h1>
          </div>
          <div className="max-w-[400px] md:max-w-[400px] py-[3rem] px-3 md:px-[3rem]">
            <Image src={abouImag} alt="about" />
            <h1 className="font-Poppins text-xl md:text-2xl font-bold opacity-90 pt-[1.4rem]">
              Digital Marketing
            </h1>
            <h1 className="leading-6 font-Poppins md:text-1xl font-semibold opacity-70 pt-[1rem] ">
              The heart of your digital and online presence is your website.
              Keeping it active and generating income for you is crucial. By
              providing exceptional customer service and `&quot;`making digital simple`&quot;`
              for our clients, we encourage them to return to us for support and
              assistance with their next major project or idea.
            </h1>
          </div>
          <div className="max-w-[400px] md:max-w-[400px] py-[3rem] px-3 md:px-[3rem]">
            <Image src={bgImg} alt="about" />
            <h1 className=" text-xl md:text-2xl font-Poppins font-bold opacity-90 pt-[1.4rem]">
              Web Development
            </h1>
            <h1 className="leading-6 font-Poppins md:text-1xl font-semibold opacity-70 pt-[1rem]">
              Your website is the beating heart of your digital and online
              presence. Keeping it alive and working for you is therefore
              essential. Our web design team focuses on developing a
              cutting-edge website experience that is easier to administer than
              anything you`&apos;` ve ever used, elegantly designed, and innovatively
              developed.
            </h1>
          </div>
        </section>
      </div>
      <section>
        <h3 className="text-rose-600 font-semibold opacity-70 pt-[3rem] flex justify-center">
          ENQUIRY
        </h3>
        <h1 className=" text-xl font-Poppins md:text-2xl font-bold py-4 md:py-[1rem] pt-[4rem] flex justify-center text-center">
        Do you want to benefit from our tried-and-true online marketing strategy <br/> for your company?
        </h1>
        <p1 className=" text-l font-Poppins md:text-l font-semibold opacity-90 px-4 md:px-[4rem]  flex justify-center text-center">
        Set up a free conversation with us to discuss your needs and receive your free LIVE <br/> marketing audit and SEO Report.
        </p1>
        <div className="w-full flex justify-center py-7">
        
          <button className=' bg-gradient-to-r  from-violet-900 to-fuchsia-900 font-Poppins  border-none rounded-md  text-white mr-4 ml-10 py-2 px-8 hover:scale-[1.1] transition-all duration-75 font-bold'>
            <Link href="/contact ">Schedule A Call </Link>
          </button>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default about;
