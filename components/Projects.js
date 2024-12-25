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
        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="Airbnb Clone"
            backgroundImg={airbnbImg}
            projectUrl="https://github.com/nitin714/Airbnb-clone"
            tech="NextJS, TailwindCSS, Mapbox, ..."
          />
          <ProjectItem
            title="Netflix Clone"
            backgroundImg={netflixImg}
            projectUrl="https://github.com/nitin714/netflix-clone"
            tech="React JS, Axios, Google Cloud Platform, Firebase, ..."
          />
          <ProjectItem
            title="Instagram Clone"
            backgroundImg={instagramImg}
            projectUrl="https://github.com/nitin714/Instagram-clone"
            tech="Next JS, TailwindCSS, Recoil, Google Cloud Platform, Firebase, ..."
          />
          <ProjectItem
            title="Weather App"
            backgroundImg={weatherappImg}
            projectUrl="https://github.com/nitin714/WeatherWebApp"
            tech="Next JS, TailwindCSS, Axios, ..."
          />
          <ProjectItem
            title="Olympics Analysis"
            backgroundImg={olympicsanalysisImg}
            projectUrl="https://github.com/nitin714/OlympicsDataAnalysis"
            tech="Python, Notebook, Streamlit, Pandas, Seaborn, Matplotlib, ..."
          />
          <ProjectItem
            title="Book Recommender"
            backgroundImg={bookrecommenderImg}
            projectUrl="https://github.com/nitin714/BookRecommendation"
            tech="Python, Notebook, Flask, Pandas, ..."
          />
          <ProjectItem
            title="Movie Recommender"
            backgroundImg={movierecommenderImg}
            projectUrl="https://github.com/nitin714/MovieRecommender"
            tech="Python, Notebook, Streamlit, Pandas, ..."
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
