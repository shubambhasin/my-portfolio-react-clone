import React from "react";
import "./styles.css";

const PrimaryButton = ({
  buttonText = "Button Text",
  href="https://shubambhasin-reactclone.netlify.app/"
}) => {
  return (
    <a
      href={href}
      class="links primary-button"
    >
      {buttonText}
    </a>
  );
};
export default PrimaryButton;
