import React, { Component } from "react";
import { Container, Col, Row, OverlayTrigger, Tooltip } from "react-bootstrap";
import Music from "./Music";
import lestwins from "../img/inspirations/lestwins.jpg";
import fabio from "../img/inspirations/fabio.jpg";
import paul from "../img/inspirations/paul.jpg";
import josh from "../img/inspirations/josh.jpg";
import Documentary from "./Documentary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// import Authority from "./Authority";

class Inspirations extends Component {
  state = {
    active: false,
  };

  render() {
    const active = this.state.active;

    return (
      <div id="inspirations">
        <Container className="col-12 text-center">
          <h1 className="text-dark">Inspirations</h1>
          <div className="border-top border-secondary w-25 mx-auto my-3"></div>
          <p className="lead container pb-2">
            We all find inspirations in life that change our course and drive
            what we do. They let us discover our limits and give us strength to
            go beyond them. They allow us to see the yet unseen dimensions of
            our everyday challenges. Below is a group of individuals who impress
            me by what they’ve done and what mindset they present.
          </p>
        </Container>
        <Container>
          <Row className="pb-3">
            <Col className="p-3" xs={12} sm={6} xl={3}>
              <h6 className="text-center">Les Twins</h6>
              <img className="w-100 shadow mb-2" src={lestwins} alt="" />
              <p className="text-justify">
                Being a dancer myself, I’m always impressed by how this duo puts
                attention to every detail of their performance. I think this is
                something to follow both in professional and hobby activities.
                They prove that one can discover something new even in classical
                dance and how important self-confidence and self-consciousness
                is when trying to be yourself.
              </p>
            </Col>
            <Col className="p-3" xs={12} sm={6} xl={3}>
              <h6 className="text-center">
                <OverlayTrigger
                  delay={150}
                  key="josh"
                  placement="top"
                  overlay={
                    <Tooltip id={"tooltip-josh"}>
                      Josh <FontAwesomeIcon icon={faYoutube} />
                    </Tooltip>
                  }
                >
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="insp-link"
                    href="https://www.youtube.com/user/jcneuman1/featured"
                  >
                    Josh Neuman
                  </a>
                </OverlayTrigger>
              </h6>
              <img className="w-100 shadow mb-2" src={josh} alt="" />
              <p className="text-justify">
                Looking at this guy I feel that any limit I put to myself exists
                only within my head. His brevity and dedication to his passion
                prove that if you want to achieve something, you have to go all
                in. This always means that you’ll get to try new things, learn
                something you would never expect to learn, and will make you a
                better person in the end.
              </p>
            </Col>
            <Col className="p-3" xs={12} sm={6} xl={3}>
              <h6 className="text-center">
                <OverlayTrigger
                  delay={150}
                  key="josh"
                  placement="top"
                  overlay={
                    <Tooltip id={"tooltip-josh"}>
                      Fabio <FontAwesomeIcon icon={faYoutube} />
                    </Tooltip>
                  }
                >
                  <a
                    target="_blank"
                    rel="noreferrer"
                    className="insp-link"
                    href="https://www.youtube.com/user/fabwibmer"
                  >
                    Fabio Wibmer
                  </a>
                </OverlayTrigger>
              </h6>
              <img className="w-100 shadow mb-2" src={fabio} alt="" />
              <p className="text-justify">
                Looking at Fabio riding his bike, one immediately gets an
                impression that this guy challenges our understanding of what a
                bike can do. He doesn’t stop on what is “theoretically” possible
                without proving it’s doable. I’m impressed by how much
                creativity he puts into his work. He always turns things that
                seem silly into something original.
              </p>
            </Col>
            <Col className="p-3" xs={12} sm={6} xl={3}>
              <h6 className="text-center">Paul Basagoitia</h6>
              <img className="w-100 shadow mb-2" src={paul} alt="" />
              <p className="text-justify">
                Paul’s biking story has had tragic episodes, but his strength
                and commitment to recover after spinal cord injury prove to me
                that there is always more you can do to improve yourself. I take
                an important lesson from him to stop blaming everything around
                me when things go wrong, but to focus on what I can do about
                myself to work things out.
              </p>
            </Col>
            <p className="lead mt-3 mb-0"></p>
            <Music />
            <Documentary />
          </Row>
        </Container>
      </div>
    );
  }
}

export default Inspirations;
