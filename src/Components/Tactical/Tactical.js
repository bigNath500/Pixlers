import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Idea from '../../assets/Images/idea.jpg'
import TeamWork from '../../assets/Images/team_work.jpg'
import Creative from '../../assets/Images/creativity.jpg'
import Pricing from '../../assets/Images/pricing.jpg'
import Communicate from '../../assets/Images/communication.jpg'
import World from '../../assets/Images/world.jpg'
import { Link } from 'react-router-dom'

const Tactical = () => {
    return (
        <>
            <Container className='mt-5 pt-5'>
                <Row>
                    <Col md={4}>
                        <div>
                            <img src={Idea} width="100%" alt="qualities pic" />
                        </div>
                    </Col>

                    <Col md={4}>
                        <Row>
                            <Col className='p-0' md={12}>
                                <img src={TeamWork} width="100%" alt='team work pic' />
                            </Col>

                            <Col className='p-0' md={12}>
                                <div className='bg-light p-5 text-center'>
                                    <h4 className='fw-bold'>BEST OF <span className='text-info'>OUR QAULITIES</span></h4>

                                    <p className='mt-4 text-muted small'>
                                        Lorem ipsum dolor sit amet adipiscing elit. Aenean commodo ligula eget dolor.
                                    </p>

                                    <div className='mt-4'>
                                        <Link to="reviews" className='text-dark'>View More</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={4}>
                        <div>
                            <img src={Creative} width="100%" alt="qualities pic" />
                        </div>
                    </Col>

                    <Col md={4}>
                        <div>
                            <img src={Pricing} width="100%" alt="qualities pic" />
                        </div>
                    </Col>

                    <Col md={4} className="p-0">
                        <div>
                            <img src={Communicate} width="100%" alt="qualities pic" />
                        </div>
                    </Col>

                    <Col md={4}>
                        <div>
                            <img src={World} width="100%" alt="qualities pic" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Tactical