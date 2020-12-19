import React from "react";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer container  padding1rem text-center">
        <h3>Reach me on social media</h3>
        <ul className="non-bullet">
          <li className="list-inline padding1rem">
            <a href="http://github.com/shubambhasin">Github</a>
          </li>
          <li className="list-inline padding1rem">
            <a href="https://www.linkedin.com/in/shubam-bhasin-3854a4144/">
              linkedin
            </a>
          </li>

          <li className="list-inline padding1rem">
            <a href="http://instagram.com/shubambhasin">Instagram</a>
          </li>
          <li className="list-inline padding1rem">
            <a href="https://facebook.com/shubam.bhasin">Facebook</a>
          </li>
        </ul>
        <h3>
          Made with <span aria-labelledby="Heart" >❤️</span>  in Jammu & Kashmir
        </h3>
      </div>
    </div>
  );
};
export default Footer;
