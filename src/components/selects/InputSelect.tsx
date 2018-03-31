import * as React from 'react';

import reactSelect, { Option } from 'react-select';

import 'react-select/dist/react-select.css';
import './InputSelect.css';

const SELECT: typeof reactSelect = reactSelect as any;

interface InputSelectProps {
  handleSelect: (value: string) => void;
  initialValue: string;
  options: Option[];
}

interface InputSelectState {
  value: string;
}

export class InputSelect extends React.Component<InputSelectProps, InputSelectState> {
  constructor(props: InputSelectProps) {
    super(props);

    this.state = {
      value: props.initialValue,
    };

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedItem: Option) {
    if (selectedItem) {
      const { value } = selectedItem;

      if (typeof value === 'string') {
        this.setState({
          value,
        });

        this.props.handleSelect(value);
      }
    }
  }

  render() {
    const { options } = this.props;

    return (
      <SELECT
        options={options}
        {...this.state}
        onChange={this.handleSelect}
        clearable={false}
      />
    );
  }
}
