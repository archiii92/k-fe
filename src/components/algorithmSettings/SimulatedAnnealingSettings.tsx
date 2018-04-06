import * as React from 'react';
import { InputRange } from '../ranges/InputRange';

interface SimulatedAnnealingSettingsProps {
  handleAlgorithmParameter: (algorithmParameters: SimulatedAnnealingSettingsState) => void;
}

export interface SimulatedAnnealingSettingsState {
  initialTemperature: number;
  warmingKeepPercent: number;
}

export class SimulatedAnnealingSettings extends React.Component<SimulatedAnnealingSettingsProps, SimulatedAnnealingSettingsState> {
  constructor(props: SimulatedAnnealingSettingsProps) {
    super(props);

    this.state = {
      initialTemperature: 100,
      warmingKeepPercent: 90,
    };

    this.handleRange = this.handleRange.bind(this);
  }

  handleRange(fieldName: 'initialTemperature' | 'warmingKeepPercent', value: number) {

    // @ts-ignore
    this.setState({
      [fieldName]: value,
    });

    setTimeout(this.props.handleAlgorithmParameter(this.state), 1000);
  }

  formatLabel(value: number) {
    return `${value}%`;
  }

  render() {
    const { initialTemperature, warmingKeepPercent } = this.state;

    return (
      <div className="form-field">
        <label>Задайте параметры алгоритма имитации отжига:</label>
        <div className="form-field inner">
          <label>
            Начальная температура
            <InputRange
              handleRange={value => this.handleRange('initialTemperature', value)}
              value={initialTemperature}
              maxValue={500}
              minValue={1}
              step={10}
            />
          </label>
        </div>
        <div className="form-field inner">
          <label>
            Процент сохранения температуры
            <InputRange
              formatLabel={this.formatLabel}
              handleRange={value => this.handleRange('warmingKeepPercent', value)}
              value={warmingKeepPercent}
              maxValue={100}
              minValue={1}
            />
          </label>
        </div>
      </div>
    );
  }
}
