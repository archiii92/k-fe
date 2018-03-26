import * as React from 'react';

interface NetworkSettingsState { value: string; }
interface NetworkSettingsProps { }

export class NetworkSettings extends React.Component<NetworkSettingsProps, NetworkSettingsState> {
  constructor(props: NetworkSettingsProps) {
    super(props);

    this.state = {
      value: 'fmpl',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    return (
      <>
        <label>
          Выберите тип нейронной сети:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="mpl">Многослойный персептрон</option>
            <option value="fmpl">Нечеткий многослойный персептрон</option>
          </select>
        </label>
      </>
    );
  }
}
