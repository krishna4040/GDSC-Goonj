import React from 'react'
import Heading from './Heading'
import events from '../../assets/events.svg'

const PreviousEvents = () => {
    return (
        <section>
            <Heading text={"Previous Events"} />
            <div className='w-11/12 p-20 mx-auto'>
                <img src={events} alt="events" />
            </div>
        </section>
    )
}

export default PreviousEvents