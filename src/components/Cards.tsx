import React from "react";
import Image from "next/image";

interface cardsType {
  title: string;
  description: string;
  img: string;
  tags: string[];
}

const Cards: React.FC<cardsType> = ({ title, description, img, tags }) => {
  return (
    <div
      className="border-8 border-pink-800 border-double w-auto md:w-[500px] h-[600px] mx-auto bg-gray-300"
      data-aos="zoom-out"
    >
      <div>
        <Image
          className="w-auto md:w-[500px] h-[400px] p-5"
          src={img}
          alt={title}
          width={500}
          height={400}
        />
      </div>

      <div className="p-4 space-y-4">
        <div className="text-2xl md:text-4xl text-pink-800 underline">
          {title}
        </div>
        <div>{description}</div>
        <div>
          {tags.map((el) => (
            <div className="tags" key={el}>
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cards;
