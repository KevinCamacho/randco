import React from 'react';
import './ProductsPage.scss';
import Container from 'react-bootstrap/Container';
import productsData from '../../data/products.json';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductView from './Product/ProductView';

const ProductsPage = () => {
    const mainImage = require(`../../images/${productsData.heroImage}`);
    return (
        <Container fluid="md" className="route-root" style={{ textAlign: 'center' }}>
            <LazyLoadImage id="productsPage_mainImage" src={mainImage} effect="blur" />
            <Row style={{ marginTop: '17px' }}>
                <div>{productsData.heroText}</div>
            </Row>
            <Row>
                <Col>
                    <div className="horizontal-divider"></div>
                </Col>
            </Row>
            <div id="productContainer">
                {productsData.items.map((product, index) =>
                    <ProductView key={product.name} product={product} index={index} />
                )}
            </div>
        </Container>
    )
};

export default ProductsPage;