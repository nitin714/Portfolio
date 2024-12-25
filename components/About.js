import React from "react";
import AboutImg from "../public/assets/about.jpg";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center pt-10">
      <div className="px-2 max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 py-16">
        <div className="flex flex-col col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600 font-bold">
            4 years of experience
            crafting user-centric experiences.
          </p>
          <p className="py-2 text-gray-600">
            I'm a passionate developer with a proven track record of
            building intuitive and visually captivating user interfaces. My
            quick learning ability allows me to seamlessly adapt to new
            technologies while maintaining a keen eye for detail.
          </p>
          <p className="py-2 text-gray-600">
          Experienced Full Stack Developer and Aspiring Data Scientist with 4+ years of experience building and maintaining 
          scalable web applications. Adept in React, JavaScript, NextJS, TypeScript, Python, SQL, and RESTful APIs, with 
          hands-on experience in machine learning, data analysis, and frameworks such as PyTorch. Skilled in Agile 
          methodologies and DevOps processes, showcasing a holistic approach to development. I am passionate about 
          solving complex problems, applying data-driven solutions, and continuously learning new skills. 
          Currently I am expanding my expertise in data science through self-directed learning and hands-on projects. 
          With a strong sense of accountability and a track record of working on diverse projects in cross-functional teams, 
          I bring a detail-oriented and innovative mindset to align technical solutions with business goals.
          </p>
          {/* <p className="py-2 text-gray-600">
            Beyond code, I'm a Data Science enthusiast constantly expanding my skillset. This unique
            blend of technical expertise and analytical thinking enables me to
            approach problems from multiple angles and find innovative
            solutions. I'm driven by a desire to continuously learn and grow,
            making me a valuable asset to any team.
          </p> */}
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 md:hover:scale-105 ease-out duration-200">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
}

export default About;
