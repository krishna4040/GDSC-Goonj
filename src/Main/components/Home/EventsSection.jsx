import React from 'react'
import { events } from '../../data/events'
import Card from './Card'
import Heading from './Heading'

const EventsSection = () => {
    return (
        <section id='upcoming-events'>
            <Heading text={"Upcoming events for you"} />
            <div className='flex flex-col items-center justify-center gap-5 mx-auto'>
                {
                    events.map(event => <Card
                        description={event.desc}
                        image={event.image}
                        title={event.title}
                        key={event.id}
                    />)
                }
            </div>
        </section>
    )
}

export default EventsSection