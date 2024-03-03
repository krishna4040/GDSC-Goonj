import React from 'react'
import Panel from '../components/Common/Panel'
import Navbar from '../components/Common/Navbar'
import Hero from '../components/Common/Hero'
import Heading from '../components/Home/Heading'
import Gap from '../components/Common/Gap'

const About = () => {
    return (
        <>
            <Panel text={"This site uses cookies to deliver its service and analyze traffic."} />
            <Navbar />
            <Hero text={"USER"}>
                <div className='flex flex-col gap-3 mb-5 mt-28'>
                    <Heading text={"Google Developer Student Clubs"} />
                    <div className='w-[900px] mx-auto text-center text-xl'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eos expedita numquam eligendi natus error labore! Nisi numquam illum cupiditate obcaecati mollitia qui voluptatem sint. Repellat facilis ex quisquam accusantium dolorum tenetur eius non alias laudantium blanditiis est voluptates dolore officia doloremque perspiciatis, facere perferendis, autem rerum provident impedit nulla!
                    </div>
                </div>
            </Hero>
            <Gap height={2.75} />
        </>
    )
}

export default About