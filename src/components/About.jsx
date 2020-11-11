import React from "react";
import Intro from "./Intro";
import Inspirations from "./Inspirations";
import Goals from "./Goals";

const About = () => {
  return (
    <div className="fixed-background">
      <Intro />
      <div className="special-bg">
        <Inspirations />
        <Goals />
      </div>

      <div className="fixed-wrap">
        <div className="fixed"></div>
      </div>
    </div>
  );
};

export default About;
