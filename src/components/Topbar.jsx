import React from "react";
import { Container } from "react-bootstrap";

const Topbar = () => {
  return (
    <div id="top-bar">
      <div className="fixed-background">
        <div className="fixed-wrap">
          <div className="fixed">
            <Container className="text-right">
              <div className="col-12">
                Welcome to this site which is a brief description of myself!
              </div>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
