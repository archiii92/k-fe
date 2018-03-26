import * as React from 'react';
import { Button } from './Button';

interface RunButtonProps { }

export class RunButton extends React.Component<RunButtonProps> {

  constructor(props: RunButtonProps) {
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
