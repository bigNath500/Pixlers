import React from 'react'
import { Container } from 'react-bootstrap'
import * as riIcons from 'react-icons/ri'

const Socials = () => {
    return (
        <>
            <section className='bg-light pt-4 pb-4'>
                <Container className='d-flex justify-content-center align-item-center'>
                    <div>
                        <a href="www.facebook.com" className='text-muted me-3 text-decoration-none fs-1'>
                            <riIcons.RiFacebookCircleLine />
                        </a>

                        <a href="www.facebook.com" className='text-muted text-decoration-none fs-1'>
                            <riIcons.RiTwitterLine />
                        </a>
                    </div>
                </Container>
            </section>
        </>
    )
}

export default Socials