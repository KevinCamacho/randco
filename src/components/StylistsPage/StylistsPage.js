import React from 'react';
import './StylistsPage.scss';
import laughingPicture from '../../images/RCO-5.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import stylists from '../../data/stylists.json';
import StylistView from './Stylist/StylistView';

const StylistsPage = () => {
    return (
        <Container fluid="md" className="route-root" style={{ textAlign: 'center' }}>
            <img id="stylistsPage_mainImage" src={laughingPicture} />
            <Row style={{ marginTop: '17px' }}>
                <div style={{ fontSize: '150%' }}>Meet our Team</div>
            </Row>
            <Row>
                <Col>
                    <div className="horizontal-divider"></div>
                </Col>
            </Row>
            <div id="stylistContainer">
                {stylists.map((stylist, index) =>
                    <StylistView key={stylist.name} stylist={stylist} index={index} />
                )}
            </div>
        </Container>
    )
}

export default StylistsPage;