import React from "react";
import AboutImg from "../public/assets/about.jpg";
import Image from "next/image";
import Link from "next/link";

function About() {
  return (
    <div
      id="about"
      className="w-full px-4 md:px-12 md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="flex flex-col col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">I am not your average developer</p>
          <p className="py-2 text-gray-600">
            I have spent the last 2.6 years as the front end web developer. I'm
            Data Science enthusiast. Currently learning React, Nextjs, Tailwind
            for web development and Data Science.
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate Data Science is I was quickly drawn to
            learn more. I started learning python and related tools like pandas,
            numpy, scikit-learn. Data analysis and was even more enthused with
            making websites interactive. I am now spending my time building
            projects with React JS, Firebase, tailwind and learning new
            technologies.
          </p>
          <Link href="/#projects">
            <p className="w-72 py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 md:hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
}

export default About;
