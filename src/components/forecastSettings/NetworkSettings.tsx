import * as React from 'react';

import { InputRange } from '../ranges/InputRange';
import { InputSelect } from '../selects/InputSelect';

interface NetworkSettingsProps { }

interface NetworkSettingsState {
  selectedNetwork: string;
  inputLayerSize: number;
  fuzzyLayerSize: number;
  hiddenLayerSize: number;
}

export class NetworkSettings extends React.Component<NetworkSettingsProps, NetworkSettingsState> {
  constructor(props: NetworkSettingsProps) {
    super(props);

    this.state = {
      fuzzyLayerSize: 9,
      hiddenLayerSize: 6,
      inputLayerSize: 3,
      selectedNetwork: 'fmpl',
    };

    this.handleNetworkSelect = this.handleNetworkSelect.bind(this);
    this.handleInputLayerSizeRange = this.handleInputLayerSizeRange.bind(this);
    this.handleFuzzyLayerSizeRange = this.handleFuzzyLayerSizeRange.bind(this);
    this.handleHiddenLayerSizeRange = this.handleHiddenLayerSizeRange.bind(this);
  }

  handleNetworkSelect(selectedNetwork: string) {
    this.setState({
      selectedNetwork,
    });
  }

  handleInputLayerSizeRange(inputLayerSize: number) {
    this.setState({
      inputLayerSize,
    });
  }

  handleFuzzyLayerSizeRange(fuzzyLayerSize: number) {
    this.setState({
      fuzzyLayerSize,
    });
  }

  handleHiddenLayerSizeRange(hiddenLayerSize: number) {
    this.setState({
      hiddenLayerSize,
    });
  }

  render() {
    const { selectedNetwork, inputLayerSize, fuzzyLayerSize, hiddenLayerSize } = this.state;

    return (
      <>
        <div className="form-field">
          <label>
            Выберите тип нейронной сети:
            <InputSelect
              handleSelect={this.handleNetworkSelect}
              initialValue={selectedNetwork}
              options={[
                { value: 'mpl', label: 'Многослойный персептрон' },
                { value: 'fmpl', label: 'Нечеткий многослойный персептрон' },
              ]}
            />
          </label>
        </div>

        <div className="form-field">
          <label>Укажите параметры нейронной сети:</label>
          <div className="form-field inner">
            <label>
              Число нейронов входного слоя (скользящее окно)
              <InputRange
                handleRange={this.handleInputLayerSizeRange}
                initialValue={inputLayerSize}
                maxValue={5}
                minValue={1}
              />
            </label>
          </div>
          {selectedNetwork === 'fmpl' &&
            <div className="form-field inner">
              <label>
                Число нейронов нечеткого слоя
                <InputRange
                  handleRange={this.handleFuzzyLayerSizeRange}
                  initialValue={fuzzyLayerSize}
                  maxValue={12}
                  minValue={1}
                />
              </label>
            </div>
          }
          <div className="form-field inner">
            <label>
              Число нейронов скрытого слоя
              <InputRange
                handleRange={this.handleHiddenLayerSizeRange}
                initialValue={hiddenLayerSize}
                maxValue={9}
                minValue={1}
              />
            </label>
          </div>
        </div>
      </>
    );
  }
}
