import React from 'react';
import styled from 'styled-components';
import ComboBox from './ComboBox';
import Grid from './Grid';
import Graph from './Graph';

const Container = styled.section`
  width: 800px;
  margin: auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 0;
  margin-top: 5px;
`;

const Description = styled.p`
  font-size: 1.5rem;
`;

export default () => {
  return (
    <Container>
      <Title>Sewer</Title>
      <Description>
        A tool for tracking, <span style={{ color: 'red' }}>nagging</span>,{' '}
        <span style={{ color: 'orange' }}>sewing</span>,{' '}
        <span style={{ color: 'brown' }}>whining</span>, and{' '}
        <span style={{ color: 'green' }}>expression of dissatisfaction</span>,{' '}
        etc.. 💩
      </Description>
      <ComboBox />
      <Grid />
      <Graph />
    </Container>
  );
};
