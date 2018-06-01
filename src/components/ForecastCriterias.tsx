import * as React from 'react';

interface ForecastCriteriasProps {
  initError: number;
  afterFuzzyLayerInitError: number;
  afterOptimizationError: number;
  finalError: number;
}

export class ForecastCriterias extends React.Component<ForecastCriteriasProps> {
  render() {
    const { initError, afterFuzzyLayerInitError, afterOptimizationError, finalError } = this.props;

    return (
      <>
        {initError !== 0 &&
          <div>Начальная ошибка: {initError.toFixed(2)}</div>
        }
        {afterFuzzyLayerInitError !== 0 &&
          <div>Ошибка после инициализации нечеткого слоя: {afterFuzzyLayerInitError.toFixed(2)}</div>
        }
        {afterOptimizationError !== 0 &&
          <div>Ошибка после оптимизации весов скрытого и выходного слоев: {afterOptimizationError.toFixed(2)}</div>
        }
        {finalError !== 0 &&
          <div>Ошибка после обучения сети: {finalError.toFixed(2)}</div>
        }
      </>
    );
  }
}
