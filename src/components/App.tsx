import * as React from 'react';

import './App.css';

// import { AlgorithmSettings } from './settings/AlgorithmSettings';
// import { Chart } from './Chart';
import { DataSettings } from './settings/DataSettings';
// import { NetworkSettings } from './settings/NetworkSettings';
// import { SplitPane } from './SplitPane';
// import { RunButton } from './buttons/RunButton';
// import { ClearChartButton } from './buttons/ClearChartButton';
// import { Section } from './Section';
// import { MyInputRange } from './MyInputRange';

export class App extends React.Component<{}> {

  handleRange(value: number) {
    console.log(value);
  }

  render() {
    // const settings = [
    //   {
    //     title: 'Исходные данные',
    //   },
    // ];

    return (
      // <MyInputRange maxValue={10} minValue={1} value={5} handleRange={this.handleRange} />
      // <InputRangeWithLabel
      //   text='lalalala'
      //   rangeProps={{
      //     maxValue: 10,
      //     minValue: 1,
      //     initialValue: 5,
      //     handleRange: this.handleRange
      //   }}
      // />
      // <SplitPane
      //   left={
      //     // <Accordion title='Выбор и настройка параметров' />
      //     <>
      //       <Section color='lavender'>
              <DataSettings />
      //       </Section>
      //       <Section color='oldlace'>
      //         <NetworkSettings />
      //       </Section>
      //       {/* <Section>
      //         <AlgorithmSettings />
      //       </Section> */}
      //         <RunButton />
      //     </>
      //   }
      //   right={
      //     <>
      //         <Chart />
      //         <ClearChartButton />
      //     </>
      //   }
      // />
    );
  }
}
