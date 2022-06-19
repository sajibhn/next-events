import React from 'react'
import { getAllEvents } from '../../dummy-data'
import EventList from '../../components/events/EventList'

const index = () => {
    const events = getAllEvents();
    return (
        <div>
            <EventList items={events} />
        </div>
    )
}

export default index