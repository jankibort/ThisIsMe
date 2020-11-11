import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import img2 from "../img/goals/mouse.jpg";
import img3 from "../img/goals/chmielno2.jpg";
import img4 from "../img/goals/doyourbest.jpg";
import img5 from "../img/goals/happy.jpg";

const Goals = () => {
  return (
    <div id="goals">
      <Container className="text-center">
        <h1 className="text-dark">My Goals and Motivation</h1>
        <div className="border-top border-secondary w-25 mx-auto my-3"></div>
        <p className="lead"></p>
      </Container>
      <Container className="text-justify">
        <p className="lead text-center pb-5">
          I fin myself as proactive person. That fact pushes me often
        </p>

        <Row>
          <Col xs={{ span: 12, order: 1 }} md={3}>
            <img className="w-100" src={img2} alt="" />
          </Col>
          <Col xs={{ span: 12, order: 2 }} md={6} className="d-flex">
            <span className="my-2 align-self-center">
              As long as I can memorize i have been an observer. For me tiny
              details are always equal part of whole thing so I often do my best
              to turn even tiny detail into awesome features.
            </span>
          </Col>

          <Col
            xs={{ span: 12, order: 4 }}
            md={{ span: 6, offset: 3, order: 3 }}
            className="d-flex"
          >
            <span className="my-2 align-self-center">
              I am social addicted extrovert. My personality is a result of my
              lifestyle and activities. My friends though me the potential of
              teamwork and possibilities that come with it. I understand that it
              is very important to listen to every member of team and being
              aware that not everybody is equal. That's why it's always good to
              have eyes wide opened to lend helping hand.
            </span>
          </Col>
          <Col xs={{ span: 12, order: 3 }} md={{ span: 3, order: 4 }}>
            <img className="w-100" src={img3} alt="" />
          </Col>

          <Col xs={{ span: 12, order: 6 }} md={3}>
            <img className="w-100" src={img5} alt="" />
          </Col>
          <Col xs={{ span: 12, order: 7 }} md={6} className="d-flex">
            <span className=" my-2 align-self-center">
              Being a social person has more aspects than just seeing potential
              of teamwork. There is thing called humanbeing. I do my best for
              those who i live with. I truly believe that: <br /> "The noblest
              art is that of making ohters happy".
            </span>
          </Col>

          <Col
            xs={{ span: 12, order: 9 }}
            md={{ span: 6, offset: 3 }}
            className="d-flex"
          >
            <span className="my-2 align-self-center">My</span>
          </Col>
          <Col xs={{ span: 12, order: 8 }} md={{ span: 3, order: 10 }}>
            <img className="w-100" src={img4} alt="" />
          </Col>
        </Row>

        {/* FIXME */}
        {/* Ever since I remember I have been 
        vigilan Observer, Adventurer Enthusiast, Mountain lover. Every signle thing I
        call my passion is at least partially challanging I belive that it's
        possible to expose even a tiny detail as a big feature.  */}
        {/* <Row>
          <Col xs={12} sm={6}>
            <Row>
              <Col xs={12} sm={7}>
                <img className="w-100" src={img2} />
              </Col>
              <Col xs={12} sm={5} className="lead">
                I belive that every single tiny detail can expose into wonderful
                feature.
              </Col>
            </Row>
          </Col>
          <Col xs={12} sm={6}>
            <Row>
              <Col xs={12} sm={6}>
                <img className="w-100" src={img3} />
              </Col>
              <Col xs={12} sm={6}>
                I experienced goodness of teamwork a lot and it let me know
                insane potential of group working with friendly people. Being
                with people is big part of my life
              </Col>
              <Col xs={12} sm={6}>
                <img className="w-100" src={img4} />
              </Col>
            </Row>
          </Col>
        </Row> */}
      </Container>
    </div>
  );
};

export default Goals;
