import React from 'react';
import './ContactUsPage.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import facebookIcon from '../../images/socials/fb_logo.png';
import instaIcon from '../../images/socials/insta_logo.png';

const ContactUsPage = () => {
    return (
        <Container fluid="md" className="route-root" style={{ textAlign: 'center' }}>
            <Row style={{ marginTop: '17px' }}>
                <div style={{ fontSize: '150%' }}>Get in touch with Raquel & Company</div>
                <Col>
                    <div className="horizontal-divider"></div>
                </Col>
            </Row>
            <div className="flexbox-row" style={{ justifyContent: 'center' }}>
                <div style={{ marginRight: '17px' }}>Follow us:</div>
                <img className="facebook-logo" src={facebookIcon} alt="facebook" onClick={() => window.open('https://www.facebook.com/RaquelandCompany')} />
                < img style={{ marginLeft: '17px' }} className="insta-logo" src={instaIcon} alt="instagram" onClick={() => window.open('https://www.instagram.com/randcosalon/')} />
            </div>
            <Row style={{ marginTop: '34px' }}>
                <a className="cellphone-link" href="tel:+8454573660">845-457-3660</a>
            </Row>
            <Row style={{ marginTop: '34px' }}>
                <div>Email us</div>
            </Row>
            <Row style={{ marginTop: '34px' }}>
                <div>9 Bridge St</div>
                <div>Montgomery, NY 12549</div>
                <a className="cellphone-link" href="comgooglemaps://?center=40.765819,-73.975866&zoom=14&views=traffic">the address</a>
                <a className="cellphone-link" href="geo:50.066274, 10.754427;" target="_blank">Click here for map</a>
            </Row>
        </Container>
    )
};

export default ContactUsPage;