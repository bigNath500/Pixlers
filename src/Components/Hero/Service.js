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
                        <div className='bg-warning pt-5 pb-5 ps-4 pe-4 text-dark'>
                            <h3>Branding</h3>

                            <p className='mt-3'>
                                Lorem ipsum dolor sit amet adipiscing elit. Aenean commodo ligula eget dolor.
                            </p>

                            <Link to="/case_study" className='text-dark fs-6'>Learn More</Link>
                        </div>
                    </Col>

                    <Col md={4} className="p-0">
                        <div className='bg-light ps-4 pe-4 pb-5 pt-5'>
                            <h3>Designing</h3>

                            <p className='mt-3'>
                                Lorem ipsum dolor sit amet adipiscing elit. Aenean commodo ligula eget dolor.
                            </p>

                            <Link to="/case_study" className='text-dark fs-6'>Learn More</Link>
                        </div>
                    </Col>

                    <Col md={4} className="p-0">
                        <div className='bg-info text-white ps-4 pe-4 pb-5 pt-5'>
                            <h3>Printing</h3>

                            <p className='mt-3'>
                                Lorem ipsum dolor sit amet adipiscing elit. Aenean commodo ligula eget dolor.
                            </p>

                            <Link to="/case_study" className='text-white fs-6'>Learn More</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Service