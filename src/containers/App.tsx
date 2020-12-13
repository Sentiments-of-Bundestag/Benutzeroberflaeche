/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { getFactionsStart, getFactionMessagesStart } from '../slices/factions';
import { getAllFactions } from '../selectors/factions';
import { Header } from '../components/Header';
import { Layout } from '../components/Layout';

const App: React.FC = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    factions,
    areMessagesLoading,
    factionMessages,
    areFactionsMessagesLoading,
    error,
  } = useSelector(getAllFactions);

  useEffect(() => {
    dispatch(getFactionsStart());
    dispatch(getFactionMessagesStart());
  }, [dispatch]);

  const onLoadFactionsClick = () => {
    dispatch(getFactionsStart());
    dispatch(getFactionMessagesStart());
  };

  return (
    <>
      <Header links={[{ name: 'Home', route: '/' }]} />
      <Layout>
        <Button onClick={onLoadFactionsClick}>Reload</Button>
        {factions.map((faction, index) => (
          <p key={index.toString()}>{faction.name}</p>
        ))}
        {factionMessages.map((faction, index) => (
          <p key={index.toString()}>
            {`${faction.from} to ${faction.to} with ${faction.sentiment}`}
          </p>
        ))}
      </Layout>
    </>
  );
};

export default App;
