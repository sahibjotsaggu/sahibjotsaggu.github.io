import React from 'react';
import styled from 'styled-components';
import Card from 'components/card';
import data from './data';

const SectionHeading = styled.h4``;

const Education = () => (
  <React.Fragment>
    <SectionHeading>Education</SectionHeading>
    {
      data.map((ed,i) => (
        <Card
          key={i}
          image={ed.logo}
          title={ed.name}
          aside={ed.location}
          subtitle={ed.role}
          bottom={ed.dates}
          link={ed.link}
        />
      ))
    }
  </React.Fragment>
);

export default Education;