import React, {useContext} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext'; // Import UserContext

const NavBar = () => {
  const { user, orderItemsLength } = useContext(UserContext); // Access user from UserContext

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={Link} to="/">WELCOME{user ? ` ${user.name.toUpperCase()}` : ''}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" /> {/* Toggle button for mobile view */}
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto"> {/* Centering content using margin auto */}
          <Nav.Item>
            Your User ID: {user ? ` ${user.userId}` : ''}
          </Nav.Item>
        </Nav>
          <Nav className="ml-auto">
          <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
          <Nav.Link as={Link} to="/orders" className="ml-2">
            My Orders: {orderItemsLength}
          </Nav.Link>
          </Nav>
        </Navbar.Collapse>  
    </Navbar>
  );
};

export default NavBar;
