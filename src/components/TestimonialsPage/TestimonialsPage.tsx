import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ITestimonial, testimonials } from '../../data';
import './TestimonialsPage.scss';

const TestimonialsPage: FC = () => {
    return (
        <Container id="testimonialsPage-container" fluid="md" className="route-root" style={{ textAlign: 'center' }}>
            <Row style={{ marginTop: '17px' }}>
                <div id="clientThoughts-Header">Client Thoughts</div>
            </Row>
            <Row>
                <Col>
                    <div className="horizontal-divider"></div>
                </Col>
            </Row>
            <div id="testimonialsContainer">
                {testimonials.map((testimonial: ITestimonial) =>
                    <Row className="testimonial">
                        <div className="flexbox-row">
                            <div className="flexbox-col"><div className="parentheses">"</div></div>
                            <div className="quote-container">{testimonial.testimonial}</div>
                            <div className="parentheses">"</div>
                        </div>
                        <div>{'- '}{testimonial.credit}</div>
                    </Row>
                )}
            </div>
        </Container>
    )
};

export default TestimonialsPage;