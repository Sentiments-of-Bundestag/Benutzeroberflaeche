/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { getFactionsStart } from '../slices/factions';
import { getAllFactions } from '../selectors/factions';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';

const App: React.FC = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { factions, isLoading, error } = useSelector(getAllFactions);

  useEffect(() => {
    dispatch(getFactionsStart());
  }, [dispatch]);

  const onLoadFactionsClick = () => {
    dispatch(getFactionsStart());
  };

  return (
    <>
      <Header links={[{ name: 'Home', route: '/' }]} />
      <Layout>
        <Button onClick={onLoadFactionsClick}>Reload</Button>
        {factions.map((faction, index) => (
          <p key={index.toString()}>{faction.name}</p>
        ))}
      </Layout>
    </>
  );
};

export default App;
