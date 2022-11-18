import React from 'react';
import './HomePage.scss';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import carouselData from '../data/carousel.json';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const HomePage = ({ isMobile }) => {
    const navigate = useNavigate();

    const handleCarouselImageClick = carouselItem => {
        if (carouselItem.navigate) {
            navigate(carouselItem.navigate);
        } else if (carouselItem.redirect) {
            window.open(carouselItem.redirect);
        }
    };

    return (
        <Container fluid="md" className="route-root" style={{ textAlign: 'center' }}>
            <Carousel pause="hover">
                {carouselData.map((carouselItem) => {
                    const imageName = isMobile ? carouselItem.mobileImage : carouselItem.desktopImage;
                    const carouselImage = require(`../images/${imageName}`);
                    return (
                        <Carousel.Item className="cursor-pointer" onClick={() => handleCarouselImageClick(carouselItem)}>
                            <LazyLoadImage className="carousel-image" src={carouselImage} alt={carouselItem.altText} effect="blur" />
                            <Carousel.Caption>
                                <h3 className="white-text-black-border">{carouselItem.text}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>)
                })}
            </Carousel>
        </Container>
    )
};

export default HomePage;