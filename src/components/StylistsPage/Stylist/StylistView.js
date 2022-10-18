import React from 'react';
import './StylistView.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import facebookIcon from '../../../images/socials/fb_logo.png';
import instaIcon from '../../../images/socials/insta_logo.png';

const Stylist = ({ stylist, index }) => {

    const stylistImage = require(`../../../images/StylistsPage/${stylist.image}`);

    const isEvenStylist = index % 2 === 0;
    return (
        <Row className="stylist-view">
            <Col xs={{ span: 12, order: 'last' }} md={{ span: 6, order: isEvenStylist ? 'first' : 'last' }}>
                <Row>
                    <Col>
                        <div className="person-name stylist-name">{stylist.name}</div>
                    </Col>
                    <Col xs="auto">
                        <div className="flexbox-row social-logo-container">
                            {stylist.facebook && <img className="facebook-logo" src={facebookIcon} alt="facebook" onClick={() => window.open(stylist.facebook)} />}
                            {stylist.instagram && <img style={{ marginLeft: '17px' }} className="insta-logo" src={instaIcon} alt="instagram" onClick={() => window.open(stylist.instagram)} />}
                        </div>
                    </Col>
                    <div className="flavor-text">
                        {stylist.flavorText.split('\n').map(text => <div>{text}</div>)}
                    </div>
                </Row>
            </Col>
            <Col xs={{ span: 12, order: 'first' }} md={{ span: 6, order: isEvenStylist ? 'last' : 'first' }}>
                <LazyLoadImage className="stylist-image" src={stylistImage} alt={stylist.name} effect="blur" />
            </Col>
        </Row>
    )
}

export default Stylist;