import React, { useState, useEffect } from "react";

import Image from "next/image";
import logoImg from "../public/MuzicLogo.png";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

 
  const [scrolled, setScrolled] = useState(false);
  


  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
   
      <div>
        <div
          className={
            scrolled
              ? "scrolled w-screen h-[80px] z-10  fixed drop-shadow-lg p-[3rem]"
              : " w-screen h-[80px] z-10  fixed drop-shadow-lg pt-[3rem] "
          }
        >
          <div className="px-2 flex justify-between items-center w-full h-full">
            <div className="flex items-center pl-6">
            
              <Image src={logoImg} alt="logo" />
            </div>
            <div className="hidden md:flex pr-4">
              <ul className="hidden md:flex ">
                <li className="md:ml-3 py-3  px-6 hover:border-b border-5 border-sky-900 cursor-pointer text-white  font-bold">
                  <Link href="/">HOME</Link>
                </li>
                <li className="md:ml-3 py-3 px-6  hover:border-b border-5 border-sky-900 cursor-pointer text-white font-bold">
                  <Link href="/about">ABOUT</Link>
                </li>
                <li className="md:ml-3 py-3 px-6 hover:border-b border-5 border-sky-900 text-white font-bold">
                  <Link href="/services">SERVICES</Link>
                </li>
                <li className="md:ml-3 py-3 px-6 hover:border-b border-5 border-sky-900 cursor-pointer text-white font-bold">
                  <Link href="/servicesSeo ">SEO</Link>
                </li>
                <li className="md:ml-3 py-3 px-6 hover:border-b border-5 border-sky-900 cursor-pointer text-white font-bold">
                  <Link href="/clients ">Clients</Link>
                </li> 
              </ul>
              <button type="button" className=" bg-gradient-to-r  from-violet-900 to-fuchsia-900  border-none rounded-md  text-white mr-4 ml-10 py-2 px-8 hover:scale-[1.1] transition-all duration-75 font-bold">
              <Link href="/contact ">Contact</Link>
              </button>
             
            </div>
            <div className="md:hidden mr-4" onClick={handleClick}>
              {!nav ? (
                <MenuIcon className="w-5 text-white" />
              ) : (
                <XIcon className="w-5 text-white" />
              )}
            </div>
          </div>

          <ul
            className={
              !nav
                ? "hidden"
                : "scrolled absolute w-[250px] px-8 top-[5rem] right-[1rem] border-none rounded-md"
            }
          >
            <li className=" md:ml-3 py-3 px-6 hover:border-b border-5 border-sky-900 cursor-pointer text-white font-bold">
              <Link href="/">Home</Link>
            </li>
            <li className="md:ml-3 py-3 px-6 hover:border-b border-5 border-sky-900 cursor-pointer text-white font-bold">
              <Link href="/about">About</Link>
            </li>
            <li className="md:ml-3 py-3 px-6 hover:border-b border-5 border-sky-900 cursor-pointer text-white font-bold">
              <Link href="/services">Services</Link>
            </li>
            <li className="md:ml-3 py-3 px-6 hover:border-b border-5 border-sky-900 cursor-pointer text-white font-bold">
              <Link href="/servicesSeo">ServicesSeo</Link>
            </li>
            <li className="md:ml-3 py-3 px-6 hover:border-b border-5 border-sky-900 cursor-pointer text-white font-bold">
              <Link href="/clients">Client</Link>
            </li>

            <div className="flex flex-col my-4">
              <button   className=" bg-gradient-to-r  from-violet-900 to-fuchsia-900  border-none rounded-md  text-white mb-[1rem] py-2 px-8 hover:scale-[1.1] transition-all duration-75 font-bold">
              <Link href="/contact ">Contact</Link>
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
