import React from 'react';
import styled from 'styled-components';

const Counter = styled.div`
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

export default ({ value, text }) => {
  return (
    <Counter>
      <button>{value}</button>
      <p>{text}</p>
    </Counter>
  );
};
