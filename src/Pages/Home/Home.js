import React from 'react'
import Hero from '../../Components/Hero/Carousel'
import Service from '../../Components/Hero/Service'
import Smart from '../../Components/Being Smart/Smart'
import Tactical from '../../Components/Tactical/Tactical'
import Short from '../../Components/Short About/Short'
import BookApp from '../../Components/Appointment/BookApp'

const Home = () => {
    return (
        <>
            {/* hero */}
            <Hero />
            <Service />
            <Smart />
            <Tactical />
            <Short />
            <BookApp />
        </>
    )
}

export default Home