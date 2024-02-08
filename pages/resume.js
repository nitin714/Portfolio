import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const resume = () => {
  return (
    <>
      <Head>
        <title>Nitin | Resume</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Nitin Vadhiya</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/nitinvadhiya7/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/nitin714"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          {/* <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div> */}
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team collaboration, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, effective team collaboration,
          and relationship building. Consummate professional, and motivated team
          member, with solid interpersonal abilities and complex problem-solving
          skills. Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span>Material UI
            <span className="px-2">|</span>HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Python
            <span className="px-2">|</span>SQL
            <span className="px-2">|</span>Data Analysis
            <span className="px-2">|</span>Statistics
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">TCS,</span>
            <span className="px-2">|</span>Banglore, India
          </p>
          <p className="py-1 italic">Systems Engineer (Nov 2022 - Sept 2023)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Led the development of user-centric and admin panel features,
              effectively communicating project specifications to stakeholders
              and incorporating their feedback into code iterations.
            </li>
            <li>
              Actively contributed to brainstorming design solutions during the
              ideation phase, ensuring diverse perspectives and user-focused
              outcomes.
            </li>
            <li>
              Worked closely with the team to craft components that streamlined
              user journeys and optimized application performance, ensuring a
              seamless and efficient experience for both customers and admins.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Infosys,</span>
            <span className="px-2">|</span>Pune, India
          </p>
          <p className="py-1 italic">Systems Engineer (Dec 2019 - Oct 2022)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              I previously worked as a Front-End Developer as a part of the
              Finacle Banking Solution team.
            </li>
            <li>
              Built and deployed features and components across various modules
              (payments, bills, service requests, etc.) meeting deadlines with
              minimal defects.
            </li>
            <li>
              •Ensured application compliance with functional requirements
              through thorough unit testing, contributing to overall platform
              stability.
            </li>
            <li>
              Pioneered a comprehensive style guide website with detailed
              documentation, facilitating the development process for online and
              mobile banking teams.
            </li>
            <li>
              Furthermore, actively participated in resolving defects across
              multiple Finacle product versions, optimizing application
              performance.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
