import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import CV from "../Kibort_Jan_CV.pdf";

const Footer = () => {
  return (
    <div className="footer bg-dark text-white">
      <Container className="text-center p-4">
        <Card.Title>Contact me</Card.Title>
        <Card.Text>
          <span className="d-block pb-2">
            <a href="tel: +48505373578">
              <FontAwesomeIcon icon={faPhone} /> (+48) 505 373 578
            </a>
          </span>
          <span className="d-block pb-2">
            <a href="mailto: jankibort@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} /> jankibort@gmail.com
            </a>
          </span>
        </Card.Text>
        <Card.Title>Extras</Card.Title>
        <Card.Body className="pt-0">
          <a
            className="btn btn-outline-dark btn-lg p-0"
            href={CV}
            download="KibortJanCV.pdf"
          >
            <FontAwesomeIcon icon={faFileAlt} /> Jan Kibort CV
          </a>
        </Card.Body>
      </Container>
    </div>
  );
};

export default Footer;
