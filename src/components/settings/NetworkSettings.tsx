import * as React from 'react';
import Select, { Option } from 'react-select';
import * as ReactInputRange from 'react-input-range';

import './NetworkSettings.css';
import 'react-select/dist/react-select.css';

const InputRange: typeof ReactInputRange.default = ReactInputRange as any

interface NetworkSettingsState { 
  selectedNetwork: string;
  inputLayerSize: number;
  fuzzyLayerSize: number;
  hiddenLayerSize: number;
}
interface NetworkSettingsProps { }

export class NetworkSettings extends React.Component<NetworkSettingsProps, NetworkSettingsState> {
  constructor(props: NetworkSettingsProps) {
    super(props);

    this.state = {
      selectedNetwork: 'fmpl',
      inputLayerSize: 3,
      fuzzyLayerSize: 9,
      hiddenLayerSize: 6
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleRange = this.handleRange.bind(this);
  }

  handleChange(selectedItem: Option) {

    if (selectedItem) {
      const { value } = selectedItem;

      if (typeof value === 'string')
        this.setState({
          selectedNetwork: value
        });
    }
  }

  handleRange(field: string, value: number | ReactInputRange.Range) {
    if (typeof value === 'number' && (field === 'inputLayerSize' || 'fuzzyLayerSize' || 'hiddenLayerSize')) {
      // this.setState({
      //   [field]: value
      // });
    }
  }

  render() {
    const { selectedNetwork, inputLayerSize, fuzzyLayerSize, hiddenLayerSize } = this.state;

    return (
      <>
        <div className="container networkSelectContainer">
          <label>Выберите тип нейронной сети:</label>
          <Select
            className="networkSelect"
            value={selectedNetwork}
            onChange={this.handleChange}
            options={[
              { value: 'mpl', label: 'Многослойный персептрон' },
              { value: 'fmpl', label: 'Нечеткий многослойный персептрон' },
            ]}
            clearable={false}
          />
        </div>
        <div className="container">
          <label>Укажите параметры нейронной сети</label>
          <label>Число нейронов входного слоя (скользящее окно)</label>
          <InputRange
            maxValue={1}
            minValue={5}
            formatLabel={value => `${value}%`}
            value={inputLayerSize}
            onChange={e => this.handleRange('inputLayerSize', e)} />
        </div>
      </>
    );
  }
}