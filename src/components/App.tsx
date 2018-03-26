import * as React from 'react';

import './App.css';

import { AlgorithmSettings } from './AlgorithmSettings';
import { Chart } from './Chart';
import { DataSettings } from './DataSettings';
import { NetworkSettings } from './NetworkSettings';
import { SplitPane } from './SplitPane';
import { Welcome } from './Welcome';
import { RunButton } from './buttons/RunButton';
import { ClearChartButton } from './buttons/ClearChartButton';

export class App extends React.Component<{}> {
  render() {
    const settings = [
      {
        title: 'Исходные данные',
      },
    ];

    return (
      <SplitPane
        left={
          // <Accordion title='Выбор и настройка параметров' />
          <>
              <DataSettings />
              <NetworkSettings />
              <AlgorithmSettings />
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
