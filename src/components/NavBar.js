import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Welcome</Navbar.Brand>
        <Nav className="ml-auto">
          <Nav.Link href="#cart">Cart</Nav.Link>
          <Nav.Link href="#orders">My Orders</Nav.Link>
        </Nav>
    </Navbar>
  );
};

export default NavBar;
