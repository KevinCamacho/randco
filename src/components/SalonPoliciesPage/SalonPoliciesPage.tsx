import React, { FC } from 'react';
import './SalonPoliciesPage.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import hero from '../../images/AboutUsPage/hero.jpg';
import { salonPolicies } from '../../data';

const SalonPoliciesPage: FC = () => {
    return (
        <Container id="salonPoliciesPage-container" fluid="md" className="route-root" style={{ textAlign: 'center' }}>
            <LazyLoadImage id="salonPoliciesPage_mainImage" src={hero} effect="blur" />
            <Row style={{ marginTop: '17px' }}>
                <div id="salonPoliciesPage-title">{salonPolicies.title}</div>
            </Row>
            {salonPolicies.sections.map(section => (
                <Row key={section.title} style={{ marginTop: '17px', textAlign: 'left' }}>
                    <div className="policy-section">
                        <div className="policy-title">{section.title}</div>
                        <div className="policy-content">{section.content.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}</div>
                    </div>
                </Row>
            ))}
        </Container>
    )
};

export default SalonPoliciesPage;
