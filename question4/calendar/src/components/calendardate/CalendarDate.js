const CalendarDate = props => {
    const { date, now } = props
    let className = date.booked ? 'booked' : '';
    if (date.month() < now.month()) {
        return (<button
          disabled={true}
          className={`${className} date prev-month`}
          onClick={props.onClick}>
          {date.date()}
        </button>)
    }
    if (date.month() > now.month()) {
        return (<button
          disabled={true}
          className={`${className} date next-month`}
          onClick={props.onClick}>
          {date.date()}
        </button>)
    }
    return (<button
        disabled={date.booked}
        className={`${className} date ${date.booked ? 'booked' : ''}`}
        onClick={props.onClick}>
        {date.date()}
      </button>)
}

export default CalendarDate;