/* eslint-disable react/button-has-type */
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <>
            <div>
                <Navbar className="nav_bg" expand="lg" fixed="top">
                    <Container>
                        <Navbar.Brand to="/home">
                            <span className="nav-color">Medical Zone</span>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <NavLink exact to="/home">
                                    Home
                                </NavLink>
                                <NavLink exact to="/about">
                                    About
                                </NavLink>
                                <NavLink exact to="/services">
                                    Services
                                </NavLink>
                                <NavLink exact to="/doctors">
                                    Doctors
                                </NavLink>
                                <NavLink exact to="/contacts">
                                    Contacts
                                </NavLink>
                            </Nav>

                            {(user && user.displayName) || user.email ? (
                                <>
                                    <Button onClick={logOut} variant="light">
                                        Logout
                                    </Button>
                                    <Navbar.Text>
                                        Signed in as:{' '}
                                        <a href="#login">{user?.displayName || user?.email}</a>
                                    </Navbar.Text>
                                </>
                            ) : (
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                            )}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </>
    );
};

export default Header;
