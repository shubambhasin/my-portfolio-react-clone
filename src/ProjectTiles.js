import React from "react";
import "./styles.css";

const ProjectTiles = ({
  title = "Project",
  date = "Present Month",
  tileBody = "Some text explaining the project"
}) => {
  return (
    <div>
      <div className="container container-center padding1rem container-radius bg-gray paddingbottom">
        <h3>
          <strong>{title}</strong>
        </h3>
        <small>{date}</small>

        <p>{tileBody}</p>

        <a href="https://3errf.csb.app/" className="links primary-button">
          Live Project
        </a>
        <span> </span>
        <a href="/" className="links secondary-button">
          Github
        </a>
      </div>
      <br />
      <br />
    </div>

    //
  );
};

export default ProjectTiles;
