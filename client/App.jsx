import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    let grad = new Date (2017, 9, 10)
    let now = new Date()
    let weeks = Math.floor((now - grad) / 604800000)
    let days = Math.floor((now - grad) % 604800000 / 86400000)
    let hours = Math.floor(((now - grad) % 86400000) / 3600000)
    let minutes = Math.floor(((now - grad) % 3600000) / 60000)
    let seconds = Math.floor(((now - grad) % 60000) / 1000)
    this.setState({weeks, days, hours, minutes, seconds})
    setTimeout(this.go, 1000)
  }
  render() {
    return (
      <div>It has been {this.state.weeks} weeks  {this.state.days} days {this.state.hours} hours {this.state.minutes} minutes {this.state.seconds} seconds since Kenneth has had a job.</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
