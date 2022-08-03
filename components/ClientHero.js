import React from "react";
import Image from "next/image";
import Link from "next/link";
import img2 from "../public/project3.png";
import img3 from "../public/project4.png";
import { FaQuoteRight } from "react-icons/fa";
import clsx from "clsx";
import HiredB from "./HiredB";
import ClientRight from "./ClientRight";

const ClientHero = () => {
  return (
    <div>
      <div className="services md:h-[700px] py-[2rem] px-[3rem] ">
        <div className="pt-[12rem]">
          <h1 className="text-white font-Poppins text-[19px] md:text-[40px] font-semibold">
            Clients
          </h1>
          <h1 className="text-white leading-9 font-Poppins pt-[2rem] text-[16px] md:text-[18px] font-semibold opacity-90">
            For us, success is being respected, being trusted, being liked and
            creating solutions that <br />
            we are proud of. <br />
            But don`&apos;`t take our word for it, read what our clients say below...
          </h1>
        </div>
      </div>

      {/* LEFT SIDE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:-mt-[7rem] pt-[1rem] mb-[6rem] px-[1rem] md:px-[5rem]">
        <div className="">
          <div className="flex justify-center max-w-[700px] max-h-[500px]  ">
            <Image className="rounded-[.2rem]" src={img2} alt="about" />
          </div>
          <div className="bg-gray-100">
            <div className="py-[2rem] px-4 md:px-[3rem]">
              <h1 className="text-black leading-9 font-Poppins pt-[2rem] text-[16px] md:text-[15px] font-semibold opacity-90">
                Client testimonial...
              </h1>
              <FaQuoteRight className="text-[2rem] text-blue-400 " />
              <h1 className="text-black leading-8 font-Poppins pt-[2rem] text-[15px] md:text-[17px]   opacity-90">
              `&quot;`For a very reasonable price, Banele and his coworkers created a
                clean and expert website to help our business. They were
                attentive to our needs, quick to respond, and finished on
                schedule. We are quite happy with the outcome, and we have
                already received many more. there have been more website
                inquiries than there have previously been. excellent success
                Additionally, Made Simple Media greatly simplified things for
                us. they helped us out a lot by allowing us to change pages as
                needed and supplying our own instructions on how to achieve
                this. Highly suggested.`&quot;` Bakhulile, Glenanda North
              </h1>
              <h1 className="text-black leading-8 font-Poppins pt-[2rem] text-[15px] md:text-[17px]   opacity-90">
                Mpha Projects
                <HiredB> Constaction & civil works</HiredB>
              </h1>
            </div>
          </div>
          {/* EHD */}

          <div className="bg-gray-100 mt-[5rem]">
            <div className="py-[2rem] px-4 md:px-[3rem]">
              <h1 className="text-black leading-9 font-Poppins pt-[2rem] text-[16px] md:text-[15px] font-semibold opacity-90">
                Client testimonial...
              </h1>
              <FaQuoteRight className="text-[2rem] text-blue-400 " />
              <h1 className="text-black leading-8 font-Poppins pt-[2rem] text-[15px] md:text-[17px]   opacity-90">
              `&quot;`When we wanted to make changes to and add pages to our website,
                we began working with Banele at
                <span
                  className={clsx(
                    "bg-gradient-to-r from-fuchsia-800 via-purple-600 to-indigo-800 text-[15px] font-bold bg-clip-text align-middle    text-transparent"
                  )}
                >
                  {" "}
                  HIREDB
                </span>{" "}
                Media. He has always been a pleasure to work with, is
                dependable, and provides prompt responses. He has also given us
                good advice on what we might want to add. Working with David and
                MSM is something I would strongly advise.`&quot;`
              </h1>
              <h1 className="text-black leading-8 font-Poppins pt-[2rem] text-[15px] md:text-[17px]   opacity-90">
                Mthokozisi khumalo
                <HiredB>Glenvista</HiredB>
              </h1>
            </div>
          </div>
          <div className="flex justify-center max-w-[700px] max-h-[500px] mt-[5rem]  ">
            <Image className="rounded-[.2rem]" src={img3} alt="about" />
          </div>
          <div className="bg-gray-100">
            <div className="py-[2rem] px-4 md:px-[3rem]">
              <h1 className="text-black leading-9 font-Poppins pt-[2rem] text-[16px] md:text-[15px] font-semibold opacity-90">
                Client testimonial...
              </h1>
              <FaQuoteRight className="text-[2rem] text-blue-400 " />
              <h1 className="text-black leading-8 font-Poppins pt-[2rem] text-[15px] md:text-[17px]   opacity-90">
              `&quot;`For a very reasonable price, Banele and his coworkers created a
                clean and expert website to help our business. They were
                attentive to our needs, quick to respond, and finished on
                schedule. We are quite happy with the outcome, and we have
                already received many more. there have been more website
                inquiries than there have previously been. excellent success
                Additionally, Made Simple Media greatly simplified things for
                us. they helped us out a lot by allowing us to change pages as
                needed and supplying our own instructions on how to achieve
                this. Highly suggested.`&quot;` Bakhulile, Glenanda North
              </h1>
              <h1 className="text-black leading-8 font-Poppins pt-[2rem] pb-[4rem] text-[15px] md:text-[17px]   opacity-90">
                Ezekhiyeli
                <span className="text-blue-400 pl-[10px]">Civil works &  Constraction</span>
              </h1>
            </div>
          </div>
        </div>

        {/* END */}
        <ClientRight />
      </div>
      <div className="bg-gradient-to-r  from-violet-900 to-fuchsia-900 md:p-[4rem] md:mx-[6rem]  mx-[.5rem] mb-[5rem] flex  flex-col items-center">
        <h1 className="text-slate-200 rounded-sm leading-9 font-Poppins pt-[2rem] text-[19px] md:text-[25px] font-semibold opacity-90">
          How can we help?
        </h1>
        <button className="bg-white border-none rounded-md mb-[2rem]  mt-[2rem]  text-black font-Poppins text-[18px] md:mr-4 md:ml-10 py-2 px-8 hover:scale-[1.1] transition-all duration-75 font-bold">
         
          <Link href="/contact ">Get In Touch</Link>
        </button>
      </div>
    </div>
  );
};

export default ClientHero;
