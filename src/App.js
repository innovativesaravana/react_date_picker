import React, { Component } from 'react';
import './App.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
 
import 'react-datepicker/dist/react-datepicker.css';

class App extends Component {

  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(date) {
    this.setState({
      startDate: date
    });
  }

  render() {
    return <div className="container">
      <div className="menu">
        <h1>DatePicker</h1>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
      </div>
    </div>
  }
}

export default App;

