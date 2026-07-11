import React from 'react'

const Casestudy = () => {
  return (
    <>
    <section id="casestudy" className="bg-neutral-950 text-white py-20 px-6 md:px-16 font-serif">

  {/* Heading */}
  <div className="text-center mb-16">
    <h2 className="text-4xl font-semibold">
      Case <span className="text-orange-500">Studies</span>
    </h2>
    <p className="text-gray-400 mt-3 max-w-2xl mx-auto">
      Here are some of the projects I have worked on, showcasing my frontend skills and clean UI design.
    </p>
  </div>

  {/* ================= J. PROJECT ================= */}
  <div className="flex flex-col md:flex-row items-center gap-12">

    {/* Image */}
    <div className="w-full md:w-1/2">
      <img src="/jdot.png" className="rounded-xl shadow-lg" />
    </div>

    {/* Text */}
    <div className="w-full md:w-1/2">
      <h3 className="text-2xl font-semibold text-orange-500 mb-4">
        J. Website Clone
      </h3>

      <p className="text-gray-300 mb-4">
        I created a modern frontend inspired by the J. clothing brand website,
        focusing on clean layout, responsiveness, and user-friendly design.
      </p>

      <p className="text-gray-400 mb-4">
        <span className="text-white font-medium">Tech Stack:</span> React, Tailwind CSS
      </p>

      <ul className="text-gray-400 space-y-2">
        <li>✔ Responsive Design</li>
        <li>✔ Clean UI Layout</li>
        <li>✔ Modern Styling</li>
      </ul>
     <a
        href="http://localhost:5174/J-dot/"
         target="_blank"
      className="bg-orange-500 hover:bg-orange-600 px-6 py-2 mt-4 rounded-lg font-medium hover:scale-110 transition inline-block">
        View Project
    </a>  
    </div>
  </div>


  {/* ================= AMAZON PROJECT ================= */}
  <div className="flex flex-col md:flex-row-reverse items-center gap-12 mt-20">

    {/* Image */}
    <div className="w-full md:w-1/2">
      <img src="/amazon.png" className="rounded-xl shadow-lg" />
    </div>

    {/* Text */}
    <div className="w-full md:w-1/2">
      <h3 className="text-2xl font-semibold text-orange-500 mb-4">
        Amazon Clone
      </h3>

      <p className="text-gray-300 mb-4">
        A frontend clone of Amazon homepage focusing on layout structure,
        product sections, and responsive design.
      </p>

      <p className="text-gray-400 mb-4">
        <span className="text-white font-medium">Tech Stack:</span> HTML, CSS, React
      </p>

      <ul className="text-gray-400 space-y-2">
        <li>✔ Homepage Layout</li>
        <li>✔ Product Cards UI</li>
        <li>✔ Responsive Design</li>
      </ul>
       <a
        href="http://127.0.0.1:5500/Amazon.html"
         target="_blank"
      className="bg-orange-500 hover:bg-orange-600 px-6 py-2 mt-4 rounded-lg font-medium hover:scale-110 transition inline-block">
         View Project
         </a>
    </div>
  </div>


  {/* ================= ILLDY PROJECT ================= */}
  <div className="flex flex-col md:flex-row items-center gap-12 mt-20">

    {/* Image */}
    <div className="w-full md:w-1/2">
      <img src="/illdy.png" className="rounded-xl shadow-lg" />
    </div>

    {/* Text */}
    <div className="w-full md:w-1/2">
      <h3 className="text-2xl font-semibold text-orange-500 mb-4">
        iLldy Landing Page
      </h3>

      <p className="text-gray-300 mb-4">
        A clean landing page inspired by iLldy design, focusing on smooth layout
        sections and modern UI structure.
      </p>

      <p className="text-gray-400 mb-4">
        <span className="text-white font-medium">Tech Stack:</span> HTML, Tailwind CSS
      </p>

      <ul className="text-gray-400 space-y-2">
        <li>✔ Landing Page UI</li>
        <li>✔ Responsive Design</li>
        <li>✔ Smooth Sections</li>
      </ul>
      <button className='bg-orange-500 px-6 py-2 rounded-md mt-4 hover:bg-orange-600 hover:scale-110 transition'>View Project</button>
    </div>
  </div>
  {/* ================= FACEBOOK PROJECT ================= */}
<div className="flex flex-col md:flex-row-reverse items-center gap-12 mt-20">

  {/* Image */}
  <div className="w-full md:w-1/2">
    <img src="/facebook.png" className="rounded-xl shadow-lg" />
  </div>

  {/* Text */}
  <div className="w-full md:w-1/2">
    <h3 className="text-2xl font-semibold text-orange-500 mb-4">
      Facebook Clone
    </h3>

    <p className="text-gray-300 mb-4">
      A frontend clone of Facebook focusing on layout design, feed structure,
      and modern UI components similar to the original platform.
    </p>

    <p className="text-gray-400 mb-4">
      <span className="text-white font-medium">Tech Stack:</span> React, CSS, Tailwind
    </p>

    <ul className="text-gray-400 space-y-2">
      <li>✔ News Feed UI</li>
      <li>✔ Responsive Layout</li>
      <li>✔ Clean Component Structure</li>
    </ul>
    <button className='bg-orange-500 px-6 py-2 rounded-md mt-4 hover:bg-orange-600 hover:scale-110 transition'>View Project</button>
  </div>
</div>

</section>
    
    
    
    </>
  )
}

export default Casestudy