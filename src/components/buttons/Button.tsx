import * as React from 'react';

interface ButtonProps { title: string; handleClick: any; }

export class Button extends React.Component<ButtonProps> {
  render() {
    return (
      <button onClick={this.props.handleClick}>
        {this.props.title}
      </button>
    );
  }
}
