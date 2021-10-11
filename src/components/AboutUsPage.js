import { React } from 'react';
import './AboutUsPage.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import payTerminal from '../images/RCO-59.jpg';
import manaPicture from '../images/RCO-82.jpg';

const AboutUsPage = () => {
    return (
        <Container fluid="md" className="route-root" style={{ textAlign: 'center' }}>
            <img id="aboutUsPage_mainImage" src={payTerminal} />
            <Row style={{ marginTop: '17px' }}>
                <div style={{ fontSize: '150%' }}>Maybe some text here can go about how it all started with an "idea" and a love for hair or something along those lines</div>
            </Row>
            <Row>
                <Col>
                    <div className="horizontal-divider"></div>
                </Col>
            </Row>
            <Row style={{ marginTop: '17px' }}>
                <Col xs={{ span: 12, order: 'last' }} md={{ span: 6, order: 'first' }}>
                    <div style={{ textAlign: 'left' }}>
                        <div style={{ fontSize: '150%', fontWeight: 'bold' }}>Raquel Camacho</div>
                        <div>Our Founder</div>
                    </div>

                    <div style={{ marginTop: '17px' }}>some inspiring words about yourself what you were thinking while starting the salon, etc, etc</div>
                </Col>
                <Col xs={{ span: 12, order: 'first' }} md={{ span: 6, order: 'last' }}>
                    <img id="aboutUsPage_manaPicture" src={manaPicture} />
                </Col>
            </Row>
        </Container>
    )
};

export default AboutUsPage;