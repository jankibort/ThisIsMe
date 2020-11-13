import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-scroll";

class ResponsiveNavbar extends Component {
  state = {
    active: 0,
  };

  render() {
    return (
      <Navbar className="shadow-lg" bg="light" expand="md">
        <Container>
          <Navbar.Brand>
            <Link
              activeClass="active"
              to="top-bar"
              smooth={true}
              duration={500}
            >
              About Me:
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
                  offset={-50}
                  duration={500}
                >
                  Inspirations
                </Link>
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
              </Nav.Item>
              <Nav.Item className="smooth-scroll">
                <Link
                  activeClass="active"
                  to="footer"
                  spy={true}
                  smooth={true}
                  offset={-260}
                  duration={500}
                >
                  Contact
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default ResponsiveNavbar;
