import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import React from "react";
// import "bootstrap/dist/css/bootstrap.css";
import "./Navbar.css";

function Nav2() {
  return (
    <>
      <div className="navDiv">
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="black"
          variant="dark"
          className="navbar2"
        >
          <Container>
            <div>
              <Navbar.Brand href="/" className="org_name">
                <img
                  src="../img/logo.jpg"
                  alt="SLA Logo"
                  className="logoImageNav2"
                />
                T&T.Inc Project Mgt Sys
              </Navbar.Brand>
            </div>

            <div className="navCollaps">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/about">About Us</Nav.Link>
                  <Nav.Link href="/events">Events</Nav.Link>

                  <NavDropdown
                    title="More"
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item href="/gallery">
                      Photo Gallery
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/members">
                      committee Members
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/history">History</NavDropdown.Item>
                    <NavDropdown.Divider />
                  </NavDropdown>
                  <Nav.Link href="/contact">Contact Us</Nav.Link>
                </Nav>
                <Nav.Link href="/create">
                  <button className="btn btn-warning">Become a Member</button>
                </Nav.Link>
              </Navbar.Collapse>
            </div>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Nav2;
