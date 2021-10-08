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
                <div className="horizontal-divider"></div>
            </Row>
            <Row style={{ marginTop: '17px' }}>
                <Col>
                    <div>some inspiring words about yourself what you were thinking while starting the salon, etc, etc</div>
                </Col>
                <Col>
                    <img id="aboutUsPage_manaPicture" src={manaPicture} />
                </Col>
            </Row>
        </Container>
    )
};

export default AboutUsPage;