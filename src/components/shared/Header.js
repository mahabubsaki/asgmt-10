import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../utilities/CustomLink';
import { FaHandHoldingMedical } from 'react-icons/fa'

const Header = () => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <FaHandHoldingMedical></FaHandHoldingMedical>
                    <span className="ms-2">MediSpace</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto">
                        <Nav.Link as={CustomLink} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={CustomLink} to="/about">About</Nav.Link>
                        <Nav.Link as={CustomLink} to="/login">Login</Nav.Link>
                        <Nav.Link as={CustomLink} to="/register">Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;