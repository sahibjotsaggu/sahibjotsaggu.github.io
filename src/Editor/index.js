import React from 'react';
import Line from '../Line';
import './Editor.scss';

const Circle = ({ color, size }) => (
  <div className="circle" style={{
    width: `${size}px`,
    height: `${size}px`,
    background: color
  }}></div>
);

const ActionButtons = () => (
  <div className="action-buttons">
    <Circle size="12" color="#fb4645" />
    <Circle size="12" color="#fdb124" />
    <Circle size="12" color="#28c231" />
  </div>
);

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
      lines: []
    };

    this.sequenceIndex = 0;
    this.setup();
  }

  setup = () => {
    if (this.sequenceIndex <= this.props.contentSequence.length - 1) {
      const splitLines = this.props.contentSequence[this.sequenceIndex].split('\n');
      this.lines = splitLines.map((line, index) => (
        <li key={index}>
          <Line 
            text={line} 
            doneLine={this.nextLine} 
            isLast={index + 1 === splitLines.length ? true : false} 
          />
        </li>
      ));
    } else {
      this.props.sequenceComplete();
    }
  }

  addLineToState = line => {
    this.setState({
      lines: [...this.state.lines, line]
    });
  }

  nextLine = isLast => {
    if (isLast) {
      setTimeout(() => {
        this.setState({
          currentIndex: 0,
          lines: []
        }, () => {
          this.sequenceIndex++;
          this.setup();
          this.addLineToState(this.lines[this.state.currentIndex]);
        });
      }, 1000);
    } else {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      }, () => {
        this.addLineToState(this.lines[this.state.currentIndex]);
      });
    }
  }

  componentDidMount() {
    this.addLineToState(this.lines[this.state.currentIndex]);
  }

  render() {
    return (
      <div className="editor">
        <ActionButtons />
        <ul>
          {this.state.lines}
        </ul>
      </div>
    );
  }
}

export default Editor;
