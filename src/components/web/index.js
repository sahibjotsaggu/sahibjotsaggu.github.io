import React from 'react';
import styled from 'styled-components';

import webImage from './sahibjot96_2.png';

const StyledWeb = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  background-image: url(${props => props.imageSrc});
  width: 1000px;
  height: 500px;
  background-position: right bottom;
  background-size: 759px;
  background-repeat: no-repeat;
  z-index: -100;

  @media (max-width: 800px) {
    position: absolute;
    bottom: unset;
    right: unset;
    top: 0;
    left: 0;
    transform: rotate(180deg);
  }
`;

const Web = () => (
  <StyledWeb imageSrc={webImage} />
);

export default Web;