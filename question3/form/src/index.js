import React from 'react';
import ReactDOM from 'react-dom';

import form from './form'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                email: '',
                birthDate: '',
                jobTitle: '',
                experienceYears: 0
            }
        }
    }
    render() {
        return (
            <div className="container">
            <div className="row">
              <div className="col-12 col-md-8 offset-md-2 jumbotron">
                <h1>User Form</h1>
                <Form user={this.state.user} />
              </div>
            </div>
          </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));