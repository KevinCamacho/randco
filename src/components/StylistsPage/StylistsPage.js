import React from 'react';
import './StylistsPage.scss';
import laughingPicture from '../../images/RCO-5.jpg';
import Container from 'react-bootstrap/Container';

const StylistsPage = () => {
    return (
        <Container fluid="md" className="route-root" style={{ textAlign: 'center' }}>
            <img id="stylistsPage_mainImage" src={laughingPicture} />
        </Container>
    )
}

export default StylistsPage;