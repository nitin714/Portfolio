import React from "react";
import airbnbImg from "../public/assets/projects/airbnb.png";
import netflixImg from "../public/assets/projects/netflix.png";
import olympicsanalysisImg from "../public/assets/projects/olympicsanalysis.png";
import bookrecommenderImg from "../public/assets/projects/bookrecommender.png";
import movierecommenderImg from "../public/assets/projects/movierecommender.png";
import instagramImg from "../public/assets/projects/instagram.png";
import weatherappImg from "../public/assets/projects/weatherapp.png";
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
            projectUrl="https://airbnb-clone-delta-navy.vercel.app/"
            tech="Next JS"
          />
          <ProjectItem
            title="Netflix Clone"
            backgroundImg={netflixImg}
            projectUrl="https://netflicks-1f991.web.app/"
            tech="React JS"
          />
          <ProjectItem
            title="Instagram Clone"
            backgroundImg={instagramImg}
            projectUrl="https://instagram-clone-beta-sepia.vercel.app/"
            tech="Next JS"
          />
          <ProjectItem
            title="Weather App"
            backgroundImg={weatherappImg}
            projectUrl="https://weather-web-app-seven.vercel.app/"
            tech="Next JS"
          />
          <ProjectItem
            title="Olympics Analysis"
            backgroundImg={olympicsanalysisImg}
            projectUrl="https://olypmdataanalysis.herokuapp.com/"
            tech="Python"
          />
          <ProjectItem
            title="Book Recommender"
            backgroundImg={bookrecommenderImg}
            projectUrl="https://bookrecommendsystem.herokuapp.com/"
            tech="Python"
          />
          <ProjectItem
            title="Movie Recommender"
            backgroundImg={movierecommenderImg}
            projectUrl="https://movierecommenderapple.herokuapp.com/"
            tech="Python"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
