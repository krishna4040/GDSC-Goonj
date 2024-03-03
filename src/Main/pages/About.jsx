import React from 'react'
import Panel from '../components/Common/Panel'
import Navbar from '../components/Common/Navbar'
import Hero from '../components/Common/Hero'
import Heading from '../components/Home/Heading'
import Gap from '../components/Common/Gap'
import Footer from '../components/Common/Footer'

const About = () => {
    return (
        <>
            <Panel text={"This site uses cookies to deliver its service and analyze traffic."} />
            <Navbar />
            <Hero>
                <div className='flex flex-col gap-3 mb-5 mt-28'>
                    <Heading text={"Google Developer Student Clubs"} />
                    <div className='w-[900px] mx-auto text-center text-xl'>
                        Google Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.
                    </div>
                </div>
            </Hero>
            <Gap height={2.75} />
            <Footer />
        </>
    )
}

export default About