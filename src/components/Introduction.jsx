import React from "react";
import Intro from "./Intro";
import Inspirations from "./Inspirations";
import Passion from "./Passion";
// import {} from 'react-bootstrap';

const Introduction = () => {
  return (
    <div className="fixed-background">
      <Intro />
      <Inspirations />
      <Passion />

      <div className="fixed-wrap">
        <div className="fixed"></div>
      </div>
    </div>
  );
};

export default Introduction;
