import React from "react";
import airbnbImg from "../public/assets/projects/airbnb.png";
import netflixImg from "../public/assets/projects/netflix.png";
import olympicsanalysisImg from "../public/assets/projects/olympicsanalysis.png";
import bookrecommenderImg from "../public/assets/projects/bookrecommender.png";
import movierecommenderImg from "../public/assets/projects/movierecommender.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full pt-10">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Airbnb Clone"
            backgroundImg={airbnbImg}
            projectUrl="/airbnb"
            tech="Next JS"
          />
          <ProjectItem
            title="Netflix Clone"
            backgroundImg={netflixImg}
            projectUrl="/netflix"
            tech="React JS"
          />
          <ProjectItem
            title="Olympics Analysis"
            backgroundImg={olympicsanalysisImg}
            projectUrl="/olympicsanalysis"
            tech="Python"
          />
          <ProjectItem
            title="Book Recommender"
            backgroundImg={bookrecommenderImg}
            projectUrl="/bookrecommender"
            tech="Python"
          />
          <ProjectItem
            title="Movie Recommender"
            backgroundImg={movierecommenderImg}
            projectUrl="/movierecommender"
            tech="Python"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
