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
            <Row>
                <div>hi</div>
                {data.map(serviceType =>
                    <Col sm={12} md={true} id="services-list-container">
                        <div className="services-types">{serviceType.title}</div>
                        {serviceType.items.map(service =>
                            <>
                                <div className="services-line-item-title">{service.serviceName}</div>
                                <div>{service.price}</div>
                            </>
                        )}

                    </Col>
                )}
            </Row>
        </Container>
    )
};

export default ServicesPage;