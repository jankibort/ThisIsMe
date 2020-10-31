import React from "react";
import { Container, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <Card className="footer bg-dark text-white">
      <Container className="text-center p-3">
        <Card.Title>Contact me</Card.Title>
        <Card.Text>
          <span className="d-block pb-2">
            <a href="tel: +48505373578">
              <FontAwesomeIcon icon={faPhone} /> (+48) 505 373 578
            </a>
          </span>
          <span className="d-block pb-3">
            <a href="mailto: jankibort@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} /> jankibort@gmail.com
            </a>
          </span>
        </Card.Text>
      </Container>
    </Card>
  );
};

export default Footer;
