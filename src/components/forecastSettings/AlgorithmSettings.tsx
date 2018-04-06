import * as React from 'react';
import { GeneticSettings, GeneticSettingsState } from '../algorithmSettings/GeneticSettings';
import { ModifiedAntColonySettings, ModifiedAntColonySettingsState } from '../algorithmSettings/ModifiedAntColonySettings';
import { ParticleSwarmSettings, ParticleSwarmSettingsState } from '../algorithmSettings/ParticleSwarmSettings';
import { SimulatedAnnealingSettings, SimulatedAnnealingSettingsState } from '../algorithmSettings/SimulatedAnnealingSettings';
import { InputSelect } from '../selects/InputSelect';

interface AlgorithmSettingsProps {
  selectedAlgorithm: string;
  algorithmParameters: ParticleSwarmSettingsState | SimulatedAnnealingSettingsState | GeneticSettingsState | ModifiedAntColonySettingsState;
  handleAlgorithmSelect: (selectedAlgorithm: string) => void;
  handleAlgorithmParameter: (fieldName: string, value: number) => void;
}

export class AlgorithmSettings extends React.Component<AlgorithmSettingsProps, {}> {

  render() {
    const { selectedAlgorithm, algorithmParameters, handleAlgorithmSelect, handleAlgorithmParameter } = this.props;

    return (
      <>
        <div className="form-field">
          <label>
            Выберите алгоритм оптимизации нейронной сети:
            <InputSelect
              handleSelect={handleAlgorithmSelect}
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
            // @ts-ignore
            {...algorithmParameters}
            handleAlgorithmParameter={handleAlgorithmParameter}
          />
        }
        {selectedAlgorithm === 'pso' &&
          <ParticleSwarmSettings
            // @ts-ignore
            {...algorithmParameters}
            handleAlgorithmParameter={handleAlgorithmParameter}
          />
        }
        {/* {selectedAlgorithm === 'goa' &&
          <GeneticSettings
            {...algorithmParameters}
            handleAlgorithmParameter={handleAlgorithmParameter}
          />
        }
        {selectedAlgorithm === 'maco' &&
          <ModifiedAntColonySettings
            {...algorithmParameters}
            handleAlgorithmParameter={handleAlgorithmParameter}
          />
        } */}
      </>
    );
  }
}

// Modified ant colony optimization algorithm
// Genetic optimization algorithm
// Particle swarm optimization
// Simulated annealing
