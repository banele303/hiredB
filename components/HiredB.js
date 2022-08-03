import React from 'react'
import clsx from "clsx";

const HiredB = ({children}) => {
  return (
    <span
      className={clsx(
        "bg-gradient-to-r from-fuchsia-800 via-purple-600 to-indigo-800  bg-clip-text align-middle text-[15px] font-black tracking-widest text-transparent"
      )}
    >
     {children}
    </span>
  )
}

export default HiredB