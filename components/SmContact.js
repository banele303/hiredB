import React, { useRef } from 'react';
import emailjs from 'emailjs-com'

const SmContact = () => {
  const form = useRef();
  function sendEmail (e){
    e.preventDefault();

  
    emailjs.sendForm('service_jmnmftg',
    'hired_fp2zb1k',e.target, 
    '10mVreYNS7j28ScA5'
    ).then((result)=>{
        console.log(result.text);
    },(error)=>{
        console.log(error.text)
    }
    );
   e.target.reset();
   
   }

  return (
    <div>
      <div className="w-full md:w-[600px] mx-auto my-[6rem]">
        <div className="bg-slate-200 pt-[4rem]">
          <h1 className="text-black font-Poppins pt-[1rem] pl-[2rem] text-[19px]  font-semibold">
            Email US
          </h1>
          <p className="text-black font-Poppins text-[14px] pb-[2rem]  md:text-[14px] pt-[1.7rem] px-[2rem] opacity-70">
            Got a question about Web design? Send us a message and we'll be
            happy to help...
          </p>
          <form ref={form} onSubmit={sendEmail}>
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
                className="appearance-none bg-transparent relative block w-full mb-[1rem] px-3 py-5 border-b border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                className="appearance-none relative bg-transparent block w-full mb-[1rem] px-3 py-5 border-b border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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

              <button type="submit" value="Send" className="mt-[2rem] mb-[3rem] bg-gradient-to-r  from-violet-900 to-fuchsia-900  border-none rounded-md  text-white mr-4 ml-10 py-2 px-8 hover:scale-[1.1] transition-all duration-75 font-bold">
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SmContact;
