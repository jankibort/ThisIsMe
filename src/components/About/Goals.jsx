import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import img2 from "../../img/goals/mouse.jpg";
import img3 from "../../img/goals/chmielno2.jpg";
import img4 from "../../img/goals/doyourbest.jpg";
import img5 from "../../img/goals/happy.jpg";
import CV from "../../Kibort_Jan_CV.pdf";

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
          Our lifestyle and the activites we undertake always reflect our
          personality. In my life I am seeking cohesion in how I behave both in
          professional and social situations. What it means to me is that
          creating good atmosphere to streamline teamwork and communication
          between people will always be the key in interpersonal relations.
        </p>
        <Row className="pb-5">
          <Col xs={{ span: 12, order: 1 }} md={6} lg={3}>
            <img className="w-100" src={img2} alt="" />
          </Col>
          <Col xs={{ span: 12, order: 2 }} md={6} lg={6} className="d-flex">
            <span className="my-2 align-self-center">
              Paying attention to details in the work I do is very important to
              me. I follow the rule that the overall impression relies equally
              on major, salient features and those little, well-thought and
              carefully placed details. It’s like finding a tiny mouse hidden in
              the grass when you walk through the coutryside that changes the
              feeling of the whole place and makes this experience worth
              remembering.
            </span>
          </Col>

          <Col
            xs={{ span: 12, order: 4 }}
            md={6}
            lg={{ span: 6, offset: 3, order: 3 }}
            className="d-flex"
          >
            <span className="my-2 align-self-center">
              The high level of attentiveness is also reflected in the way I
              interact with people. I think everyone has a right to be listened
              and is obliged to listen carefully to what other people say.
              Although we are all different and have different needs, we all
              deserve to be noticed and be supported by our friends.
            </span>
          </Col>
          <Col xs={{ span: 12, order: 3 }} md={{ span: 6, order: 4 }} lg={3}>
            <img className="w-100" src={img3} alt="" />
          </Col>

          <Col xs={{ span: 12, order: 6 }} md={6} lg={3}>
            <img className="w-100" src={img5} alt="" />
          </Col>
          <Col xs={{ span: 12, order: 7 }} md={6} lg={6} className="d-flex">
            <span className=" my-2 align-self-center">
              „The noblest art is that of making others happy” – I have a
              feeling that this saying has been with me since I was born, even
              though I leaned it much later in my life. Social interaction
              should always bring joy, entertainment and comfort. Too often do I
              see people being reserved because of anxiety of looking silly. I
              think this statement above encourages me to distance myself from
              these feelings so that I can fully enjoy my life.
            </span>
          </Col>

          <Col
            xs={{ span: 12, order: 9 }}
            md={6}
            lg={{ span: 6, offset: 3 }}
            className="d-flex"
          >
            <span className="my-2 align-self-center">
              Another important element of my attitude towards life is
              self-determination. Going all-in, feeling the passion to what I do
              and a drive to create things not seen before – this is what
              describes me best. Being not afraid of challenges and accepting
              failure when it comes, this is what I believe makes us
              exceptional, and this is the path I aim to follow.
            </span>
          </Col>
          <Col xs={{ span: 12, order: 8 }} md={{ span: 6, order: 10 }} lg={3}>
            <img className="w-100" src={img4} alt="" />
          </Col>
        </Row>
        <p className="lead text-center pt-5 mt-3 mb-0">
          My professional goal is to get better each day as Front End Developer.
          Creating intuitive web pages and mobile apps is both my job and
          passion with this fully responsive web page being an example of my
          work. There are many other projects I published on GitHub. You can
          also read about my experience in{" "}
          <a className="cv-link p-0" href={CV} download="KibortJanCV.pdf">
            my CV
          </a>{" "}
          .<br />
          Please do not hesitate to contact me for buisness purposes.
        </p>
      </Container>
    </div>
  );
};

export default Goals;
