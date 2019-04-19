import React, { useEffect } from 'react';
import styled from 'styled-components';
import ComboBox from './ComboBox';
import Grid from './Grid';
import Graph from './Graph';
import createPersistedState from 'use-persisted-state';

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

const useUsers = createPersistedState('users');
const useIndex = createPersistedState('index');

const useUserStore = () => {
  const [users, setUsers] = useUsers([]);
  const [index, setIndex] = useIndex(null);

  const addUser = name => {
    const user = {
      name,
      records: {
        Nagging: 0,
        'Expression of Dissatisfaction': 0,
        Sarcasm: 0,
        'Making themselves a victim': 0,
        Yelling: 0,
        Whining: 0
      }
    };

    setUsers([...users, user]);
    setIndex(users.length - 1);
  };

  const updateUser = user => {
    // Lager en ny state hvor den endrede brukeren er oppdatert
    setUsers([...users.slice(0, index), user, ...users.slice(index + 1)]);
  };

  const selectUser = index => {
    setIndex(index);
  };

  return {
    users,
    index,
    addUser,
    updateUser,
    selectUser
  };
};

export default () => {
  /**
   * Du har state som er delt mellom alle komponentene dine. ComboBox er avhengig av alle brukere, men det er også
   * Grid og Graph. ComboBox trenger to props: values og onSelect.
   */
  const { users, index, addUser, updateUser, selectUser } = useUserStore();
  const user = users[index];

  useEffect(() => {
    document.title = user
      ? 'Sewer: ' + user.name
      : 'Sewer: Track dissatisfaction';
  });

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
      <ComboBox
        users={users}
        index={index}
        onSelectUser={selectUser}
        onAddUser={addUser}
      />
      {user ? (
        <>
          <Grid user={user} onUpdateUser={updateUser} />
          <Graph user={user} />
        </>
      ) : null}
    </Container>
  );
};
