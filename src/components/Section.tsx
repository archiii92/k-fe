import * as React from 'react';

import './Section.css';

interface SectionProps { color: string }
interface SectionState { }

export class Section extends React.Component<SectionProps, SectionState> {

  constructor(props: SectionProps) {
    super(props);
  }

  render() {

    const { color, children } = this.props;

    return (
      <div className={'section ' + color}>
        {children}
      </div>
    );
  }
}
