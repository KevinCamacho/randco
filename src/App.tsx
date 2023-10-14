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
import ProductsPage from './components/ProductsPage/ProductsPage';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ThingsToDoPage from './components/ThingsToDoPage/ThingsToDoPage';
import { useMediaQuery } from 'react-responsive';
import logoLight from './images/logoLight192.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';


const App = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const navigate = useNavigate();

    return (
        <div id="mainContainer">
            <Navbar expand="md" bg="dark" variant="dark" sticky="top" collapseOnSelect>
                <Container fluid>
                    <Navbar.Brand id="randco_navbarBrand" className="cursor-pointer" onClick={() => navigate('/')}><LazyLoadImage id="mainLogo" src={logoLight} effect="blur" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar" />
                    <Navbar.Offcanvas id="navbar" placement="end">
                        <Offcanvas.Header closeButton />
                        <Offcanvas.Body>
                            <Nav className="justify-content-end" style={{ width: "100%" }} onSelect={selectedPath => navigate(selectedPath!)}>
                                <Nav.Link eventKey="/about-us">About Us</Nav.Link>
                                <Nav.Link eventKey="/services">Services</Nav.Link>
                                <Nav.Link eventKey="/meet-the-stylists">Stylists</Nav.Link>
                                <Nav.Link eventKey="/things-to-do">Things To Do</Nav.Link>
                                <Nav.Link eventKey="/products">Products</Nav.Link>
                                <Nav.Link eventKey="/contact-us">Contact Us</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
            <Routes>
                <Route path='/' element={<HomePage isMobile={isMobile} />} />
                <Route path='/services' element={<ServicesPage />} />
                <Route path='/about-us' element={<AboutUsPage />} />
                <Route path='/meet-the-stylists' element={<StylistsPage />} />
                <Route path='/things-to-do' element={<ThingsToDoPage isMobile={isMobile} />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/contact-us' element={<ContactUsPage />} />
            </Routes>
        </div>
    )
};

export default App;