import React from "react";
import ProjectTiles from "./ProjectTiles";
import "./styles.css";
import projects from "./projects.svg"

// import PrimaryButton from "./PrimaryButton";
// import SecondaryButton from "./SecondaryButton";

const Projects = () => {
  return (
    <div className="App">
      <br/>
      <br/>
      <header className="container container-center">
        <img class="header-images-medium" src={projects} alt="" />
      </header>
      <br/>
      <br/>
      <h1> Hello Humans, I am Project !</h1>

      <ProjectTiles />
      <ProjectTiles
        title="Food recommentation App"
        date="December 2020"
        tileBody=" This is a food recommendation app, feel free to give reviews."
      />
     
    </div>
  );
};
export default Projects;
