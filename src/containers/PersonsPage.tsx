/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { getPersonsStart, getPersonGraphsStart } from '../slices/persons';
import { getAllPersons } from '../selectors/persons';
import { Layout } from '../components/Layout';

const PersonsPage: React.FC = () => {
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    persons,
    arePersonsLoading,
    personGraphs,
    arePersonGraphsLoading,
    error,
  } = useSelector(getAllPersons);

  useEffect(() => {
    dispatch(getPersonsStart());
    dispatch(getPersonGraphsStart());
  }, [dispatch]);

  const onLoadPersonsClick = () => {
    dispatch(getPersonsStart());
    dispatch(getPersonGraphsStart());
  };

  return (
    <>
      <Layout>
        <Button onClick={onLoadPersonsClick}>Reload</Button>
        {persons.map((person, index) => (
          <p key={index.toString()}>{`${person.name} ranked ${person.rank}`}</p>
        ))}
        {personGraphs.map((personGraph, index) => (
          <p key={index.toString()}>
            {`${personGraph.sender} to ${personGraph.recipient} with ${personGraph.sentiment}`}
          </p>
        ))}
      </Layout>
    </>
  );
};

export default PersonsPage;
