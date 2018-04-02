import * as React from 'react';
import { InputSelect } from '../selects/InputSelect';
import { SimulatedAnnealingSettings } from '../algorithmSettings/SimulatedAnnealingSettings';
import { ParticleSwarmSettings } from '../algorithmSettings/ParticleSwarmSettings';

interface AlgorithmSettingsProps { }

interface AlgorithmSettingsState {
  selectedAlgorithm: string;
}

export class AlgorithmSettings extends React.Component<AlgorithmSettingsProps, AlgorithmSettingsState> {
  constructor(props: AlgorithmSettingsProps) {
    super(props);

    this.state = {
      selectedAlgorithm: 'sa',
    };

    this.handleAlgorithmSelect = this.handleAlgorithmSelect.bind(this);
  }

  handleAlgorithmSelect(selectedAlgorithm: string) {
    this.setState({
      selectedAlgorithm,
    });
  }

  render() {
    const { selectedAlgorithm } = this.state;

    return (
      <>
        <div className="form-field">
          <label>
            Выберите алгоритм оптимизации нейронной сети:
            <InputSelect
              handleSelect={this.handleAlgorithmSelect}
              initialValue={selectedAlgorithm}
              options={[
                { value: 'sa', label: 'Алгоритм имитации отжига' },
                { value: 'pso', label: 'Алгоритм роя частиц' },
                { value: 'goa', label: 'Генетический алгоритм' },
                { value: 'maco', label: 'Модифицированный муравьиный алгоритм' },
              ]}
            />
          </label>
        </div>
        {selectedAlgorithm === 'sa' &&
          <SimulatedAnnealingSettings />
        }
        {selectedAlgorithm === 'pso' &&
          <div className="form-field">
            <ParticleSwarmSettings />
          </div>
        }
        {selectedAlgorithm === 'goa' &&
          <div className="form-field">
              Хей, да это же Генетический алгоритм!
          </div>
        }
        {selectedAlgorithm === 'maco' &&
          <div className="form-field">
              Хей, да это же Модифицированный муравьиный алгоритм!
          </div>
        }
      </>
    );
  }
}

// Modified ant colony optimization algorithm
// Genetic optimization algorithm
// Particle swarm optimization
// Simulated annealing
