/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { getFactionsStart, getFactionGraphsStart } from '../slices/factions';
import { getAllFactions } from '../selectors/factions';
import { Layout } from '../components/Layout';

const FactionsPage: React.FC = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    factions,
    areFactionsLoading,
    factionGraphs,
    areFactionGraphsLoading,
    error,
  } = useSelector(getAllFactions);

  useEffect(() => {
    dispatch(getFactionsStart());
    dispatch(getFactionGraphsStart());
  }, [dispatch]);

  const onLoadFactionsClick = () => {
    dispatch(getFactionsStart());
    dispatch(getFactionGraphsStart());
  };

  return (
    <>
      <Layout>
        <Button onClick={onLoadFactionsClick}>Reload</Button>
        {factions.map((faction, index) => (
          <p key={index.toString()}>{faction.name}</p>
        ))}
        {factionGraphs.map((factionGraph, index) => (
          <p key={index.toString()}>
            {`${factionGraph.from} to ${factionGraph.to} with ${factionGraph.sentiment}`}
          </p>
        ))}
      </Layout>
    </>
  );
};

export default FactionsPage;
