import React from "react";
import HeroMini from "./HeroMini";
const Hero = () => {
  return (
    <div className="hero">
      <div className="relative w-full h-screen grid md:grid-cols-2  md:gap-4 ">
        <div className="mt-[6rem] md:py-12 md:my-12 md:pl-[3rem] md:w-[700px] px-[2rem]">
          <p
            className="leading-8 text-slate-100 w-full font-Poppins pb-[1rem] pt-[1rem]   tracking-widest z-10 justify-center
          md:mt-[80px]  md:text-4xl text-2xl font-black "
          >
           Making Digital Simple
          </p>
          <p
            className="leading-8 text-slate-400 w-full font-Poppins   tracking-widest z-10 justify-center
          md:mt-[8px]  md:text-[16px]  font-semibold "
          >
          We simplify digital. Our goal is to ease your digital difficulties by and address your challenges in order to help you earn more money and steadily expand your company or organization. and create a company website that converts visitors into leads and customers
          </p>

         
        </div>
       
      </div>
      <HeroMini/>
    </div>
  );
};

export default Hero;
