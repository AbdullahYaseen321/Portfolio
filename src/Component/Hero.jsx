import React from 'react'

const Hero = () => {
  return (
    <>
    <section className="bg-neutral-950  relative text-white min-h-screen flex items-center px-16 font-serif">
      
      {/* Left Content */}
      <div className="w-1/2">
        <p className="text-gray-400">Hi I am</p>
        <h2 className="text-xl font-semibold mt-1">Abdullah Yaseen</h2>

        <h1 className="text-6xl font-bold text-orange-500 mt-4">
          Mern Stack Developer
        </h1>

        {/* Social Icons */}
        <div className="flex gap-4 mt-6">
          <div className="w-10 h-10 border border-gray-600 flex items-center justify-center rounded-full hover:scale-110 transition hover:text-orange-500">
            <i className="fab fa-linkedin"></i>
          </div>
          <div className="w-10 h-10 border border-gray-600 flex items-center justify-center rounded-full hover:scale-110 transition hover:text-orange-500">
            <i className="fab fa-github"></i>
          </div>
          <div className="w-10 h-10 border border-gray-600 flex items-center justify-center rounded-full hover:scale-110 transition hover:text-orange-500">
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="bg-orange-500 px-6 py-2 rounded-md hover:bg-orange-600 hover:scale-110 transition">
            Hire Me
          </button>
          <a
              href="/CV Abdullah.pdf"
                    download
                 className="border border-gray-500 px-6 py-2 rounded-md hover:scale-110 transition hover:text-orange-500 inline-block">
                     Download CV
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-10 bg-neutral-900 p-6 rounded-xl mt-10 w-fit">
          <div>
            <h3 className="text-orange-500 text-xl font-bold">5+</h3>
            <p className="text-gray-400 text-sm">Experiences</p> 
          </div>
          <div>
            <h3 className="text-orange-500 text-xl font-bold">20+</h3>
            <p className="text-gray-400 text-sm">Projects</p>
          </div>
          <div>
            <h3 className="text-orange-500 text-xl font-bold">80+</h3>
            <p className="text-gray-400 text-sm">Clients</p>
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-1/2 flex justify-center">
        <div className="w-[400px] h-[450px] bg-neutral-900 rounded-full overflow-hidden flex items-center justify-center">
          <img
            src="/My pic.png" 
            alt="profile"
            className="h-[450px] w-full object-cover rounded-full"
          />
        </div>
      </div>

    </section>
    </>
  )
}

export default Hero