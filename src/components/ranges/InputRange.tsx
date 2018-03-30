import * as React from 'react';
import * as ReactInputRange from 'react-input-range';

import 'react-input-range/lib/css/index.css';
import './InputRange.css';

const RInputRange: typeof ReactInputRange.default = ReactInputRange as any

interface InputRangeState { 
  value: number;
}

export interface InputRangeProps {
  maxValue: number;
  minValue: number;
  formatLabel?: (value: number, type: string) => string;
  initialValue: number;
  handleRange: (value: number) => void;
}

export class InputRange extends React.Component<InputRangeProps, InputRangeState> {
  constructor(props: InputRangeProps) {
    super(props);

    this.state = {
      value: props.initialValue
    }

    this.handleRange = this.handleRange.bind(this);
  }

  handleRange(value: ReactInputRange.Range | number) {
    if (typeof value === 'number') {

      this.setState({
        value: value
      })

      this.props.handleRange(value);
    }
  }

  render() {
    return (
      <RInputRange 
        {...this.props}
        {...this.state}
        onChange={this.handleRange} />
    );
  }
}
