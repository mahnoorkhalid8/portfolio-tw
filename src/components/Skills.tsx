import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="container pt-36 p-16">
       <h1 className="inline-block mb-4 p-4 bg-gray-300 border-double border-8 border-pink-800 text-2xl md:text-4xl">
        Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-10">
     
        <div>
          <h1 className="inline-block p-4 bg-gray-300 border-double border-8 border-pink-800 text-2xl md:text-4xl">
            From Biochemistry to Artificial Intelligence
          </h1>

          <div className="pt-6 " data-aos="zoom-out">
            <p className="bg-gray-300 text-lg md:text-xl p-4 border-double border-8 border-pink-800">
              I have completed my Master's in Biochemistry, where I gained
              in-depth knowledge of molecular processes and scientific research
              methodologies. Currently, I am expanding my skill set by pursuing
              a course in Artificial Intelligence (AI). This unique combination
              of expertise allows me to bridge the gap between biological
              sciences and advanced AI technologies, enabling innovative
              solutions in fields like bioinformatics, healthcare analytics, and
              pharmaceutical research. My goal is to leverage AI tools to
              address complex biological challenges and contribute to
              groundbreaking discoveries in science and technology.
            </p>
          </div>
        </div>

        <div
          className="grid items-center md:place-items-end grid-cols-1 md:grid-cols-2 font-bold md:font-semibold text-2xl md:text-4xl text-pink-800"
          data-aos="zoom-out"
        >
          <div className="space-y-3">
            <h3>NEXT.JS</h3>
            <h3>TYPESCRIPT</h3>
            <h3>TAILWIND</h3>
          </div>

          <div className="space-y-3">
            <h3>HTML</h3>
            <h3>CSS</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
