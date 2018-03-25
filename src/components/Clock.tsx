import * as React from 'react';

export interface ClockProps { }
export interface ClockState { date: Date; }

export class Clock extends React.Component<ClockProps, ClockState> {

  timerID: number;

  constructor(props: ClockProps) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = window.setInterval(
      () => this.tick(),
      1000,
    );
  }

  componentWillUnmount() {
    window.clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
