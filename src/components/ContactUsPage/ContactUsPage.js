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
                <img className="facebook-logo" src={facebookIcon} alt="facebook" onClick={() => window.open('https://www.facebook.com/RaquelandCompany)} />
                    < img style = {{ marginLeft: '17px' }} className="insta-logo" src={instaIcon} alt="instagram" onClick={() => window.open('https://www.instagram.com/randcosalon/')} />
            </div>
            <Row>
                cell phone
            </Row>
            <Row>
                address
            </Row>
        </Container>
    )
};

export default ContactUsPage;