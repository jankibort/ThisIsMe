import React from "react";
import { Carousel, Col, Row } from "react-bootstrap";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import song1 from "../img/music/song1.jpg";
import song2 from "../img/music/song2.jpg";
import song3 from "../img/music/song3.jpg";
import song4 from "../img/music/song4.jpg";
import song5 from "../img/music/song5.jpg";
import song6 from "../img/music/song6.jpg";
import song7 from "../img/music/song7.jpg";
import song8 from "../img/music/song8.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import data from "../data";
import { CSSTransition, TransitionGroup } from "react-transition-group";

class Music extends React.Component {
  state = {
    active: 0,
  };

  render() {
    const active = this.state.active;
    return (
      <Col xs={12} lg={6}>
        <h3 className="text-dark text-center my-5">
          <FontAwesomeIcon icon={faPlayCircle} /> Music
        </h3>
        <Row>
          <Col xs={6}>
            <Carousel
              onSelect={(key) => {
                this.setState({ active: key });
              }}
              className="shadow-lg"
            >
              <Carousel.Item>
                <img className="d-block w-100" src={song8} alt="First slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={song2} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={song3} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={song4} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={song5} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={song6} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item>
                <img className="d-block w-100" src={song7} alt="Third slide" />
              </Carousel.Item>
              <Carousel.Item artist="Hanson">
                <img className="d-block w-100" src={song1} alt="First slide" />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={6} className="pl-0">
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

// handleSelect = (index) => {
//   switch (index) {
//     case 0:
//       return (
//         <Song
//           artist="Waterstrider"
//           song="Soundless Sea"
//           mood="#chill #travel"
//           url="https://music.youtube.com/watch?v=M-_eJkcoSL4"
//         />
//       );
//     case 1:
//       return (
//         <Song
//           artist="The Seige"
//           song="Run for Your Life"
//           mood="#determination #motivation"
//           url="https://music.youtube.com/watch?v=IC1hMxwbMGg"
//         />
//       );
//     case 2:
//       return (
//         <Song
//           artist="The Jezabels"
//           song="Long Highway"
//           mood="#chill #travel"
//           url="https://music.youtube.com/watch?v=6KzKr7kSTB4"
//         />
//       );
//     case 3:
//       return (
//         <Song
//           artist="Epica"
//           song="Victims of Contingency"
//           mood="#ignited"
//           url="https://music.youtube.com/watch?v=_Dy258TFQPs"
//         />
//       );
//     case 4:
//       return (
//         <Song
//           artist="KR3TURE"
//           song="Watchi it Grow"
//           mood="#positive"
//           url="https://music.youtube.com/watch?v=tgNu0FZEGhA"
//         />
//       );
//     case 5:
//       return (
//         <Song
//           artist="Annie Lennox"
//           song="Walking on Broken Glass"
//           mood="#positive"
//           url="https://music.youtube.com/watch?v=nSN0YysStgY"
//         />
//       );
//     case 6:
//       return (
//         <Song
//           artist="Brian Culbertson"
//           song="Long Night out"
//           mood="#positive"
//           url="https://music.youtube.com/watch?v=Cep3QGDXey8"
//         />
//       );
//     case 7:
//       return (
//         <Song
//           artist="Hanson"
//           song="Waiting For This"
//           mood="#positive"
//           url="https://music.youtube.com/watch?v=auLdivX9KwQ"
//         />
//       );
//   }

export default Music;
