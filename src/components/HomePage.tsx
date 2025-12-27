import React, { FC } from 'react';
import './HomePage.scss';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';
import { ICarousel, carouselData } from '../data';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { InstagramEmbed } from 'react-social-media-embed';
import { instagram } from '../data';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const HomePage: FC<{ isMobile: boolean }> = ({ isMobile }) => {
    const navigate = useNavigate();

    const handleCarouselImageClick = (carouselItem: ICarousel) => {
        if (carouselItem.navigate) {
            navigate(carouselItem.navigate);
        } else if (carouselItem.redirect) {
            window.open(carouselItem.redirect);
        }
    };

    return (
        <Container fluid="md" className="route-root" style={{ textAlign: 'center' }}>
            <Row>
                {/* <Col xs={{ span: 12, order: 'last' }} md={4}>
                    <Carousel pause="hover">
                        {instagram.map((url: string) => {
                            return (
                                <Carousel.Item>
                                    <InstagramEmbed url={url} />
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                </Col> */}
                <Col xs={{ span: 12, order: 'first' }} md={12}>
                    <Carousel pause="hover">
                        {carouselData.map((carouselItem) => {
                            const imageName = isMobile ? carouselItem.mobileImage : carouselItem.desktopImage;
                            const carouselImage = require(`../images/carousel/${imageName}`);
                            return (
                                <Carousel.Item className="cursor-pointer" onClick={() => handleCarouselImageClick(carouselItem)}>
                                    <LazyLoadImage className="carousel-image" src={carouselImage} alt={carouselItem.altText} effect="blur" />
                                    <Carousel.Caption>
                                        <h3 className="white-text-black-border">{carouselItem.text}</h3>
                                    </Carousel.Caption>
                                </Carousel.Item>)
                        })}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
};

export default HomePage;