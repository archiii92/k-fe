import * as React from 'react';

import './SplitPane.css';

interface SplitPaneProps { left: JSX.Element; right: JSX.Element; }

export class SplitPane extends React.Component<SplitPaneProps> {
  render() {
    return (
      <div className="splitPane">
        <div className="splitPane-left">
          {this.props.left}
        </div>
        <div className="splitPane-right">
          {this.props.right}
        </div>
      </div>
    );
  }
}
