import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";

const ResponsiveNavbar = () => {
  return (
    <Navbar className="shadow-lg" bg="light" expand="md">
      <Container>
        <Navbar.Brand>
          <Link activeClass="active" to="top-bar" smooth={true} duration={500}>
            Section list:
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item className="smooth-scroll">
              <Link
                activeClass="active"
                to="intro"
                spy={true}
                smooth={true}
                offset={-90}
                duration={500}
              >
                Intro
              </Link>
            </Nav.Item>
            <Nav.Item className="smooth-scroll">
              <Link
                activeClass="active"
                to="inspirations"
                spy={true}
                smooth={true}
                offset={-54}
                duration={500}
              >
                Inspirations
              </Link>

              {/* <Nav.Link href="#inspirations">Inspirations</Nav.Link> */}
            </Nav.Item>
            <Nav.Item className="smooth-scroll">
              <Link
                activeClass="active"
                to="goals"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Goals
              </Link>

              {/* <Nav.Link href="#passion">Goals</Nav.Link> */}
            </Nav.Item>
            <Nav.Item className="smooth-scroll">
              <Link
                activeClass="active"
                to="footer"
                spy={true}
                smooth={true}
                offset={-900}
                duration={500}
              >
                Contact Me
              </Link>

              {/* <Nav.Link href="#footer">Contacts</Nav.Link> */}
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ResponsiveNavbar;
