import * as React from 'react';
import { InputFile, InputFileProps } from './InputFile';

export interface InputFileWithLabelProps {
  text: string;
  inputFileProps: InputFileProps;
}

export class InputFileWithLabel extends React.Component<InputFileWithLabelProps, {}> {
  render() {
    return (
      <div>
        <label className="inputFileLabel">
          {this.props.text}
          <InputFile {...this.props.inputFileProps} />
        </label>
      </div>
    );
  }
}
