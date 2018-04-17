import * as React from 'react';
import { Button } from './Button';

interface ClearChartProps {
  handleClearChart: () => void;
}

export class ClearChartButton extends React.Component<ClearChartProps> {
  render() {
    return (
      <Button title="Очистить график" handleClick={this.props.handleClearChart} />
    );
  }
}
