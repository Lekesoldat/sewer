import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & button {
    width: 50px;
    border-radius: 0.5rem;
    border: 0.1rem solid black;
    font-size: 1.5rem;
  }

  & p {
    margin: 0;
    margin-top: 0.5rem;
  }
`;

export const Counter = ({ selected, count, onClick, text }) => {
  return (
    <Container>
      <button
        style={{ border: selected ? '1px solid blue' : 'none' }}
        onClick={onClick}
      >
        {count}
      </button>
      <p>{text}</p>
    </Container>
  );
};
