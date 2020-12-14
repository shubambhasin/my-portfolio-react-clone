import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="App">
      <nav className="navigation">
        <div className="navigation-brand">
          <strong>
            <Link className="links" to="/">
              {" "}
              SHUBAM BHASIN
            </Link>
          </strong>{" "}
        </div>

        <ul className="non-bullet">
          <li className="nav-items">
            <Link className="links link-active" to="/">
              Home
            </Link>
          </li>
          <li className="nav-items">
            <Link className="links" to="/projects">
              Projects
            </Link>

          </li>
          <li className="nav-items">
          <Link className="links" to="/blog">
              Blog
            </Link>
          </li>
          <li className="nav-items">
          <Link className="links" to="/aboutme">
              About me
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navbar;
