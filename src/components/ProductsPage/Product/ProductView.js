import React from 'react';
import './ProductView.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductView = ({ product, index }) => {
    const isEvenProduct = index % 2 === 0;

    const productImage = require(`../../../images/${product.productImage}`)
    return (
        <Row className="product-view">
            <Col xs={{ span: 12, order: 'last' }} md={{ span: 6, order: isEvenProduct ? 'first' : 'last' }}>
                <Row>
                    {/* <Col>
                        <div className="person-name">{stylist.name}</div>
                    </Col>
                    <Col xs="auto">
                        <div className="flexbox-row social-logo-container">
                            {stylist.facebook && <img className="facebook-logo" src={facebookIcon} alt="facebook" onClick={() => window.open(stylist.facebook)} />}
                            {stylist.instagram && <img style={{ marginLeft: '17px' }} className="insta-logo" src={instaIcon} alt="instagram" onClick={() => window.open(stylist.instagram)} />}
                        </div>
                    </Col>
                    <div style={{ marginTop: '17px' }}>
                        {stylist.flavorText.split('\n').map(text => <div>{text}</div>)}
                    </div> */}
                </Row>
            </Col>
            <Col className="flexbox-col" xs={{ span: 12, order: 'first' }} md={{ span: 6, order: isEvenProduct ? 'last' : 'first' }}>
                <LazyLoadImage className="stylist-image" src={productImage} alt={product.productName} effect="blur" />
            </Col>
        </Row>
    )
};

export default ProductView;