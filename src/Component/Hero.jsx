import React from "react";

const Hero = () => {
  return (
    <>
      <section
        className="
        bg-neutral-950
        relative
        text-white
        min-h-screen
        flex
        flex-col-reverse
        lg:flex-row
        items-center
        justify-center
        px-6
        sm:px-10
        lg:px-16
        py-24
        font-serif
        "
      >

        {/* Left Content */}

        <div
          className="
          w-full
          lg:w-1/2
          text-center
          lg:text-left
          mt-10
          lg:mt-0
          "
        >

          <p className="text-gray-400 text-sm sm:text-base">
            Hi I am
          </p>

          <h2 className="text-lg sm:text-xl font-semibold mt-1">
            Abdullah Yaseen
          </h2>

          <h1
            className="
            text-4xl
            sm:text-5xl
            lg:text-6xl
            font-bold
            text-orange-500
            mt-4
            "
          >
            Mern Stack Developer
          </h1>

          {/* Social Icons */}

          <div
            className="
            flex
            justify-center
            lg:justify-start
            gap-4
            mt-6
            "
          >

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

          <div
            className="
            flex
            flex-col
            sm:flex-row
            justify-center
            lg:justify-start
            gap-4
            mt-6
            "
          >

            <button className="bg-orange-500 px-6 py-2 rounded-md hover:bg-orange-600 hover:scale-110 transition">
              Hire Me
            </button>

            <a
              href="/CV Abdullah.pdf"
              download
              className="border border-gray-500 px-6 py-2 rounded-md hover:scale-110 transition hover:text-orange-500 inline-block"
            >
              Download CV
            </a>

          </div>
                    {/* Stats */}

          <div
            className="
            flex
            justify-center
            lg:justify-start
            flex-wrap
            gap-6
            bg-neutral-900
            p-6
            rounded-xl
            mt-10
            w-fit
            mx-auto
            lg:mx-0
            "
          >

            <div className="text-center">
              <h3 className="text-orange-500 text-xl font-bold">5+</h3>
              <p className="text-gray-400 text-sm">Experiences</p>
            </div>

            <div className="text-center">
              <h3 className="text-orange-500 text-xl font-bold">20+</h3>
              <p className="text-gray-400 text-sm">Projects</p>
            </div>

            <div className="text-center">
              <h3 className="text-orange-500 text-xl font-bold">80+</h3>
              <p className="text-gray-400 text-sm">Clients</p>
            </div>

          </div>

        </div>

        {/* Right Image */}

        <div
          className="
          w-full
          lg:w-1/2
          flex
          justify-center
          mb-10
          lg:mb-0
          "
        >

<div
  className="
    w-[260px]
    h-[300px]
    sm:w-[320px]
    sm:h-[360px]
    lg:w-[400px]
    lg:h-[450px]
    bg-neutral-900
    rounded-full
    overflow-hidden
    flex
    items-center
    justify-center
  "
>
  <img
    src="/My pic.png"
    alt="profile"
    className="
      w-full
      h-full
      object-cover
      object-[center_15%]
      rounded-full
    "
  />
</div>


        </div>

      </section>
    </>
  );
};

export default Hero;