import React from "react";
import "./styles.css";
import webDeveloper from "./webDeveloper.svg";
const Home = () => {
  return (
    <div>
      <br />
      <br />
      <br />

      <header className="container container-center">
        <img class="header-images-medium" src={webDeveloper} alt="" />
      </header>

      <br />
      <br />
      <br />

      <h1 className="container-center text-center">
        Shubam Bhasin <span>Portfolio</span>
      </h1>
      <br />
      <br />
      <br />

      <h2 className="container container-center"><img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png"
          alt=""
          className="arrow"
        /> Skillset</h2>
      <br />
      <div className="container container-center bg-gray container-radius">
        <ul className="">
          <li>HTML, CSS, Javascript, Bootstrap, ReactJS</li>
          <br />
          <li>C, C++</li>
          <br />
          <li>Git, Wordpress</li>
        </ul>
      </div>
      <br />
      <br />

      <h2 className="container container-center"><img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png"
          alt=""
          className="arrow"
        /> My Projects</h2>
            <br />
      <div className="container container-center container-radius bg-gray">
<p>You can hop on to the project section directly</p>
        <a href="./projects.html" className="links primary-button" target="">
          Project Section
        </a>
        <br/>
        <br/>
      </div>

      <br />
      <br />

      <br />
      <h2 className="container container-center">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png"
          alt=""
          className="arrow"
        />{" "}
        I write Blogs too..."
      </h2>
      <br />
      <div class="container container-center container-radius bg-gray">
        <br />
        <p>
          Ocassionally I write blogs about technology, electronic gadgets,
          Mobile Apps, Custom ROMs etc.{" "}
        </p>

        <br />

        <a href="./projects.html" className="links primary-button" target="">
          Read more...
        </a>
        <br />
        <br />
      </div>

      <br />
      <br />

      <h2 className="container container-center"><img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Arrow_east.svg/1280px-Arrow_east.svg.png"
          alt=""
          className="arrow"
        /> My Pexel Page </h2>
      <br />
      <div className="container container-center bg-gray container-radius">
        <p>
          Yes, I do click good pictures as well <span>😉</span>{" "}
        </p>

        <p>Find them below</p>
        <br />
        <a
          href="https://www.pexels.com/@shubam-bhasin-1091152"
          className="links primary-button"
        >
          Pexel Page...
        </a>
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
