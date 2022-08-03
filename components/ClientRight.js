import React from "react";
import Image from "next/image";
import img4 from "../public/projects2.png";
import img2 from "../public/img2.jpg";
import { FaQuoteRight } from "react-icons/fa";

import clsx from "clsx";
import HiredB from "./HiredB";

const ClientRight = () => {
  return (
    <div>
      <div className="bg-gray-100 mb-[5rem]">
        <div className="py-[2rem] px-[3rem]">
          <h1 className="text-black leading-9 font-Poppins pt-[2rem] text-[16px] md:text-[15px] font-semibold opacity-90">
            Client testimonial...
          </h1>
          <FaQuoteRight className="text-[2rem] text-blue-400 " />
          <h1 className="text-black leading-8 font-Poppins pt-[2rem] text-[15px] md:text-[17px]   opacity-90">
            "When we wanted to make changes to and add pages to our website, we
            began working with Banele at{" "}
            <span
              className={clsx(
                "bg-gradient-to-r from-fuchsia-800 via-purple-600 to-indigo-800 text-[16px] font-bold bg-clip-text align-middle   text-transparent"
              )}
            >
              {" "}
              HIREDB
            </span>{" "}
            Media. He has always been a pleasure to work with, is dependable,
            and provides prompt responses. He has also given us good advice on
            what we might want to add. Working with David and MSM is something I
            would strongly advise."
          </h1>
          <h1 className="text-black leading-8 font-Poppins pt-[2rem] text-[15px] md:text-[17px]   opacity-90">
            Mthokozisi khumalo
            <HiredB>Health</HiredB>
          </h1>
        </div>
      </div>

      {/* END */}
      <div className="">
        <div className="flex justify-center max-w-[700px] max-h-[500px]  ">
          <Image className="rounded-[.2rem]" src={img4} alt="about" />
        </div>
        <div className="bg-gray-100">
          <div className="py-[2rem] px-[3rem]">
            <h1 className="text-black leading-9 font-Poppins pt-[2rem] text-[16px] md:text-[15px] font-semibold opacity-90">
              Client testimonial...
            </h1>
            <FaQuoteRight className="text-[2rem] text-blue-400 " />
            <h1 className="text-black leading-8 font-Poppins pt-[2rem] text-[15px] md:text-[17px]   opacity-90">
              <HiredB>HIREDB</HiredB> Media provided excellent personalized
              service in understanding our needs and outlining each stage in the
              design process for our new website. We now have a professional
              website that is appealing and simple to operate, and they are
              constantly available to provide help and guidance. Thank you!"
            </h1>
            <h1 className="text-black leading-8 font-Poppins pt-[2rem] text-[15px] md:text-[17px]   opacity-90">
              Bathabile
              <HiredB> Detegents Products</HiredB>
            </h1>
          </div>
        </div>
      </div>

      {/* END */}
      <div className="mt-[3rem]">
        <div className="flex justify-center max-w-[700px] max-h-[500px]  ">
          <Image className="rounded-[.2rem]" src={img2} alt="about" />
        </div>
        <div className="bg-gray-100">
          <div className="py-[2rem] px-[3rem]">
            <h1 className="text-black leading-9 font-Poppins pt-[2rem] text-[16px] md:text-[15px] font-semibold opacity-90">
              Client testimonial...
            </h1>
            <FaQuoteRight className="text-[2rem] text-blue-400 " />
            <h1 className="text-black leading-8 font-Poppins pt-[2rem] text-[15px] md:text-[17px]   opacity-90">
              <HiredB>HIREDB</HiredB> Media provided excellent personalized
              service in understanding our needs and outlining each stage in the
              design process for our new website. We now have a professional
              website that is appealing and simple to operate, and they are
              constantly available to provide help and guidance. Thank you!"
            </h1>
            <h1 className="text-black leading-8 font-Poppins pt-[2rem] text-[15px] md:text-[17px]   opacity-90">
              Bathabile
              <HiredB>Civil works</HiredB>
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 mt-[2rem]">
        <div className="py-[2rem] px-[3rem]">
          <h1 className="text-black leading-9 font-Poppins pt-[2rem] text-[16px] md:text-[15px] font-semibold opacity-90">
            Client testimonial...
          </h1>
          <FaQuoteRight className="text-[2rem] text-blue-400 " />
          <h1 className="text-black leading-8 font-Poppins pt-[2rem] text-[15px] md:text-[17px]   opacity-90">
           
            <span
              className={clsx(
                "bg-gradient-to-r from-fuchsia-800 via-purple-600 to-indigo-800 text-[16px] font-bold bg-clip-text align-middle    text-transparent"
              )}
            >
              {" "}
              HIREDB
            </span>{" "}
            "Banele possesses solid technical abilities as well as knowledge of
            expert design. Our Concrete 5 website is in fantastic shape and has
            subsequently been expanded by him. Banele comes highly recommended,
            without a doubt."
          </h1>
          <h1 className="text-black leading-8 font-Poppins pt-[2rem] text-[15px] md:text-[17px]   opacity-90">
            Mthokozisi khumalo
            <HiredB>Financial</HiredB>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ClientRight;
