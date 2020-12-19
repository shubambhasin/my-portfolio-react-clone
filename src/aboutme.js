import React from "react";
import Footer from "./Footer";
import PrimaryButton from "./PrimaryButton";
import ProfileImage from "./profileimage";
import SecondaryButton from "./SecondaryButton";
import "./styles.css";

const AboutMe = () => {
  return (
    <div className="App">
      <br/>
      <h1 className="text-center">
        About  <span  style={{color:"#FF512F"}}> Shubam Bhasin</span>
      </h1>
      <br/>

      <header>
        <ProfileImage />
      </header>

      <br/>

      <div className="container container-center">
        <p>
          I am a Web developer, Programmer, music lover and a part time blogger
          currently living in Union territory of Jammu and Kashmir. I have done
          my B.Tech in Electronics and Communication Engineering from NIT
          Srinagar.
        </p>
        <p>
          Apart from that I have keen interest in Web, Web Apps. These days I am
          in <span>❤️</span> with JavaScript and its Frameworks. So each day I
          dive in the world of JavaScript and take a chunk out of it. Actively
          Learning them and applying them. You can click on the project section
          to have a look on number of things I have made. Or click Below.
        </p>

        <PrimaryButton buttonText="Project Section" href="/projects" />

        <div>
          <p>
            You can contact me for projects or we can just grab a cup of coffee.
          </p>

          <SecondaryButton
            buttonText="Contact me"
            href="mailto:iamshubambhasin@gmail.com"
          />
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};
export default AboutMe;
