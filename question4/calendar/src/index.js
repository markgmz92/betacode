import React from 'react';
import ReactDOM from 'react-dom';

import Booking from './components/booking';
import CalendarDetail from './components/calendardetail';
import CalendarDate from './components/calendardate';
import CreateCalendar from './components/createcalendar';
import Random from './components/random';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.cache = []
        this.state = {
            Calendar: createCalendar(null, this.cache)
        }
        this.changeMonth = this.changeMonth.bind(this)
        this.booking = this.booking.bind(this)
        this.generateBookings = this.generateBookings.bind(this)
    }
    changeMonth(value) {
        this.setState({ alendar: createCalendar(this.state.calendar.now.add(value, 'months'), this.cache) })
    }
    booking(date) {
        this.setState({ calendar: booking(date) })
    }
    generateBookings() {
        this.setState({ calendar: createCalendar(this.state.calendar.now, this.cache, true) })
    }
    render() {
        return (
            <div className="container my-5">
            <div className="row">
              <div className="col-12 col-md-8 offset-md-2 p-0">
                <Calendar
                  calendar={this.state.calendar}
                  onChangeMonth={this.changeMonth}
                  onBooking={this.booking}
                  onGenerateBookings={this.generateBookings} />
              </div>
            </div>
          </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));