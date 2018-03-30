import * as React from 'react';
import { InputFileProps, InputFile } from './InputFile';

import './InputFileWithLabel.css';

export interface InputFileWithLabelProps {
  text: string;
  inputFileProps: InputFileProps
}

export class InputFileWithLabel extends React.Component<InputFileWithLabelProps, {}> {
  render() {
    return (
      <>
        <label>{this.props.text}</label>
        <InputFile {...this.props.inputFileProps} />
      </>
    );
  }
}
