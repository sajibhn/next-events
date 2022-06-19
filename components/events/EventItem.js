import Link from 'next/link'
import React from 'react'
import Button from '../ui/Button';
import classes from './event-item.module.css'
import DateIcon from '../icons/icons/date-icon'
import AddressIcon from '../icons/icons/address-icon'
import ArrowIcon from '../icons/icons/arrow-right-icon'

const EventItem = ({ title, image, date, location, id }) => {

    const formattedAddress = location.replace(',', '\n');
    const exploreLink = `/events/${id}`
    return (
        <li className={classes.item}>
            <img src={'/' + image} />
            <div className={classes.content}>
                <div className={classes.summary}>
                    <h2>{title}</h2>
                    <div>
                        <div className={classes.date}>
                            <DateIcon />
                            <time>{date}</time>
                        </div>
                        <div className={classes.address}>
                            <AddressIcon />
                            <address>{formattedAddress}</address>
                        </div>
                    </div>

                </div>
                <div className={classes.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={classes.icon}><ArrowIcon /></span>
                    </Button>
                </div>
            </div>

        </li>
    )
}

export default EventItem