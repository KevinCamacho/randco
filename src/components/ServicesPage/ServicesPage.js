import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import './ServicesPage.scss';
import data from '../../data/services.json';
import { useMediaQuery } from 'react-responsive';

const ServicesPage = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    return (
        <Container fluid="md" className="route-root" style={{ textAlign: 'center' }}>

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'center' }}>


                <Table size="sm" borderless>
                    <tbody>
                        {data.serviceList.map((serviceCategory, index) =>
                            <>
                                {index > 0 && (
                                    <tr>
                                        <td></td>
                                        <td className="vertical-divider"></td>
                                    </tr>
                                )}
                                <tr>
                                    <td className="service-category-title service-name">{serviceCategory.title}</td>
                                    <td className="vertical-divider"></td>
                                </tr>
                                {serviceCategory.items.map((service, index2) =>
                                    <tr className="service-list">
                                        <td className="service-name">{service.name}</td>
                                        <td className="vertical-divider"></td>
                                        <td className="service-price">${service.price}</td>
                                    </tr>
                                )}
                            </>
                        )}
                    </tbody>
                </Table>


                <div style={{ width: '100px' }}>
                    <div className="side-text">{"P R I C E"}</div>
                    <div style={{ marginTop: '34px' }} className="side-text">{"L I S T"}</div>
                </div>


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