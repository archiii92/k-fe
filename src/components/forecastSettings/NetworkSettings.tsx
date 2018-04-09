import * as React from 'react';

import { InputRange } from '../ranges/InputRange';
import { InputSelect } from '../selects/InputSelect';

interface NetworkSettingsProps {
  selectedNetwork: string;
  inputLayerSize: number;
  fuzzyLayerSize: number;
  hiddenLayerSize: number;
  handleNetworkSelect: (selectedNetwork: string) => void;
  handleInputLayerSizeRange: (inputLayerSize: number) => void;
  handleFuzzyLayerSizeRange: (fuzzyLayerSize: number) => void;
  handleHiddenLayerSizeRange: (hiddenLayerSize: number) => void;
}

export class NetworkSettings extends React.Component<NetworkSettingsProps, {}> {

  render() {
    const {
      selectedNetwork,
      inputLayerSize,
      fuzzyLayerSize,
      hiddenLayerSize,
      handleNetworkSelect,
      handleInputLayerSizeRange,
      handleFuzzyLayerSizeRange,
      handleHiddenLayerSizeRange,
    } = this.props;

    return (
      <>
        <div className="form-field">
          <label>
            Выберите тип нейронной сети:
            <InputSelect
              handleSelect={handleNetworkSelect}
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
                handleRange={handleInputLayerSizeRange}
                value={inputLayerSize}
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
                  handleRange={handleFuzzyLayerSizeRange}
                  value={fuzzyLayerSize}
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
                handleRange={handleHiddenLayerSizeRange}
                value={hiddenLayerSize}
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
