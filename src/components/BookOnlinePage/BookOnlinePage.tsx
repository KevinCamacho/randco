import React, { FC } from 'react';
import './BookOnlinePage.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import bookingHero from '../../images/ProductsPage/hero.jpg';

const BookOnlinePage: FC = () => {
    return (
        <Container id="bookOnlinePage-container" fluid="md" className="route-root" style={{ textAlign: 'center' }}>
            <LazyLoadImage id="bookOnlinePage_mainImage" src={bookingHero} effect="blur" />
            <Row style={{ marginTop: '17px' }}>
                <div id="bookOnlinePage-title">Book Online</div>
            </Row>
            <Row>
                <div style={{ marginTop: '17px' }}>
                    <a className="color-corrected-link" href="https://square.site/book/5SMQHHDRVV0BV/raquel-company-hair-salon-montgomery-ny" target="_blank" rel="noopener noreferrer">Schedule your appointment online</a>
                </div>
            </Row>
        </Container>
    )
};

export default BookOnlinePage;
