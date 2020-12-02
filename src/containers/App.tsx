import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';

import { getUsersStart } from '../slices/users';
import { Header } from '../components/Header';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const onLoadUsersClick = () => {
    dispatch(getUsersStart());
  };

  return (
    <>
      <Header links={[{ name: 'Home', route: '/' }]} />
      <Button onClick={onLoadUsersClick}>Button</Button>
    </>
  );
};

export default App;
