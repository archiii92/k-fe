import * as React from 'react';
import * as ReactInputRange from 'react-input-range';

import './DataSettings.css';
import 'react-input-range/lib/css/index.css';

const InputRange: typeof ReactInputRange.default = ReactInputRange as any

interface DataSettingsProps { }
interface DataSettingsState { fileName: string; rangeValue: number; }

export class DataSettings extends React.Component<DataSettingsProps, DataSettingsState> {

  fileInput: HTMLInputElement

  constructor(props: DataSettingsProps) {
    super(props);

    this.state = {
      fileName: '',
      rangeValue: 80
    }

    this.handleFile = this.handleFile.bind(this);
    this.handleRange = this.handleRange.bind(this);
  }

  handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const { target } = e
    if(target.value.length > 0){
      this.setState({
        fileName: this.fileInput.files[0].name
      });
    }
  }

  handleRange(value: number | ReactInputRange.Range) {
    if (typeof value === 'number')
      this.setState({
        rangeValue: value
      });
  }
  
  render() {
    const { rangeValue } = this.state;

    return (
      <>
        <div className="container">
          <label>Выберите файл с данными:</label>
          <input 
            type="file"
            ref={input => {
              this.fileInput = input;
            }}
            onChange={this.handleFile}/>
        </div>
        <div className="container" id="rangeContainer">
          <label>Задайте процентное соотношение обучающей и тестовой выборки:</label>
          <InputRange
            maxValue={90}
            minValue={10}
            formatLabel={value => `${value}%`}
            value={rangeValue}
            onChange={this.handleRange} />
        </div>
      </>
    );
  }
}
