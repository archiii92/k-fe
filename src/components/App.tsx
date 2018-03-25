import * as React from 'react';

import './App.css';

import { AlgorithmSettings } from './AlgorithmSettings';
import { Chart } from './Chart';
import { DataSettings } from './DataSettings';
import { NetworkSettings } from './NetworkSettings';
import { SplitPane } from './SplitPane';
import { Welcome } from './Welcome';

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
          </>
        }
        right={
          <>
              <Chart />
          </>
        }
      />
    );
  }
}
