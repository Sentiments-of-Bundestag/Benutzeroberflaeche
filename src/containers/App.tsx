import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

import { getUsersStart } from '../slices/users';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const onLoadUsersClick = () => {
    dispatch(getUsersStart());
  };

  return (
    <>
      <Header links={[{ name: 'Home', route: '/' }]} />
      <Layout>
        <Button onClick={onLoadUsersClick}>Button</Button>
      </Layout>
    </>
  );
};

export default App;
