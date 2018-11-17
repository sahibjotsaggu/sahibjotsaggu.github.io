import React from 'react';
import styled from 'styled-components';
import GithubLogo from './github_logo.png';
import LinkedInLogo from './linkedin_logo.png';

const SectionHeading = styled.h4``;

const ContactCards = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CCRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-top: 10px;

  a {
    text-decoration: none;
    flex: 1;
    margin-left: 10px;

    &:first-child {
      margin-left: 0;
    }
  }

  &:first-child {
    margin-top: 0;
  }
`;

const Card = styled.div`
  background-color: #FFF;
  border-radius: 3px;
  color: #000;
  font-weight: bold;
  height: 58px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: auto;
    height: 25px;
  }
`;

const Contact = () => (
  <React.Fragment>
    <SectionHeading>Contact</SectionHeading>
    <ContactCards>
      <CCRow>
        <a href="mailto:sahibjot@live.ca"><Card>sahibjot@live.ca</Card></a>
        <a target="_blank" href="resume.pdf"><Card>Resume</Card></a>
      </CCRow>
      <CCRow>
        <a target="_blank" href="https://www.github.com/sahibjotsaggu"><Card><img src={GithubLogo} /></Card></a>
        <a target="_blank" href="https://www.linkedin.com/in/sahibjotsaggu"><Card><img src={LinkedInLogo} /></Card></a>
      </CCRow>
    </ContactCards>
  </React.Fragment>
);

export default Contact;