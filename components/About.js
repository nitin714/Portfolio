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
            Front-End Developer | 4 years of experience
            crafting user-centric experiences.
          </p>
          <p className="py-2 text-gray-600">
            I'm a passionate Front-End Developer with a proven track record of
            building intuitive and visually captivating user interfaces. My
            quick learning ability allows me to seamlessly adapt to new
            technologies while maintaining a keen eye for detail.
          </p>
          <p className="py-2 text-gray-600">
            Analytical, innovative, and motivated web development professional
            with experience in customer service, team collaboration, and
            organizational effectiveness in fast-paced and challenging
            environments. Adept at developing strategies and driving streamlined
            operations. Diverse analytical skills, effective team collaboration,
            and relationship building. Consummate professional, and motivated
            team member, with solid interpersonal abilities and complex
            problem-solving skills. Effective and proven track record of
            critical thinking, idea generation, and optimizing efficiencies.
          </p>
          {/* <p className="py-2 text-gray-600">
            Beyond code, I'm a Data Science enthusiast constantly expanding my skillset. This unique
            blend of technical expertise and analytical thinking enables me to
            approach problems from multiple angles and find innovative
            solutions. I'm driven by a desire to continuously learn and grow,
            making me a valuable asset to any team.
          </p> */}
          <Link href="/#projects">
            <p className="w-100 py-2 text-gray-600 underline cursor-pointer text-xl">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 md:hover:scale-105 ease-out duration-200">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
}

export default About;
