import * as React from 'react';

import './Section.css';

interface SectionProps { title: string; }
interface SectionState { class: string; open: boolean; }

export class Section extends React.Component<SectionProps, SectionState> {

  constructor(props: SectionProps) {
    super(props);
    this.state = {
      class: 'section',
      open: false,
    };
  }

  handleClick() {
    if (this.state.open) {
      this.setState({
        class: 'section',
        open: false,
      });
    } else {
      this.setState({
        class: 'section open',
        open: true,
      });
    }
  }

  render() {
    return (
      <div className={this.state.class}>
        <button>toggle</button>
        <div className="sectionhead" onClick={this.handleClick}>{this.props.title}</div>
        <div className="articlewrap">
          <div className="article">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
