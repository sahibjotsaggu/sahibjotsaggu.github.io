import React from 'react';
import styled from 'styled-components';
import Experience from 'sections/experience';
import Education from 'sections/education';
import Contact from 'sections/contact';
import Web from 'components/web';

const Track = styled.div`
  width: 500px;
  margin: 0px auto;
  padding: 20px;
  background-color: transparent;
  @media (max-width: 500px) {
    width: calc(100% - 20px);
    padding: 10px;
  }
`;

const Name = styled.h1`
  font-size: 45px;
  margin: 20px 0px 10px 0px;
  width: 100%;
  text-align: center;
`;

const Subtitle = styled.h3`
  width: 100%;
  text-align: center;
  margin-top: 0;
`;

const App = () => (
  <React.Fragment>
    <Track>
      <Name>Sahibjot Saggu</Name>
      <Subtitle>Frontend Web Developer</Subtitle>
      <Experience />
      <Education />
      <Contact />
    </Track>
    <Web />
  </React.Fragment>
)

export default App;
