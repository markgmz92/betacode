import React from 'react';

function createCalendar(now, cache, generateBookings) {
    if (now == null) {
        now = moment()
    }
    let cached
    if (cache) {
        for (let item of cache) {
            if (item.year === now.year() && item.month === now.month()) {
                cached = item
            }
        }
    }
    const first = now.clone().startOf('month')
    const last = now.clone().endOf('month')
    const weeksCount = Math.ceil((first.day() + last.date()) / 7)
    const calendar = Object.assign([], { now, first, last })
    const randomNumbers = random(1, 28)
    if (cached) {
        if (generateBookings) {
            for (let week of cached) {
                for (let date of week) {
                    if (date.month() !== now.month()) {
                        continue
                    }
                    date.booked = false;
                    if (randomNumbers.includes(date.date())) {
                        date.booked = true
                    }
                }
            }
        }
        return cached
    } else {
        cache.push(calendar)
    }
    for (let weekNumber = 0; weekNumber < weeksCount; weekNumber++) {
        const week = []
        calendar.push(week)
        calendar.year = now.year()
        calendar.month = now.month()
        for (let day = 7 * weekNumber; day < (7 * (weekNumber + 1)); day++) {
            const date = now.clone().set('date', day + 1 - first.day())
            date.calendar = calendar
            if (generateBookings) {
                if (randomNumbers.includes(date.date())) {
                    date.booked = true
                }
            }
            week.push(date)
        }
    }
    return calendar


}

export default class createCalendar extends React.Component;