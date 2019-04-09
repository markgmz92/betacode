function booking(date) {
    date.booked = true;
    let c = _.cloneDeep(date.calendar)
    return Object.assign(c, {
        now: _.clone(date.calendar.now),
        first: _.clone(date.calendar.first),
        last: _.clone(date.calendar.last),
    })
}


export default booking;