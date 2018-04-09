import * as React from 'react';
import { InputRange } from '../ranges/InputRange';

interface GeneticSettingsProps {
  handleAlgorithmParameter: (fieldName: string, value: number) => void;
  speciesCount: number;
  iterationCount: number;
  crossPossibility: number;
  mutationPossibility: number;
}

export interface GeneticSettingsState {
  speciesCount: number;
  iterationCount: number;
  crossPossibility: number;
  mutationPossibility: number;
}

export class GeneticSettings extends React.Component<GeneticSettingsProps> {
  constructor(props: GeneticSettingsProps) {
    super(props);

    this.handleRange = this.handleRange.bind(this);
  }

  handleRange(fieldName: 'speciesCount' | 'iterationCount' | 'crossPossibility' | 'mutationPossibility', value: number) {
    this.props.handleAlgorithmParameter(fieldName, value);
  }

  formatLabel(value: number) {
    return `${value}%`;
  }

  render() {
    const { speciesCount, iterationCount, crossPossibility, mutationPossibility } = this.props;

    return (
      <div className="form-field">
        <label>Задайте параметры генетического алгоритма:</label>
        <div className="form-field inner">
          <label>
            Количество особей
            <InputRange
              handleRange={value => this.handleRange('speciesCount', value)}
              value={speciesCount}
              maxValue={100}
              minValue={1}
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
            />
          </label>
        </div>
        <div className="form-field inner">
          <label>
            Вероятность скрещивания
            <InputRange
              formatLabel={this.formatLabel}
              handleRange={value => this.handleRange('crossPossibility', value)}
              value={crossPossibility}
              maxValue={100}
              minValue={0}
            />
          </label>
        </div>
        <div className="form-field inner">
          <label>
            Вероятность мутации
            <InputRange
              formatLabel={this.formatLabel}
              handleRange={value => this.handleRange('mutationPossibility', value)}
              value={mutationPossibility}
              maxValue={100}
              minValue={0}
            />
          </label>
        </div>
      </div>
    );
  }
}
