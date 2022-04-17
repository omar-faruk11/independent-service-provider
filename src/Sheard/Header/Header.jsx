import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand as={Link} to="/">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto text-uppercase fw-bold">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={Link} to="aboutme">About Me</Nav.Link>
                        {<Nav.Link as={Link} to="login">Log In</Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;