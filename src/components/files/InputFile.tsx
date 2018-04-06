import * as React from 'react';

import './InputFile.css';

export interface InputFileProps {
  handleFile: (fileName: string) => void;
}

export class InputFile extends React.Component<InputFileProps, {}> {
  fileInput: HTMLInputElement;

  constructor(props: InputFileProps) {
    super(props);

    this.handleFile = this.handleFile.bind(this);
  }

  handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const { target } = e;
    if (target.value.length > 0) {
      this.props.handleFile(this.fileInput.files[0].name);
    } else {
      this.props.handleFile('');
    }
  }

  render() {
    return (
      <input
        type="file"
        accept="text/plain"
        ref={input => this.fileInput = input}
        onChange={this.handleFile}
      />
    );
  }
}
