import React from "react";
import { Carousel, Col, Row, OverlayTrigger, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import film1 from "../img/movies/thatsitthatsall.jpg";
import film2 from "../img/movies/anyoneofus.jpg";
import film3 from "../img/movies/chasingadvanture.jpg";

const Documentary = () => {
  return (
    <Col xs={12} lg={6}>
      <h3 className="text-center text-dark my-5">
        Documentaries <FontAwesomeIcon icon={faFilm} />{" "}
      </h3>
      <Row>
        <Col xs={6} className="pr-0">
          sadfadsfadsfdsaf fads fsda
        </Col>
        <Col xs={6}>
          <Carousel className="shadow-lg">
            <Carousel.Item>
              <img className="d-block w-100" src={film1} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={film2} alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={film3} alt="First slide" />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Col>
  );
};

export default Documentary;
