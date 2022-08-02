import React from "react";
import Image from "next/image";

function SkillItem({ img, title }) {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-out duration-200 grid md:grid-cols-2 gap-4 justify-center items-center">
      <div className="hidden md:flex justify-center">
        <Image src={img} width="64" height="64" alt="/" objectFit="contain" />
      </div>
      <div className="break-words justify-center">
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default SkillItem;
