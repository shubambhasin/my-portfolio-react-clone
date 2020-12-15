import React from "react";
import "./styles.css";

const Home = () => {
  return (
    <div>
      <header className="container container-center"></header>

      <br/>

      <h1 className="container-center text-center">
        Shubam Bhasin <span>Portfolio</span>
      </h1>
      <br/>
      <br/>

      <h2 className="container container-center">Skillset</h2>
      <br/>
      <div className="container container-center bg-gray container-radius">
        <ul className="">
          <li>HTML, CSS, Javascript, Bootstrap, ReactJS</li>

          <li>C, C++</li>

          <li>Git, Wordpress</li>
        </ul>
      </div>
      <br/>
      <br/>

      <h2 className="container container-center">My Projects</h2>
      <br/>
      <br/>
      <div className="container container-center container-radius">
        <a href="./projects.html" className="links primary-button" target="">
          Project Section
        </a>
      </div>

      <br/>
      <br/>

      <h2 className="container container-center">Skillset</h2>
      <br/>
      <div className="container container-center bg-gray container-radius">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem dolor
          animi pariatur blanditiis nobis tempora tenetur velit quam, culpa
          dolorum cupiditate molestiae magni minima nihil possimus placeat
          eligendi ipsam dicta?
        </p>
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  );
};

export default Home;
