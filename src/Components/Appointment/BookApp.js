import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import './BookApp.scss'

const BookApp = () => {
    return (
        <>
            <section className='app_sect pt-5 pb-5'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <div className='bg-white shadow p-5'>
                                <h2 className='fw-bold text-uppercase'>Book An <br /> <span className='text-info'>Appointment Today</span></h2>

                                <p className='mt-4 text-muted'>
                                    Interested in collaborating with us? Why not book an appointment today to get the best of our designers and developers working for you.
                                </p>

                                <div className='mt-4'>
                                    <Button variant='warning' className='d-flex align-items-center'>
                                        Book Now
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

export default BookApp