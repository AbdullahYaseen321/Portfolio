import React from 'react'

const page = () => {
  return (
    <>
    <section  id="about" className="bg-neutral-950 text-white py-20 px-6 md:px-16 font-serif">
  
  {/* Heading */}
  <div className="text-center mb-10">
    <h2 className="text-4xl font-semibold">
      About <span className="text-orange-500">Me</span>
    </h2>
    <p className="text-gray-400 mt-2">
      MERN Stack Developer | Building Scalable Web Applications
    </p>
  </div>

  {/* Content */}
  <div className="flex flex-col md:flex-row items-center gap-12">
    
    {/* Left Image */}
   <div className="w-1/2 flex justify-center">
        <div className="w-[350px] h-[430px] bg-neutral-900 rounded-full overflow-hidden flex items-center justify-center">
          <img
            src="/My pic.png" 
            alt="about"
            className="h-[430px] w-full object-cover rounded-full"
          />
        </div>
      </div>
      

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          
          <p className="text-gray-300 leading-relaxed mb-6">
            I am a passionate MERN Stack Developer with a strong focus on building 
            fast, scalable, and user-friendly web applications. I specialize in 
            HTML, CSS, Javascript, React.js, Tailwind, MongoDb, Express.js, and Node.js and enjoy transforming ideas 
            into clean, efficient, and performance-driven solutions.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            I have experience in developing responsive frontends and robust backend 
            systems, including RESTful APIs. I follow best coding practices and aim 
            to deliver high-quality projects that provide real value to users.
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
            I am always learning new technologies and improving my skills to stay 
            updated in the fast-changing tech world. My goal is to build impactful 
            digital products that make a difference.
          </p>

          {/* Button */}
          <a
             href="/CV Abdullah.pdf"
              download
            className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-medium hover:scale-110 transition inline-block">
             Download CV
            </a>

        </div>
      </div>
    </section>

    
    
    </>
  )
}

export default page