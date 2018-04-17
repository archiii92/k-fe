import * as React from 'react';

import { ClearChartButton } from './buttons/ClearChartButton';
import { ForecastResult } from './buttons/RunButton';
import './ChartContainer.css';
import { ForecastCriterias } from './ForecastCriterias';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

export class ChartContainer extends React.Component<ForecastResult> {
  constructor(props: any) {
    super(props);

    this.handleClearChart = this.handleClearChart.bind(this);
  }

  handleClearChart() {
    alert('Chart is cleared!');
  }

  render() {
    const { initError, afterFuzzyLayerInitError, afterOptimizationError, finalError, realValues } = this.props;

    const realValuesArray = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
    ]

    return (
      <>
        <ForecastCriterias
          initError={initError}
          afterFuzzyLayerInitError={afterFuzzyLayerInitError}
          afterOptimizationError={afterOptimizationError}
          finalError={finalError}
        />
        <div className="chart">
          <LineChart width={400} height={400} data={realValuesArray}>
            <XAxis dataKey="name"/>
            <YAxis/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{r: 8}}/>
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </div>
        <ClearChartButton handleClearChart={this.handleClearChart}/>
      </>
    );
  }
}
