import React from "react";
import "./styles.css";

const PrimaryButton = ({
  buttonText = "Button Text",
  buttonUrl = "Some url"
}) => {
  return (
    <a
      href="https://rlxpw.csb.app/"
      class="links primary-button"
    >
      {buttonText}
    </a>
  );
};
export default PrimaryButton;
