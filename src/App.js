import React, { Component } from 'react';
import Editor from './Editor';
import Site from './Site';
import './App.scss';

const createWebsite = `import React from "react";
import { Link } from "react-router-dom";
const name = "Sahibjot Saggu";
const githubLink = "https://www.github.com/sahibjotsaggu";
const linkedInLink = "https://www.linkedin.com/in/sahibjotsaggu";
const resume = "resume.pdf";
 
class Website extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Name content={name} />
        <Link to={githubLink}>Github</Link>
        <Link to={linkedInLink}>LinkedIn</Link>
        <Link to={resume}>Resume</Link>
      </React.Fragment>
    );
  }
}
 
:wq`;

const start = `yarn start`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditor: true
    };
  }

  showSite = () => {
    this.setState({
      showEditor: false
    });
  }

  render() {
    return (
      <main>
        { this.state.showEditor ? (
          <Editor 
            contentSequence={[createWebsite, start]} 
            sequenceComplete={this.showSite}
          />
          ) : 
          <Site /> 
        }
      </main>
    );
  }
}

export default App;
