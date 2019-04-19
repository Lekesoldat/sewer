import React, { useState } from 'react';
import styled from 'styled-components';

const Select = styled.select`
  display: block;
  margin: auto;
  margin-bottom: 2rem;
`;

export const ComboBox = ({ users, index, onSelectUser, onAddUser }) => {
  const [selected, setSelected] = useState(index !== null ? index : 'select');

  const handleChange = ({ target: { value } }) => {
    switch (value) {
      case 'select':
        return;
      case 'new':
        onAddUser(prompt("Who's bothering you?"));
        break;
      default:
        onSelectUser(value);
        setSelected(value);
        break;
    }
  };

  return (
    <Select required value={selected} onChange={handleChange}>
      <option value='select' disabled>
        Select one..
      </option>
      {users.map((user, index) => (
        <option key={index} value={index}>
          {user.name}
        </option>
      ))}
      <option value='new'>New entry..</option>
    </Select>
  );
};
