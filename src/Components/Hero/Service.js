import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Service.scss'

const Service = () => {
    return (
        <>
            <Container className='service_container'>
                <Row className='service_row'>
                    <Col md={4} className="p-0">
                        <div className='bg-warning p-5 text-dark'>
                            <h3>Logo Design</h3>

                            <p className='mt-4'>
                                Creating & Designing beautiful / unique logos for startups.
                            </p>

                            <div className='mt-5'>
                                <Link to="/case_study" className='text-dark fw-bold fs-6'>Learn More</Link>
                            </div>
                        </div>
                    </Col>

                    <Col md={4} className="p-0">
                        <div className='bg-light p-5'>
                            <h3>Graphics Designing</h3>

                            <p className='mt-4'>
                                We create flyers, banners, complimentary cards and many more.
                            </p>

                            <div className='mt-5'>
                                <Link to="/case_study" className='text-dark fw-bold fs-6'>Learn More</Link>
                            </div>
                        </div>
                    </Col>

                    <Col md={4} className="p-0">
                        <div className='bg-info text-dark p-5'>
                            <h3>Web Developement</h3>

                            <p className='mt-4'>
                                We design and develope websites that use mordern technologies.
                            </p>

                            <div className='mt-5'>
                                <Link to="/case_study" className='text-dark fw-bold fs-6'>Learn More</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Service