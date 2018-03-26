import * as React from 'react';

export class DataSettings extends React.Component<{}> {
  render() {
    return (
      <>
        <label>Укажите путь до файла с данными</label>
        <input type="file"/>
      </>
    );
  }
}
