import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Link = styled.a`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

const App = () => (
  <Wrapper>
    <Link href="mailto:sahibjot@live.ca" title="Over-engineered.">
      <h1>Hi.</h1>
    </Link>
  </Wrapper>
);

export default App;
