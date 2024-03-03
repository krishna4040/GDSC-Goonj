import React from 'react'
import Navbar from '../components/Common/Navbar'
import Panel from '../components/Common/Panel'
import Hero from '../components/Home/Hero'
import Gap from '../components/Common/Gap'
import EventsSection from '../components/Home/EventsSection'
import PreviousEvents from '../components/Home/PreviousEvents'

const Home = () => {
    return (
        <>
            <Panel text={"GDSC Google developer student clubs"}/>
            <Navbar />
            <Hero />
            <Gap height={2.75} />
            <EventsSection />
            <Gap height={2.75} />
            <PreviousEvents />
            <Gap height={2.75} />
        </>
    )
}

export default Home