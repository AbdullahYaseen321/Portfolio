import React from 'react'

const Skills = () => {
  return (
   <>
    <section id="Skills"className="bg-neutral-950  h-screen text-white py-20 px-6 md:px-16 font-serif">

  {/* Heading */}
  <div className="text-center mb-30">
    <h2 className="text-4xl font-semibold mt-5">
      My <span className="text-orange-500">Skills</span>
    </h2>
    <p className="text-gray-400 mt-2">
      Technologies I work with
    </p>
  </div>

  {/* Skills Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

    <div className="bg-neutral-900 p-6 rounded-xl text-center hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-orange-500">HTML</h3>
    </div>

    <div className="bg-neutral-900 p-6 rounded-xl text-center hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-orange-500">CSS</h3>
    </div>

    <div className="bg-neutral-900 p-6 rounded-xl text-center hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-orange-500">JavaScript</h3>
    </div>

    <div className="bg-neutral-900 p-6 rounded-xl text-center hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-orange-500">React</h3>
    </div>

    <div className="bg-neutral-900 p-6 rounded-xl text-center hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-orange-500">Node.js</h3>
    </div>

    <div className="bg-neutral-900 p-6 rounded-xl text-center hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-orange-500">Express</h3>
    </div>

    <div className="bg-neutral-900 p-6 rounded-xl text-center hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-orange-500">MongoDB</h3>
    </div>

    <div className="bg-neutral-900 p-6 rounded-xl text-center hover:scale-105 transition">
      <h3 className="text-xl font-semibold text-orange-500">Git</h3>
    </div>

  </div>

</section>
   
   </>
  )
}

export default Skills