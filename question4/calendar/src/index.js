import React from 'react';
import ReactDOM from 'react-dom';

import Calendar from './components/Calendar';
import CalendarDate from './components/CalendarDate';
import makeBooking from './utils/makeBooking';
import createCalendar from './utils/createCalendar';
import randomise from './utils/randomise';

import './app.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.cache = []
        this.state = {
            calendar: createCalendar(null, this.cache)
        }
    }

    changeMonth = value => {
        this.setState({ calendar: createCalendar(this.state.calendar.now.add(value, 'months'), this.cache) })
    }

    booking = date => {
        this.setState({ calendar: makeBooking(date) })
    }

    generateBookings = () => {
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
