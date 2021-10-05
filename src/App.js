import { React } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Nav, NavDropdown } from 'react-bootstrap';
import { Switch, Route, useHistory } from 'react-router';
import HomePage from './components/HomePage';
import ServicesPage from './components/ServicesPage';

const App = () => {
    const history = useHistory();

    const onBrandClick = () => {
        history.push('/');
    }

    return (
        <div id="mainContainer">
            {/* <Container style={{backgroundColor: 'purple'}}>
                <Row style={{justifyContent: 'center'}}>
                    <Col xs={12} sm={6} md={3} style={{backgroundColor: 'green'}}>1 of 2</Col>
                    <Col xs={12} sm={6} md={3} style={{backgroundColor: 'blue'}}>2 of 2</Col>
                </Row>
            </Container> */}
            <Navbar expand="md" bg="dark" variant="dark" sticky="top">
                <Container fluid>
                    <Navbar.Brand id="randco_navbarBrand" onClick={onBrandClick}>Raquel & Company</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar" />
                    <Navbar.Collapse id="navbar">
                        <Nav className="justify-content-end" style={{ width: "100%" }}>
                            <Nav.Link href="/services" eventKey="Services">Services</Nav.Link>
                            <Nav.Link href="/about-us" eventKey="AboutUs">About Us</Nav.Link>
                            <Nav.Link href="/meet-the-stylists" eventKey="MeetTheStylists">Meet the Stylists</Nav.Link>
                            <Nav.Link href="/contact-us" eventKey="ContactUs">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/services' component={ServicesPage} />
            </Switch>
        </div>
    )
};

export default App;