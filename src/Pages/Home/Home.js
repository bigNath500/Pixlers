import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Carousel'
import Service from '../../Components/Hero/Service'
import Smart from '../../Components/Being Smart/Smart'

const Home = () => {
    return (
        <>
            {/* navbar comp */}
            <Navbar />

            {/* hero */}
            <Hero />
            <Service />
            <Smart />
        </>
    )
}

export default Home