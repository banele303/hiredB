import React from "react";
import Image from "next/image";
import img2 from "../public/digital2.jpg";

const Planning = () => {
  return (
    <div className="flex flex-col pt-[3rem]">
        <div className="flex justify-center max-w-[700px] max-h-[500px] mt-3rem px-[1rem] md:px-[2rem]">
              <Image className="rounded-[1rem]" src={img2} alt="about" />
            </div>
      <h1 className="text-black font-Poppins pt-[1rem] pl-[2rem] text-[29px]  font-semibold">
        Planning for success
      </h1>
      <p className="text-black font-Poppins text-[14px] pb-[2rem]  md:text-[14px] pt-[1.7rem] px-[2rem] ">
        No one knows your business better than you, so to ensure the success of
        your project, we keep you involved every step of the way.
        <br />
        <br />
        We get your project off to the best start during the initial
        consultation where we listen to your expectations and needs. Our team
        then map out the rest of the project based on what you say. Our
        comprehensive web design service centres around a simple process.
      </p>
    </div>
  );
};

export default Planning;
