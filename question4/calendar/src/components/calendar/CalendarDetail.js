const CalendarDetail = props => {
    return (
        <div className="calendar">
          <div className="month">
            <h3 className="d-flex justify-content-between">
              <button className="btn btn-secondary mr-1" onClick={() => props.onChangeMonth(-1)}>&lt;</button>
              {props.calendar.now.format('MMMM YYYY').toUpperCase()}
              <button className="btn btn-secondary ml-1" onClick={() => props.onChangeMonth(1)}>&gt;</button>
            </h3>
            {
              ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'].map(date => <button className="date title">{date}</button>)
            }
            {
              props.calendar.map(week =>
                <div>
                  {week.map(date => <CalendarDate date={date} now={props.calendar.now} onClick={() => props.onBooking(date)} />)}
                </div>
              )
            }
            <button className="btn btn-primary mt-5" onClick={() => props.onGenerateBookings()}>Generate Several Booking</button>
          </div>
        </div>
    );
};

export default CalendarDetail;