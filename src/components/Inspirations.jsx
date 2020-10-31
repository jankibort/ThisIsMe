import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import Music from "./Music";
import lestwins from "../img/lestwins.jpg";
import fabio from "../img/fabio.jpg";
import paul from "../img/paul.jpg";
import josh from "../img/josh.jpg";
import Documentary from "./Documentary";

// import Authority from "./Authority";

const Inspirations = () => {
  return (
    <div id="inspirations">
      <Container className="col-12 text-center mt-5">
        <h1 className="text-dark pt-5">Inspirations</h1>
        <div className="border-top border-secondary w-25 mx-auto my-3"></div>
        <p className="lead container">Les Twins are</p>
      </Container>
      <Container>
        <Row className="pb-3">
          <Col className="p-4" xs={12} sm={6} xl={3}>
            <img className="w-100 shadow" src={lestwins} alt="" />
            <p className="text-justify">
              Nunc at nibh vel nisl posuere cursus. Curabitur faucibus in orci
              eget consectetur. Curabitur nec urna ultrices, commodo purus in,
              aliquam orci. Nulla convallis vehicula ligula, ornare blandit mi
              semper eget. Vestibulum posuere fringilla neque ac malesuada.
              Suspendisse viverra neque ut enim bibendum fringilla.
            </p>
          </Col>
          <Col className="p-4" xs={12} sm={6} xl={3}>
            <img className="w-100 shadow" src={josh} alt="" />
            <p className="text-justify">
              Nunc at nibh vel nisl posuere cursus. Curabitur faucibus in orci
              eget consectetur. Curabitur nec urna ultrices, commodo purus in,
              aliquam orci. Nulla convallis vehicula ligula, ornare blandit mi
              semper eget. Vestibulum posuere fringilla neque ac malesuada.
              Suspendisse viverra neque ut enim bibendum fringilla.
            </p>
          </Col>
          <Col className="p-4" xs={12} sm={6} xl={3}>
            <img className="w-100 shadow" src={fabio} alt="" />
            <p className="text-justify">
              Nunc at nibh vel nisl posuere cursus. Curabitur faucibus in orci
              eget consectetur. Curabitur nec urna ultrices, commodo purus in,
              aliquam orci. Nulla convallis vehicula ligula, ornare blandit mi
              semper eget. Vestibulum posuere fringilla neque ac malesuada.
              Suspendisse viverra neque ut enim bibendum fringilla.
            </p>
          </Col>
          <Col className="p-4" xs={12} sm={6} xl={3}>
            <img className="w-100 shadow" src={paul} alt="" />
            <p className="text-justify">
              Nunc at nibh vel nisl posuere cursus. Curabitur faucibus in orci
              eget consectetur. Curabitur nec urna ultrices, commodo purus in,
              aliquam orci. Nulla convallis vehicula ligula, ornare blandit mi
              semper eget. Vestibulum posuere fringilla neque ac malesuada.
              Suspendisse viverra neque ut enim bibendum fringilla.
            </p>
          </Col>

          <Music />
          <Documentary />
        </Row>
      </Container>
    </div>
  );
};

export default Inspirations;
