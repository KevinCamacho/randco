import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ServicesPage.scss';
import data from '../../data/services.json';

const ServicesPage = () => {
    return (
        <Container fluid="md" className="route-root" style={{ textAlign: 'center' }}>
            <Row>
                <div id="services-header">{data.header}</div>
            </Row>
            <Row>
                <div className="price-disclaimer">{data.priceDisclaimer}</div>
            </Row>
            {data.serviceList.map((serviceCategory, index) =>
                <div key={serviceCategory.title}>
                    <div className="horizontal-divider"></div>
                    <Row className="services-container">
                        <div>
                            <div className="service-category-title">{serviceCategory.title}</div>
                        </div>
                        <div id="serviceList">
                            {serviceCategory.items.map(service =>
                                <Row key={service.serviceName} className="service-line-item">
                                    <Col className="service-title">{service.serviceName}</Col>
                                    <Col className="service-price">{service.price}</Col>
                                </Row>
                            )}
                        </div>
                        {serviceCategory.sectionFooter && (
                            <div className="service-footer">***{serviceCategory.sectionFooter}***</div>
                        )}
                    </Row>
                </div>
            )}
        </Container>
    )
};

export default ServicesPage;