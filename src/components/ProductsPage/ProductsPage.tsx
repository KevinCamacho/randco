import React, { FC } from 'react';
import './ProductsPage.scss';
import Container from 'react-bootstrap/Container';
import { products } from '../../data';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProductView from './Product/ProductView';

const ProductsPage: FC = () => {
    const mainImage = require(`../../images/ProductsPage/${products.heroImage}`);
    return (
        <Container id="productsPage-container" fluid="md" className="route-root" style={{ textAlign: 'center' }}>
            <LazyLoadImage id="productsPage_mainImage" src={mainImage} effect="blur" />
            <Row style={{ marginTop: '17px' }}>
                <div>{products.heroText}</div>
            </Row>
            <Row>
                <Col>
                    <div className="horizontal-divider"></div>
                </Col>
            </Row>
            <div id="productContainer">
                {products.items.map((product, index) =>
                    <ProductView key={product.productName} product={product} index={index} />
                )}
            </div>
        </Container>
    )
};

export default ProductsPage;