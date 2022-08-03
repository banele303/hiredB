import React from "react";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

const HeroMini = () => {
  return (
    <div className="hidden md:block">
         <div
      className="absolute flex flex-col py-8 md:min-w-[760px] bottom-[7%]
        mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
        border border-slate-300 rounded-xl text-center shadow-xl"
    >
      <p className="text-[18px] font-semibold font-Poppins">Services</p>
      <div className="flex justify-between flex-wrap px-4">
        <p className="flex px-4 py-2 text-slate-500 font-Poppins">
          <CloudUploadIcon className="h-6 text-indigo-600" />
          Site Hosting
        </p>
        <p className="flex px-4 py-2 text-slate-500 font-Poppins">
          <DatabaseIcon className="h-6 text-indigo-600" />
          Web development
        </p>
        <p className="flex px-4 py-2 text-slate-500 font-Poppins">
          <ServerIcon className="h-6 text-indigo-600" />
          SEO
        </p>
        <p className="flex px-4 py-2 text-slate-500 font-Poppins">
          <PaperAirplaneIcon className="h-6 text-indigo-600" /> Web Design
        </p>
      </div>
    </div>
    </div>
   
  );
};

export default HeroMini;
