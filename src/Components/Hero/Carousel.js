import React from 'react';
import { Button } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import * as aiIcons from 'react-icons/ai'
import './Carousel.scss'

function CarouselFadeExample() {
    return (
        <Carousel fade>
            <Carousel.Item className='slider_content slider_1'>
                <Carousel.Caption>
                    <h1 className='text-light'>Beign <span className='text-info'>Smart</span> Is Our Game</h1>
                    <p className='fs-3'>Flox is a stunning agency for all types of creative designs.</p>

                    <div className='mt-4'>
                        <div className='d-flex justify-content-center'>
                            <Button variant='warning' className='me-3 btn-lg d-flex align-items-center'><aiIcons.AiOutlinePlus className='me-2' /> Discover</Button>
                            <Button variant='outline-light' className='btn-lg'>Get Started</Button>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className='slider_content slider_2'>
                <Carousel.Caption>
                    <h1 className='text-light'>Aspiring Force In <span className='text-info'>Design</span></h1>
                    <p className='fs-3'>Packed with variety of designs and ideas for our clients.</p>

                    <div className='mt-4'>
                        <div className='d-flex justify-content-center'>
                            <Button variant='warning' className='me-3 btn-lg d-flex align-items-center'><aiIcons.AiOutlinePlus className='me-2' /> Discover</Button>
                            <Button variant='outline-light' className='btn-lg'>Get Started</Button>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselFadeExample;