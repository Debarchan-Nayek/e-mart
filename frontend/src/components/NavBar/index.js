import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import {LinkContainer} from "react-router-bootstrap"

import './style.css';

const NavBar = (props) => {
  return (
    <>
      <Navbar
        className="nav-bar"
        bg="primary"
        expand="lg"
        variant="dark"
        collapseOnSelect
        className="p-4"
      >
        <Container fluid>
          <LinkContainer to="/">
            <Navbar.Brand>E-Mart</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse
            className="justify-content-end"
            id="basic-navbar-nav"
          >
            <Nav>
              <LinkContainer to="/cart">
                <Nav.Link className="navLink">
                  <FaShoppingCart />
                  Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/signin">
                <Nav.Link className="navLink">
                  <FaUser /> Signin
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
