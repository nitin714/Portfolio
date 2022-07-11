import React from "react";
import { AiOutlineCodepen, AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import Laptop from "../public/assets/laptop.jpg";
import Image from "next/image";

function Main() {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="relative h-screen">
        <Image src={Laptop} layout="fill" objectFit="cover" />
        <div className="absolute w-full h-full mx-auto p-2 flex justify-center items-center text-white text-center">
          <div>
            <h1>Hi I'm Nitin</h1>
            <h2 className="py-2 text-white">
              A Front-End Web Developer and Data Science Enthusiast
            </h2>
            <p className="py-4 text-white max-w-[70%] m-auto">
              I’m focused on building responsive front-end web applications
              while learning back-end technologies and data science.
            </p>
            <div className="hidden md:flex items-center justify-between max-w-[300px] m-auto py-4">
              <a
                href="https://www.linkedin.com/in/nitin-vadhiya-b0226113a/"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
              </a>
              <a
                href="https://github.com/nitin714"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub />
                </div>
              </a>
              <a
                href="https://codepen.io/nitin714"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineCodepen />
                </div>
              </a>
              {/* <Link href="/#contact">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail />
                </div>
              </Link>
              <Link href="/resume">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
