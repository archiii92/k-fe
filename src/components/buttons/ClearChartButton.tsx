import * as React from 'react';
import { Button } from './Button';

export class ClearChartButton extends React.Component<{}> {

  constructor(props: {}) {
    super(props);

    this.clearChart = this.clearChart.bind(this);
  }

  clearChart() {
    alert('Chart is cleared!');
  }

  render() {
    return (
      <Button title="Очистить график" handleClick={this.clearChart} />
    );
  }
}
