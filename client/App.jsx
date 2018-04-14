import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      months: '',
      weeks: '',
      days: '',
      hours: '',
      minutes: '',
      seconds: ''
    };
    this.go = this.go.bind(this)
  }
  componentWillMount(){
    this.go()
  }
  go(){
    let grad = new Date (2017, 7, 13)
    let now = new Date()
    let months = Math.floor((now - grad) / 2419200000)
    let weeks = Math.floor((now - grad) % 2419200000 / 604800000)
    let days = Math.floor((now - grad) % 604800000 / 86400000)
    let hours = Math.floor(((now - grad) % 86400000) / 3600000)
    let minutes = Math.floor(((now - grad) % 3600000) / 60000)
    let seconds = Math.floor(((now - grad) % 60000) / 1000)
    this.setState({months, weeks, days, hours, minutes, seconds})
    setTimeout(this.go, 1000)
  }
  render() {
    return (
      <div id="mainDiv">
        <div id="top">It has been </div> <br/>
        <div id="months">{this.state.months} months </div>
        <div id="weeks">{this.state.weeks} weeks </div>
        <div id="days">{this.state.days} days </div>
        <div id="hours">{this.state.hours} hours </div>
        <div id="minutes">{this.state.minutes} minutes </div>
        <div id="seconds">{this.state.seconds} seconds </div> 
        <div id="bottom">SINCE KENNETH HAS HAD A FULL TIME JOB.</div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
