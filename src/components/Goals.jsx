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
      <Container className="text-center">
        Gaining experience motivates me even more to progress. I will to put
        combination of all my best features to
        <Row>
          <Col xs={12} md={3}>
            <img className="w-100" src={img2} />
          </Col>
          <Col xs={12} md={9}>
            <span className="align-middle">
              mouse mouse mouse mouse mouse mouse mouse mouse mouse mouse mouse
              mouse mouse mouse mouse mouse mouse mouse mouse mouse mouse mouse
              mouse mouse mouse mouse mouse mouse
            </span>
          </Col>
          <Col xs={12} md={9}>
            <span id="chmielnospan"> chmielno </span>
          </Col>
          <img className="w-100" src={img3} />
          <span id="chmielnospan"> chmielno </span>

          <img className="w-100" src={img5} />
          <span id="happyspan"></span>
          <img className="w-100" src={img4} />
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
