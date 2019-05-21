import React from 'react';
import './App.css';

const ShowBanner = (props) => {
  if (props.time > 45) {
    return (
      <div className="rest_block"> Отдых </div>
    )
  } else {
    return (
      <div className="work_block"> Время работать над собой </div>
    )
  }
}

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()}
  }

  tick = () => {
    this.setState({
      date: new Date()
    })
  }

  componentDidMount() {
    this.timerId = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  render() {
    return (
      <div>
        <ShowBanner time={this.state.date.getSeconds()}/>
        <h1> Текущее время {this.state.date.toLocaleTimeString()}</h1>
      </div>
    )
  }
}

export default Clock;