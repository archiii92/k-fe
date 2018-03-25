import * as React from 'react';

export class DataSettings extends React.Component<{}> {
  render() {
    return (
      <>
        <input type="file"/>
        <label>Выберите файл с данными</label>
      </>
    );
  }
}
