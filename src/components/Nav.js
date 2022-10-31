import React from "react";
import { Outlet, Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

const Navigation = () => (
    <div>
        <Navbar bg="dark" variant="dark" className="navbar navbar-expand-lg">
            <Container>
                <Link to="/" className="navbar-brand text-decoration-none">My Collectible</Link>
                <Nav className="justify-content-end">
                    <Link to="/home" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/about" className="nav-link">Featured</Link>
                </Nav>
            </Container>
        </Navbar>
        <Outlet />
    </div>
);

export default Navigation;