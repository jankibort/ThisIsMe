import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import song1 from "../../img/music/song1.jpg";
import song2 from "../../img/music/song2.jpg";
import song3 from "../../img/music/song3.jpg";
import song4 from "../../img/music/song4.jpg";
import song5 from "../../img/music/song5.jpg";
import song6 from "../../img/music/song6.jpg";
import song7 from "../../img/music/song7.jpg";
import song8 from "../../img/music/song8.jpg";
import song0 from "../../img/music/song0.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import data from "../../data";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Music extends React.Component {
  state = {
    active: 0,
  };

  render() {
    const active = this.state.active;

    return (
      <Col xs={12} xl={6}>
        <h3 className="text-dark text-center my-5">
          <FontAwesomeIcon icon={faPlayCircle} /> Music
        </h3>

        <Row>
          <Col xs={12} sm={6} className="pb-3">
            <Carousel
              onSelect={(key) => {
                this.setState({ active: key });
              }}
              className="shadow-lg"
            >
              <Carousel.Item>
                <img className="d-block w-100" src={song8} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={song2} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={song3} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={song4} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={song5} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={song6} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={song7} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={song1} alt="" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={song0} alt="" />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={12} sm={6}>
            <div className="pb-4 mb-2">
              <span className="text-dark font-weight-bold">Artist: </span>
              <TransitionGroup className="position-relative">
                <CSSTransition key={active} timeout={900}>
                  <span className="position-absolute">
                    {data.songs[active].artist}
                  </span>
                </CSSTransition>
              </TransitionGroup>
            </div>
            <div className="pb-4 mb-2">
              <span className="text-dark font-weight-bold">Title: </span>
              <TransitionGroup className="position-relative">
                <CSSTransition key={active} timeout={900}>
                  <span className="position-absolute">
                    {data.songs[active].song}
                  </span>
                </CSSTransition>
              </TransitionGroup>
            </div>
            <div className="pb-4 mb-2">
              <span className="text-dark font-weight-bold">Mood: </span>
              <TransitionGroup className="position-relative">
                <CSSTransition key={active} timeout={900}>
                  <span className="position-absolute">
                    {data.songs[active].mood}
                  </span>
                </CSSTransition>
              </TransitionGroup>
            </div>
            <div>
              <a
                target="_blank"
                className="btn text-danger p-0"
                rel="noreferrer"
                href={data.songs[active].url}
              >
                <FontAwesomeIcon icon={faYoutube} /> Play in YouTube
              </a>
            </div>
          </Col>
        </Row>
      </Col>
    );
  }
}

export default Music;
