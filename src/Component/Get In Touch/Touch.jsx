import React from 'react'
import emailjs from '@emailjs/browser'

const Touch = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_ish0okv",
      "template_habr71q",
      e.target,
      "O7-JAl6fKYilI12Qq"
    )
    .then(() => {
      alert("Message sent successfully!");
      e.target.reset();
    })
    .catch((error) => {
      console.log(error);
      alert("Failed to send message.");
    });
  };

  return (
    <>
      <section id='Getintouch' className="bg-neutral-950 text-white py-16 px-6 md:px-16">
      <div className="max-w-4xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-orange-500">Touch</span>
        </h2>
        <p className="text-gray-400 mb-10">
          Have a project or idea? Let’s work together 👇
        </p>

        {/* Form */}
        <form onSubmit={sendEmail} className="space-y-5 text-left">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg bg-neutral-900 border border-gray-700 focus:outline-none focus:border-white"
          />

          {/* Email */}
          <input
            type="email"
             name="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-neutral-900 border border-gray-700 focus:outline-none focus:border-white"
          />

          {/* Message */}
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full p-3 rounded-lg bg-neutral-900 border border-gray-700 focus:outline-none focus:border-white"
          ></textarea>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="mt-10 text-gray-400 text-sm">
          <p>Email:mianabdullahyaseen2001@gmail.com</p>
          <p>Location: Pakistan</p>
        </div>

      </div>
    </section>
    </>
  )
}

export default Touch