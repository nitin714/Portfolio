import React from "react";
import Image from "next/image";

function SkillItem({ img, title }) {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="hidden md:flex m-auto">
          <Image
            src={img}
            width="64px"
            height="64px"
            alt="/"
            objectFit="contain"
          />
        </div>
        <div className="flex break-words">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default SkillItem;
