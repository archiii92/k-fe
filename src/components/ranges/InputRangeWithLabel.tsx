import * as React from 'react';
import { InputRange, InputRangeProps } from './InputRange';

import './InputRangeWithLabel.css';

export interface InputRangeWithLabelProps {
  text: string;
  inputRangeProps: InputRangeProps;
}

export class InputRangeWithLabel extends React.Component<InputRangeWithLabelProps> {
  render() {
    return (
      <div>
        <label>{this.props.text}</label>
        <InputRange {...this.props.inputRangeProps} />
      </div>
    );
  }
}
