import React from 'react';
import ReactDom from 'react-dom';


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props.user,
            validationErrors: []
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        const errors = []
        // Validate First Name, Last Name and Email
        if (!this.state.firstName) errors.push({ key: 0, message: 'First Name Required' })
        if (!this.state.lastName) errors.push({ key: 1, message: 'Last Name Required' })
        if (!this.state.email) errors.push({ key: 2, message: 'Email Required' })
        if (!errors.length) {
            const data = {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                email: this.state.lastName,
                birthDate: this.state.birthDate,
                jobTitle: this.state.jobTitle,
                experienceYears: this.state.experienceYears
            }
            // Send PUT request
            fetch('https://api.dummyendpoint/me/profile', {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(data),
                }).then(res => res.json())
                .then(response => console.log('Success'))
                .catch(error => console.error('Error'))
        }
        this.setState({ validationErrors: errors })
    }
    render() {
        let status;
        if (this.state.validationErrors.length) {
            status = (<div className="alert alert-danger">  
            {this.state.validationErrors.map(item => <div key={item.key}>{item.message}</div>)}
          </div>)
        }
        return (
            <form onSubmit={this.handleSubmit}>
            {status}
            <div className="form-group">
              <label>First Name</label>
              <input className="form-control" name="firstName" onChange={this.handleInputChange} value={this.state.firstName} />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input className="form-control" name="lastName" onChange={this.handleInputChange} value={this.state.lastName} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input className="form-control" name="email" onChange={this.handleInputChange} value={this.state.email} />
            </div>
            <div className="form-group">
              <label>Birth Date</label>
              <input className="form-control" type="datetime-local" name="birthDate" onChange={this.handleInputChange} value={this.state.birthDate} />
            </div>
            <div className="form-group">
              <label>Preferred Job Title</label>
              <input className="form-control" name="jobTitle" onChange={this.handleInputChange} value={this.state.jobTitle} />
            </div>
            <div className="form-group">
              <label>Number of Years Experience</label>
              <input className="form-control" type="number" name="experienceYears" onChange={this.handleInputChange} value={this.state.experienceYears} />
            </div>
            <div className="form-group">
              <button>Submit</button>
            </div>
          </form>
        )
    }
}

export default Form