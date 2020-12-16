import React from "react";
import BlogPost from "./BlogPost";
import "./styles.css";

import blogpost from "./blogpost.svg";

const Blogs = () => {
  return (
    <div className="App">
      <br/>
      <br/>
      <header className="container container-center">
        <img class="header-images-medium" src={blogpost} alt="" />
      </header>
      <br />
      <br />
      <BlogPost />
      <br />
      <br />
      <BlogPost />
      <br />
      <br />
      <BlogPost />
      <br />
      <br />
    </div>
  );
};
export default Blogs;
