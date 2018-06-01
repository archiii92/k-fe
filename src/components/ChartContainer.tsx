import * as React from 'react';

import { ClearChartButton } from './buttons/ClearChartButton';
import { ForecastResult } from './buttons/RunButton';
import './ChartContainer.css';
import { ForecastCriterias } from './ForecastCriterias';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface ChartPoint {
  real: number;
  forecast: number;
  name: Date;
}

export class ChartContainer extends React.Component<ForecastResult> {
  constructor(props: any) {
    super(props);

    this.handleClearChart = this.handleClearChart.bind(this);
  }

  handleClearChart() {
    alert('Chart is cleared!');
  }

  render() {
    const { initError, afterFuzzyLayerInitError, afterOptimizationError, finalError, realValues, forecastValues, forecastDates } = this.props;

    const realValuesArray: ChartPoint[] = [];

    for(let i = 0; i < realValues.length; i++) {
      realValuesArray.push({
        name: forecastDates[i],
        real: realValues[i],
        forecast: forecastValues[i],
      });
    }

    realValuesArray.sort((a, b) => {
      return a.name > b.name ? 1 : -1;
    });

    return (
      <>
        <ForecastCriterias
          initError={initError}
          afterFuzzyLayerInitError={afterFuzzyLayerInitError}
          afterOptimizationError={afterOptimizationError}
          finalError={finalError}
        />
        <div className="chart">
          <LineChart width={1200} height={700} data={realValuesArray}>
            {/* <XAxis dataKey="name"/> */}
            <YAxis/>
            <CartesianGrid strokeDasharray="1 1"/>
            {/* <Tooltip/> */}
            <Legend />
            <Line type="monotone" name="Реальное значение" dataKey="real" stroke="green" />
            <Line type="monotone" name="Спрогнозированное значение" dataKey="forecast" stroke="blue" />
          </LineChart>
        </div>
        <ClearChartButton handleClearChart={this.handleClearChart}/>
      </>
    );
  }
}
