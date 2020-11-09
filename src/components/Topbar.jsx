import React from "react";
import { Container } from "react-bootstrap";

const Topbar = () => {
  return (
    <div id="top-bar">
      <div className="fixed-background">
        <div className="fixed-wrap">
          <div className="fixed">
            <Container className="text-right"></Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
