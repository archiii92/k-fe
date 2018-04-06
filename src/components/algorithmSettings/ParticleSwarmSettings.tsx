import * as React from 'react';
import { InputRange } from '../ranges/InputRange';

interface ParticleSwarmSettingsProps {
  handleAlgorithmParameter: (fieldName: string, value: number) => void;
  particleCount: number;
  iterationCount: number;
  φp: number;
  φg: number;
  k: number;
}

export interface ParticleSwarmSettingsState {
  particleCount: number;
  iterationCount: number;
  φp: number;
  φg: number;
  k: number;
}

export class ParticleSwarmSettings extends React.Component<ParticleSwarmSettingsProps, ParticleSwarmSettingsState> {
  constructor(props: ParticleSwarmSettingsProps) {
    super(props);

    // this.state = {
    //   iterationCount: 30,
    //   k: 1,
    //   particleCount: 100,
    //   φg: 3,
    //   φp: 2,
    // };

    this.handleRange = this.handleRange.bind(this);
  }

  handleRange(fieldName: 'particleCount' | 'iterationCount' | 'φp' | 'φg' | 'k', value: number) {
    // @ts-ignore
    // this.setState({
    //   [fieldName]: value,
    // });

    this.props.handleAlgorithmParameter(fieldName, value);
  }

  formatLabel(value: number) {
    return value.toFixed(1);
  }

  render() {
    const { particleCount, iterationCount, φp, φg, k } = this.props;

    return (
      <div className="form-field">
        <label>Задайте параметры алгоритма роя частиц:</label>
        <div className="form-field inner">
          <label>
            Количество частиц
            <InputRange
              handleRange={value => this.handleRange('particleCount', value)}
              value={particleCount}
              maxValue={150}
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
              maxValue={150}
              minValue={1}
              step={5}
            />
          </label>
        </div>
        <div className="form-field inner">
          <label>
            Коэффициент φp
            <InputRange
              handleRange={value => this.handleRange('φp', value)}
              value={φp}
              maxValue={5}
              minValue={1}
            />
          </label>
        </div>
        <div className="form-field inner">
          <label>
            Коэффициент φg
            <InputRange
              handleRange={value => this.handleRange('φg', value)}
              value={φg}
              maxValue={5}
              minValue={1}
            />
          </label>
        </div>
        <div className="form-field inner">
          <label>
            Коэффициент k
            <InputRange
              formatLabel={this.formatLabel}
              handleRange={value => this.handleRange('k', value)}
              value={k}
              maxValue={1}
              minValue={0}
              step={0.1}
            />
          </label>
        </div>
      </div>
    );
  }
}
