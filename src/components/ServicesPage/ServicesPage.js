import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ServicesPage.scss';
import data from '../../data/services.json';
import { useMediaQuery } from 'react-responsive';

const ServicesPage = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <Container fluid="md" className="route-root" style={{ textAlign: 'center' }}>
            {/* <Row className="align-items-center" style={{ textAlign: 'right' }}>
                <Col>
                    {data.serviceList.map((serviceCategory, index) =>
                        <div key={`ServiceList${serviceCategory.title}`}>
                            {index > 0 && (
                                <Row className="service-list-empty-row">
                                    <Col xs={4}></Col>
                                    <Col xs="auto"><div className="vertical-divider"></div></Col>
                                    <Col xs={4}></Col>
                                </Row>
                            )}
                            <Row className="justify-content-center">
                                <Col xs={4}><div className="service-category-title service-name">{serviceCategory.title}</div></Col>
                                <Col xs="auto"><div className="vertical-divider"></div></Col>
                                <Col xs={4}><div className="service-price"></div></Col>
                            </Row>
                            {serviceCategory.items.map(service =>
                                <Row className="justify-content-center service-list" key={`ServiceListLineItem${service.name}`}>
                                    <Col xs={4}><div className="service-name">{service.name}</div></Col>
                                    <Col xs="auto"><div className="vertical-divider"></div></Col>
                                    <Col xs={4}><div className="service-price">${service.price}</div></Col>
                                </Row>
                            )}
                        </div>
                    )}
                </Col>
                <Col xs="auto">
                    <div className="side-text">{"P R I C E"}</div>
                    <div style={{ marginTop: '34px' }} className="side-text">{"L I S T"}</div>
                </Col>
            </Row> */}


            <div className="align-items-center" style={{ display: 'flex', flexWrap: 'nowrap' }}>
                <div style={{ flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
                    {data.serviceList.map((serviceCategory, index) =>
                        <div key={`ServiceList${serviceCategory.title}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            {index > 0 && (
                                <div style={{ display: 'flex', flexWrap: 'nowrap' }} className="service-list-empty-row">
                                    <div style={{ width: '180px' }}></div>
                                    <div style={{ height: 'inherit' }} className="vertical-divider"></div>
                                    <div style={{ width: '75px' }}></div>
                                </div>
                            )}
                            <div style={{ display: 'flex', flexWrap: 'nowrap' }}>
                                <div style={{ width: '180px' }} className="service-category-title service-name">{serviceCategory.title}</div>
                                <div style={{ height: 'inherit', marginLeft: '10px', marginRight: '10px' }} className="vertical-divider"></div>
                                <div style={{ width: '75px' }} className="service-price"></div>
                            </div>
                            {serviceCategory.items.map(service =>
                                <div style={{ display: 'flex', flexWrap: 'nowrap' }} className="service-list" key={`ServiceListLineItem${service.name}`}>
                                    <div style={{ width: '180px' }} className="service-name">{service.name}</div>
                                    <div style={{ height: 'inherit', marginLeft: '10px', marginRight: '10px' }} className="vertical-divider"></div>
                                    <div style={{ width: '75px' }} className="service-price">${service.price}</div>
                                </div>
                            )}
                        </div>
                    )}
                </div>
                {!isMobile && (
                    <div>
                        <div className="side-text">{"P R I C E"}</div>
                        <div style={{ marginTop: '34px' }} className="side-text">{"L I S T"}</div>
                    </div>
                )}
            </div>


            <Row style={{ marginTop: '68px' }}>
                <div className="service-page-footer">{data.footer}</div>
            </Row>
            <Row style={{ marginTop: '17px' }}>
                <div className="service-page-price-disclaimer">{data.priceDisclaimer}</div>
            </Row>
        </Container >
    )
};

export default ServicesPage;