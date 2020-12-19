import React from "react";
import BlogPost from "./BlogPost";
import "./styles.css";

import blogpost from "./blogpost.svg";
import Footer from "./Footer";

const Blogs = () => {
  return (
    <div className="App">
      <br />
      <br />
      <header className="container container-center">
        <img class="header-images-medium" src={blogpost} alt="" />
      </header>
      <br />
      <br />
      <BlogPost
        blogTitle="OnePlus 8 Pro display issue (black crush, green/ yellow tint)"
        blogDate="December 2020"
        blogContent="After a day of usage, during the
         night when at low brightness and in dark mode
          there was a slight colour shift I.e., A yellow
           tint was visible on the dark Grey background for 
           example in Incognito mode in Google Chrome and a 
           horizontal line was visible at very low brightness at 0%. this is certainly a hardware issue very common in OLED screens. 

           The best advice is to get your handset replaced before time rather than going to customer care.
           
           To check if your device has that issue. Go to chrome and go to incognito mode and lower the brightness to minimum and go in an extreme dark room and if you see that horizontal line or a colour shift get your device replaced."
      />
      <br />
      <br />
      <BlogPost 
      blogTitle="Gcam for OnePlus 8 Pro, Magical"
      blogDate="December 2020"
      blogContent="No doubt Oneplus can push the big players like Samsung 20+, few iPhones and other major flagships when it comes to camera. But what if it can really do more ? Yes why not, so to push Oneplus 8 Pro beyond its limit and to go neck on neck with the camera hardware that Oneplus 8 pro have we use Google Camera or Gcam, the popular name for google camera these days."/>
      <br />
      <br />
      <BlogPost
      blogTitle="Best GCam for Redmi K20/Mi9T"
      blogDate="December 2020"
      blogContent="Unleash the power of your triple camera with the all new Google camera Mod for your brand new Redmi K20 or Mi9T. This is the latest version of the GCam for your phone, below are the changes that are done to the new versions. Have a look and find the download link at the bottom." />
      <br />
      <br />
      <Footer />
    </div>
  );
};
export default Blogs;
