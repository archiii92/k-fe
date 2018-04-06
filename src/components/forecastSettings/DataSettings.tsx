import * as React from 'react';

import { InputFile } from '../files/InputFile';
import { InputRange } from '../ranges/InputRange';

interface DataSettingsProps {
  testTrainDivide: number;
  handleFileName: (fileName: string) => void;
  handleTestTrainDivide: (testTrainDivide: number) => void;
}

export class DataSettings extends React.Component<DataSettingsProps, {}> {

  formatLabel(value: number) {
    return `${value}%`;
  }

  render() {
    const { testTrainDivide, handleFileName, handleTestTrainDivide } = this.props;

    return (
      <>
        <div className="form-field">
          <label>
            Выберите файл с данными на основе которого будет происходить обучение и прогноз:
            <InputFile handleFile={handleFileName} />
          </label>
        </div>
        <div className="form-field">
          <label>
            Cоотношение обучающей и тестовой выборки
            <InputRange
              formatLabel={this.formatLabel}
              handleRange={handleTestTrainDivide}
              value={testTrainDivide}
              maxValue={90}
              minValue={10}
            />
          </label>
        </div>
      </>
    );
  }
}
