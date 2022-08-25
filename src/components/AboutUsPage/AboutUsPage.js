import React from 'react';
import './AboutUsPage.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import payTerminal from '../../images/RCO-59.jpg';
import manaPicture from '../../images/RCO-82.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const AboutUsPage = () => {
    return (
        <Container fluid="md" className="route-root" style={{ textAlign: 'center' }}>
            <LazyLoadImage id="aboutUsPage_mainImage" src={payTerminal} effect="blur" />
            <Row style={{ marginTop: '17px' }}>
                <div style={{ fontSize: '150%' }}>About Us</div>
            </Row>
            <Row>
                <Col>
                    <div className="horizontal-divider"></div>
                </Col>
            </Row>
            <Row>
                <Col xs={{ span: 12, order: 'last' }} md={{ span: 6, order: 'first' }}>
                    <div style={{ textAlign: 'left' }}>
                        <div className="person-name">Raquel Araujo</div>
                        <div>Our Founder</div>
                    </div>

                    <div style={{ marginTop: '17px' }}>What started as a one woman show is now a bustling salon with a full team.  Raquel felt like there was a void in the village of Montgomery… She wanted to create an intimate boutique space where great hair & small town community feels collided. We believe in continuing education so that our team is always on the cutting edge of trends, techniques and products. When you sit in any one of our stylists chairs you know you are getting a customized  service and the best products for you hair.</div>
                </Col>
                <Col xs={{ span: 12, order: 'first' }} md={{ span: 6, order: 'last' }}>
                    <LazyLoadImage id="aboutUsPage_manaPicture" src={manaPicture} alt="Raquel Araujo" effect="blur" />
                </Col>
            </Row>
        </Container>
    )
};

export default AboutUsPage;