import React from "react";
import "./styles.css";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Projects from "./Projects";
import AboutMe from "./aboutme";
import Blogs from "./blog";
import Home from "./Home";

const App = () => {
  return (
    <Router>
      <div className="App">
       
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/projects" component={Projects} />
            <Route path="/aboutme" component={AboutMe} />
            <Route path="/blog" component={Blogs} />
          </Switch>
        
      </div>
    </Router>
  );
};

export default App;
