import { React } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ServicesPage.scss';
import data from '../data/services.json';

const ServicesPage = () => {
    return (
        <Container fluid="md" className="route-root" style={{ textAlign: 'center' }}>
            <Row>
                <div>Some blurb here about the values your company has and what pride you take in your work etc, etc</div>
                <div>Maybe some disclaimer about how prices will vary from stylist to stylist</div>
            </Row>
            {data.map((serviceCategory, index) =>
                <>
                    <div className="horizontal-divider"></div>
                    <Row className="service-container">
                        <div>
                            <div className="service-category-title">{serviceCategory.title}</div>
                        </div>
                        <div id="serviceList">
                            {serviceCategory.items.map(service =>
                                <Row className="service-line-item">
                                    <Col className="service-title">{service.serviceName}</Col>
                                    <Col>{service.price}</Col>
                                </Row>
                            )}
                        </div>
                    </Row>
                </>
            )}
        </Container>
    )
};

export default ServicesPage;