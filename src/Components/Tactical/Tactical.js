import React from 'react'
import './Tactical.scss'
import { Button, Col, Container, Row } from 'react-bootstrap'

const Tactical = () => {
    return (
        <>
            <section className='tactical_section pt-5 pb-5'>
                <Container>
                    <Row>
                        <Col md={6}>
                        </Col>

                        <Col md={6}>
                            <div className='bg-white p-5 shadow'>
                                <h2 className='fw-bold'>GET TO KNOW <br /> <span className='text-info'>THE BEST OF US</span></h2>

                                <p className='mt-4 text-muted'>
                                    Want to know who you're working with why not get to know our team and possibly communicate with them.
                                </p>

                                <div className='mt-4'>
                                    <Button variant='warning' className='btn d-flex align-items-center'>
                                        View More
                                    </Button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Tactical