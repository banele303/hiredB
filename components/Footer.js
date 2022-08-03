import React from "react";
import HiredB from "./HiredB";
import { FcGoogle } from "react-icons/fc";
import { FaStar, FaTwitterSquare, FaInstagramSquare, FaLinkedin , FaFacebookSquare} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-footer md:p-[3rem] px-5 py-10 ">
      <hr className="pt-[2rem] text-gray opacity-20" />
      <div className="grid grid-cols-1 md:grid-cols-4 mx-[2rem] px-[2rem] md:gap-24">
        <div className="py-[3rem] md:px-[2rem]">
          <h1 className="text-[19px] pb-[2rem]  text-white font-bold font-Poppins">
            About
          </h1>
          <HiredB>HIREDB</HiredB>

          <h1 className="text-white leading-6 font-Poppins pt-[.7rem] text-[15px] md:text-[14px] pb-[1rem]   opacity-90">
            Glenanda 47 Amand Road Johannesburg South, South Africa
          </h1>
          <h1 className="text-white leading-6 font-Poppins pt-[.7rem] text-[15px] md:text-[16px]  hover:text-fuchsia-800 transition-all cursor-pointer duratiion-60 font-bold opacity-90">
            +27 068 445 8136
          </h1>

          <h1 className="text-white leading-6 font-Poppins pt-[.7rem] text-[15px] md:text-[14px] hover:text-fuchsia-800 transition-all cursor-pointer duratiion-60  opacity-90">
            hiredbb@gmail.com
          </h1>
        </div>

        {/* END */}
        <div className="py-[3rem] ">
          <h1 className="text-[19px] pb-[1.8rem]  text-white font-bold font-Poppins">
            Services
          </h1>
          <ul>
            <li>
              <h1 className="text-white leading-6 font-Poppins pt-[.7rem] text-[15px] md:text-[16px] hover:text-fuchsia-800 transition-all cursor-pointer duratiion-60  opacity-90">
                Seo
              </h1>
            </li>
            <li>
              <h1 className="text-white leading-6 font-Poppins pt-[.7rem] text-[15px] md:text-[16px] hover:text-fuchsia-800 transition-all cursor-pointer duratiion-60  opacity-90">
                Web Development
              </h1>
            </li>
            <li>
              <h1 className="text-white leading-6 font-Poppins pt-[.7rem] text-[15px] md:text-[16px] hover:text-fuchsia-800 transition-all cursor-pointer duratiion-60  opacity-90">
                Local Seo
              </h1>
            </li>
            <li>
              <h1 className="text-white leading-6 font-Poppins pt-[.7rem] text-[15px] md:text-[16px] hover:text-fuchsia-800 transition-all cursor-pointer duratiion-60  opacity-90">
                Technical Seo
              </h1>
            </li>
            <li>
              <h1 className="text-white leading-6 font-Poppins pt-[.7rem] text-[15px] md:text-[16px] hover:text-fuchsia-800 transition-all cursor-pointer duratiion-60  opacity-90">
                Web Design
              </h1>
            </li>
            <li>
              <h1 className="text-white leading-6 font-Poppins pt-[.7rem] text-[15px] md:text-[16px] hover:text-fuchsia-800 transition-all cursor-pointer duratiion-60  opacity-90">
                Link Building
              </h1>
            </li>
          </ul>
        </div>

        {/* End */}
        <div className="py-[3rem] ">
        <h1 className="text-[19px] pb-[1.8rem]  text-white font-bold font-Poppins">
            HIREDB
          </h1>

          <ul>
            <li>
              <h1 className="text-white leading-6 font-Poppins pt-[.7rem] text-[15px] md:text-[16px] hover:text-fuchsia-800 transition-all cursor-pointer duratiion-60  opacity-90">
                Blog
              </h1>
            </li>
            <li>
              <h1 className="text-white leading-6 font-Poppins pt-[.7rem] text-[15px] md:text-[16px] hover:text-fuchsia-800 transition-all cursor-pointer duratiion-60  opacity-90">
                Our Seo Services
              </h1>
            </li>
            <li>
              <h1 className="text-white leading-6 font-Poppins pt-[.7rem] text-[15px] md:text-[16px] hover:text-fuchsia-800 transition-all cursor-pointer duratiion-60  opacity-90">
                OUR Seo Process
              </h1>
            </li>
            <li>
              <h1 className="text-white leading-6 font-Poppins pt-[.7rem] text-[15px] md:text-[16px] hover:text-fuchsia-800 transition-all cursor-pointer duratiion-60  opacity-90">
                Site Map
              </h1>
            </li>
            <li>
              <h1 className="text-white leading-6 font-Poppins pt-[.7rem] text-[15px] md:text-[16px] hover:text-fuchsia-800 transition-all cursor-pointer duratiion-60  opacity-90">
                Team Of Services
              </h1>
            </li>
            <li>
              <h1 className="text-white leading-6 font-Poppins pt-[.7rem] text-[15px] md:text-[16px] hover:text-fuchsia-800 transition-all cursor-pointer duratiion-60  opacity-90">
                Privace and Policy
              </h1>
            </li>
          </ul>
        </div>

        {/* End */}
        <div className="py-[3rem] ">
        <h1 className="text-[19px] pb-[1.8rem]  text-white font-bold font-Poppins">
            More On Us
          </h1>
          <ul>
            <li className="flex flex-col">
                <div className="flex flex-row">
                <FcGoogle className="text-[40px]"/>
                <h1 className="text-white leading-6 font-Poppins pt-[.7rem] pl-[10px] text-[13px] md:text-[13px]  transition-all cursor-pointer duratiion-60  opacity-90">
              Reviews
              </h1>
              
                </div>
                <div className="flex flex-row space-x-1 pl-[3rem]" >
                <FaStar className="text-orange-400 text-[8px]"/>
                <FaStar className="text-orange-400 text-[8px]"/>
                <FaStar className="text-orange-400 text-[8px]"/>
                <FaStar className="text-orange-400 text-[8px]"/>
                <FaStar className="text-orange-400 text-[8px]"/>
              </div>
            </li>
            <li >
              <h1 className="text-white leading-6 font-Poppins pt-[2rem] text-[15px] md:text-[16px] hover:text-fuchsia-800 transition-all cursor-pointer duratiion-60  opacity-90">
              Social Media
              </h1>
            </li>
            <li>
             <div className="flex flex-row space-x-1 pl-[1rem] pt-[1.4rem]">
               <FaTwitterSquare className="rounded-md text-[25px] text-blue-600 px-[2px] cursor-pointer hover:text-blue-500"/>
               <FaInstagramSquare className="text-[25px] text-blue-600 px-[2px] cursor-pointer hover:text-blue-500"/>
               <FaLinkedin className="rounded-md text-[25px] text-blue-600 px-[2px] cursor-pointer hover:text-blue-500"/>
               <FaFacebookSquare className="text-[25px] text-blue-600 px-[2px] cursor-pointer hover:text-blue-500"/>
             </div>
            </li>
            <li>
            <h1 className="text-white leading-6 font-Poppins pt-[1.7rem] text-[15px] md:text-[16px]  hover:text-fuchsia-800 transition-all cursor-pointer duratiion-60 font-bold opacity-90">
            +27 068 445 8136
          </h1>
            </li>
           
          </ul>
        </div>





      </div>
      <hr className="pt-[2rem] text-gray opacity-20" />

      <h1 className="text-white text-[13px] font-Poppins md:pl-[6rem] ">© 2022 — Design By <HiredB>HIREDB</HiredB> . All Rights Reserved.</h1>
    </div>
  );
};

export default Footer;
