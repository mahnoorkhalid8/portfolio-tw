import React from "react";
import { IoIosMail } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="container pt-36 p-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        <div className="space-y-6">
          <h1 className="inline-block p-4 bg-gray-300 border-double border-8 border-pink-800 text-2xl md:text-4xl">
            Contact Me
          </h1>

          <div className="pt-6 " data-aos="zoom-out">
            <p className="bg-gray-300 text-lg md:text-xl p-4 border-double border-8 border-pink-800">
              Feel free to reach out to me for collaboration or inquiries. You
              can contact me via email, connect with me on professional
              networks, or reach me directly on phone or WhatsApp.
            </p>
          </div>

          <div className="text-base md:text-lg py-4 px-1 md:px-4 space-y-3 bg-gray-300 inline-block border-double border-8 border-pink-800">
            <div className="flex gap-5 items-center">
              <IoIosMail size={30} />
              <a href="mailto:mahnoorkhalid814@gmail.com">
                mahnoorkhalid814@gmail.com
              </a>
            </div>
            <div className="flex gap-5 items-center">
              <FiPhoneCall size={25} />
              <a href="tel:+92 333 2455342">+92 333 2455342</a>
            </div>
            <div className="flex gap-5 items-center">
              <BsWhatsapp size={25} />
              <a href="tel:+92 333 2455342">+92 333 2455342</a>
            </div>
          </div>
        </div>

        <div className="space-y-6 space-x-6">
          <form className="space-y-5">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="font-semibold text-2xl text-pink-800"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your Name"
                className="bg-gray-300 border-2 border-pink-800 h-16"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="font-semibold text-2xl text-pink-800"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="bg-gray-300 border-2 border-pink-800 h-16"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="message"
                className="font-semibold text-2xl text-pink-800"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={7}
                placeholder="Enter your message"
                className="bg-gray-300 border-2 border-pink-800 h-auto"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gray-300 border-2 border-pink-800 h-auto hover:bg-pink-800 hover:text-white w-auto p-2"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
