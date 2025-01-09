import React from "react";

const About = () => {
  return (
    <div id="id" className="container pt-40 px-16">
      <h1 className="inline-block p-4 bg-gray-300 border-double border-8 border-pink-800 text-2xl md:text-4xl">
        About Me
      </h1>

      <div className="pt-6 " data-aos="zoom-out">
        <p className="bg-gray-300 text-lg md:text-xl p-4 border-double border-8 border-pink-800">
          I have a background in biochemistry and am currently learning
          artificial intelligence through a course at the Governor House.I am
          passionate about exploring new fields and expanding my knowledge to
          achieve my professional goals.
        </p>
      </div>
    </div>
  );
};

export default About;
