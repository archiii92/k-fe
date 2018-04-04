import * as React from 'react';
import { InputSelect } from '../selects/InputSelect';
import { SimulatedAnnealingSettings, SimulatedAnnealingSettingsState } from '../algorithmSettings/SimulatedAnnealingSettings';
import { ParticleSwarmSettings, ParticleSwarmSettingsState } from '../algorithmSettings/ParticleSwarmSettings';
import { GeneticSettings, GeneticSettingsState } from '../algorithmSettings/GeneticSettings';
import { ModifiedAntColonySettingsState, ModifiedAntColonySettings } from '../algorithmSettings/ModifiedAntColonySettings';

interface AlgorithmSettingsProps { }

interface AlgorithmSettingsState {
  selectedAlgorithm: string;
  algorithmParameters: ParticleSwarmSettingsState | SimulatedAnnealingSettingsState | GeneticSettingsState | ModifiedAntColonySettingsState;
}

export class AlgorithmSettings extends React.Component<AlgorithmSettingsProps, AlgorithmSettingsState> {
  constructor(props: AlgorithmSettingsProps) {
    super(props);

    this.state = {
      selectedAlgorithm: 'sa',
      algorithmParameters: null
    };

    this.handleAlgorithmSelect = this.handleAlgorithmSelect.bind(this);
    this.handleAlgorithmParameter = this.handleAlgorithmParameter.bind(this);
  }

  handleAlgorithmSelect(selectedAlgorithm: string) {
    this.setState({
      selectedAlgorithm,
    });
  }

  handleAlgorithmParameter(algorithmParameters: ParticleSwarmSettingsState | SimulatedAnnealingSettingsState  | GeneticSettingsState | ModifiedAntColonySettingsState) {
    this.setState({
      algorithmParameters,
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
          <SimulatedAnnealingSettings
            handleAlgorithmParameter={this.handleAlgorithmParameter}
          />
        }
        {selectedAlgorithm === 'pso' &&
          <ParticleSwarmSettings
            handleAlgorithmParameter={this.handleAlgorithmParameter}
          />
        }
        {selectedAlgorithm === 'goa' &&
          <GeneticSettings
            handleAlgorithmParameter={this.handleAlgorithmParameter}
          />
        }
        {selectedAlgorithm === 'maco' &&
          <ModifiedAntColonySettings
            handleAlgorithmParameter={this.handleAlgorithmParameter}
          />
        }
      </>
    );
  }
}

// Modified ant colony optimization algorithm
// Genetic optimization algorithm
// Particle swarm optimization
// Simulated annealing
