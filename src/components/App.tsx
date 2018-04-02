import * as React from 'react';

import { ClearChartButton } from './buttons/ClearChartButton';
import { RunButton } from './buttons/RunButton';
import { Chart } from './Chart';
import { AlgorithmSettings } from './forecastSettings/AlgorithmSettings';
import { DataSettings } from './forecastSettings/DataSettings';
import { NetworkSettings } from './forecastSettings/NetworkSettings';
import { Section } from './wrappers/Section';
import { SplitPane } from './wrappers/SplitPane';

import './App.css';

export class App extends React.Component<{}> {
  render() {
    return (
      <SplitPane
        left={
          <>
            <Section color="lavender">
              <DataSettings />
            </Section>
            <Section color="oldlace">
              <NetworkSettings />
            </Section>
             <Section color="aliceblue">
               <AlgorithmSettings />
             </Section>
             <RunButton />
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
