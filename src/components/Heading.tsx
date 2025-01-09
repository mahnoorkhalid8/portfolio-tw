import React from "react";

interface cardsType {
  title: string;
}

const Heading: React.FC<cardsType> = ({ title }) => {
  return (
    <div className="text-center font-semibold text-4xl p-5">
      <p className="inline-block p-3 bg-gray-300 border-double border-8 border-pink-800">
        {title}
      </p>
    </div>
  );
};

export default Heading;
