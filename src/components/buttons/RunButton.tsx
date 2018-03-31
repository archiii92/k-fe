import * as React from 'react';
import { Button } from './Button';

export class RunButton extends React.Component<{}> {

  constructor(props: {}) {
    super(props);

    this.handleRun = this.handleRun.bind(this);
  }

  handleRun() {
    alert('Ruuuuuuuuuuuuuuun!');
  }

  render() {
    return (
      <Button title="Запуск" handleClick={this.handleRun} />
    );
  }
}
