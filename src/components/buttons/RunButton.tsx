import * as React from 'react';
import { GeneticSettingsState } from '../algorithmSettings/GeneticSettings';
import { ModifiedAntColonySettingsState } from '../algorithmSettings/ModifiedAntColonySettings';
import { ParticleSwarmSettingsState } from '../algorithmSettings/ParticleSwarmSettings';
import { SimulatedAnnealingSettingsState } from '../algorithmSettings/SimulatedAnnealingSettings';
import { Button } from './Button';

interface RunButtonProps {
  fileName: string;
  trainTestDivide: number;
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
    const {
      fileName,
      trainTestDivide,
      fuzzyLayerSize,
      hiddenLayerSize,
      inputLayerSize,
      selectedNetwork,
      selectedAlgorithm,
      algorithmParameters,
    } = this.props;

    fetch('http://localhost:8080/forecast', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        fileName,
        trainTestDivide,
        fuzzyLayerSize,
        hiddenLayerSize,
        inputLayerSize,
        selectedNetwork,
        selectedAlgorithm,
        ...algorithmParameters,
      })
    }).then((respone) => {
      console.log(respone);
    });
  }

  render() {
    return (
      <Button title="Начать планирование" handleClick={this.handleRun} />
    );
  }
}
