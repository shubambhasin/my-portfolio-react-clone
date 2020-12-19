import React from "react";
import ProjectTiles from "./ProjectTiles";
import "./styles.css";
import projects from "./projects.svg";
import Footer from "./Footer";

// import PrimaryButton from "./PrimaryButton";
// import SecondaryButton from "./SecondaryButton";

const Projects = () => {
  return (
    <div className="App">
      <br />
      <br />
      <header className="container container-center">
        <img class="header-images-medium" src={projects} alt="" />
      </header>
      <br />
      <br />

      <h2 className="text-center">My <span  style={{color:"#FF512F"}}> Projects</span></h2>
      <br/>

      <ProjectTiles
        title="Astronomy picture of the day"
        date="December 2020"
        tileBody="This Web App will show you the APOD: Astronomy Picture of the Day, it fetches data via an API from"
      />

      <ProjectTiles
        title="React clone of this Portfolio"
        date="December 2020"
        tileBody="This is an exact UI clone of this same website which you are on right now, but in React 😉 "
      />
      <ProjectTiles
        title="Weather App"
        date="December 2020"
        tileBody="Dont know about today's weather at your place ?? Dont worry I got you covered. This is a Weather app, this
            gives info like temperature, sunrise time, sunset time, humidity data and etc. "
        smallText="Note: This App fetches data from an Api."
      />
      <ProjectTiles
        title="Food recommentation App"
        date="December 2020"
        tileBody=" This is a food recommendation app, feel free to give reviews."
        smallText="For more info click below"
      />
      <ProjectTiles
        title="Singer Recommendation App"
        date="December 2020"
        tileBody="This App recommends the Singer based on the language you choose. It list the name of the Singer and One of their song. "
        smallText="For more info click below"
      />
      <ProjectTiles
        title="Country Flags Interpreter App"
        date="December 2020"
        tileBody=" This App can search Flags of any country for you. You can either enter country name or enter its flag emoji from key board, the app will show its flag or the
            name of the country respectively "
        smallText="Note:Enter the first letter of country name in Caps 😊, This App is built using ReactJS"
      />

      <ProjectTiles
        title="Emoji Interpreter App"
        date="December 2020"
        tileBody="This is an Emoji Interpretation App, you enter an enomji, it will give you its meaning or you click any emoji
            from the database it will show its meaning."
        smallText="This App is build using ReactJS, Fr more info click below."
      />
      <ProjectTiles
        title="Game of thrones translator"
        date="December 2020"
        tileBody="This is an App that takes english language as input and it gives the translation to Dothraki's language. I am
            very sure Game of thrones fans gonna love it."
        smallText="For more info click below "
      />
      <ProjectTiles
        title="Minion Language Translator"
        date="December 2020"
        tileBody="This is English Langauge to Minion Language translator. This App uses  Fun Translation API to perform actions"
        smallText="For more info click below "
      />
      <ProjectTiles
        title="Leap Year Checker using nodeJS and CHalk npm package "
        date="December 2020"
        tileBody="Enter your birth year to check if you were born in a leap year or not."
        smallText="For more info click below"
      />
      <ProjectTiles
        title="repl.it Quiz Game"
        date="December 2020"
        tileBody="This is asimple General Knowledge Quiz Game with levels, users can choose the level in beginning."
        smallText="For more info click below "
      />

      <br/>
      <br/>
      <Footer/>
    </div>
  );
};
export default Projects;
