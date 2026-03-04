import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import './ServicesPage.scss';
import { services } from '../../data';

const ServicesPage: FC = () => {
    return (
        <Container fluid="md" className="route-root" style={{ textAlign: 'center' }}>

            <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'center' }}>

                <div>

                    <Table size="sm" borderless>
                        <tbody>
                            {services.serviceList.map((serviceCategory, index) => (
                                <React.Fragment key={serviceCategory.title}>
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
                                    {serviceCategory.items.map((service, index2) => (
                                        <tr className="service-list" key={service.name + index2}>
                                            <td className="service-name">{service.name}</td>
                                            <td className="vertical-divider"></td>
                                            <td className="service-price">${service.price}</td>
                                        </tr>
                                    ))}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </Table>
                </div>

                <div style={{ width: '100px' }}>
                    <div className="side-text">{"P R I C E"}</div>
                    <div style={{ marginTop: '34px' }} className="side-text">{"L I S T"}</div>
                </div>

            </div>

            <Row style={{ marginTop: '68px' }}>
                <div className="service-page-footer">{'All the services we provide at R&Co are customized for each and every quest. Each head of hair is unique as is each face shape and skin tone. We pride ourselves on being masters of finding the perfect cut and color for each guest.'}</div>
            </Row>
            <Row style={{ marginTop: '17px' }}>
                <div className="service-page-footer">{'* Color Services do not include blowout/style. Please add on "style w/ color service."'}</div>
            </Row>
            <Row style={{ marginTop: '5px' }}>
                <div className="service-page-price-disclaimer">{'Price can increase depending on client hair and density as well as product usage.'}</div>
            </Row>
            <Row style={{ marginTop: '5px' }}>
                <div className="service-page-price-disclaimer" style={{ fontSize: '70%' }}>{'*Price can be subjected to change at any time.*'}</div>
            </Row>
        </Container >
    )
};

export default ServicesPage;
