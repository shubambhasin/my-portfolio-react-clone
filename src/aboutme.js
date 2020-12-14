import React from "react";
import ProfileImage from "./profileimage";
import "./styles.css";

const AboutMe = () => {
  return (
    <div className="App">
 
 <h1 className="text-center">About <span >Shubam Bhasin</span></h1>
    
    <header>
        <ProfileImage/>
    </header>

    <div className="container container-center">
        <p>I am a Web developer, Programmer, music lover and a part time blogger currently living in Union territory of Jammu and Kashmir.

            I have done my B.Tech in Electronics and Communication Engineering from NIT Srinagar.

            
        </p>
        <p>
            Apart from that I have keen interest in Web, Web Apps. These days I am in ❤️ with JavaScript and its Frameworks.
            
            So each day I dive in the world of JavaScript and take a chunk out of it.
            Actively Learning them and applying them. You can click on the project section to have a look on number of things I have made. Or click Below.

            
        </p>
        
        <a href="./projects.html" className="links primary-button" target="">Project Section</a>
        
        

        <div>
            <p>You can contact me for projects or we can just grab a cup of coffee.</p>
            
            <a href="./projects.html" className="links secondary-button" target="">Contact Me</a>
    
     </div>
     </div>
     </div>
     
  );
};
export default AboutMe;
