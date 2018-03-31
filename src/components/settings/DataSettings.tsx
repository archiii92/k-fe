import * as React from 'react';

import { InputFile } from '../files/InputFile';
import { InputRange } from '../ranges/InputRange';

interface DataSettingsProps { }

interface DataSettingsState {
  fileName: string;
  testTrainDivide: number;
}

export class DataSettings extends React.Component<DataSettingsProps, DataSettingsState> {
  constructor(props: DataSettingsProps) {
    super(props);

    this.state = {
      fileName: '',
      testTrainDivide: 80,
    };

    this.handleDataFile = this.handleDataFile.bind(this);
    this.handleTestTrainDivideRange = this.handleTestTrainDivideRange.bind(this);
  }

  handleDataFile(fileName: string) {
    this.setState({
      fileName,
    });
  }

  handleTestTrainDivideRange(testTrainDivide: number) {
    this.setState({
      testTrainDivide,
    });
  }

  formatLabel(value: number) {
    return `${value}%`;
  }

  render() {
    return (
      <>
        <div className="form-field">
          <label>
            Выберите файл с данными на основе которого будет происходить обучение и прогноз:
            <InputFile handleFile={this.handleDataFile} />
          </label>
        </div>

        <div className="form-field">
          <label>
            Задайте процентное соотношение обучающей и тестовой выборки:
            <InputRange
              formatLabel={this.formatLabel}
              handleRange={this.handleTestTrainDivideRange}
              initialValue={this.state.testTrainDivide}
              maxValue={90}
              minValue={10}
            />
          </label>
        </div>
      </>
    );
  }
}
