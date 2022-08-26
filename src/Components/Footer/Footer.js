import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as aiIcons from 'react-icons/ai'

const Footer = () => {
    return (
        <>
            <footer className='bg-dark pt-5 pb-5'>
                <Container>
                    <Row>
                        <Col md={3}>
                            <div>
                                <h5 className='text-white text-uppercase fw-bold'>About Us</h5>

                                <p className='mt-3 text-white small'>
                                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                                </p>

                                <div className='mt-3'>
                                    <a href='www.facebook.com' className='me-3 text-white text-decoration-none fs-3'>
                                        <aiIcons.AiFillFacebook />
                                    </a>

                                    <a href='www.facebook.com' className='me-3 text-white text-decoration-none fs-3'>
                                        <aiIcons.AiFillTwitterSquare />
                                    </a>      

                                    <a href='www.facebook.com' className='me-3 text-white text-decoration-none fs-3'>
                                        <aiIcons.AiFillInstagram />
                                    </a>  

                                    <a href='www.facebook.com' className='me-3 text-white text-decoration-none fs-3'>
                                        <aiIcons.AiFillLinkedin />
                                    </a>     

                                    <a href='www.facebook.com' className='me-3 text-white text-decoration-none fs-3'>
                                        <aiIcons.AiFillDribbbleSquare />
                                    </a>     
                                </div>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div>
                                <h5 className='text-white text-uppercase fw-bold'>Twitter</h5>

                                <div className='d-flex bd-highlight mt-3'>
                                    <div className='text-info'>
                                        <aiIcons.AiOutlineTwitter className='fs-3' />
                                    </div>

                                    <div className='text-white ms-2 bd-highlight'>
                                        <a className='text-info me-1 text-decoration-none' href='https://twitter.com/Nathanjoe_Git'>
                                            @Nathanjoe_Git
                                        </a>

                                        Hey, please DM us so we can provide more details. Thanks!
                                    </div>
                                </div>

                                <div className='d-flex bd-highlight mt-3'>
                                    <div className='text-info'>
                                        <aiIcons.AiOutlineTwitter className='fs-3' />
                                    </div>

                                    <div className='text-white ms-2 bd-highlight small'>
                                        <a className='text-info me-1 text-decoration-none' href='https://twitter.com/Nathanjoe_Git'>
                                            @Nathanjoe_Git
                                        </a>

                                        Follow us to get updates on new projects design ideas and more.
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div className='text-center'>
                                <h5 className='text-white text-uppercase fw-bold'>Need Help</h5>

                                <div className='mt-3'>
                                    <div className='mb-2'>
                                        <Link className='footer_quick_link text-white' to="/about">
                                            Story About Us
                                        </Link>
                                    </div>

                                    <div className='mb-2'>
                                        <Link className='footer_quick_link text-white' to="/about">
                                            Keep in Touch
                                        </Link>
                                    </div>

                                    <div className='mb-2'>
                                        <Link className='footer_quick_link text-white' to="/about">
                                            See Our Portfolio
                                        </Link>
                                    </div>

                                    <div className='mb-2'>
                                        <Link className='footer_quick_link text-white' to="/about">
                                            Send a mail
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col md={3}>
                            <div>
                                <h5 className='text-white text-uppercase fw-bold'>Contact</h5>

                                <div className='mt-3'>
                                    <div className='mb-1'>
                                        <a href='www.google.com' className='text-white text-decoration-none'>
                                            FCT Abuja, Nigeria
                                        </a>
                                    </div>

                                    <div className='mb-1'>
                                        <a href='tel:+234 9120957649' className='text-white text-decoration-none'>
                                            +234 9120957649
                                        </a>
                                    </div>

                                    <div>
                                        <a href='mailto: nathanjoe.git@gmail.com' className='text-white text-decoration-none'>
                                            nathanjoe.git@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>

                    <div className='mt-4 border-secondary border-top text-center text-muted pt-3'>
                        &Copy; 2022, All Rights Reserved.
                    </div>
                </Container>
            </footer>
        </>
    )
}

export default Footer