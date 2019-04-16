import React from 'react';
import styled from 'styled-components';
import Counter from './Counter';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
  gap: 2rem;
`;

export default () => {
  return (
    <Grid>
      <Counter text='Nagging' value={3} />
      <Counter text='Expression of Dissatisfaction' value={8} />
      <Counter text='Sarcasm' value={4} />
      <Counter text='Make themselves a victim' value={5} />
      <Counter text='Yelling' value={1} />
      <Counter text='Whining' value={12} />
    </Grid>
  );
};
