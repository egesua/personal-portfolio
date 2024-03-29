import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { useState, useEffect } from "react";

const NavBar = () => {

    const { activeLink, setActiveLink } = useState('home');
    const { scrolled, setSetrolled } = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if( window.scrollY > 50 ) {
                setSetrolled(true);
            } else {
                setSetrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll)
    }, []);

  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={""} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#skills">Link</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#">
                  <img src={""} alt="" />
                </a>
                <a href="#">
                  <img src={""} alt="" />
                </a>
                <a href="#">
                  <img src={""} alt="" />
                </a>
              </div>
              <button className="vvd" onClick={() => console.log("connect")}>
                Let's Connect
              </button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
