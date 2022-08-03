import React from 'react'
import {
    CurrencyDollarIcon,

    CodeIcon,
    DesktopComputerIcon,
    
    MailIcon,
    
  } from "@heroicons/react/outline";
const WeDo = () => {
  return (
    <div >
        <h1 className='text-2xl font-Poppins md:text-5xl font-bold text-center py-10'>What We Do</h1>
        <h2 className='text-1xl font-Poppins md:text-2xl opacity-75 text-center '>To push the boundaries of what is possible, we gather the best digital talent.</h2>
        
        
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto md:py-16  lg:py-15 lg:max-w-none">
          <div className=" space-y-20 md:gap-y-16 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-16">
            <div className="group relative ">
              <div className="relative w-full h-80 bg-white  flex flex-col place-content-center overflow-hidden  sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <div className="flex justify-center  ">
                  <MailIcon className="w-20 text-white bg-blue-600 p-4 rounded-full" />
                </div>
                <h1 className="text-black font-Poppins md:text-3xl font-bold text-center pt-2 md:pt-10">
                 Digital Marketing
                </h1>
                <h1 className="text-black font-Poppins text-xl opacity-75  text-center pt-2 md:pt-2">
                Get Better Engagement, Conversations, and Conversions
                </h1>
              </div>
            </div>
            <div className="group relative  ">
              <div className="relative w-full h-80 bg-white  flex flex-col place-content-center overflow-hidden  ">
                <div className="flex justify-center  ">
                  <DesktopComputerIcon className="w-20 text-white bg-blue-600 p-4 rounded-full" />
                </div>
                <h1 className="text-black font-Poppins md:text-3xl font-bold text-center pt md:pt-10">
                 SEO/SEM
                </h1>
                <h1 className="text-black font-Poppins text-xl opacity-75  text-center pt-2 md:pt-2">
                Let us help your business rank high on search engines and get discovered by real people
                
                </h1>
              </div>
            </div>
            <div className="group relative ">
              <div className="relative w-[90] h-80 bg-white  flex flex-col place-content-center overflow-hidden  sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                <div className="flex justify-center  ">
                  <CodeIcon className="w-20 text-white bg-blue-600 p-4 rounded-full" />
                </div>
                <h1 className="text-black md:text-3xl font-Poppins  font-bold text-center pt-2 md:pt-10">
                 Web Developmemt
                </h1>
                <h1 className="text-black text-xl opacity-75 font-Poppins  text-center pt-2 md:pt-2">
                From simple informational websites to complex, business applications and eCommerce stores.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeDo