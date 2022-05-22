import React from 'react';
import './ProductsPage.scss';
import Container from 'react-bootstrap/Container';
import productsData from '../../data/products.json';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ProductsPage = () => {
    const mainImage = require(`../../images/${productsData.heroImage}`);
    return (
        <Container fluid="md" className="route-root" style={{ textAlign: 'center' }}>
            <LazyLoadImage id="productsPage_mainImage" src={mainImage} effect="blur" />
        </Container>
    )
};

export default ProductsPage;