// import React from 'react'

// const Topbar = () => {
//   return (
//     <>
//       <header className="bg-neutral-900 p-[15px] text-white font-serif flex justify-around  fixed top-0 left-0 w-full z-50">
// <h1 className="text-2xl hover:text-orange-500 text-gray-300 ">
//   Abdullah Yaseen
//   </h1>

// <div className=" flex gap-16 text-[20px] text-gray-300 justify-center ">
//   <a href="#" className="hover:text-orange-500">Home</a>
//   <a href="#about" className="hover:text-orange-500">About me</a>
//   <a href="#Skills" className="hover:text-orange-500">Skills</a>
//   <a href="#casestudy" className="hover:text-orange-500">Case Studies</a>
//   <a href="#Notes" className='hover:text-orange-500'>Notes</a>
//   <a href="#Getintouch" className="hover:text-orange-500">Get In Touch</a>
// </div>
// <div className="">
//   <button className="h-[40px] w-[150%] bg-orange-500 rounded-md text-[18px] cursor-pointer hover:bg-orange-600 hover:scale-110 transition">
//     Hire Me</button>
// </div>
//   </header>
    
    
//     </>
//   )
// }

// export default Topbar




import React, { useState } from "react";

const Topbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <header
      className="
      bg-neutral-900
      text-white
      font-serif
      fixed
      top-0
      left-0
      w-full
      z-50
      "
    >

      <div
        className="
        max-w-[1400px]
        mx-auto
        flex
        items-center
        justify-between
        px-6
        py-4
        "
      >

        {/* Logo */}

        <h1
          className="
          text-2xl
          text-gray-300
          hover:text-orange-500
          transition
          cursor-pointer
          "
        >
          Abdullah Yaseen
        </h1>

        {/* Desktop Menu */}

        <div
          className="
          hidden
          lg:flex
          gap-16
          text-[20px]
          text-gray-300
          "
        >

          <a href="#" className="hover:text-orange-500">
            Home
          </a>

          <a href="#about" className="hover:text-orange-500">
            About me
          </a>

          <a href="#Skills" className="hover:text-orange-500">
            Skills
          </a>

          <a href="#casestudy" className="hover:text-orange-500">
            Case Studies
          </a>

          <a href="#Notes" className="hover:text-orange-500">
            Notes
          </a>

          <a href="#Getintouch" className="hover:text-orange-500">
            Get In Touch
          </a>

        </div>

        {/* Desktop Button */}

        <div className="hidden lg:block">
         <a href="#Getintouch">
          <button
            className="
            h-[40px]
            px-8
            bg-orange-500
            rounded-md
            text-[18px]
            cursor-pointer
            hover:bg-orange-600
            hover:scale-110
            transition
            "
          >
            Hire Me
          </button>
        </a>
        </div>

        {/* Mobile Menu Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
          lg:hidden
          text-3xl
          text-white
          "
        >
          ☰
        </button>
                {/* Mobile Menu */}

        {menuOpen && (

          <div
            className="
            absolute
            top-full
            left-0
            w-full
            bg-neutral-900
            flex
            flex-col
            items-center
            py-6
            gap-6
            text-[18px]
            text-gray-300
            lg:hidden
            shadow-xl
            "
          >

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500"
            >
              Home
            </a>

            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500"
            >
              About me
            </a>

            <a
              href="#Skills"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500"
            >
              Skills
            </a>

            <a
              href="#casestudy"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500"
            >
              Case Studies
            </a>

            <a
              href="#Notes"
              onClick={() => setMenuOpen(false)}
              className="hover:text-orange-500"
            >
              Notes
            </a>

          <a
  href="#Getintouch"
  onClick={() => setMenuOpen(false)}
>
  <button
    className="
    h-[42px]
    px-8
    bg-orange-500
    rounded-md
    text-white
    hover:bg-orange-600
    transition
    "
  >
    Hire Me
  </button>
</a>

          </div>

        )}

      </div>

    </header>

  );

};

export default Topbar;