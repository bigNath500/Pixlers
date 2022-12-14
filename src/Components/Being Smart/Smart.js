import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import * as aiIcons from 'react-icons/ai'
import MapImg from '../../assets/Images/h1-single-img-1.png'

const Smart = () => {
    return (
        <>
            <Container className='mt-5 pt-5 pb-5 mb-5'>
                <Row>
                    <Col md={5}>
                        <div className='main_smart'>
                            <h1 className='fw-bold'>Being Smart</h1>

                            <p className='text-muted mt-4 small'>
                                Creating unique designs for our clients is our main priority that's why we use designers and developers that are smart at creating ideas that are unique and fits your expectations and aim.
                            </p>

                            <Button variant='info' className='mt-4 text-dark d-flex align-items-center'><aiIcons.AiOutlinePlus className='me-2 text-dark' /> Discover</Button>
                        </div>
                    </Col>

                    <Col md={7}>
                        <div className='pt-3'>
                            <img src={MapImg} width="100%" alt="map svg" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Smart