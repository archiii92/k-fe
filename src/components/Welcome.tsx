import * as React from 'react';

export interface WelcomeProps { name: string; }

export class Welcome extends React.Component<WelcomeProps, {}> {
  render() {
    return <h1 className="hello">Hello, {this.props.name}!</h1>;
  }
}
