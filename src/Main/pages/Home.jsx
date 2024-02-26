import React from 'react'
import Navbar from '../components/Common/Navbar'
import Panel from '../components/Common/Panel'
import Hero from '../components/Home/Hero'
import Gap from '../components/Common/Gap'

const Home = () => {
    return (
        <>
            <Panel text={"This website uses cookies"}/>
            <Navbar />
            <Hero/>
            <Gap/>
        </>
    )
}

export default Home