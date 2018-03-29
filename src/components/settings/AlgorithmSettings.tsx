import * as React from 'react';

interface AlgorithmSettingsState { value: string; }
interface AlgorithmSettingsProps { }

export class AlgorithmSettings extends React.Component<AlgorithmSettingsProps, AlgorithmSettingsState> {
  constructor(props: AlgorithmSettingsProps) {
    super(props);

    this.state = {
      value: 'sa',
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
          Выберите алгоритм оптимизации нейронной сети:
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="sa">Алгоритм имитации отжига</option>
            <option value="pso">Модифицированный муравьиный алгоритм</option>
            <option value="goa">Генетический алгоритм</option>
            <option value="maco">Модифицированный муравьиный алгоритм</option>
          </select>
        </label>
      </>
    );
  }
}

// Modified ant colony optimization algorithm
// Genetic optimization algorithm
// Particle swarm optimization
// Simulated annealing
