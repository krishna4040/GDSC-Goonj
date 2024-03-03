import React from 'react'
import Navbar from '../components/Common/Navbar'
import Panel from '../components/Common/Panel'
import Hero from '../components/Common/Hero'
import Gap from '../components/Common/Gap'
import EventsSection from '../components/Home/EventsSection'
import PreviousEvents from '../components/Home/PreviousEvents'
import Footer from '../components/Common/Footer'

import GOONJ from '../assets/GOONJ.svg'
import Cross from '../assets/cross.svg'
import GDSC from '../assets/GDSC.svg'

const Home = () => {
    return (
        <>
            <Panel text={"GDSC Google developer student clubs"} />
            <Navbar />
            <Hero text={"13, 14 and 15 March"}>
                <div className='flex items-center justify-center gap-3 lg:gap-28 mt-28'>
                    <img src={GDSC} alt="GDSC" height={100} width={200} />
                    <img src={Cross} alt="Cross" height={50} width={50} />
                    <img src={GOONJ} alt="GOONJ" height={150} width={200} />
                </div>
            </Hero>
            <Gap height={2.75} />
            <EventsSection />
            <Gap height={2.75} />
            <PreviousEvents />
            <Gap height={2.75} />
            <Footer />
        </>
    )
}

export default Home