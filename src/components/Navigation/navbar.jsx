import React, { useRef } from 'react'

const Navbar = () => {
  const navrGreenef = useRef(null)

  return (
    <div className='flex fixed top-0 w-full items-start justify-between z-50 p-5'>
      <div onMouseEnter={ ()=>{
        navrGreenef.current.style.height = '100%'
      }} 
      onMouseLeave={()=>{
        navrGreenef.current.style.height = '0%'
      }}
      className='h-16 w-[16vw] relative bg-black'>
        <div ref={navrGreenef} className='bg-green-400 absolute transition-all top-0 h-0 w-full'></div>
        <div className='relative'></div>
      </div>
    </div>
  )
}

export default Navbar
