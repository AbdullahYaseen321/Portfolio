import React from 'react'

const Notes = () => {
  return (
  <>
  <section id='Notes' className="bg-neutral-950 text-white py-20 px-6 md:px-16 font-serif">

  {/* Heading */}
  <div className="text-center mb-16">
    <h2 className="text-4xl font-semibold">
      My <span className="text-orange-500">Notes</span>
    </h2>
    <p className="text-gray-400 mt-3">
      Click to explore my learning notes
    </p>
  </div>

  {/* Notes List */}
  <div className="space-y-6 max-w-4xl mx-auto">

    {/* Card */}
    <a href="https://www.notion.so/HTML-NOTES-34c649e85fb580479650ce6b15781b6a?showMoveTo=true&saveParent=true" target="_blank"
      className="flex items-center justify-between bg-neutral-900 p-6 rounded-xl hover:bg-neutral-800 transition">

      <div>
        <h3 className="text-xl font-semibold text-orange-500">HTML Notes</h3>
        <p className="text-gray-400 text-sm">Structure of web pages</p>
      </div>

      <span className="text-orange-500 text-2xl">→</span>
    </a>

    {/* Card */}
    <a href="https://www.notion.so/CSS-NOTES-34c649e85fb580f39c9ddba929f318db?showMoveTo=true&saveParent=true" target="_blank"
      className="flex items-center justify-between bg-neutral-900 p-6 rounded-xl hover:bg-neutral-800 transition">

      <div>
        <h3 className="text-xl font-semibold text-orange-500">CSS Notes</h3>
        <p className="text-gray-400 text-sm">Styling and layouts</p>
      </div>

      <span className="text-orange-500 text-2xl">→</span>
    </a>

    {/* Card */}
    <a href="https://www.notion.so/JAVASCRIPT-NOTES-34c649e85fb580fcba63de4a045b8786?showMoveTo=true&saveParent=true" target="_blank"
      className="flex items-center justify-between bg-neutral-900 p-6 rounded-xl hover:bg-neutral-800 transition">

      <div>
        <h3 className="text-xl font-semibold text-orange-500">JavaScript Notes</h3>
        <p className="text-gray-400 text-sm">Logic and interactivity</p>
      </div>

      <span className="text-orange-500 text-2xl">→</span>
    </a>

    {/* Card */}
    <a href="https://www.notion.so/REACT-NOTES-34c649e85fb58064a5fafab38f6ea723?showMoveTo=true&saveParent=true" target="_blank"
      className="flex items-center justify-between bg-neutral-900 p-6 rounded-xl hover:bg-neutral-800 transition">

      <div>
        <h3 className="text-xl font-semibold text-orange-500">React Notes</h3>
        <p className="text-gray-400 text-sm">Component-based UI</p>
      </div>

      <span className="text-orange-500 text-2xl">→</span>
    </a>
{/* Card */}
    <a href="https://www.notion.so/TAILWIND-CSS-NOTES-34c649e85fb580789af2d82708f0132e?showMoveTo=true&saveParent=true" target="_blank"
      className="flex items-center justify-between bg-neutral-900 p-6 rounded-xl hover:bg-neutral-800 transition">

  <div>
    <h3 className="text-xl font-semibold text-orange-500">Tailwind CSS Notes</h3>
    <p className="text-gray-400 text-sm">Utility-first CSS framework</p>
  </div>

  <span className="text-orange-500 text-2xl">→</span>
</a>
    {/* Card */}
    <a href="https://www.notion.so/NODE-JS-NOTES-34c649e85fb580ae8580d55fbf3b9616?showMoveTo=true&saveParent=true" target="_blank"
      className="flex items-center justify-between bg-neutral-900 p-6 rounded-xl hover:bg-neutral-800 transition">

      <div>
        <h3 className="text-xl font-semibold text-orange-500">Node Notes</h3>
        <p className="text-gray-400 text-sm">Backend runtime</p>
      </div>

      <span className="text-orange-500 text-2xl">→</span>
    </a>

    {/* Card */}
    <a href="https://www.notion.so/EXPRESS-JS-NOTES-34c649e85fb580768c5ae982596a55db?showMoveTo=true&saveParent=true" target="_blank"
      className="flex items-center justify-between bg-neutral-900 p-6 rounded-xl hover:bg-neutral-800 transition">

      <div>
        <h3 className="text-xl font-semibold text-orange-500">Express Notes</h3>
        <p className="text-gray-400 text-sm">API development</p>
      </div>

      <span className="text-orange-500 text-2xl">→</span>
    </a>
    {/* Card */}
    <a href="https://www.notion.so/MONGODB-NOTES-34c649e85fb5804f88def8ee9b2f1336" target="_blank"
      className="flex items-center justify-between bg-neutral-900 p-6 rounded-xl hover:bg-neutral-800 transition">

      <div>
        <h3 className="text-xl font-semibold text-orange-500">MongoDB Notes</h3>
        <p className="text-gray-400 text-sm">JSON-like format (documents)</p>
      </div>

      <span className="text-orange-500 text-2xl">→</span>
    </a>

  </div>

</section>
  </>
  )
}

export default Notes
