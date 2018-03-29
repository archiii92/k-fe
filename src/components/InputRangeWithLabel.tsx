import * as React from 'react';
import { MyInputRange, InputRangeProps } from './MyInputRange';

export interface InputRangeWithLabelProps {
  text: string;
  rangeProps: InputRangeProps
}

export class InputRangeWithLabel extends React.Component<InputRangeWithLabelProps> {

  render() {
    return (
      <>
        <label>{this.props.text}</label>
        <MyInputRange {...this.props.rangeProps} />
      </>
    );
  }
}
