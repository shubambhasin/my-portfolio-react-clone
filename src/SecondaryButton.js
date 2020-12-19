import React from "react";
import "./styles.css";

const SecondaryButton = ({
  buttonText = "Secondary button",
  href = "https://shubambhasin-reactclone.netlify.app/"
}) => {
  return (
    <a href={href} className="links secondary-button">
      {buttonText}
    </a>
  );
};

export default SecondaryButton;
