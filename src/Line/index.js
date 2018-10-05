import React, { Component } from 'react';
import './Line.scss';

class Line extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lineContent: ''
    };
  }

  componentDidMount() {
    let startDelay = 0;
    if (this.props.isLast) {
      startDelay = 500;
    }

    setTimeout(() => {
      for (let letter = 0; letter < this.props.text.length; letter++) {
        setTimeout(() => {
          this.setState({
            lineContent: `${this.state.lineContent || ''}${this.props.text[letter]}`
          });
          if (letter + 1 === this.props.text.length) {
            this.props.doneLine(this.props.isLast);
          }
        }, this.props.isLast ? letter * 100 : letter * 20);
      }
    }, startDelay);
  }

  render() {
    return (
      <div 
        className={`line ${this.props.isLast ? 'close-command' : ''}`}
        style={{ marginLeft: `${this.props.text.search(/\S/) * 8.5}px` }}
      >
        {this.state.lineContent}
      </div>
    );
  }
}

export default Line;
