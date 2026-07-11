import React from 'react'

const Topbar = () => {
  return (
    <>
      <header className="bg-neutral-900 p-[15px] text-white font-serif flex justify-around  fixed top-0 left-0 w-full z-50">
<h1 className="text-2xl hover:text-orange-500 text-gray-300 ">
  Abdullah Yaseen
  </h1>

<div className=" flex gap-16 text-[20px] text-gray-300 justify-center ">
  <a href="#" className="hover:text-orange-500">Home</a>
  <a href="#about" className="hover:text-orange-500">About me</a>
  <a href="#Skills" className="hover:text-orange-500">Skills</a>
  <a href="#casestudy" className="hover:text-orange-500">Case Studies</a>
  <a href="#Notes" className='hover:text-orange-500'>Notes</a>
  <a href="#Getintouch" className="hover:text-orange-500">Get In Touch</a>
</div>
<div className="">
  <button className="h-[40px] w-[150%] bg-orange-500 rounded-md text-[18px] cursor-pointer hover:bg-orange-600 hover:scale-110 transition">
    Hire Me</button>
</div>
  </header>
    
    
    </>
  )
}

export default Topbar