import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ITestimonial, testimonials } from '../../data';
import './TestimonialsPage.scss';
import { shuffleArray } from '../../util/shuffle';

const TestimonialsPage: FC = () => {
    const testominalShuffled = JSON.parse(JSON.stringify(testimonials));
    shuffleArray(testominalShuffled);

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
                {testominalShuffled.map((testimonial: ITestimonial) =>
                    <div className="testimonial">
                        <div className="parentheses">"</div>
                        <Row>
                            <div className="flexbox-row">
                                <div className="quote-container">{testimonial.testimonial}</div>
                            </div>
                            <div>{'- '}{testimonial.credit}</div>
                        </Row>
                    </div>
                )}
            </div>
        </Container>
    )
};

export default TestimonialsPage;