import * as React from 'react';

import { InputFile } from '../files/InputFile';
import { InputRange } from '../ranges/InputRange';

interface DataSettingsProps {
  trainTestDivide: number;
  handleFileName: (fileName: string) => void;
  handleTrainTestDivide: (testTrainDivide: number) => void;
}

export class DataSettings extends React.Component<DataSettingsProps, {}> {

  formatLabel(value: number) {
    return `${value}%`;
  }

  render() {
    const { trainTestDivide, handleFileName, handleTrainTestDivide } = this.props;

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
              handleRange={handleTrainTestDivide}
              value={trainTestDivide}
              maxValue={90}
              minValue={10}
            />
          </label>
        </div>
      </>
    );
  }
}
