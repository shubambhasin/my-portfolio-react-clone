import React from "react";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
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
          <strong style={{color:"darkorange"}}>{title}</strong>
        </h3>
        <small>{date}</small>

        <p>{tileBody}</p>
        <PrimaryButton buttonText="Live Project"/>
        <span> </span>
        <SecondaryButton buttonText="Github"/>
      </div>
      <br />
      <br />
    </div>

    //
  );
};

export default ProjectTiles;
