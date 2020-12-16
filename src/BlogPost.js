import React from "react";
import PrimaryButton from "./PrimaryButton";
import "./styles.css";

const BlogPost = ({
  blogTitle = "Blog Title",
  blogDate = "Date of publishing",
  blogContent = "Some cotent for the blog"
}) => {
  return (
    <div className="App">
    
      <div className="container container-center bg-gray container-radius">
        <h2 style={{color:"darkorange"}}>{blogTitle}</h2>
        <small>{blogDate}</small>
        <p>{blogContent}</p>
        <br/>
<PrimaryButton buttonText="Read more..."/>
<br/><br/>
      </div>
    </div>
  );
};
export default BlogPost;
/*<header className="container container-center">
      <img class="header-images-medium" 
      src={frontpage} alt=""/>
      </header> */
