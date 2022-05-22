import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Routes, Route, useNavigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage/ServicesPage';
import './App.scss';
import AboutUsPage from './components/AboutUsPage/AboutUsPage';
import StylistsPage from './components/StylistsPage/StylistsPage';
import ContactUsPage from './components/ContactUsPage/ContactUsPage';

const App = () => {
    const navigate = useNavigate();

    return (
        <div id="mainContainer">
            <Navbar expand="md" bg="dark" variant="dark" sticky="top" collapseOnSelect>
                <Container fluid>
                    <Navbar.Brand id="randco_navbarBrand" className="cursor-pointer" onClick={() => navigate('/')}>Raquel & Company</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar" />
                    <Navbar.Collapse id="navbar">
                        <Nav className="justify-content-end" style={{ width: "100%" }} onSelect={selectedPath => navigate(selectedPath)}>
                            <Nav.Link eventKey="/about-us">About Us</Nav.Link>
                            <Nav.Link eventKey="/services">Services</Nav.Link>
                            <Nav.Link eventKey="/meet-the-stylists">Stylists</Nav.Link>
                            <Nav.Link eventKey="/contact-us">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
                <Route exact path='/' element={<HomePage />} />
                <Route exact path='/services' element={<ServicesPage />} />
                <Route exact path='/about-us' element={<AboutUsPage />} />
                <Route exact path='/meet-the-stylists' element={<StylistsPage />} />
                <Route exact path='/contact-us' element={<ContactUsPage />} />
            </Routes>
        </div>
    )
};

export default App;