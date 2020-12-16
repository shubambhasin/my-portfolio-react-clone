import React from "react"
import "./styles.css";

const SecondaryButton = ({buttonText ="Secondary button"}) => {
  return(
     
    <a href="/" className="links secondary-button">
    {buttonText}
  </a>
  )
}

export default SecondaryButton;