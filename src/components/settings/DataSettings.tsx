import * as React from 'react';
import { InputRangeWithLabel } from '../ranges/InputRangeWithLabel';
import { InputFileWithLabel } from '../files/InputFileWithLabel';

interface DataSettingsProps { }
interface DataSettingsState { fileName: string; testTrainDivide: number; }

export class DataSettings extends React.Component<DataSettingsProps, DataSettingsState> {
  constructor(props: DataSettingsProps) {
    super(props);

    this.state = {
      fileName: '',
      testTrainDivide: 80
    }

    this.handleFile = this.handleFile.bind(this);
    this.handleRange = this.handleRange.bind(this);
  }

  handleFile(fileName: string) {
      this.setState({
        fileName
      });
  }

  handleRange(testTrainDivide: number) {
      this.setState({
        testTrainDivide
      });
  }
  
  render() {
    return (
      <>
        <InputFileWithLabel
          text='Задайте процентное соотношение обучающей и тестовой выборки:'
          inputFileProps={{
            handleFile: this.handleFile
          }} />

        <InputRangeWithLabel
          text='Задайте процентное соотношение обучающей и тестовой выборки:'
          inputRangeProps={{
            maxValue: 90,
            minValue: 10,
            initialValue: this.state.testTrainDivide,
            formatLabel: value => `${value}%`,
            handleRange: this.handleRange
          }} />
      </>
    );
  }
}
