import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../utilities/CustomLink';
import { FaHandHoldingMedical } from 'react-icons/fa'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from '../utilities/Loading';
import { BiUserCircle } from 'react-icons/bi'


const Header = () => {
    const [user, loading] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>;
    }
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
                    <FaHandHoldingMedical></FaHandHoldingMedical>
                    <span className="ms-2"><span style={{ color: "orange" }}>Medi</span><span style={{ color: "LightGray" }}>Space</span></span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="ms-auto d-flex align-items-center">
                        <Nav.Link as={CustomLink} to="/blogs">Blogs</Nav.Link>
                        <Nav.Link as={CustomLink} to="/about">About</Nav.Link>
                        {
                            user
                                ?
                                <>
                                    <Nav.Link><button onClick={() => signOut(auth)} className="btn btn-danger">Logout</button></Nav.Link>
                                    <Nav.Link className="fs-4">
                                        <BiUserCircle></BiUserCircle>
                                        {
                                            user.emailVerified ? <small style={{ fontSize: "16px" }} className="text-success">Verified</small>
                                                :
                                                <small style={{ fontSize: "16px" }} className="text-danger">Not verified</small>
                                        }
                                    </Nav.Link>

                                </>
                                :
                                <>
                                    <Nav.Link as={CustomLink} to="/login">Login</Nav.Link>
                                    <Nav.Link as={CustomLink} to="/register">Register</Nav.Link>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;