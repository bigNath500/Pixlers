import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import './Navbar.scss'
import * as giIcons from 'react-icons/gi'

function BasicExample() {
    const [navbar, setNavbar] = useState(false);

    const changeNavbarBg = () => {
        if(window.scrollY > 60) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    useEffect(() => {
        changeNavbarBg();

        window.addEventListener("scroll", changeNavbarBg)
    })

    return (
        <Navbar bg={navbar? "white" : "transparent"} expand="lg" className={navbar ? 'pt-2 pb-2 navbar-light fixed-top shadow-sm' : 'pt-2 pb-2 navbar-dark fixed-top'}>
            <Container>
                <Navbar.Brand href="#home" className='d-flex align-items-center'>
                    <giIcons.GiMountains className='text-info me-2 fs-1' /> <span className='fs-1'>Fl<span className='text-warning'>o</span>x</span>
                </Navbar.Brand>

                <Navbar.Toggle className='bg-warning shadow-sm border-0' aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link className="nav-link me-3" to="/">Home</Link>
                        <Link className="nav-link me-3" to="/">About Us</Link>
                        <Link className="nav-link me-3" to="/">Faq</Link>
                        <Link className="nav-link" to="/">Contact</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;