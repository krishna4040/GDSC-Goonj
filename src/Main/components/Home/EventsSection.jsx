import React from 'react'
import { events } from '../../data/events'
import Card from './Card'

const EventsSection = () => {
    return (
        <section>
            <h1 className='p-4 mt-4 text-5xl font-bold text-center text-black'>Upcoming events for you</h1>
            <div className='flex flex-col items-center justify-center gap-5'>
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