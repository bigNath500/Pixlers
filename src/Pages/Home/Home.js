import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Carousel'
import Service from '../../Components/Hero/Service'

const Home = () => {
    return (
        <>
            {/* navbar comp */}
            <Navbar />

            {/* hero */}
            <Hero />
            <Service />
        </>
    )
}

export default Home