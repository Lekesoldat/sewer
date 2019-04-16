import React from 'react';
import styled from 'styled-components';

const ComboBox = styled.select`
  display: block;
  margin: auto;
  margin-bottom: 2em;
`;

export default () => {
  return (
    <ComboBox required>
      <option value='' disabled selected>
        Select one..
      </option>
      <option>Magnus</option>
      <option value='new'>New entry..</option>
    </ComboBox>
  );
};
