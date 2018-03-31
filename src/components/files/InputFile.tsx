import * as React from 'react';

import './InputFile.css';

interface InputFileState {
  fileName: string;
}

export interface InputFileProps {
  handleFile: (fileName: string) => void;
}

export class InputFile extends React.Component<InputFileProps, InputFileState> {
  fileInput: HTMLInputElement;

  constructor(props: InputFileProps) {
    super(props);

    this.state = {
      fileName: '',
    };

    this.handleFile = this.handleFile.bind(this);
  }

  handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const { target } = e;
    if (target.value.length > 0) {

      this.setState({
        fileName: this.fileInput.files[0].name,
      });

      this.props.handleFile(this.state.fileName);
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
