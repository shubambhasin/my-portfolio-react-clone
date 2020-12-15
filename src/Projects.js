import React from "react";
import ProjectTiles from "./ProjectTiles";
import "./styles.css";

const Projects = () => {
  return (
    <div className="App">
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
