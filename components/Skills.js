import React from "react";
import Html from "../public/assets/skills/html.png";
import Css from "../public/assets/skills/css.png";
import Javascript from "../public/assets/skills/javascript.png";
import ReactImg from "../public/assets/skills/react.png";
import Tailwind from "../public/assets/skills/tailwind.png";
import Github from "../public/assets/skills/github1.png";
import Firebase from "../public/assets/skills/firebase.png";
import NextJS from "../public/assets/skills/nextjs.png";
import Python from "../public/assets/skills/python.svg";
import Pandas from "../public/assets/skills/pandas.svg";
import Numpy from "../public/assets/skills/numpy.svg";
import ScikitLearn from "../public/assets/skills/scikitlearn.svg";
import Matplotlib from "../public/assets/skills/matplotlib.svg";
import BeautifulSoup from "../public/assets/skills/beautifulsoup.png";
import SQL from "../public/assets/skills/sql.png";
import D3 from "../public/assets/skills/d3.svg";
import SkillItem from "./SkillItem";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 pt-6">
      <div className="max-w-[1240px] mx-auto flex flex-col h-full py-16 px-2">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What I Can Do</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <SkillItem img={Html} title="HTML" />
          <SkillItem img={Css} title="CSS" />
          <SkillItem img={Javascript} title="Javascript" />
          <SkillItem img={ReactImg} title="React" />
          <SkillItem img={Tailwind} title="Tailwind" />
          <SkillItem img={Firebase} title="Firebase" />
          <SkillItem img={Github} title="Github" />
          <SkillItem img={NextJS} title="NextJS" />
          <SkillItem img={Python} title="Python" />
          <SkillItem img={Pandas} title="Pandas" />
          <SkillItem img={Numpy} title="Numpy" />
          <SkillItem img={ScikitLearn} title="scikit-learn" />
          <SkillItem img={Matplotlib} title="Matplotlib" />
          <SkillItem img={BeautifulSoup} title="BeautifulSoup" />
          <SkillItem img={SQL} title="SQL" />
          <SkillItem img={D3} title="D3" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
