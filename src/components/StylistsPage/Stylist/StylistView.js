import React from 'react';
import './StylistView.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Stylist = ({ stylist, index }) => {
    const isEvenStylist = index % 2 === 0;
    return (
        <Row className="stylist-view">
            <Col xs={{ span: 12, order: 'last' }} md={{ span: 6, order: isEvenStylist ? 'first' : 'last' }}>
                <Row>
                    <div className="person-name">{stylist.name}</div>
                    <div style={{ marginTop: '17px' }}>{stylist.flavorText}</div>
                </Row>
            </Col>
            <Col className="flexbox-col" xs={{ span: 12, order: 'first' }} md={{ span: 6, order: isEvenStylist ? 'last' : 'first' }}>
                <LazyLoadImage className="stylist-image" src={require(`../../../images/${stylist.image}`).default} effect="blur" />
            </Col>
        </Row>
    )
}

export default Stylist;