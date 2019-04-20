import React from "react";
import styled from "styled-components";
import moment from "moment";
import { Counter } from "./Counter";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-flow: row;
  gap: 2rem;
`;

export const Grid = ({ user, onUpdateUser }) => {
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
    <Container>
      {Object.entries(user.records).map(([key, value]) => (
        <Counter
          key={key}
          text={key}
          count={value.length}
          onClick={() => updateUserRecord(key, [...value, moment()])}
        />
      ))}
    </Container>
  );
};
