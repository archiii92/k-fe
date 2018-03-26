import * as React from 'react';
import { Button } from './Button';

interface ClearChartButtonProps { }

export class ClearChartButton extends React.Component<ClearChartButtonProps> {

  constructor(props: ClearChartButtonProps) {
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
