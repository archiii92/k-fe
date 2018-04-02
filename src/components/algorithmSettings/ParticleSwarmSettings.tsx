import * as React from 'react';
import { InputRange } from '../ranges/InputRange';

interface ParticleSwarmSettingsProps { }

interface ParticleSwarmSettingsState { }

export class ParticleSwarmSettings extends React.Component<ParticleSwarmSettingsProps, ParticleSwarmSettingsState> {
  constructor(props: ParticleSwarmSettingsProps) {
    super(props);

    this.state = {

    };

    this.handleRange = this.handleRange.bind(this);
  }

  handleRange(fieldName: string, value: number) {

  }

  render() {
    //const { initialTemperature, warmingKeepPercent } = this.state;

    return (
      <>
        {/* <div className="form-field">
          <label>Задайте параметры алгоритма имитации отжига:</label>
          <div className="form-field inner">
            <label>
              Начальная температура
              <InputRange
                handleRange={value => this.handleRange('initialTemperature', value)}
                initialValue={initialTemperature}
                maxValue={500}
                minValue={1}
              />
            </label>
          </div>
        </div> */}
      </>
    );
  }
}
