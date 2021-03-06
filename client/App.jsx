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
    let start = new Date (2018, 6, 2, 10, 30)
    let now = new Date()
    console.log(start)
    console.log(now)
    let months = Math.floor((now - start) / 2419200000)
    let weeks = Math.floor((now - start) % 2419200000 / 604800000)
    let days = Math.floor((now - start) % 604800000 / 86400000)
    let hours = Math.floor(((now - start) % 86400000) / 3600000)
    let minutes = Math.floor(((now - start) % 3600000) / 60000)
    let seconds = Math.floor(((now - start) % 60000) / 1000)
    this.setState({months, weeks, days, hours, minutes, seconds})
    setTimeout(this.go, 1000)
  }
  render() {
    return (
      <div id="mainDiv">
        <img src="NBA.gif" alt='' />
        <div id="top">It has been </div>
        {this.state.months > 0 ? <div id="months">{this.state.months} {this.state.months === 1 ? 'month' : 'months'} </div> : null}
        {this.state.weeks > 0 ? <div id="weeks">{this.state.weeks} {this.state.weeks === 1 ? 'week' : 'weeks'} </div> : null}
        {this.state.days > 0 ? <div id="days">{this.state.days} {this.state.days === 1 ? 'day' : 'days'} </div> : null}
        {this.state.hours > 0 ? <div id="hours">{this.state.hours} {this.state.hours === 1 ? 'hour' : 'hours'} </div> : null}
        <div id="minutes">{this.state.minutes} {this.state.minutes === 1 ? 'minute' : 'minutes'} </div>
        <div id="seconds">{this.state.seconds} {this.state.seconds === 1 ? 'second' : 'seconds'} </div>
        <div id="bottom">SINCE KENNETH STARTED WORKING AT THE NBA!!!</div>
        
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
