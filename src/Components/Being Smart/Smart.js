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
                        <div>
                            <h1 className='fw-bold'>Being Smart</h1>

                            <p className='text-muted mt-4 small'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero sem neque sed ipsum.
                            </p>

                            <Button variant='info' className='mt-4 text-white d-flex align-items-center'><aiIcons.AiOutlinePlus className='me-2' /> Discover</Button>
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