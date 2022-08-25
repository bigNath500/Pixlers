import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import ProgressBar from '../Progress Bar/ProgressBar'

const Short = () => {
    return (
        <>
            <Container className='mt-5 mb-5 pt-5 pb-5'>
                <Row>
                    <Col md={5}>
                        <div>
                            <h1 className='fw-bold'>Who We Are.</h1>

                            <p className='mt-4 text-muted small'>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis Theme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam rhoncus.
                            </p>

                            <div className='mt-4'>
                                <Button variant='info' className='text-dark d-flex align-items-center'>
                                    About Us
                                </Button>
                            </div>
                        </div>
                    </Col>

                    <Col md={7}>
                        <ProgressBar
                            Label={"Logo Design"}
                            Value={"70%"}
                            barVal={70}
                            bgColor={"info"}
                        />

                        <ProgressBar
                            Label={"Website Design"}
                            Value={"90%"}
                            barVal={90}
                            bgColor={"warning"}
                        />

                        <ProgressBar
                            Label={"Graphics Design"}
                            Value={"95%"}
                            barVal={95}
                            bgColor={"dark"}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Short