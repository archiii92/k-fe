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
  handleForecastResult: (forecastResult: ForecastResult) => void;
}

export interface ForecastResult {
  initError: number;
  afterFuzzyLayerInitError: number;
  afterOptimizationError: number;
  finalError: number;
  realValues: number[];
  forecastValues: number[];
  forecastDates: Date[];
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
      body: JSON.stringify({
        fileName,
        fuzzyLayerSize,
        hiddenLayerSize,
        inputLayerSize,
        selectedAlgorithm,
        selectedNetwork,
        trainTestDivide,
        ...algorithmParameters,
      }),
      headers: {
        'Content-type': 'application/json',
      },
      method: 'POST',
    }).then((response) => {
      if (response.ok) {
        response.json().then(forecastResult => this.props.handleForecastResult(forecastResult));
      }
    });
  }

  render() {
    return (
      <Button title="Начать планирование" handleClick={this.handleRun} />
    );
  }
}
