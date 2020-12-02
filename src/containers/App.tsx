/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';

import { getUsersStart } from '../slices/users';
import { getAllUsers } from '../selectors/users';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';

const App: React.FC = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { users, isLoading, error } = useSelector(getAllUsers);

  useEffect(() => {
    dispatch(getUsersStart());
  }, [dispatch]);

  const onLoadUsersClick = () => {
    dispatch(getUsersStart());
  };

  return (
    <>
      <Header links={[{ name: 'Home', route: '/' }]} />
      <Layout>
        <Button onClick={onLoadUsersClick}>Reload</Button>
        {users.map((user, index) => (
          <p key={index.toString()}>{user.name}</p>
        ))}
      </Layout>
    </>
  );
};

export default App;
