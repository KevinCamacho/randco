import { React } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ServicesPage.scss';

const ServicesPage = () => {
    return (
        <Container fluid="md" className="route-root" style={{ textAlign: 'center' }}>
            <Row>
                <div>Some blurb here about the values your company has and what pride you take in your work etc, etc</div>
                <div>Maybe some disclaimer about how prices will vary from stylist to stylist</div>
            </Row>
            <Row>
                <Col sm={12} md={true} id="services-list-container">
                    <div className="services-types">Title for some "type" of service like a cut</div>
                    <div className="services-line-item-title">Men's cut</div>
                    <div>$100</div>
                    <div className="services-line-item-title">Women's cut</div>
                    <div>$200</div>
                </Col>
                <Col sm={12} md={true} id="services-list-container">
                    <div className="services-types">Some other type of service like colors</div>
                    <div className="services-line-item-title">colormdxample 1</div>
                    <div>$100</div>
                    <div className="services-line-item-title">color example 2</div>
                    <div>$200</div>
                </Col>
                <Col sm={12} md={true} id="services-list-container">
                    <div className="services-types">Another type of service</div>
                    <div className="services-line-item-title">service exmaple</div>
                    <div>$100</div>
                    <div className="services-line-item-title">service example 2</div>
                    <div>$200</div>
                    <div className="services-line-item-title">service example 3</div>
                    <div>$300</div>
                </Col>
            </Row>
        </Container >
    )
};

export default ServicesPage;