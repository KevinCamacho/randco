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
                <div>At Raquel {'&'} Company we strive to provide the best services at the best price. If you have any questions please reach out!</div>
            </Row>
            <Row>
                <div className="price-disclaimer">All prices are base amounts, depending on stylist, hair
                    length/thickness, and hair integrity. For a proper
                    estimate, schedule a free consultation. Prices are
                    subject to change at anytime.</div>
            </Row>
            {data.map((serviceCategory, index) =>
                <div key={serviceCategory.title}>
                    <div className="horizontal-divider"></div>
                    <Row>
                        <div>
                            <div className="service-category-title">{serviceCategory.title}</div>
                        </div>
                        <div id="serviceList">
                            {serviceCategory.items.map(service =>
                                <Row key={service.serviceName} className="service-line-item">
                                    <Col className="service-title">{service.serviceName}</Col>
                                    <Col>{service.price}</Col>
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