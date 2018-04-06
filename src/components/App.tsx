import * as React from 'react';

import './App.css';

import { ClearChartButton } from './buttons/ClearChartButton';
import { RunButton } from './buttons/RunButton';
import { Chart } from './Chart';
import { AlgorithmSettings } from './forecastSettings/AlgorithmSettings';
import { DataSettings } from './forecastSettings/DataSettings';
import { NetworkSettings } from './forecastSettings/NetworkSettings';
import { Section } from './wrappers/Section';
import { SplitPane } from './wrappers/SplitPane';
import { GeneticSettingsState } from './algorithmSettings/GeneticSettings';
import { ModifiedAntColonySettingsState } from './algorithmSettings/ModifiedAntColonySettings';
import { ParticleSwarmSettingsState } from './algorithmSettings/ParticleSwarmSettings';
import { SimulatedAnnealingSettingsState } from './algorithmSettings/SimulatedAnnealingSettings';

interface AppState {
  dataSettings: {
    fileName: string;
    testTrainDivide: number;
  };

  networkSettings: {
    selectedNetwork: string;
    inputLayerSize: number;
    fuzzyLayerSize: number;
    hiddenLayerSize: number;
  };

  algorithmSettings: {
    selectedAlgorithm: string;
    algorithmParameters: ParticleSwarmSettingsState | SimulatedAnnealingSettingsState | GeneticSettingsState | ModifiedAntColonySettingsState;
  };
}

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);

    this.state = {
      algorithmSettings: {
        algorithmParameters: {
          initialTemperature: 100,
          warmingKeepPercent: 90,
        },
        selectedAlgorithm: 'sa',
      },
      dataSettings: {
        fileName: '',
        testTrainDivide: 80,
      },
      networkSettings: {
        fuzzyLayerSize: 9,
        hiddenLayerSize: 6,
        inputLayerSize: 3,
        selectedNetwork: 'fmpl',
      },
    };

    this.handleFileName = this.handleFileName.bind(this);
    this.handleTestTrainDivide = this.handleTestTrainDivide.bind(this);
    this.handleNetworkSelect = this.handleNetworkSelect.bind(this);
    this.handleInputLayerSizeRange = this.handleInputLayerSizeRange.bind(this);
    this.handleFuzzyLayerSizeRange = this.handleFuzzyLayerSizeRange.bind(this);
    this.handleHiddenLayerSizeRange = this.handleHiddenLayerSizeRange.bind(this);
    this.handleAlgorithmSelect = this.handleAlgorithmSelect.bind(this);
    this.handleAlgorithmParameter = this.handleAlgorithmParameter.bind(this);
  }

  handleFileName(fileName: string) {
    const { dataSettings } = this.state;
    dataSettings.fileName = fileName;

    this.setState({
      dataSettings,
    });
  }

  handleTestTrainDivide(testTrainDivide: number) {
    const { dataSettings } = this.state;
    dataSettings.testTrainDivide = testTrainDivide;

    this.setState({
      dataSettings,
    });
  }

  handleNetworkSelect(selectedNetwork: string) {
    const { networkSettings } = this.state;
    networkSettings.selectedNetwork = selectedNetwork;

    this.setState({
      networkSettings,
    });
  }

  handleInputLayerSizeRange(inputLayerSize: number) {
    const { networkSettings } = this.state;
    networkSettings.inputLayerSize = inputLayerSize;

    this.setState({
      networkSettings,
    });
  }

  handleFuzzyLayerSizeRange(fuzzyLayerSize: number) {
    const { networkSettings } = this.state;
    networkSettings.fuzzyLayerSize = fuzzyLayerSize;

    this.setState({
      networkSettings,
    });
  }

  handleHiddenLayerSizeRange(hiddenLayerSize: number) {
    const { networkSettings } = this.state;
    networkSettings.hiddenLayerSize = hiddenLayerSize;

    this.setState({
      networkSettings,
    });
  }

  handleAlgorithmSelect(selectedAlgorithm: string) {
    const { algorithmSettings } = this.state;
    algorithmSettings.selectedAlgorithm = selectedAlgorithm;

    switch (selectedAlgorithm) {
      case 'sa': {
        algorithmSettings.algorithmParameters = {
          initialTemperature: 100,
          warmingKeepPercent: 90,
        }
        break;
      }
      case 'pso': {
        algorithmSettings.algorithmParameters = {
          iterationCount: 30,
          k: 1,
          particleCount: 100,
          φg: 3,
          φp: 2,
        }
        break;
      }
    }

    this.setState({
      algorithmSettings,
    });
  }

  handleAlgorithmParameter(fieldName: string, value: number) {
    const { algorithmSettings } = this.state;
    // @ts-ignore
    algorithmSettings.algorithmParameters[fieldName] = value;

    this.setState({
      algorithmSettings,
    });
  }

  render() {
    const { dataSettings, networkSettings, algorithmSettings } = this.state;

    return (
      <SplitPane
        left={
          <>
            <Section color="lavender">
              <DataSettings
                testTrainDivide={dataSettings.testTrainDivide}
                handleFileName={this.handleFileName}
                handleTestTrainDivide={this.handleTestTrainDivide}
              />
            </Section>
            <Section color="oldlace">
              <NetworkSettings
                {...networkSettings}
                handleNetworkSelect={this.handleNetworkSelect}
                handleInputLayerSizeRange={this.handleInputLayerSizeRange}
                handleFuzzyLayerSizeRange={this.handleFuzzyLayerSizeRange}
                handleHiddenLayerSizeRange={this.handleHiddenLayerSizeRange}
              />
            </Section>
            <Section color="aliceblue">
              <AlgorithmSettings
                {...algorithmSettings}
                handleAlgorithmSelect={this.handleAlgorithmSelect}
                handleAlgorithmParameter={this.handleAlgorithmParameter}
              />
            </Section>
            <RunButton
              {...dataSettings}
              {...networkSettings}
              {...algorithmSettings}
            />
         </>
        }
        right={
          <>
            <Chart />
            <ClearChartButton />
          </>
        }
      />
    );
  }
}
