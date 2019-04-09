import React from 'react'
import ReactDOM from 'react-dom'

import Booking from './components/Booking'
import Calendar from './components/Calendar'
import CalendarDate from './components/CalendarDate'
import CreateCalendar from './components/CreateCalendar'

import './app.css'


class App extends React.Component {
    constructor(props) {
        super(props)
        this.cache = []
        this.state = {
            calendar: CreateCalendar(null, this.cache)
        }
        this.changeMonth = this.changeMonth.bind(this)
        this.Booking = this.Booking.bind(this)
        this.generateBookings = this.generateBookings.bind(this)
    }
    changeMonth(value) {
        this.setState({ Calendar: Calendar(this.state.calendar.now.add(value, 'months'), this.cache) })
    }
    booking(date) {
        this.setState({ calendar: Booking(date) })
    }
    generateBookings() {
        this.setState({ calendar: CreateCalendar(this.state.calendar.now, this.cache, true) })
    }
    render() {
        return (
            <div className="container my-5">
            <div className="row">
              <div className="col-12 col-md-8 offset-md-2 p-0">
                <Calendar
                  Calendar={this.state.calendar}
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