import * as React from 'react';
import { InputRange } from '../ranges/InputRange';

interface GeneticSettingsProps {
  handleAlgorithmParameter: (algorithmParameters: GeneticSettingsState) => void
}

export interface GeneticSettingsState {
  speciesCount: number;
  iterationCount: number;
  crossPossibility: number;
  mutationPossibility: number;
}

export class GeneticSettings extends React.Component<GeneticSettingsProps, GeneticSettingsState> {
  constructor(props: GeneticSettingsProps) {
    super(props);

    this.state = {
      speciesCount: 15,
      iterationCount: 65,
      crossPossibility: 100,
      mutationPossibility: 50,
    };

    this.handleRange = this.handleRange.bind(this);
  }

  handleRange(fieldName: 'speciesCount' | 'iterationCount' | 'crossPossibility' | 'mutationPossibility', value: number) {
    // @ts-ignore
    this.setState({
      [fieldName]: value
    });

    this.props.handleAlgorithmParameter(this.state);
  }

  formatLabel(value: number) {
    return `${value}%`;
  }

  render() {
    const { speciesCount, iterationCount, crossPossibility, mutationPossibility } = this.state;

    return (
      <div className="form-field">
        <label>Задайте параметры генетического алгоритма:</label>
        <div className="form-field inner">
          <label>
            Количество особей
            <InputRange
              handleRange={value => this.handleRange('speciesCount', value)}
              initialValue={speciesCount}
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
              initialValue={iterationCount}
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
              initialValue={crossPossibility}
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
              initialValue={mutationPossibility}
              maxValue={100}
              minValue={0}
            />
          </label>
        </div>
      </div>
    );
  }
}
