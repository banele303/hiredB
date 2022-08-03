import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";
import Planning from "./../components/Planning";
import Image from "next/image";
import img2 from "../public/img2.jpg";
import Head from "next/head";
import Link from "next/link";
import React, { useRef } from "react";
import emailjs from "emailjs-com";


const services = () => {

  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jmnmftg",
        "hired_fp2zb1k",
        e.target,
        "10mVreYNS7j28ScA5"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <Head>
        <title>HiredB Media</title>
        <meta name="description" content="making online presence simple" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="services md:h-[600px] py-[2rem] px-4 md:px-[3rem] ">
        <h1 className="text-2xl font-Poppins md:text-4xl pt-[10rem] text-white font-bold">
          Web Design Services
        </h1>

        <h1 className="text-white font-Poppins text-[18px] md:text-[20px] md:max-w-[700px] pt-[2rem] opacity-45">
          Our web design service team focus on creating a cutting-edge website
          experience, beautifully designed and innovatively built, and easier to
          manage than anything you’ve worked with before.
        </h1>
      </div>

      {/* ALL */}

      <div className="px-3 md:px-[3rem] ">
        <div className="flex flex-col md:flex-row space-x-5 space-y-5">
          {/* RIGHT SIDE */}
          <div className="bg-white w-full md:w-[800px] md:px-[2rem] py-[3rem] mt-2  md:-mt-[10rem]">
            <h1 className="text-black font-Poppins text-[19px] md:text-[30px] font-semibold">
              Web Development & Design Services Overview
            </h1>
            <p className="text-black font-Poppins text-[15px] mb-[5rem] md:text-[15px] pt-[1.7rem]">
              Your website is the beating heart of your digital and online
              presence. Keeping it alive and working for you is therefore
              essential.
              <br />
              <br />
              We have designed and built hundreds of
              <span className="text-blue-400 font-semibold">websites</span> for
              a broad range of clients from start-ups and local enterprises to
              multinational companies and charities. Our work ranges from
              designing sites from scratch to comprehensive re-designs and
              ongoing maintenance.
              <br /> <br />
              Across South Africa , we have built up a strong client base and
              are always looking for new clients to develop exciting new
              solutions for.
              <br />
              <br />
              Delivering excellent customer service, we{" "}
              <span className="text-blue-400 font-semibold">
              `&quot;`make digital simple`&quot;`
              </span>
              for our clients, so they come back to us for support and help with
              their next big idea or project.tvf b
            </p>
            <div className="flex justify-center md:max-w-[700px] md:max-h-[500px] mt-3rem px-[1rem] md:px-[2rem]">
              <Image className="rounded-[1rem]" src={img2} alt="about" />
            </div>
            <h1 className="text-black font-Poppins pt-[2rem] pl-[2rem] text-[19px] md:text-[30px] font-semibold">
              Solving your problems via our Web Design Services
            </h1>
            <p className="text-black font-Poppins text-[15px]  md:text-[15px] pt-[1.7rem] px-[2rem]">
              Unless you are a website savvy individual, maintaining a well-run
              website can be a difficult ask. Our web design services remove the
              day to day digital challenges that typically frustrate business
              owners and marketing managers. How? By making digital simple for
              you so that it always helps rather than hinders your business.
            </p>
            <h1 className="text-black font-Poppins pt-[1rem] pl-[2rem] text-[15px]  font-semibold">
              We ensure our web design service will always be:
            </h1>
            <ul className="pl-[3rem]">
              <li className="text-black font-Poppins  text-[15px] pt-[1.7rem]">
                <span className="pr-2">-</span>Simple to Buy
              </li>
              <li className="text-black font-Poppins  text-[15px] pt-[.7rem]">
                <span className="pr-2">-</span>Simple to Use
              </li>
              <li className="text-black font-Poppins  text-[15px] pt-[.7rem]">
                <span className="pr-2">-</span>Simple to Change
              </li>
              <li className="text-black font-Poppins  text-[15px] pt-[.7rem]">
                <span className="pr-2">-</span>Simple to Extend
              </li>
            </ul>
            <h1 className="text-black font-Poppins pt-[1rem] pl-[2rem] text-[15px]  font-semibold">
              Here are some of the problems we typically solve for our clients:
            </h1>
            <p className="text-black font-Poppins text-[14px]  md:text-[14px] pt-[1.7rem] px-[2rem]">
              <span className="text-[14px] font-bold">Problem:</span> Hard to
              make updates (Lack of time to manage the site, shelf life of
              technology has come to an end, the supporting partner has come to
              an end or refuses to support the technology any more) - this
              creates a business problem.
              <br />
              <span className="text-[14px] font-bold">Solution: </span> Purpose
              built CMS. Fit for purpose. Point and click. Any change. Any time.
              CMS editing made simple.
              <br />
              <br />
              <span className="text-[14px] font-bold">Problem:</span> Design
              that looks unprofessional (Level of client dissatisfaction that is
              impacting conversion or sign up of new customers).
              <br />
              <span className="text-[14px] font-bold">Solution: </span> When we
              plan a new website we will review your competitors, look at the
              sites you love, design using flat, responsive modern design and
              the latest design trends, a full consideration of your audience
              and what they want to find, and designing a solution that solves
              the questions your business needs answering. We then wireframe the
              site, and only then move to the design phase, including the image
              colour and branding.
            </p>
            <button className="mt-[2rem] bg-gradient-to-r  from-violet-900 to-fuchsia-900  border-none rounded-md  text-white mr-4 ml-10 py-2 px-8 hover:scale-[1.1] transition-all duration-75 font-bold">
              <Link href="/contact "> TELL US MORE</Link>
            </button>
            <Planning />
          </div>

          {/* LEFT SIDE */}

          <div className="bg-white items-center md:w-[500px] px-2 pr-[1.3rem] md:pr-0 md:p-[2rem] py-[2rem]  pt-[6rem] ">
            <div className="bg-gradient-to-r  from-violet-900 to-fuchsia-900 flex flex-col justify-center items-center md:p-[2rem] md:-mt-[13.5rem] rounded-md">
              <h1 className="text-white font-Poppins pt-[1rem]  text-[19px]  font-semibold">
                Who are we?
              </h1>
              <p className="text-white leading-8 font-Poppins text-[14px] pb-[2rem]  md:text-[14px] pt-[1.7rem] px-[2rem] opacity-70">
                We are a digital agency specialising in Web Design, Development,
                Concrete5 and digital marketing, based in London & West Sussex.
                <br />
                <br />
                We make digital simple. Our purpose is to simplify your
                frustrations in digital and solve the challenges you face to
                help make you more money and progressively grow your business or
                organisation.
              </p>
              <button className="text-[15px] font-semibold py-[.8rem] mb-[2rem] px-[2rem] boarder-none rounded-md bg-slate-50 outline-none text-black">
                TEL ME MORE
              </button>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className="bg-slate-100 mt-[4rem]">
                <h1 className="text-black font-Poppins pt-[1rem] pl-[2rem] text-[19px]  font-semibold">
                  Email US
                </h1>
                <p className="text-black font-Poppins text-[14px] pb-[2rem]  md:text-[14px] pt-[1.7rem] px-[2rem] opacity-70">
                  Got a question about Web design? Send us a message and we`&apos;`ll
                  be happy to help...
                </p>
                <div className="px-[3rem] py-[.4rem]">
                  <label htmlFor="email-address" className="sr-only">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    className="appearance-none bg-transparent relative block w-full mb-[1rem] px-3 py-5 border-b border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Name"
                  />
                </div>
                <div className="px-[3rem] py-[.4rem]">
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="appearance-none relative bg-transparent block w-full mb-[1rem] px-3 py-5 border-b border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div className="px-[3rem] py-[.4rem]">
                  <label htmlFor="email-address" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="name"
                    name="message"
                    type="text"
                    autoComplete="name"
                    required
                    row="6"
                    className="appearance-none relative bg-transparent block w-full mb-[1rem] px-3 py-5 border-b border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Message"
                  />
                </div>
                <button
                type="submit"
                value="Send"
                className="mt-[2rem] mb-[3rem] bg-gradient-to-r  from-violet-900 to-fuchsia-900  border-none rounded-md  text-white mr-4 ml-10 py-2 px-8 hover:scale-[1.1] transition-all duration-75 font-bold"
              >
                SEND
              </button>
              </div>

             
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default services;
