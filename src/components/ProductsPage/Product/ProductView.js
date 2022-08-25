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
                    <Col>
                        <div className="product-name"><a className="color-corrected-link" href={product.productLink} target="_blank" rel="noopener noreferrer" >{product.productName}</a></div>
                    </Col>
                    <div style={{ marginTop: '17px' }}>
                        {product.productDescription.split('\n').map(text => <div>{text}</div>)}
                    </div>
                </Row>
            </Col>
            <Col className="flexbox-col" xs={{ span: 12, order: 'first' }} md={{ span: 6, order: isEvenProduct ? 'last' : 'first' }}>
                <LazyLoadImage className="stylist-image" src={productImage} alt={product.productName} effect="blur" />
            </Col>
        </Row>
    )
};

export default ProductView;