import * as React from 'react';
import { InputRange } from '../ranges/InputRange';

interface ModifiedAntColonySettingsProps {
  handleAlgorithmParameter: (fieldName: string, value: number) => void;
  antCount: number;
  iterationCount: number;
  α: number;
}

export interface ModifiedAntColonySettingsState {
  antCount: number;
  iterationCount: number;
  α: number;
}

export class ModifiedAntColonySettings extends React.Component<ModifiedAntColonySettingsProps> {
  constructor(props: ModifiedAntColonySettingsProps) {
    super(props);

    this.handleRange = this.handleRange.bind(this);
  }

  handleRange(fieldName: 'antCount' | 'iterationCount' | 'α', value: number) {
    this.props.handleAlgorithmParameter(fieldName, value);
  }

  formatLabel(value: number) {
    return value.toFixed(1);
  }

  render() {
    const { antCount, iterationCount, α } = this.props;

    return (
      <div className="form-field">
        <label>Задайте параметры модифицированного муравьиного алгоритма:</label>
        <div className="form-field inner">
          <label>
            Количество муравьев
            <InputRange
              handleRange={value => this.handleRange('antCount', value)}
              value={antCount}
              maxValue={100}
              minValue={1}
              step={5}
            />
          </label>
        </div>
        <div className="form-field inner">
          <label>
            Число итераций
            <InputRange
              handleRange={value => this.handleRange('iterationCount', value)}
              value={iterationCount}
              maxValue={100}
              minValue={1}
              step={5}
            />
          </label>
        </div>
        <div className="form-field inner">
          <label>
            Длина прыжка α
            <InputRange
              formatLabel={this.formatLabel}
              handleRange={value => this.handleRange('α', value)}
              value={α}
              maxValue={1}
              minValue={0}
              step={0.5}
            />
          </label>
        </div>
      </div>
    );
  }
}
