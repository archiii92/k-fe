import * as React from 'react';
import { Button } from './Button';
import { GeneticSettingsState } from '../algorithmSettings/GeneticSettings';
import { ModifiedAntColonySettingsState } from '../algorithmSettings/ModifiedAntColonySettings';
import { ParticleSwarmSettingsState } from '../algorithmSettings/ParticleSwarmSettings';
import { SimulatedAnnealingSettingsState } from '../algorithmSettings/SimulatedAnnealingSettings';

interface RunButtonProps {
  fileName: string;
  testTrainDivide: number;
  selectedNetwork: string;
  inputLayerSize: number;
  fuzzyLayerSize: number;
  hiddenLayerSize: number;
  selectedAlgorithm: string;
  algorithmParameters: ParticleSwarmSettingsState | SimulatedAnnealingSettingsState | GeneticSettingsState | ModifiedAntColonySettingsState;
}

export class RunButton extends React.Component<RunButtonProps> {

  constructor(props: RunButtonProps) {
    super(props);

    this.handleRun = this.handleRun.bind(this);
  }

  handleRun() {
    const { fileName, testTrainDivide, selectedNetwork, selectedAlgorithm, algorithmParameters } = this.props;

    alert('Ruuuuuuuuuuuuuuun! ' + fileName + ' ' + testTrainDivide + ' ' + selectedNetwork + ' ' + selectedAlgorithm + ' ');
  }

  render() {
    return (
      <Button title="Запуск" handleClick={this.handleRun} />
    );
  }
}
