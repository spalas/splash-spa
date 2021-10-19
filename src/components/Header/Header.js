import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth()


    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                <Container>
                    <Navbar.Brand href="#home">Splash SPA</Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={Link} to="/home#products">Products</Nav.Link>
                        {user.email ?
                            <Nav.Link href="/login">Login</Nav.Link> :
                            <Nav.Link href="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user.displayName && { user.displayName }}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Nav className="me-auto">

                    </Nav>
                </Container>
            </Navbar>



        </>
    );
};

export default Header;