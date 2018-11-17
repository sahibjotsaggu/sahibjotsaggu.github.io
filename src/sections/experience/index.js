import React from 'react';
import styled from 'styled-components';
import Card from 'components/card';
import data from './data';

const SectionHeading = styled.h4``;

const Experience = () => (
  <React.Fragment>
    <SectionHeading>Experience</SectionHeading>
    {
      data.map((exp,i) => (
        <Card
          key={i}
          image={exp.logo}
          title={exp.name}
          aside={exp.location}
          subtitle={exp.role}
          bottom={exp.dates}
          link={exp.link}
        />
      ))
    }
  </React.Fragment>
);

export default Experience;