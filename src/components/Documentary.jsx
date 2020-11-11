import React, { Component } from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm } from "@fortawesome/free-solid-svg-icons";
import film1 from "../img/movies/thatsitthatsall.jpg";
import film2 from "../img/movies/chasingadvanture.jpg";
import film3 from "../img/movies/anyoneofus.jpg";
import data from "../data";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Documentary extends Component {
  state = {
    active: 0,
  };

  render() {
    const active = this.state.active;

    return (
      <Col xs={12} xl={6}>
        <h3 className="text-center text-dark my-5">
          Documentaries <FontAwesomeIcon icon={faFilm} />{" "}
        </h3>
        <Row>
          <Col sm={6} className="d-sm-none text-center pb-3">
            <a
              target="_blank"
              className="btn film-link p-0"
              rel="noreferrer"
              href={data.movies[active].url}
            >
              Watch "{data.movies[active].title}" !
            </a>
          </Col>
          <Col sm={6} className="d-none d-sm-block">
            <TransitionGroup>
              <CSSTransition key={active} timeout={900}>
                <span className="position-absolute text-justify">
                  {data.movies[active].description}
                  <br />
                  <a
                    target="_blank"
                    className="btn film-link p-0"
                    rel="noreferrer"
                    href={data.movies[active].url}
                  >
                    Watch "{data.movies[active].title}" !
                  </a>
                </span>
              </CSSTransition>
            </TransitionGroup>
          </Col>
          <Col xs={12} sm={6}>
            <Carousel
              onSelect={(key) => {
                this.setState({ active: key });
              }}
              className="shadow-lg"
            >
              <Carousel.Item interval={7000}>
                <img className="d-block w-100" src={film1} alt="" />
              </Carousel.Item>
              <Carousel.Item interval={7000}>
                <img className="d-block w-100" src={film2} alt="" />
              </Carousel.Item>
              <Carousel.Item interval={7000}>
                <img className="d-block w-100" src={film3} alt="" />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default Documentary;
