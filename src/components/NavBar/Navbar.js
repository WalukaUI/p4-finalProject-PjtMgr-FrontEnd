import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
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
                T&T.Inc Project Mgt. Sys
              </Navbar.Brand>
            </div>

            <div className="navCollaps">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/projects">Projects</Nav.Link>
                  <Nav.Link href="/countries">Countries</Nav.Link>
                  <Nav.Link href="/cities">Cities</Nav.Link>
                  <NavDropdown title="More" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/departments">
                      Departments
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/employees">
                      Employees
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/history"></NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                <Nav.Link href="/Login">
                  <button className="btn btn-warning">Log in</button>
                </Nav.Link>
                <Nav.Link href="/Signup">
                  <button className="btn btn-warning">Sign up</button>
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
