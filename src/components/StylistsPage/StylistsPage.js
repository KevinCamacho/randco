import React from 'react';
import './StylistsPage.scss';
import heroImage from '../../images/StylistsPage/RCO-93-edited.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import stylists from '../../data/stylists.json';
import StylistView from './Stylist/StylistView';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const StylistsPage = () => {
    return (
        <Container fluid="md" className="route-root" style={{ textAlign: 'center' }}>
            <LazyLoadImage id="stylistsPage_mainImage" src={heroImage} effect="blur" />
            <Row style={{ marginTop: '17px' }}>
                <div id="stylistsPage_meetOurTeam">Meet our Team</div>
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