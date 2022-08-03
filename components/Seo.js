import Image from "next/image";
import React from "react";
import Navbar from "./Navbar";
import seo from "../public/seo4.png";
import keyword from "../public/sep5.png";
import onpage from "../public/sep5.png";
import competitor from "../public/competitor1.png";
import online from "../public/online.png";
import seo3 from "../public/seo3.png";
import conpetitor2 from "../public/competitor2.png";
import offpage from "../public/img6.png";
import offpage2 from "../public/img8.png";
import branding from "../public/branding.png";
import customer from "../public/customer.png";
import Link from "next/link"

const Seo = () => {
  return (
    <div>
      <div className="seo-hero  w-full h-[300px] rounded-b-[30%]">
        <Navbar />

        <h1 className="text-center font-Poppins text-2xl md:text-5xl pt-[8rem] text-white font-bold">
          Search Engine optimisation
        </h1>
      </div>
      <h1 className="text-center font-Poppins text-xl md:text-xl pt-[5rem] text-blue-500 font-bold">
        OUR SEO CAMPAIGNS CONTAIN ALL THE 6 VITAL ELEMENTS REQUIRED FOR SUCCESS.
      </h1>
      <p className="text-black font-Poppins text-center text-[19px] py-[2rem] px-2rem md:px-[8rem] font-semibold opacity-70">
        Our primary goal is to make sure that when a customer searches for a
        service or product that your company offers, they find your website
        first.
      </p>
      <p className="text-black font-Poppins text-center text-[19px] py-[1rem] px-2rem md:px-[8rem] font-semibold opacity-70">
        {/* When you chose to work with <HiredB>HIREDB</HiredB> you chose to work with a small
        number of obsessed individuals who won’t stop until you’re above your
        competitors. */}
      </p>
      <p className="text-black font-Poppins text-center text-[19px] py-[1rem] px-2rem md:px-[8rem] font-semibold opacity-70">
        We exclusively use tried-and-true methods, so it's no surprise that we
        consistently produce results.
      </p>
      <h1 className="text-center font-Poppins mb-[2rem] px-5 text-2xl md:text-5xl pt-[8rem] text-blue-800 font-bold">
        Features Of Our SEO Services
      </h1>

      <div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-[3rem]  justify-center px-[.6rem] md:px-[5rem] py-2rem md:py-[4rem]">
          <div className="card-one w-full md:w-[350px] flex justify-center rounded-md">
            <div className=" text-center py-[3rem]">
              <Image className="card-img" src={seo} alt="seo" />
              <h1 className="text-center font-Poppins text-2xl md:text-2xl pt-[2rem] text-white font-bold">
                Website Audit
              </h1>
              <p className="text-white font-Poppins text-center text-[18px] py-[1rem] px-[1rem] md:px-[1rem]  opacity-70">
                We begin the campaign by conducting a thorough website audit.
                These audits are essential for us to understand how the present
                site is constructed as well as any technological issues that are
                impeding your site's performance. To avoid building a house on
                sand, a strong foundation must be established from the
                beginning.
              </p>
            </div>
          </div>
          <div className="card-two  card md:w-[350px] flex justify-center rounded-md">
            <div className=" text-center py-[3rem]">
              <Image className="card-img" src={keyword} alt="seo" />
              <h1 className="text-center text-2xl md:text-1xl pt-[2rem] text-white font-bold">
                Keyword Research & <br />
                Analysis
              </h1>
              <p className="text-white font-Poppins text-center text-[18px] py-[1rem] px-[1rem] md:px-[1rem]  opacity-70">
                One of the most crucial aspects of any SEO effort, if not the
                most crucial. The search terms that potential customers would
                use to find your company are known as keywords. We conduct
                intensive keyword research and examine the terms that your
                competitors are using.
              </p>
            </div>
          </div>
          <div className="card-three card md:w-[350px] flex justify-center rounded-md">
            <div className=" text-center py-[3rem]">
              <Image className="card-img" src={competitor} alt="seo" />
              <h1 className="text-center font-Poppins text-2xl md:text-1xl pt-[2rem] text-white font-bold">
                Competitor’s Analysis
              </h1>
              <p className="text-white font-Poppins text-center text-[18px] py-[1rem] px-[1rem] md:px-[1rem]  opacity-70">
                Knowing what and who we are up against is crucial. Knowing this
                enables us to outsmart your rivals and create stronger, more
                effective marketing. The SEO strategies we run at ClickSlices
                are especially designed to make sure we have everything we need
                to outperform the competition.
              </p>
            </div>
          </div>
          <div className="card-three card md:w-[350px] flex justify-center rounded-md">
            <div className=" text-center py-[3rem]">
              <Image
                className="card-img hidden md:block"
                src={onpage}
                alt="seo"
              />
              <h1 className="text-center font-Poppins text-2xl md:text-1xl pt-[2rem] text-white font-bold">
                On-Page SEO
              </h1>
              <p className="text-white font-Poppins text-center text-[18px] py-[1rem] px-[1rem] md:px-[1rem]  opacity-70">
                To improve a website's exposure, onpage SEO is the process of
                modifying and optimizing the website itself. This entails making
                modifications TO your real website, as the name suggests. If you
                do this wrong, Google will put your website back on Page 10.
              </p>
            </div>
          </div>
          <div className="card-two card md:w-[350px] flex justify-center rounded-md">
            <div className=" text-center py-[3rem]">
              <Image className="card-img" src={seo3} alt="seo" />
              <h1 className="text-center font-Poppins text-2xl md:text-1xl pt-[2rem] text-white font-bold">
                Off-Page SEO
              </h1>
              <p className="text-white font-Poppins text-center text-[18px] py-[1rem] px-[1rem] md:px-[1rem]  opacity-70">
                Link building is usually referred to as off-page SEO. In
                essence, a link is a mention of your website on another external
                website. Link building improves the authority of your website
                and the visibility of your brand.
              </p>
            </div>
          </div>
          <div className="card-one font-Poppins md:w-[350px] flex justify-center rounded-md">
            <div className=" text-center py-[3rem]">
              <Image className="card-img" src={conpetitor2} alt="seo" />
              <h1 className="text-center text-2xl md:text-2xl pt-[2rem] text-white font-bold">
                Detailed Reporting
              </h1>
              <p className="text-white font-Poppins text-center text-[18px] py-[1rem] px-[1rem] md:px-[1rem]  opacity-70">
                Because we place a high value on openness, HIREDB sends monthly
                reports right to your inbox. These reports give you an overview
                of the campaign's development as well as your keyword rankings!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Methodology */}

      <div className="methodology">
        <h1 className="text-center font-Poppins text-2xl md:text-5xl pt-[4rem] text-white font-bold">
          Our Methodology
        </h1>
        <p className="text-white font-Poppins px-4 text-center text-[19px] py-[1rem] px-2rem md:px-[8rem] font-semibold opacity-70">
          Our primary goal is to make sure that when a customer searches for a
          service or product that your company offers, they find your website
          first.
        </p>
        <p className="text-white font-Poppins text-center text-[19px] py-[1rem] px-3rem md:px-[8rem] font-semibold opacity-70">
          Our process entails carefully examining the top five ranked websites
          in your sector. We then log all of this information and calculate
          averages. We reproduce the same averages across your site using this
          data as a reference.
        </p>
        <p className="text-white font-Poppins text-center text-[19px] py-[1rem] px-2rem md:px-[8rem] font-semibold opacity-70">
          Result? A campaign that delivers.
        </p>
        <p className="text-white font-Poppins text-center text-[19px] py-[1rem] px-2rem md:px-[8rem] font-semibold opacity-70">
          With a methodology above, its no surprise we always deliver results.
        </p>
        <div className="w-full  flex justify-center py-7">
          <button className="font-Poppins bg-gradient-to-r  from-violet-900 to-fuchsia-900  border-none rounded-md  text-white mr-4 ml-10 py-2 px-4 md:py-4 mb-[4rem] md:px-16 hover:bg-violet-900 font-bold">
           
            <Link href="/contact "> SPEAK WITH AN EXPECT</Link>
          </button>
        </div>
      </div>
      {/* ONPADE AND OFF PAGE SEO */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mx-[2rem] md:mx-[5rem]">
        <div className="flex justify-center flex-col py-[1rem] md:py-[3rem] ">
          <h1 className="text-center font-Poppins text-2xl md:text-5xl pt-[4rem] text-blue-600 font-bold">
            On-Page SEO
          </h1>
          <p className="text-black font-Poppins  text-[18px] py-[1rem] px-[1rem] md:px-[1rem] font-semibold  opacity-80">
            Onpage SEO is the process of tweaking and optimising a website to
            increase its visibility online. We typically implement all of the
            Onpage changes within the first 2 months of starting the campaign.
            <br /> <br />
            Example of some of the Onpage activities we carry out: Web page meta
            keywords, XML sitemap generation, keyword density and Proximity,
            Internal linking, mobile SEO, web page Headers, Robots.txt
            file,Google Analytics and search console set up.
          </p>
        </div>
        <div className="flex  justify-center flex-col py-[1rem] md:py-[3rem] mt-[4rem] relative max-h-[400px] max-w-[500px] ">
          <Image className="card-img" src={offpage} alt="seo" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-9 mx-[2rem] md:mx-[5rem]">
        <div className="flex justify-center flex-col py-[1rem] md:py-[3rem] mt-[4rem] relative max-h-[500px] max-w-[500px]  ">
          <Image className="card-img" src={offpage2} alt="seo" />
        </div>
        <div className="flex justify-center flex-col py-[1rem] md:py-[3rem] ">
          <h1 className="text-center font-Poppins text-2xl md:text-5xl pt-[4rem] text-blue-600 font-bold">
            Off-Page SEO
          </h1>
          <p className="text-black font-Poppins  text-[18px] py-[1rem] px-[1rem] md:px-[1rem] font-semibold  opacity-80">
            Adjust and optimize your website to make sure it complies with the
            strict requirements set forth by search engines and can be swiftly
            and simply indexed.
          </p>
        </div>
      </div>

      {/* WHY SEO */}
      <div className="why-seo">
        <h1 className="text-center font-Poppins text-2xl md:text-5xl pt-[4rem] text-blue-600 font-bold">
          Why SEO?
        </h1>
        <h1 className=" text-center font-Poppins text-xl md:text-[17px] pt-[4rem] text-black  px-[2rem] md:px-[7rem]">
          One of the best marketing channels available in terms of return on
          investment is SEO, which provides long-lasting results. Building
          credibility and trust with your audience is facilitated by appearing
          in the organic area.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-2 md:mx-[6rem]">
          <div className="flex justify-center">
            <div className=" text-center py-[3rem]">
              <Image className="card-img" src={customer} alt="seo" />
              <h1 className="text-center font-Poppins text-2xl md:text-1xl pt-[1rem] font-bold">
                Targeted Customers
              </h1>
              <p className="font-Poppins text-center text-[18px] py-[1rem] px-[1rem] md:px-[1rem]  opacity-70">
                present yourself to potential clients who are already looking
                for your services online
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" text-center py-[3rem]">
              <Image className="card-img" src={branding} alt="seo" />
              <h1 className="font-Poppins text-center text-2xl md:text-1xl pt-[1rem] font-bold">
                Branding
              </h1>
              <p className="font-Poppins text-center text-[18px] py-[1rem] px-[1rem] md:px-[1rem]  opacity-70">
                People typically buy from brands they are familiar with.
                Increase your brand awareness by ranking higher.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className=" text-center py-[3rem]">
              <Image className="card-img" src={online} alt="seo" />
              <h1 className="text-center font-Poppins text-2xl md:text-1xl pt-[1rem] font-bold">
                Online Presence
              </h1>
              <p className="font-Poppins text-center text-[18px] py-[1rem] px-[1rem] md:px-[1rem]  opacity-70">
                Increased your online presence and generate more inbound
                enquiries and sales.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center py-7">
          <button className="font-Poppins bg-gradient-to-r  from-violet-900 to-fuchsia-900  border-none rounded-md  text-white mr-4 ml-10 py-2 px-4 md:py-4 md:px-16 hover:bg-violet-900 font-bold">
            
            <Link href="/contact ">SPEAK WITH AN EXPECT</Link>
          </button>
        </div>
      </div>

      <div className="book-call py-[3rem] px-10">
        <h1 className="font-Poppins text-center text-2xl md:text-5xl pt-[4rem] text-white font-bold">
          You're one call away from a whole new business..
        </h1>
        <p className="text-white font-Poppins text-center text-[19px] py-[1rem] px-2rem md:px-[8rem] font-semibold opacity-70">
          Ready to dominate Google and take your business to the next level?
        </p>
        <p className="text-white font-Poppins text-center text-[19px] py-[1rem] px-2rem md:px-[8rem] font-semibold opacity-70">
          Book a discovery call with one of our SEO experts today!
        </p>
        <div className="w-full flex justify-center py-7">
          <button className="font-Poppins bg-gradient-to-r  from-violet-900 to-fuchsia-900  border-none rounded-md  text-white mr-4 ml-10 py-2 px-4 md:py-4 md:px-16 hover:bg-violet-900 font-bold">
            BOOK A CALL
          </button>
        </div>
      </div>
    </div>
  );
};

export default Seo;
