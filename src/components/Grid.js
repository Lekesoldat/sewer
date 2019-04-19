import React from 'react';
import styled from 'styled-components';
import Counter from './Counter';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
  gap: 2rem;
`;

export default ({ user, onUpdateUser }) => {
  const updateUserRecord = (key, value) => {
    onUpdateUser({
      ...user,
      records: {
        ...user.records,
        [key]: value
      }
    });
  };

  return (
    <Grid>
      {Object.entries(user.records).map(([key, value]) => (
        <Counter
          key={key}
          text={key}
          count={value}
          onClick={() => updateUserRecord(key, value + 1)}
        />
      ))}
    </Grid>
  );
};
