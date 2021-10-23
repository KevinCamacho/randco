import React from 'react';
import './StylistView.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Stylist = ({ stylist, index }) => {
    const isEvenStylist = index % 2 === 0;
    return (
        <Row>
            <Col xs={{ order: 'last' }} md={{ order: 'first' }}>
                <Row>
                    <div className="person-name">{stylist.name}</div>
                    <div style={{ marginTop: '17px' }}>{stylist.flavorText}</div>
                </Row>
            </Col>
            {/*
            <Col xs={{ span: 12, order: 'last' }} md={{ span: 6, order: 'first' }}>
            */}
            <Col className="flexbox-col" style={{ justifyContent: 'center' }} xs={{ order: 'first' }} md={{ order: 'last' }}>
                <img className="stylist-image" src={require(`../../../images/${stylist.image}`).default} />
            </Col>
        </Row>
    )
}

export default Stylist;