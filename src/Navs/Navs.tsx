import React, { useState } from "react";
import "./Navs.css"
import { Navbar, Container, FormControl, Button, Nav } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navs = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => {
    console.log("slideOpen");
    setShow(true);
  };
  return (
    <div className="Navs">
      <Navbar bg="dark" variant="dark" >
      <div>
          <Button variant="dark" onClick={handleShow}>
            <div className="menu"></div>
            <div className="menu"></div>
            <div className="menu"></div>
          </Button>
        </div>
        <div>
        <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Profile</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div>
            <h1> somthim</h1>
            <hr/>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
        </div>
        <div className="main">
          <a className="navbar-brand">
            <img
              src="https://www.a1dezine.co.nz/wp-content/uploads/2017/01/logo-design.jpg"
              alt=""
              width="50"
              height="40"
            />
          </a>
        </div>
        <Container >
          <Navbar.Brand href="">MY_App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/Login">Login</Nav.Link>
            <Nav.Link href="/">Signup</Nav.Link>
          </Nav>
          <div className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2 "
              aria-label="Search"
            />
            <Button variant="info">Search</Button>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navs;
