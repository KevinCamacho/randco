import React from 'react';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import carouselData from '../data/carousel.json';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <Container fluid="md" className="route-root" style={{ textAlign: 'center' }}>
            <Carousel pause="hover">
                {carouselData.map((carouselItem) => {
                    const carouselImage = require(`../images/${carouselItem.image}`);
                    return (
                        <Carousel.Item className="cursor-pointer" onClick={() => navigate(carouselItem.navigate)}>
                            <img
                                className="d-block w-100"
                                src={carouselImage}
                                alt={carouselItem.altText}
                            />
                            <Carousel.Caption>
                                <h3>{carouselItem.text}</h3>
                            </Carousel.Caption>
                        </Carousel.Item>)
                })}
            </Carousel>
        </Container>
    )
};

export default HomePage;