import React from "react";
import Heading from "./Heading";
import Cards from "./Cards";

const projectData = [
  {
    id: 0,
    title: "Nike App",
    description: "A Next.js and TypeScript based Responsive Nike website",
    img: "/project1.png",
    tags: ["Next.JS", "CSS", "TypeScript"],
  },
  {
    id: 1,
    title: "Resume",
    description:
      "A HTML and TypeScript based Personal resume builder with toggle button",
    img: "/project2.png",
    tags: ["HTML", "CSS", "TypeScript"],
  },
  {
    id: 2,
    title: "Dynamic Resume",
    description:
      "A HTML and TypeScript based Dynamic and editable resume builder",
    img: "/project3.png",
    tags: ["HTML", "CSS", "TypeScript"],
  },
  {
    id: 3,
    title: "Welcome to footwear",
    description: "A Next.js and TypeScript based Multipage footwear website",
    img: "/project4.png",
    tags: ["Next.JS", "CSS", "TypeScript"],
  },
];

const Projects = () => {
  return (
    <div id="projects" className="container pt-36 p-6">
      <Heading title="PROJECTS" />

      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-5 md:gap-10">
        {projectData.map((el) => (
          <Cards
            key={el.id}
            title={el.title}
            description={el.description}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
