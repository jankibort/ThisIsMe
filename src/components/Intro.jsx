import React from "react";
import { Card, Container } from "react-bootstrap";
import me from "../img/me.jpg";

const Intro = () => {
  return (
    <Container id="intro">
      <Card className="special-card shadow-lg">
        <Card.Body>
          <img
            className="float-left rounded-circle mr-3 mb-1 text-justify"
            src={me}
            alt=""
          />
          <div className="text-justify">
            The briefest way I could describe myself is that im steady in a
            state of flow. What does it actualy mean?.. <br /> My name is Jan
            Kibort and i am a 24 year old everyday life enthusiast. Keeping eyes
            on a details i wana make everything works as expected.
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Intro;
